'use client';

import { motion } from 'framer-motion';

const priorities = [
  {
    level: 'Critical',
    description: 'Immediate treatment required',
    emoji: '🔴',
    color: '#EF4444',
    bg: '#FEF2F2',
    border: '#FECACA',
    iconBg: 'rgba(239, 68, 68, 0.15)',
    glow: 'rgba(239, 68, 68, 0.08)',
  },
  {
    level: 'High Priority',
    description: 'Urgent care needed soon',
    emoji: '🟠',
    color: '#F97316',
    bg: '#FFF7ED',
    border: '#FED7AA',
    iconBg: 'rgba(249, 115, 22, 0.15)',
    glow: 'rgba(249, 115, 22, 0.08)',
  },
  {
    level: 'Medium Priority',
    description: 'Standard treatment queue',
    emoji: '🟡',
    color: '#EAB308',
    bg: '#FFFBEB',
    border: '#FDE68A',
    iconBg: 'rgba(234, 179, 8, 0.15)',
    glow: 'rgba(234, 179, 8, 0.08)',
  },
  {
    level: 'Low Priority',
    description: 'Non-urgent cases',
    emoji: '🟢',
    color: '#22C55E',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    iconBg: 'rgba(34, 197, 94, 0.15)',
    glow: 'rgba(34, 197, 94, 0.08)',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function PriorityPreview() {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-4 border border-blue-100">
            Priority System
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Intelligent Priority Classification
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Patients are automatically categorized based on AI analysis of their symptoms, vitals, and medical history.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {priorities.map((p) => (
            <motion.div
              key={p.level}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, boxShadow: `0 20px 40px ${p.glow}` }}
              className="relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-default"
              style={{ borderColor: p.border }}
            >
              {/* Top color bar */}
              <div className="h-1.5" style={{ background: p.color }} />

              <div className="p-6 text-center">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl"
                  style={{ background: p.iconBg }}
                >
                  {p.emoji}
                </div>

                {/* Level */}
                <h3 className="text-base font-bold mb-1.5" style={{ color: p.color }}>
                  {p.level}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">{p.description}</p>

                {/* Indicator dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        background: i <= priorities.indexOf(p) ? p.color : '#E5E7EB',
                        opacity: i <= priorities.indexOf(p) ? 1 : 0.4,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
