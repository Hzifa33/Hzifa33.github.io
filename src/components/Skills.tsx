import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Monitor, Terminal, Cog, 
  HandshakeIcon, Users, ListChecks,
  Sparkles
} from 'lucide-react';

const technicalSkills = [
  { icon: Monitor, key: 'skills.tech1', color: 'from-blue-500 to-cyan-500' },
  { icon: Terminal, key: 'skills.tech2', color: 'from-emerald-500 to-teal-500' },
  { icon: Cog, key: 'skills.tech3', color: 'from-violet-500 to-purple-500' },
];

const softSkills = [
  { icon: HandshakeIcon, key: 'skills.soft1', color: 'from-orange-500 to-amber-500' },
  { icon: Users, key: 'skills.soft2', color: 'from-pink-500 to-rose-500' },
  { icon: ListChecks, key: 'skills.soft3', color: 'from-indigo-500 to-blue-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Skills() {
  const { t, dir } = useLanguage();
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="skills" 
      className={`py-12 sm:py-16 md:py-24 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50'
      }`} 
      dir={dir}
    >
      {/* Background */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent transition-colors duration-500 ${
        theme === 'dark' ? 'via-gray-700' : 'via-gray-300'
      }`} />
      
      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.span 
            className={`inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium rounded-full transition-colors duration-500 ${
              theme === 'dark' 
                ? 'text-violet-400 bg-violet-900/30' 
                : 'text-violet-600 bg-violet-100'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            {t('skills.title')}
          </motion.span>
          <h2 className={`text-xl sm:text-2xl md:text-4xl font-bold transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <Monitor className={`w-4 h-4 sm:w-5 sm:h-5 ${
                theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
              }`} />
              {t('skills.technical')}
            </h3>
            <motion.div 
              className="space-y-3 sm:space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03, 
                      x: dir === 'rtl' ? -8 : 8,
                      boxShadow: theme === 'dark' 
                        ? '0 10px 30px -10px rgba(124, 58, 237, 0.3)'
                        : '0 10px 30px -10px rgba(124, 58, 237, 0.2)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`group p-3 sm:p-4 rounded-xl shadow-lg border cursor-pointer transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 shadow-none border-gray-700 hover:border-violet-500/50 hover:bg-gray-750' 
                        : 'bg-white shadow-gray-200/50 border-gray-100 hover:border-violet-300'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div 
                        className={`p-2 sm:p-2.5 rounded-lg bg-gradient-to-br ${skill.color} text-white shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      >
                        <Icon size={16} className="sm:w-5 sm:h-5" />
                      </motion.div>
                      <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-900'
                      }`}>
                        {t(skill.key)}
                      </p>
                    </div>
                    {/* Hover line effect */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <Users className={`w-4 h-4 sm:w-5 sm:h-5 ${
                theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
              }`} />
              {t('skills.soft')}
            </h3>
            <motion.div 
              className="space-y-3 sm:space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03, 
                      x: dir === 'rtl' ? -8 : 8,
                      boxShadow: theme === 'dark' 
                        ? '0 10px 30px -10px rgba(124, 58, 237, 0.3)'
                        : '0 10px 30px -10px rgba(124, 58, 237, 0.2)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`group p-3 sm:p-4 rounded-xl shadow-lg border cursor-pointer transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 shadow-none border-gray-700 hover:border-violet-500/50 hover:bg-gray-750' 
                        : 'bg-white shadow-gray-200/50 border-gray-100 hover:border-violet-300'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div 
                        className={`p-2 sm:p-2.5 rounded-lg bg-gradient-to-br ${skill.color} text-white shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      >
                        <Icon size={16} className="sm:w-5 sm:h-5" />
                      </motion.div>
                      <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-900'
                      }`}>
                        {t(skill.key)}
                      </p>
                    </div>
                    {/* Hover line effect */}
                    <motion.div 
                      className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-l ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
