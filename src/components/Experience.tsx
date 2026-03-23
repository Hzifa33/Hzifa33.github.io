import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Headphones, Code, Video, Share2, Database, BookOpen, 
  Calendar, Briefcase 
} from 'lucide-react';

const experiences = [
  {
    icon: Headphones,
    titleKey: 'exp.edreams.title',
    companyKey: 'exp.edreams.company',
    dateKey: 'exp.edreams.date',
    descKeys: ['exp.edreams.desc1', 'exp.edreams.desc2', 'exp.edreams.desc3'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    current: true,
  },
  {
    icon: Code,
    titleKey: 'exp.frontend.title',
    dateKey: 'exp.frontend.date',
    descKeys: ['exp.frontend.desc1', 'exp.frontend.desc2'],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    icon: Video,
    titleKey: 'exp.video.title',
    dateKey: 'exp.video.date',
    descKeys: ['exp.video.desc1'],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Share2,
    titleKey: 'exp.social.title',
    dateKey: 'exp.social.date',
    descKeys: ['exp.social.desc1'],
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Database,
    titleKey: 'exp.data.title',
    dateKey: 'exp.data.date',
    descKeys: ['exp.data.desc1'],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: BookOpen,
    titleKey: 'exp.arabic.title',
    dateKey: 'exp.arabic.date',
    descKeys: ['exp.arabic.desc1'],
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function Experience() {
  const { t, dir, language } = useLanguage();
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const currentLabel = language === 'ar' ? 'حالياً' : language === 'es' ? 'Actual' : 'Current';

  return (
    <section 
      id="experience" 
      className={`py-12 sm:py-16 md:py-24 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`} 
      dir={dir}
    >
      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
            <Briefcase size={14} className="sm:w-4 sm:h-4" />
            {t('exp.title')}
          </motion.span>
          <h2 className={`text-xl sm:text-2xl md:text-4xl font-bold transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('exp.title')}
          </h2>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
                className={`group relative rounded-xl sm:rounded-2xl p-4 sm:p-5 border overflow-hidden cursor-pointer transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-violet-500/50' 
                    : 'bg-white border-gray-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50'
                }`}
              >
                {/* Gradient Background on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                />
                
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                <div className="relative flex items-start gap-3 sm:gap-4">
                  {/* Icon */}
                  <motion.div 
                    className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${exp.color} text-white shrink-0 shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm sm:text-base font-bold mb-1 transition-colors duration-300 line-clamp-2 group-hover:text-violet-500 ${
                      theme === 'dark' 
                        ? 'text-white' 
                        : 'text-gray-900'
                    }`}>
                      {t(exp.titleKey)}
                    </h3>
                    
                    {exp.companyKey && (
                      <p className={`text-xs sm:text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
                      }`}>
                        {t(exp.companyKey)}
                      </p>
                    )}
                    
                    <motion.div 
                      className={`flex items-center gap-1.5 text-[10px] sm:text-xs mb-2 sm:mb-3 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                      }`}
                      whileHover={{ x: dir === 'rtl' ? -3 : 3 }}
                    >
                      <Calendar size={10} className="sm:w-3 sm:h-3" />
                      <span>{t(exp.dateKey)}</span>
                    </motion.div>
                    
                    <ul className="space-y-1 sm:space-y-1.5">
                      {exp.descKeys.map((descKey, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: dir === 'rtl' ? 10 : -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                          className={`text-[11px] sm:text-xs leading-relaxed flex items-start gap-2 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          <motion.span 
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r ${exp.color}`}
                            whileHover={{ scale: 1.5 }}
                          />
                          {t(descKey)}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Current Badge - Below the description */}
                    {exp.current && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-3"
                      >
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-full ${
                          theme === 'dark' 
                            ? 'text-green-400 bg-green-900/50 border border-green-500/30' 
                            : 'text-green-600 bg-green-100 border border-green-200'
                        }`}>
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full bg-green-500"
                            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          {currentLabel}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
