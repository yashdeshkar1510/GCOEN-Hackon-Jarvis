'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-3xl p-10 md:p-16 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute top-0 right-0 w-64 h-64" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.5" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-48 h-48" viewBox="0 0 200 200">
                <path d="M20,100 L100,20 L180,100 L100,180 Z" fill="none" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold mb-6 border border-white/20">
                ⚡ Get Started Today
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Support Faster Emergency Decisions
              </h2>

              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Empower healthcare professionals with AI-assisted triage to prioritize critical patients and reduce emergency response time.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/intake"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold bg-white text-[#2563EB] hover:bg-blue-50 shadow-lg transition-all duration-300 no-underline hover:-translate-y-0.5"
                >
                  Start Using System
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-300 no-underline hover:-translate-y-0.5"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
