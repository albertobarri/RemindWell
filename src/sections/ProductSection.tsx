// import React from 'react';
import { Bell, Calendar, Clock, Battery, ShoppingCart, Leaf, Accessibility } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

interface ProductSectionProps {
  scrollToSection: (sectionId: string) => void;
  addToCart: (type: string, doses: string, light: string) => void;
}

const ProductSection = ({ scrollToSection, addToCart }: ProductSectionProps) => {
  const { t } = useLanguage();
  const [pillboxType, setPillboxType] = useState('weekly');
  const [dosesPerDay, setDosesPerDay] = useState('morning');
  const [hasLight, setHasLight] = useState('with-light');
  const [showAddedFeedback, setShowAddedFeedback] = useState(false);

  const handleAddToCart = () => {
    addToCart(pillboxType, dosesPerDay, hasLight);
    setShowAddedFeedback(true);
    setTimeout(() => setShowAddedFeedback(false), 2000);
  };

  return (
    <>
      <section id="product" className="h-auto flex items-start justify-center bg-blue-50 snap-start">
        <div className="max-w-7xl mx-auto py-32 pb-12 w-full flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 text-center">
            {t('product.title')} <span className="italic text-blue-600 text-xl">{t('product.by')}</span>
          </h2>

          {/* Versión móvil */}
          <div className="lg:hidden w-[90%] flex flex-col items-center">
            <div className="w-full max-w-2xl">
              <img
                src="/images/product.png"
                alt="RemindWell Features"
                className="rounded-xl shadow-2xl mx-auto w-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 w-full max-w-2xl mt-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full shrink-0">
                  <Bell className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{t('product.features.reminders.title')}</h3>
                  <p className="text-sm text-gray-600 text-justify">{t('product.features.reminders.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full shrink-0">
                  <Calendar className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{t('product.features.organization.title')}</h3>
                  <p className="text-sm text-gray-600 text-justify">{t('product.features.organization.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full shrink-0">
                  <Accessibility className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{t('product.features.accessibility.title')}</h3>
                  <p className="text-sm text-gray-600 text-justify">{t('product.features.accessibility.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full shrink-0">
                  <Clock className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{t('product.features.multiple.title')}</h3>
                  <p className="text-sm text-gray-600 text-justify">{t('product.features.multiple.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full shrink-0">
                  <Battery className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{t('product.features.battery.title')}</h3>
                  <p className="text-sm text-gray-600 text-justify">{t('product.features.battery.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full shrink-0">
                  <Leaf className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{t('product.features.recycled.title')}</h3>
                  <p className="text-sm text-gray-600 text-justify">{t('product.features.recycled.description')}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 w-full max-w-2xl">
              <button
                onClick={() => scrollToSection('buy')}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t('product.configure')}
              </button>
            </div>
          </div>

          {/* Versión escritorio */}
          <div className="hidden lg:flex lg:flex-row items-center justify-center gap-12 w-full">
            {/* Columna izquierda */}
            <div className="w-[35%] space-y-8">
              <div className="flex items-start space-x-4 h-28">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Bell className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{t('product.features.reminders.title')}</h3>
                  <p className="text-gray-600 text-justify">{t('product.features.reminders.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 h-28">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Calendar className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{t('product.features.organization.title')}</h3>
                  <p className="text-gray-600 text-justify">{t('product.features.organization.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 h-28">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Accessibility className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{t('product.features.accessibility.title')}</h3>
                  <p className="text-gray-600 text-justify">{t('product.features.accessibility.description')}</p>
                </div>
              </div>
            </div>

            {/* Columna central con imagen y botón */}
            <div className="w-3/5 flex flex-col items-center gap-8">
              <img
                src="/images/product.png"
                alt="RemindWell Features"
                className="rounded-xl shadow-xl w-full max-w-5xl"
                loading="lazy"
              />
              <button
                onClick={() => scrollToSection('buy')}
                className="w-full max-w-md bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t('product.configure')}
              </button>
            </div>

            {/* Columna derecha */}
            <div className="w-[35%] space-y-8">
              <div className="flex items-start space-x-4 h-28">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Clock className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{t('product.features.multiple.title')}</h3>
                  <p className="text-gray-600 text-justify">{t('product.features.multiple.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 h-28">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Battery className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{t('product.features.battery.title')}</h3>
                  <p className="text-gray-600 text-justify">{t('product.features.battery.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 h-28">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Leaf className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{t('product.features.recycled.title')}</h3>
                  <p className="text-gray-600 text-justify">{t('product.features.recycled.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de configuración */}
      <div id="buy" className="h-screen flex items-center justify-center bg-blue-50 snap-start">
        <div className="min-w-[90%] max-w-7xl mx-auto px-4 py-12">
          {/* Versión móvil */}
          <div className="lg:hidden">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              {t('product.buy.title')}
            </h2>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-4">{t('product.buy.type.title')}</h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setPillboxType('weekly')}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        pillboxType === 'weekly'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('product.buy.type.weekly')}
                    </button>
                    <button
                      onClick={() => setPillboxType('monthly')}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        pillboxType === 'monthly'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('product.buy.type.monthly')}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-4">{t('product.buy.doses.title')}</h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setDosesPerDay('morning')}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        dosesPerDay === 'morning'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('product.buy.doses.morning')}
                    </button>
                    <button
                      onClick={() => setDosesPerDay('night')}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        dosesPerDay === 'night'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('product.buy.doses.night')}
                    </button>
                    <button
                      onClick={() => setDosesPerDay('three-times')}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        dosesPerDay === 'three-times'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('product.buy.doses.threeTimes')}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-4">{t('product.buy.light.title')}</h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setHasLight('with-light')}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        hasLight === 'with-light'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('product.buy.light.with')}
                    </button>
                    <button
                      onClick={() => setHasLight('without-light')}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        hasLight === 'without-light'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('product.buy.light.without')}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mt-4 ${
                    showAddedFeedback ? 'bg-green-600' : ''
                  }`}
                >
                  <ShoppingCart size={20} />
                  <span>{showAddedFeedback ? t('cart.added') : t('cart.addToCart')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Versión escritorio */}
          <div className="hidden lg:block">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 pt-6 sm:mb-12 text-center">
              {t('product.buy.title')}
            </h2>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12">
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">{t('product.buy.type.title')}</h3>
                  <div className="flex flex-row gap-4">
                    <button
                      onClick={() => setPillboxType('weekly')}
                      className={`px-8 py-4 rounded-lg font-medium transition-colors ${
                        pillboxType === 'weekly'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } flex-1`}
                    >
                      {t('product.buy.type.weekly')}
                    </button>
                    <button
                      onClick={() => setPillboxType('monthly')}
                      className={`px-8 py-4 rounded-lg font-medium transition-colors ${
                        pillboxType === 'monthly'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } flex-1`}
                    >
                      {t('product.buy.type.monthly')}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">{t('product.buy.doses.title')}</h3>
                  <div className="flex flex-row gap-4">
                    <button
                      onClick={() => setDosesPerDay('morning')}
                      className={`px-4 py-4 rounded-lg font-medium transition-colors ${
                        dosesPerDay === 'morning'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } flex-1`}
                    >
                      {t('product.buy.doses.morning')}
                    </button>
                    <button
                      onClick={() => setDosesPerDay('night')}
                      className={`px-4 py-4 rounded-lg font-medium transition-colors ${
                        dosesPerDay === 'night'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } flex-1`}
                    >
                      {t('product.buy.doses.night')}
                    </button>
                    <button
                      onClick={() => setDosesPerDay('three-times')}
                      className={`px-4 py-4 rounded-lg font-medium transition-colors ${
                        dosesPerDay === 'three-times'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } flex-1`}
                    >
                      {t('product.buy.doses.threeTimes')}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">{t('product.buy.light.title')}</h3>
                  <div className="flex flex-row gap-4">
                    <button
                      onClick={() => setHasLight('with-light')}
                      className={`px-8 py-4 rounded-lg font-medium transition-colors ${
                        hasLight === 'with-light'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } flex-1`}
                    >
                      {t('product.buy.light.with')}
                    </button>
                    <button
                      onClick={() => setHasLight('without-light')}
                      className={`px-8 py-4 rounded-lg font-medium transition-colors ${
                        hasLight === 'without-light'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } flex-1`}
                    >
                      {t('product.buy.light.without')}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mt-8 ${
                    showAddedFeedback ? 'bg-green-600' : ''
                  }`}
                >
                  <ShoppingCart size={20} />
                  <span>{showAddedFeedback ? t('cart.added') : t('cart.addToCart')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;