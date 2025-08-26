'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import GlowEffect from './GlowEffect';
import 'swiper/css';
import 'swiper/css/navigation';

const services = [
  {
    id: 1,
    icon: '/slider/rigorusVetting.svg',
    title: 'Rigorous Vetting',
    description:
      'Comprehensive background checks, reference verification, and expertise validation for all network members.',
  },
  {
    id: 2,
    icon: '/slider/rapidDeployment.svg',
    title: 'Rapid Deployment',
    description:
      'Get matched with the right advisor in under 72 hours through dedicated relationship managers.',
  },
  {
    id: 3,
    icon: '/slider/precisionTarget.svg',
    title: 'Precision Targeting',
    description:
      'Specialized matching for DeFi, NFTs, DAOs, tokenomics, regulatory compliance, and technical architecture.',
  },
  {
    id: 4,
    icon: '/slider/successTracking.svg',
    title: 'Success Tracking',
    description:
      'We ensure advisor collaborations drive measurable outcomes, helping projects achieve their goals.',
  },
  {
    id: 5,
    icon: '/slider/legalFramework.svg',
    title: 'Legal Framework',
    description:
      'Template advisory agreements, custom term negotiation, and legal framework standardization.',
  },
  {
    id: 6,
    icon: '/slider/ongoingSupport.svg',
    title: 'Ongoing Support',
    description:
      'Continuous relationship management, issue resolution, and network expansion opportunities.',
  },
];

export default function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full bg-primary pt-44 pb-16">
      <div className="max-w-[1510px] mx-auto px-8">
        <h2 className="text-white text-5xl max-[600px]:text-3xl font-semibold text-right leading-[58px] max-[600px]:leading-[40px] mb-16 ml-auto">
          OUR SERVICES
        </h2>
      </div>

      <div className="w-full overflow-hidden px-8 min-[1024px]:px-0">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
          }}
          spaceBetween={24}
          slidesPerView={1}
          autoHeight={false}
          centeredSlides={true}
          watchSlidesProgress={true}
          allowTouchMove={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
          }}
          className="services-swiper !overflow-visible"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <GlowEffect
                intensity="strong"
                className="w-full min-[768px]:max-w-[488px] min-[1510px]:max-w-none rounded-2xl"
                glowSize="large"
              >
                <div className="service-card">
                  <div className="service-card-content">
                    <div className="w-12 h-12">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="text-white text-2xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-white text-sm font-martian-mono font-normal leading-[150%]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowEffect>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[1510px] mx-auto px-8">
        <div className="flex items-center justify-end gap-4 mt-12">
          <div className="bg-primary  px-6 py-4">
            <div className="text-white font-medium text-base">
              {String(currentSlide + 1).padStart(2, '0')}/
              {String(services.length).padStart(2, '0')}
            </div>
          </div>

          <div className="flex items-center overflow-hidden">
            <GlowEffect
              className="rounded-l-2xl hover:z-20 relative"
              glowSize="small"
            >
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={currentSlide === 0}
                className="group flex items-center hover:z-10 justify-center px-6 py-4 bg-primary text-white hover:text-gray-300 disabled:text-gray-500 cursor-pointer disabled:cursor-not-allowed transition-colors rounded-l-2xl border border-white/20 border-r-0 relative"
              >
                <Image
                  src="/arrows/arrowLeftSlider.svg"
                  alt="Previous"
                  width={20}
                  height={20}
                  className="transition-transform group-hover:scale-95"
                />
              </button>
            </GlowEffect>

            <GlowEffect
              className="rounded-r-2xl hover:z-20 -ml-px"
              glowSize="small"
            >
              <button
                onClick={() => swiperRef.current?.slideNext()}
                disabled={currentSlide === services.length - 1}
                className="group flex items-center hover:z-10 justify-center px-6 py-4 bg-primary text-white hover:text-gray-300 disabled:text-gray-500 cursor-pointer disabled:cursor-not-allowed transition-colors rounded-r-2xl border border-white/20 border-l-0 relative"
              >
                <Image
                  src="/arrows/arrowRightSlider.svg"
                  alt="Next"
                  width={20}
                  height={20}
                  className="transition-transform group-hover:scale-95"
                />
              </button>
            </GlowEffect>
          </div>
        </div>
      </div>
    </section>
  );
}
