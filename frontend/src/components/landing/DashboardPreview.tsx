'use client';

import { motion } from 'framer-motion';

const mockPatients = [
  { id: 'EMR-1042', name: 'Rajesh Kumar', age: 54, symptoms: 'Chest pain, shortness of breath', score: 94, priority: 'Critical', color: '#EF4444', bg: '#FEF2F2', status: 'In Treatment' },
  { id: 'EMR-1043', name: 'Priya Sharma', age: 32, symptoms: 'Severe headache, nausea', score: 78, priority: 'High', color: '#F97316', bg: '#FFF7ED', status: 'Waiting' },
  { id: 'EMR-1044', name: 'Amit Patel', age: 45, symptoms: 'Abdominal pain, fever', score: 62, priority: 'High', color: '#F97316', bg: '#FFF7ED', status: 'Waiting' },
  { id: 'EMR-1045', name: 'Sneha Desai', age: 28, symptoms: 'Sprained ankle, swelling', score: 35, priority: 'Medium', color: '#EAB308', bg: '#FFFBEB', status: 'Waiting' },
  { id: 'EMR-1046', name: 'Vikram Singh', age: 67, symptoms: 'Chronic cough, fatigue', score: 22, priority: 'Low', color: '#22C55E', bg: '#F0FDF4', status: 'Queued' },
];

export default function DashboardPreview() {
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
            Dashboard Preview
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Real-Time Emergency Dashboard
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Monitor all patients, urgency scores, and emergency alerts in one unified view.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Dashboard top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F97316]" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                </div>
                <span className="text-sm font-semibold text-gray-700">🏥 Emergency Triage Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#EF4444] bg-[#FEF2F2] px-3 py-1 rounded-full border border-red-100">
                  <span className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse" />
                  1 Critical Alert
                </span>
                <span className="text-xs text-gray-400">Updated 2s ago</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-gray-100">
              {[
                { label: 'Total Patients', value: '32', icon: '👥', color: '#2563EB' },
                { label: 'Critical', value: '3', icon: '🔴', color: '#EF4444' },
                { label: 'In Treatment', value: '8', icon: '🩺', color: '#7C3AED' },
                { label: 'Avg Wait Time', value: '14m', icon: '⏱️', color: '#F97316' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80">
                  <div className="text-xl">{stat.icon}</div>
                  <div>
                    <div className="text-xl font-extrabold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Queue Table */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-800">Triage Queue</h3>
                <div className="flex gap-2">
                  {['All', 'Critical', 'High', 'Medium', 'Low'].map((f) => (
                    <button
                      key={f}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all border-none cursor-pointer ${
                        f === 'All'
                          ? 'bg-[#2563EB] text-white'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {['Patient ID', 'Name', 'Age', 'Symptoms', 'Urgency Score', 'Priority', 'Status'].map((h) => (
                        <th key={h} className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-transparent">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockPatients.map((p) => (
                      <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50 cursor-default transition-colors">
                        <td className="py-3 px-4 text-sm font-semibold text-gray-700">{p.id}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{p.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-500">{p.age}</td>
                        <td className="py-3 px-4 text-sm text-gray-500 max-w-[180px] truncate">{p.symptoms}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${p.score}%`, background: p.color }} />
                            </div>
                            <span className="text-sm font-bold" style={{ color: p.color }}>{p.score}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold"
                            style={{ background: p.bg, color: p.color }}
                          >
                            {p.priority}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`text-xs font-medium ${p.status === 'In Treatment' ? 'text-[#7C3AED]' : 'text-gray-400'}`}>
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Decorative blur overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none rounded-b-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
