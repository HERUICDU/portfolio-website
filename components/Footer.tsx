import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2024 Portfolio</span>
            <span className="text-dark-600">|</span>
            <span>用</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>打造</span>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:hello@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
