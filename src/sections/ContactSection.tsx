// import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="h-screen relative flex items-center justify-center bg-blue-50 snap-start">
      <div className="min-w-[90%] max-w-screen mx-auto px-4 pt-3 pb-12">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8">
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>{t('contact.form.send')}</span>
            </button>
          </form>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 py-4 bg-white border-t shadow-lg">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 font-bold">
          <p>© {new Date().getFullYear()} RemindWell. {t('footer.rights')}</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;