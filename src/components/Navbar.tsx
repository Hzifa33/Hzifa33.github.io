import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Home, User, Briefcase, Zap, Mail, Sun, Moon, 
  Globe, ChevronUp, Check
} from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, key: 'nav.home' },
  { id: 'about', icon: User, key: 'nav.about' },
  { id: 'experience', icon: Briefcase, key: 'nav.experience' },
  { id: 'skills', icon: Zap, key: 'nav.skills' },
  { id: 'contact', icon: Mail, key: 'nav.contact' },
];

const languages = [
  { code: 'en', label: 'EN', fullName: 'lang.name.en' },
  { code: 'ar', label: 'ع', fullName: 'lang.name.ar' },
  { code: 'es', label: 'ES', fullName: 'lang.name.es' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileLangMenu, setShowMobileLangMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const mobileLangMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
      if (mobileLangMenuRef.current && !mobileLangMenuRef.current.contains(event.target as Node)) {
        setShowMobileLangMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCurrentLangLabel = () => {
    return languages.find(l => l.code === language)?.label || 'EN';
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled 
            ? theme === 'dark'
              ? 'bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/20'
              : 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('home')}
            >
              HA
            </motion.div>

            <div className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
                      : theme === 'dark' 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-xl ${
                        theme === 'dark' ? 'bg-violet-900/30' : 'bg-violet-100'
                      }`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{t(item.key)}</span>
                </motion.button>
              ))}
            </div>

            {/* Desktop Controls - Theme & Language */}
            <div className="flex items-center gap-2">
              {/* Language Switcher with Dropdown */}
              <div className="relative" ref={langMenuRef}>
                <motion.button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: showLangMenu ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Globe size={16} />
                  </motion.div>
                  <motion.span 
                    key={language}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-sm font-medium min-w-[24px]"
                  >
                    {getCurrentLangLabel()}
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute top-full right-0 mt-2 min-w-[160px] rounded-xl shadow-xl overflow-hidden border ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      {languages.map((lang, index) => (
                        <motion.button
                          key={lang.code}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            setLanguage(lang.code as 'en' | 'ar' | 'es');
                            setShowLangMenu(false);
                          }}
                          className={`w-full px-4 py-3 text-sm font-medium flex items-center justify-between gap-3 transition-all duration-200 ${
                            language === lang.code
                              ? theme === 'dark'
                                ? 'bg-violet-900/30 text-violet-400'
                                : 'bg-violet-100 text-violet-600'
                              : theme === 'dark'
                                ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                            }`}>
                              {lang.label}
                            </span>
                            <span>{t(lang.fullName)}</span>
                          </div>
                          {language === lang.code && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', bounce: 0.5 }}
                            >
                              <Check size={16} className="text-violet-500" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`relative p-2.5 rounded-xl transition-all duration-300 overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Top Bar - Theme & Language Only */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
          scrolled 
            ? theme === 'dark'
              ? 'bg-gray-900/80 backdrop-blur-xl'
              : 'bg-white/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <motion.div 
            className="text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
            whileTap={{ scale: 0.95 }}
          >
            HA
          </motion.div>

          <div className="flex items-center gap-2">
            {/* Mobile Language Dropdown */}
            <div className="relative" ref={mobileLangMenuRef}>
              <motion.button
                onClick={() => setShowMobileLangMenu(!showMobileLangMenu)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/80 text-gray-400'
                    : 'bg-gray-100 text-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={14} />
                <motion.span 
                  key={language}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xs font-medium"
                >
                  {getCurrentLangLabel()}
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {showMobileLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full right-0 mt-2 min-w-[140px] rounded-xl shadow-xl overflow-hidden border ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          setLanguage(lang.code as 'en' | 'ar' | 'es');
                          setShowMobileLangMenu(false);
                        }}
                        className={`w-full px-3 py-2.5 text-xs font-medium flex items-center justify-between gap-2 transition-all duration-200 ${
                          language === lang.code
                            ? theme === 'dark'
                              ? 'bg-violet-900/30 text-violet-400'
                              : 'bg-violet-100 text-violet-600'
                            : theme === 'dark'
                              ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold ${
                            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                          }`}>
                            {lang.label}
                          </span>
                          <span>{t(lang.fullName)}</span>
                        </div>
                        {language === lang.code && (
                          <Check size={12} className="text-violet-500" />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800/80 text-yellow-400'
                  : 'bg-gray-100 text-indigo-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun-mobile"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-mobile"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Bottom Navbar - Navigation Only */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-gray-900/90 border-t border-gray-800'
            : 'bg-white/90 border-t border-gray-200'
        } backdrop-blur-xl`}
      >
        <div className="max-w-md mx-auto px-2 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex flex-col items-center py-1.5 px-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
                      : theme === 'dark' 
                        ? 'text-gray-500' 
                        : 'text-gray-400'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className={`absolute inset-0 rounded-xl ${
                        theme === 'dark' ? 'bg-violet-900/30' : 'bg-violet-100'
                      }`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.div
                    className="relative z-10"
                    animate={isActive ? { y: -2, scale: 1.1 } : { y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <motion.span 
                    className="relative z-10 text-[9px] mt-0.5 font-medium"
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  >
                    {t(item.key)}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('home')}
            className={`fixed bottom-20 md:bottom-8 right-4 sm:right-6 p-3 rounded-full shadow-lg z-40 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-violet-600 text-white hover:bg-violet-500'
                : 'bg-violet-600 text-white hover:bg-violet-500'
            }`}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronUp size={20} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
