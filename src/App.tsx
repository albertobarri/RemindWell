// import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useState, useEffect, lazy, Suspense } from 'react';
// import { Pill, Phone, ShoppingCart, Bell, Calendar, Clock, Battery, X, Minus, Plus, Trash2, CreditCard, Menu } from 'lucide-react';
import { Pill, ShoppingCart, X, Minus, Plus, Trash2, CreditCard, Menu, ChevronRight } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import ImagePreloader from './components/ImagePreloader';

// Lazy load sections
const HomeSection = lazy(() => import('./sections/HomeSection'));
const ProductSection = lazy(() => import('./sections/ProductSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

// Lista de todas las imágenes que necesitan ser precargadas
const allImages = [
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2000",
  "/images/mariab.png",
  "/images/alberto.png",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
];

interface CartItem {
  type: string;
  doses: string;
  light: string;
  quantity: number;
  price: number;
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Initialize cart items from localStorage
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImagesLoaded = () => {
    setIsLoading(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const calculateItemPrice = (type: string, doses: string, light: string) => {
    let price = 29.99;
    if (type === 'monthly') price += 10;
    if (doses === 'three-times') price += 5;
    if (light === 'with-light') price += 3;
    return price;
  };

  const addToCart = (type: string, doses: string, light: string) => {
    const price = calculateItemPrice(type, doses, light);
    const newItem: CartItem = {
      type,
      doses,
      light,
      quantity: 1,
      price
    };

    setCartItems(prev => [...prev, newItem]);
    setIsCartOpen(true);
    setIsCartAnimating(true);
    setTimeout(() => {
      setIsCartAnimating(false);
    }, 2000);
  };

  const updateQuantity = (index: number, increment: boolean) => {
    setCartItems(prev => prev.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1)
        };
      }
      return item;
    }));
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => {
      const newItems = [...prev];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="max-w-screen mx-auto">
      {/* Preloader de imágenes */}
      <ImagePreloader images={allImages} onLoadComplete={handleImagesLoaded} />

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 ${
        isMobileMenuOpen ? 'bg-white' : 'bg-white'
      } z-[60] shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity z-50"
            >
              <Pill className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-lg sm:text-xl font-bold text-gray-800">RemindWell</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={toggleCart}
                className={`relative p-2 transform transition-transform duration-300 ${
                  isCartAnimating ? 'scale-125' : 'scale-100'
                }`}
              >
                <ShoppingCart size={24} className="text-gray-600" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 z-50 relative"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-gray-600" />
                ) : (
                  <Menu size={24} className="text-gray-600" />
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-lg font-medium transition-colors ${
                  activeSection === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('product')}
                className={`text-lg font-medium transition-colors ${
                  activeSection === 'product' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {t('nav.product')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-lg font-medium transition-colors ${
                  activeSection === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-lg font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={toggleCart}
                className={`bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all flex items-center space-x-2 relative transform duration-300 ${
                  isCartAnimating ? 'scale-110' : 'scale-100'
                }`}
              >
                <ShoppingCart size={20} />
                <span>{t('cart.cart')}</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to the top to account for fixed navbar */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth snap-proximity">

        {/* Mobile Menu */}
        <div
          className={`fixed inset-x-0 h-100 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden z-[50] ${
            isMobileMenuOpen ? 'translate-y-16' : '-translate-y-full'
          }`}
        >
          <div className="min-w-[80%] max-w-7xl mx-auto flex flex-col h-full bg-white">
            <div className="flex-1 px-4 py-4 space-y-1 bg-white overflow-y-auto">
              <button
                onClick={() => scrollToSection('home')}
                className={`w-full text-left px-4 py-4 rounded-lg transition-colors ${
                  activeSection === 'home'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('product')}
                className={`w-full text-left px-4 py-4 rounded-lg transition-colors ${
                  activeSection === 'product'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t('nav.product')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`w-full text-left px-4 py-4 rounded-lg transition-colors ${
                  activeSection === 'about'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full text-left px-4 py-4 rounded-lg transition-colors ${
                  activeSection === 'contact'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        </div>

        {/* Shopping Cart Slide-out */}
        <div
          className={`fixed top-16 bottom-0 right-0 w-full md:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[100] ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col overflow-hidden">
            <div className="p-4 sm:p-6 flex justify-between items-center border-b">
              <div className="ml-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{t('cart.title')}</h2>
                <p className="text-sm text-gray-500">{totalItems} {totalItems === 1 ? t('cart.items.one') : t('cart.items.many')}</p>
              </div>
            </div>
            
            <button
              onClick={toggleCart}
              className={`absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-2 hover:bg-blue-400 rounded-r-full transition-all duration-300 bg-blue-200 shadow-md ${
                isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Cerrar carrito"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">{t('cart.empty')}</p>
                  <button
                    onClick={() => {
                      toggleCart();
                      scrollToSection('buy');
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {t('cart.explore')}
                  </button>
                </div>
              ) : (
                <div className="space-y-4 pb-4">
                  <button
                    onClick={toggleCart}
                    className={`fixed left-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-2 hover:bg-blue-400 rounded-r-full transition-all duration-300 bg-blue-200 shadow-md z-[101] ${
                      isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    aria-label="Cerrar carrito"
                  >
                    <ChevronRight size={24} />
                  </button>
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 p-4 rounded-lg transform transition-all duration-200 hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-start space-x-4">
                          <img 
                            src="/images/product.png" 
                            alt="RemindWell Pillie" 
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800">Pillie {t(`cart.type.${item.type}`)}</h3>
                            <p className="text-sm text-gray-600">
                              {item.doses === 'three-times' ? t('cart.doses.threeTimes') :
                               item.doses === 'morning' ? t('cart.doses.morning') : t('cart.doses.night')}
                            </p>
                            <p className="text-sm text-gray-600">
                              {item.light === 'with-light' ? t('cart.light.with') : t('cart.light.without')}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => updateQuantity(index, false)}
                            className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(index, true)}
                            className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{(item.price * item.quantity).toFixed(2)}€</p>
                          <p className="text-sm text-gray-500">{item.price.toFixed(2)}{t('cart.price.perUnit')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="p-4 sm:p-6 border-t bg-white">
                <div className="space-y-4 py-4">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>{t('cart.subtotal')}</span>
                    <span>{totalPrice.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>{t('cart.shipping')}</span>
                    <span>{t('cart.free')}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl sm:text-2xl font-bold">
                    <span>{t('cart.total')}</span>
                    <span>{totalPrice.toFixed(2)}€</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <CreditCard size={20} />
                  <span>{t('cart.checkout')}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Cart Overlay */}
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-100 backdrop-blur-sm transition-opacity duration-300"
            onClick={toggleCart}
          />
        )}

        {/* Cart Button Animation and Language Toggle */}
        <div className="fixed bottom-8 right-8 flex flex-col items-end space-y-4 z-[1000]">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className={`bg-blue-100 text-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-200 transition-all duration-300 ${
              isCartOpen || isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            {language === 'es' ? (
              <img 
                src="https://flagcdn.com/w40/es.png" 
                alt="Español" 
                className="w-6 h-6 rounded-full"
              />
            ) : (
              <img 
                src="https://flagcdn.com/w40/gb.png" 
                alt="English" 
                className="w-6 h-6 rounded-full"
              />
            )}
          </button>
          
          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className={`bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${
              isCartOpen || isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } transform ${isCartAnimating ? 'scale-125' : 'scale-100'}`}
          >
            <div className="relative">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Main Content */}
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
          {isLoading ? (
            <div className="min-h-screen flex items-center justify-center">
              <img 
                src="/images/favicon.svg" 
                alt="Loading" 
                className="w-8 h-8 animate-spin"
              />
            </div>
          ) : (
            <>
              <HomeSection />
              <ProductSection 
                scrollToSection={scrollToSection}
                addToCart={addToCart}
              />
              <AboutSection />
              <ContactSection />
            </>
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default App;