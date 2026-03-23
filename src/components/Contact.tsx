import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Mail, Phone, Send, 
  ExternalLink 
} from 'lucide-react';

// Custom SVG Icons for Social Media
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const contactInfo = [
  {
    icon: Phone,
    labelKey: 'contact.phone',
    value: '+201147582248',
    href: 'https://wa.me/201147582248',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    labelKey: 'contact.email',
    value: 'wahdany2003@gmail.com',
    href: 'mailto:wahdany2003@gmail.com',
    color: 'from-red-500 to-rose-500',
  },
];

const socialLinks = [
  { icon: LinkedInIcon, href: 'https://linkedin.com/in/Hzifa33', label: 'LinkedIn', color: 'bg-blue-600 hover:bg-blue-700' },
  { icon: XIcon, href: 'https://x.com/Hzifa33', label: 'X', color: 'bg-gray-800 hover:bg-gray-900' },
  { icon: FacebookIcon, href: 'https://facebook.com/Hzifa33', label: 'Facebook', color: 'bg-blue-500 hover:bg-blue-600' },
  { icon: InstagramIcon, href: 'https://instagram.com/Hzifa33', label: 'Instagram', color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90' },
  { icon: TelegramIcon, href: 'https://t.me/Hzifa33', label: 'Telegram', color: 'bg-sky-500 hover:bg-sky-600' },
  { icon: WhatsAppIcon, href: 'https://wa.me/201147582248', label: 'WhatsApp', color: 'bg-green-500 hover:bg-green-600' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function Contact() {
  const { t, dir } = useLanguage();
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="contact" 
      className={`py-12 sm:py-16 md:py-24 pb-28 sm:pb-32 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`} 
      dir={dir}
    >
      {/* Background */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent transition-colors duration-500 ${
        theme === 'dark' ? 'via-gray-700' : 'via-gray-300'
      }`} />
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-violet-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div ref={ref} className="relative max-w-2xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10"
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
            <Send size={14} className="sm:w-4 sm:h-4" />
            {t('contact.title')}
          </motion.span>
          <h2 className={`text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('contact.title')}
          </h2>
          <p className={`text-xs sm:text-sm md:text-base max-w-xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: theme === 'dark' 
                    ? '0 15px 30px -10px rgba(124, 58, 237, 0.3)'
                    : '0 15px 30px -10px rgba(124, 58, 237, 0.15)',
                }}
                whileTap={{ scale: 0.98 }}
                className={`group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 hover:border-violet-500/50'
                    : 'bg-gray-50 border-gray-100 hover:bg-white hover:border-violet-200'
                }`}
              >
                <motion.div 
                  className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${contact.color} text-white shrink-0 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[10px] sm:text-xs mb-0.5 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {t(contact.labelKey)}
                  </p>
                  <p className={`text-sm sm:text-base font-semibold truncate transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {contact.value}
                  </p>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink size={16} className={`sm:w-5 sm:h-5 shrink-0 transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-600 group-hover:text-violet-400' 
                      : 'text-gray-300 group-hover:text-violet-600'
                  }`} />
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Media Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-colors duration-500 ${
            theme === 'dark'
              ? 'bg-gray-800/50 border-gray-700'
              : 'bg-gray-50 border-gray-100'
          }`}
        >
          <h3 className={`text-sm sm:text-base font-semibold mb-4 text-center transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('contact.social')}
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 sm:p-4 rounded-xl ${social.color} text-white shadow-lg transition-all duration-300`}
                  title={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`text-center text-[10px] sm:text-xs mt-6 sm:mt-8 transition-colors duration-500 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          @Hzifa33
        </motion.p>
      </div>
    </section>
  );
}
