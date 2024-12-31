import { motion } from 'framer-motion';
import {
  Brain,
  Microscope,
  HeartPulse,
  Shield,
  LineChart,
  Users,
  Clock,
  Cloud
} from 'lucide-react';

const features = [
  {
    icon: <Brain />,
    title: "AI Diagnostics",
    description: "Advanced AI algorithms for accurate medical diagnostics and analysis.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Microscope />,
    title: "Lab Integration",
    description: "Seamless integration with laboratory systems and workflows.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <HeartPulse />,
    title: "Patient Monitoring",
    description: "Real-time patient monitoring and predictive analytics.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Shield />,
    title: "Data Security",
    description: "HIPAA-compliant security measures for patient data protection.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <LineChart />,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics and reporting tools.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Users />,
    title: "Team Collaboration",
    description: "Enhanced communication tools for healthcare teams.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: <Clock />,
    title: "Automated Scheduling",
    description: "Smart scheduling system for optimal resource allocation.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: <Cloud />,
    title: "Cloud Storage",
    description: "Secure cloud storage for medical records and imaging.",
    color: "from-amber-500 to-orange-500"
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to modernize your healthcare practice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`} />
              <div className="relative p-8">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}