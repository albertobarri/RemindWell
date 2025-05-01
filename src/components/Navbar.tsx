import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          RemindWell
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => scrollToSection('product')}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {t('nav.product')}
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {t('nav.about')}
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {t('nav.contact')}
        </button>
      </div>

      <div className="md:hidden">
        <button className="text-gray-600 hover:text-blue-600 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 