'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      // Replace FORMSPREE_ENDPOINT with your Formspree form URL
      const response = await fetch("FORMSPREE_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="section-teal py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground mt-3 text-lg font-normal">Have a project in mind? Let&apos;s talk.</p>
          <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          {submitStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300" data-testid="contact-success">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 border border-green-200">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Thanks for reaching out!</h3>
              <p className="text-muted-foreground font-normal">I&apos;ll get back to you as soon as possible.</p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="mt-6 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
              {submitStatus === 'error' && (
                <div className="p-4 bg-destructive/8 border border-destructive/20 rounded-md flex items-center gap-3 text-destructive" data-testid="contact-error">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">Something went wrong. Please try again or email me directly.</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`w-full px-4 py-2.5 rounded-md bg-background border ${errors.name ? 'border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'} outline-none transition-all text-foreground placeholder:text-muted-foreground`}
                    placeholder="John Doe"
                    disabled={submitStatus === 'loading'}
                  />
                  {errors.name && <p className="text-destructive text-xs font-medium mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-2.5 rounded-md bg-background border ${errors.email ? 'border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'} outline-none transition-all text-foreground placeholder:text-muted-foreground`}
                    placeholder="john@example.com"
                    disabled={submitStatus === 'loading'}
                  />
                  {errors.email && <p className="text-destructive text-xs font-medium mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full px-4 py-3 rounded-md bg-background border ${errors.message ? 'border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'} outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground`}
                  placeholder="Tell me about your project..."
                  disabled={submitStatus === 'loading'}
                />
                {errors.message && <p className="text-destructive text-xs font-medium mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                data-testid="button-submit-contact"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
