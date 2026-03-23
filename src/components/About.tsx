import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, GraduationCap, Award, Languages } from 'lucide-react';

export default function About() {
  const { t, dir } = useLanguage();
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const languages = [
    { name: t('lang.arabic'), level: t('lang.arabic.level'), percent: 100 },
    { name: t('lang.spanish'), level: t('lang.spanish.level'), percent: 75 },
    { name: t('lang.english'), level: t('lang.english.level'), percent: 55 },
  ];

  const stats = [
    { value: '5+', label: t('about.yearsExp') },
    { value: '50+', label: t('about.projectsDone') },
    { value: '100+', label: t('about.happyClients') },
  ];

  return (
    <section 
      id="about" 
      className={`py-16 sm:py-20 transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
      dir={dir}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t('about.title')}
            </h2>
            <motion.div 
              className="flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={14} className={theme === 'dark' ? 'text-violet-400' : 'text-violet-600'} />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t('about.location')}
              </span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className={`text-sm sm:text-base text-center max-w-2xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t('about.description')}
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 hover:bg-gray-800' 
                    : 'bg-white hover:bg-gray-100 shadow-sm'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className={`text-[10px] sm:text-xs mt-1 ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education & Languages Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                  : 'bg-white hover:shadow-lg border border-gray-100'
              }`}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div 
                  className={`p-2.5 sm:p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-violet-900/30' : 'bg-violet-100'
                  }`}
                  whileHover={{ rotate: 10 }}
                >
                  <GraduationCap className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
                  }`} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm sm:text-base font-semibold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('edu.title')}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {t('edu.degree')}
                  </p>
                  
                  {/* Honours Badge */}
                  <motion.div 
                    className={`inline-flex items-center gap-1.5 mt-3 px-2.5 py-1.5 rounded-lg text-xs font-medium ${
                      theme === 'dark' 
                        ? 'bg-amber-900/30 text-amber-400 border border-amber-700/30' 
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award size={12} />
                    <span>{t('edu.grade')}</span>
                  </motion.div>
                  
                  <p className={`text-[10px] sm:text-xs mt-2 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t('edu.rank')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                  : 'bg-white hover:shadow-lg border border-gray-100'
              }`}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div 
                  className={`p-2 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/30' : 'bg-indigo-100'
                  }`}
                  whileHover={{ rotate: 10 }}
                >
                  <Languages className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                  }`} />
                </motion.div>
                <h3 className={`text-sm sm:text-base font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('lang.title')}
                </h3>
              </div>

              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className={`text-xs sm:text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {lang.name}
                      </span>
                      <span className={`text-[10px] sm:text-xs ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {lang.level}
                      </span>
                    </div>
                    <div className={`h-1.5 sm:h-2 rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 relative overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
