"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Socials from "@/components/socials";
import ContactForm from "@/components/contact-form";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "penalescjay@gmail.com",
    href: "mailto:penalescjay@gmail.com",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Iligan City, Philippines",
    href: "https://maps.google.com/?q=Iligan+City+Philippines",
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "GMT+8 (PHT)",
    href: null,
  },
];

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Most projects take 2-8 weeks depending on complexity. I'll provide a detailed timeline after our initial discussion.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "I work with clients worldwide and am comfortable with different timezones and communication preferences.",
  },
  {
    question: "What's included in your web development service?",
    answer:
      "Full-stack development, responsive design, performance optimization, SEO basics, and post-launch support.",
  },
];

export default function Contact() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero animation
    if (heroRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        heroRef.current.querySelector("h1"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          heroRef.current.querySelector("p"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          heroRef.current.querySelector(".cta-buttons"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
    }

    // Content sections animation
    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll(".animate-section");

      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          } 
        );
      });
    }
  }, []);

  return (
    <main className="min-h-screen  text-zinc-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative px-4 py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-8 bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h1>
          <p className="text-zinc-700 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you have a project in mind or just want to say hello, feel
            free to reach out. I&apos;m currently open for freelance work and
            collaborations.
          </p>

          <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-zinc-200 rounded-full font-semibold hover:bg-zinc-800 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:penalescjay@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 border hover:text-zinc-50 border-zinc-700 text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Quick Email
            </a>
          </div>
        </div>
      </section>

      <div ref={contentRef} className="container mx-auto px-4">
        {/* Contact Information */}
        <section className="animate-section py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-lg">Multiple ways to reach me</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div
                  key={index}
                  className="group bg-zinc-800 hover:bg-zinc-700 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                >
                  <div className="w-12 h-12 bg-zinc-700 group-hover:bg-zinc-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {info.label}
                  </h3>
                  <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              );

              return info.href ? (
                <Link
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </Link>
              ) : (
                content
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6">
              Or connect with me on
            </h3>
            <Socials />
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Send Me a Message
              </h2>
              <p className="text-zinc-400 text-lg">
                I&apos;ll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-zinc-800 p-8 lg:p-12 rounded-3xl shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="animate-section py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-zinc-400 text-lg">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-zinc-800 p-6 lg:p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability Status */}
        <section className="animate-section py-16 text-center  ">
          <div className="bg-zinc-800 border border-green-700/30 p-8 lg:p-12 rounded-3xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">
                Available for new projects
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to start your project?
            </h3>
            <p className="text-zinc-400 mb-6">
              I&apos;m currently accepting new clients and would love to hear about
              your project.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 hover:scale-105 transition-all duration-200"
            >
              Let&apos; Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
