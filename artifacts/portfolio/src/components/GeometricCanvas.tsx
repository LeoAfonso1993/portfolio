'use client';

import React, { useRef, useEffect } from 'react';

export default function GeometricCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    interface Node {
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      pulse: number;
      active: boolean;
    }

    const nodes: Node[] = [];
    const gridSize = 40;
    let mouse = { x: -1000, y: -1000 };

    // Light-theme palette: teal nodes/lines, amber highlights on active
    const TEAL_NODE   = 'rgba(6, 182, 212,';   // #06b6d4
    const AMBER_NODE  = 'rgba(245, 158, 11,';   // #f59e0b
    const TEAL_LINE   = 'rgba(6, 182, 212,';

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initNodes();
    };

    const initNodes = () => {
      nodes.length = 0;
      const cols = Math.floor(width / gridSize);
      const rows = Math.floor(height / gridSize);
      const offsetX = (width - cols * gridSize) / 2;
      const offsetY = (height - rows * gridSize) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const rx = (Math.random() - 0.5) * (gridSize * 0.4);
          const ry = (Math.random() - 0.5) * (gridSize * 0.4);
          nodes.push({
            x: offsetX + i * gridSize + rx,
            y: offsetY + j * gridSize + ry,
            radius: Math.random() > 0.8 ? 2 : 1,
            baseRadius: Math.random() > 0.8 ? 2 : 1,
            pulse: Math.random() * Math.PI * 2,
            active: Math.random() > 0.96,
          });
        }
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < gridSize * 1.5) {
            let alpha = 0.06;

            if (nodeA.active || nodeB.active) {
              const flow = (Math.sin(time * 0.002 + dist) + 1) / 2;
              alpha = 0.08 + flow * 0.22;
            }

            // Brighten lines near mouse
            const mx = mouse.x - (nodeA.x + nodeB.x) / 2;
            const my = mouse.y - (nodeA.y + nodeB.y) / 2;
            const distm = Math.sqrt(mx * mx + my * my);
            if (distm < 150) {
              alpha += (150 - distm) / 150 * 0.28;
            }

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `${TEAL_LINE} ${Math.min(alpha, 0.55)})`;
            ctx.stroke();
          }
        }

        // Animate node
        nodeA.pulse += prefersReducedMotion ? 0 : 0.04;
        let r = nodeA.baseRadius + Math.sin(nodeA.pulse) * 0.4;

        const isActive = nodeA.active;
        if (isActive) {
          r *= 1.6;
          if (Math.random() < 0.01) nodeA.active = false;
        } else if (Math.random() < 0.001) {
          nodeA.active = true;
        }

        // Grow near mouse
        const dxm = mouse.x - nodeA.x;
        const dym = mouse.y - nodeA.y;
        const distm = Math.sqrt(dxm * dxm + dym * dym);
        if (distm < 100) {
          r += (100 - distm) / 100 * 1.8;
        }

        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, Math.max(0.1, r), 0, Math.PI * 2);
        // Active nodes turn amber; resting nodes are teal
        ctx.fillStyle = isActive
          ? `${AMBER_NODE} 0.75)`
          : `${TEAL_NODE} 0.28)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // Listen on window so interaction works even when the canvas is pointer-events:none
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      aria-hidden="true"
      role="presentation"
      data-testid="geometric-canvas"
    />
  );
}
