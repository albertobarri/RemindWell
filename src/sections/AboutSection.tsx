// import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="h-auto flex items-center py-12 justify-center bg-white snap-start pt-32">
      <div className="max-w-8xl mx-auto">
        {/* Versión móvil */}
        <div className="lg:hidden w-full flex flex-col items-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
            {t('about.title')}
          </h2>
          <div className="max-w-7xl mx-auto mb-6">
            <p className="text-base text-gray-600 mb-4 text-center">
              {t('about.description')}
            </p>
            <p className="text-base text-gray-600 text-center">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="w-full space-y-8">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl mb-3">
                <img
                  src="/images/mariab.png"
                  alt="María Belda"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">María Belda</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl mb-3">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                  alt="Alejandra Blanco"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Alejandra Blanco</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl mb-3">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                  alt="Laura Charlán"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Laura Charlán</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl mb-3">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                  alt="Laura Bombarda"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Laura Bombarda</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl mb-3">
                <img
                  src="/images/alberto.png"
                  alt="Alberto Barriuso"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Alberto Barriuso</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl mb-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                  alt="María Alarcón"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">María Alarcón</h3>
            </div>
          </div>
        </div>

        {/* Versión escritorio */}
        <div className="hidden lg:block">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 text-center">
            {t('about.title')}
          </h2>
          <div className="max-w-7xl mx-auto mb-10">
            <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
              {t('about.description')}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 text-center">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {/* Columna 1 */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/images/mariab.png"
                    alt="María Belda"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">María Belda</h3>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                    alt="Alejandra Blanco"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Alejandra Blanco</h3>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                    alt="Laura Charlán"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Laura Charlán</h3>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                    alt="Laura Bombarda"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Laura Bombarda</h3>
              </div>
            </div>

            {/* Columna 3 */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/images/alberto.png"
                    alt="Alberto Barriuso"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Alberto Barriuso</h3>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                    alt="María Alarcón"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">María Alarcón</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;