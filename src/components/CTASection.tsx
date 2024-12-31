import { motion } from 'framer-motion';
import { Calendar, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Healthcare Practice?</h2>
            <p className="text-indigo-200 text-lg mb-8">
              Schedule a personalized demo with our healthcare solutions experts.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="text-indigo-300" />
                <span>Book a demo session</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-indigo-300" />
                <span>Get a free consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-indigo-300" />
                <span>Request detailed pricing</span>
              </div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Tell us about your needs"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}