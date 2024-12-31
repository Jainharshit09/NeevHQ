import { motion } from 'framer-motion';
import { Clock, Users, Calendar, FileText } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-16"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Streamlined Administrative Dashboard
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Clock />, label: "Time Saved", value: "12+ hrs/week" },
          { icon: <Users />, label: "Patient Capacity", value: "+40%" },
          { icon: <Calendar />, label: "Automated Scheduling", value: "95%" },
          { icon: <FileText />, label: "Paperwork Reduced", value: "75%" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl"
          >
            <div className="text-indigo-600 mb-4">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}