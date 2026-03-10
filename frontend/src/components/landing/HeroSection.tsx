'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const floatingIcons = [
  { emoji: '🩺', top: '15%', left: '8%', delay: 0 },
  { emoji: '💊', top: '25%', right: '10%', delay: 0.5 },
  { emoji: '🏥', bottom: '30%', left: '5%', delay: 1 },
  { emoji: '❤️', top: '10%', right: '20%', delay: 1.5 },
  { emoji: '🔬', bottom: '20%', right: '8%', delay: 0.8 },
  { emoji: '🩻', bottom: '40%', left: '15%', delay: 1.2 },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Animated Background Pulse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Heartbeat SVG line */}
        <svg className="absolute bottom-20 left-0 w-full h-32 opacity-[0.07]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 L200,60 L220,20 L240,100 L260,40 L280,80 L300,60 L500,60 L520,10 L540,110 L560,30 L580,90 L600,60 L800,60 L820,15 L840,105 L860,35 L880,85 L900,60 L1200,60"
            fill="none"
            stroke="#2563EB"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </svg>

        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

        {/* Floating Medical Icons */}
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-10 select-none"
            style={{ top: icon.top, left: icon.left, right: icon.right, bottom: icon.bottom }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, delay: icon.delay, ease: 'easeInOut' }}
          >
            {icon.emoji}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#2563EB] text-xs font-semibold mb-6 border border-blue-200/50"
            >
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              AI-Powered Emergency System
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-tight text-gray-900 tracking-tight mb-6"
            >
              AI-Powered Emergency Triage for{' '}
              <span className="text-[#2563EB] relative">
                Faster Life-Saving
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-blue-200" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,7 Q50,0 100,5 T200,3" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>{' '}
              Decisions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              Help emergency departments assess patients faster, prioritize critical cases, and improve response time using intelligent AI-assisted triage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/intake"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 no-underline hover:-translate-y-0.5"
              >
                Start Triage
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB] shadow-sm hover:shadow-md transition-all duration-300 no-underline hover:-translate-y-0.5"
              >
                View Dashboard
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Real-time AI
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                24/7 Available
              </div>
            </motion.div>
          </div>

          {/* Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Main mock dashboard card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 relative z-10">
                {/* Mock header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#F97316]" />
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                  </div>
                  <div className="text-xs font-medium text-gray-400">Emergency Dashboard</div>
                </div>

                {/* Mini stat cards */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Critical', value: '3', color: '#EF4444', bg: '#FEF2F2' },
                    { label: 'In Queue', value: '12', color: '#F97316', bg: '#FFF7ED' },
                    { label: 'Treated', value: '28', color: '#22C55E', bg: '#F0FDF4' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: s.bg }}>
                      <div className="text-xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
                      <div className="text-xs font-medium text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mock patient rows */}
                <div className="space-y-2">
                  {[
                    { name: 'Patient A-102', score: 92, priority: 'Critical', color: '#EF4444', bg: '#FEF2F2' },
                    { name: 'Patient B-207', score: 75, priority: 'High', color: '#F97316', bg: '#FFF7ED' },
                    { name: 'Patient C-315', score: 45, priority: 'Medium', color: '#EAB308', bg: '#FFFBEB' },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                        <span className="text-sm font-medium text-gray-700">{p.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold" style={{ color: p.color }}>{p.score}/100</span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: p.bg, color: p.color }}>{p.priority}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animated vitals bar */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-400">Live Urgency Score</span>
                    <span className="text-xs font-bold text-[#EF4444]">92/100</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#F97316] to-[#EF4444]"
                      initial={{ width: '0%' }}
                      animate={{ width: '92%' }}
                      transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-red-100 p-3 z-20 max-w-[180px]"
                animate={{ y: [-2, 4, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FEF2F2] flex items-center justify-center text-sm">🚨</div>
                  <div>
                    <div className="text-xs font-bold text-[#EF4444]">Critical Alert</div>
                    <div className="text-[10px] text-gray-400">New patient incoming</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating vitals card */}
              <motion.div
                className="absolute -bottom-3 -left-4 bg-white rounded-xl shadow-lg border border-green-100 p-3 z-20"
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center text-sm">💓</div>
                  <div>
                    <div className="text-xs font-bold text-[#22C55E]">Vitals OK</div>
                    <div className="text-[10px] text-gray-400">HR: 72 bpm</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
