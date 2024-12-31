import { motion } from 'framer-motion';
import { Users, Building2, Activity, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "10,000+",
    label: "Healthcare Professionals",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "500+",
    label: "Medical Facilities",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    value: "1M+",
    label: "Patient Records Processed",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "99.9%",
    label: "Accuracy Rate",
    color: "from-orange-500 to-red-500"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`} />
              <div className="relative p-8">
                <div className="text-gradient mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}