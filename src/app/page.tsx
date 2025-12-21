"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Social Media Icons
const StravaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Navigation
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="#" className="flex flex-col">
            <span className="text-2xl tracking-tight leading-none text-neutral-900">Bartosz</span>
            <span className="text-2xl font-black tracking-tight leading-none text-neutral-900">Grubka</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#trening" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              Trening
            </Link>
            <Link href="#o-mnie" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              O mnie
            </Link>
            <Link href="#wyniki" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              Wyniki
            </Link>
            <Link href="#kontakt" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              Kontakt
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://www.strava.com/athletes/17131294" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <StravaIcon />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <InstagramIcon />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <FacebookIcon />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-end justify-start pt-16 pb-20">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/photos/diablak_movie_placeholder.jpg"
        >
          <source src="/videos/hero_vid.webm" type="video/webm" />
          {/* Fallback image */}
          <img 
            src="/photos/diablak_movie_placeholder.jpg" 
            alt="Diablak extreme triathlon" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.9] mb-8 tracking-tight">
            <span className="block text-white">Trenuj mądrze</span>
            <span className="block text-white">i po cichu,</span>
            <span className="block text-neutral-900 mt-2">a efekty niech</span>
            <span className="block text-neutral-900">robią hałas</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 hover:bg-neutral-700 text-white font-bold rounded-lg transition-colors uppercase tracking-wide"
            >
              Rozpocznij trening
            </Link>
            <Link
              href="#o-mnie"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold rounded-lg transition-colors uppercase tracking-wide"
            >
              Poznaj mnie
            </Link>
          </div>
        </div>
      </div>
      
      {/* Side text like in reference */}
      <div className="absolute left-4 bottom-1/3 -rotate-90 origin-left hidden lg:block">
        <span className="text-xs tracking-[0.3em] text-neutral-600 uppercase">Bartosz Grubka</span>
      </div>
    </section>
  );
}

// Training Section
function TrainingSection() {
  const trainingDays = [
    { 
      day: "Pon",
      icon: "🏊", 
      activities: [
        { time: "41m", distance: "2.2 km", load: 37, name: "Basen - ćwiczenia", color: "bg-teal-500" }
      ]
    },
    { 
      day: "Wt",
      icon: "💪", 
      activities: [
        { time: "1h0m", distance: "", load: 60, name: "Trening siłowy", color: "bg-emerald-500" }
      ]
    },
    { 
      day: "Śr",
      icon: "🏊", 
      activities: [
        { time: "56m", distance: "3 km", load: 54, name: "Basen wytrzymałość", color: "bg-teal-500" }
      ]
    },
    { 
      day: "Czw",
      icon: "🏃", 
      activities: [
        { time: "1h8m", distance: "14 km", load: 81, name: "Bieg Interwał", color: "bg-yellow-500" }
      ]
    },
    { 
      day: "Pt",
      icon: "💪", 
      activities: [
        { time: "1h0m", distance: "", load: 66, name: "Wybieganie teren", color: "bg-emerald-500" }
      ]
    },
    { 
      day: "Sob",
      icon: "🚴", 
      activities: [
        { time: "1h30m", distance: "", load: 85, name: "Rower / trenazer", color: "bg-orange-500" }
      ]
    },
    { 
      day: "Ndz",
      icon: "🏊", 
      activities: [
        { time: "56m", distance: "3 km", load: 54, name: "Basen wytrzymałość", color: "bg-teal-500" }
      ]
    },
    { 
      day: "Pon",
      icon: "🚴", 
      activities: [
        { time: "3h30m", distance: "", load: 136, name: "Rower szosa", color: "bg-teal-600" }
      ]
    },
  ];

  return (
    <section id="trening" className="py-20 lg:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Trening</span>
          </h2>
          <div className="max-w-2xl mx-auto card rounded-xl p-8">
            <p className="text-2xl font-bold mb-4 text-neutral-900">
              Dostajesz: plan treningowy na:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xl font-semibold">
              <span className="px-6 py-2 border-2 border-neutral-900 rounded-lg text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer">14 dni</span>
              <span className="text-neutral-600 font-normal">lub</span>
              <span className="px-6 py-2 border-2 border-neutral-900 rounded-lg text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer">miesiąc</span>
            </div>
            <p className="text-xl font-light mt-4 italic text-neutral-600">
              ...Ty wybierasz
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div className="card rounded-xl p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">W zależności od Twoich potrzeb umawiamy się na:</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-center gap-3">
                  <span className="text-neutral-900">•</span>
                  konsultację treningową
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-900">•</span>
                  rozpisany plan treningowy
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-900">•</span>
                  plan treningowy i jego monitorowanie
                </li>
              </ul>
            </div>

            <div className="card rounded-xl p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Plan:</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span>uwzględnia Twoje doświadczenie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span>oparty jest na tym do czego się przygotowujesz, lub nad czym chcesz pracować</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span>masz personalny dostęp do Twojego planu treningowego</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span>widzisz co masz zaplanowane wraz z komentarzem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span>Ja widzę co zrobiłeś/aś (możesz również komentować swoje odczucia po) i na tej podstawie mogę reagować na Twój dalszy rozwój.</span>
                </li>
              </ul>
            </div>

            <p className="text-3xl font-bold text-center text-neutral-900">Proste!</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {trainingDays.map((day, index) => (
              <div key={index} className="card rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">{day.day}</div>
                  <div className="text-3xl">{day.icon}</div>
                </div>
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className={actIndex > 0 ? "mt-3 pt-3 border-t border-neutral-200" : ""}>
                    <div className="text-sm font-medium text-neutral-900 mb-2">
                      {activity.time} {activity.distance && `• ${activity.distance}`}
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden mb-2">
                      <div 
                        className={`h-full ${activity.color}`}
                        style={{ width: `${Math.min(activity.load, 100)}%` }}
                      />
                    </div>
                    <div className="text-xs text-neutral-900 font-medium">{activity.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="o-mnie" className="py-20 lg:py-32 section-dotted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">To o mnie</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-lg text-neutral-700">
              Od ponad 20 lat związany ze sportem.
            </p>
            <p className="text-lg text-neutral-700">
              Były kolarz szosowy w latach 2004-2010.
            </p>
            <p className="text-lg text-neutral-700">
              Od 2020r uprawia amatorsko triathlon, szczególnie w wersji XTRI.
            </p>
            <p className="text-lg text-neutral-700">
              Zwycięzca m.in. Diablak Beskid Extreme Triathlon 2022, Tatraman 2023, czy Osiek Triathlon 2024.
            </p>
            <p className="text-lg text-neutral-900 font-semibold">
              Uczestnik zawodów z cyklu XTRI World Tour Janosik 2023 (Słowacja),
              Mistrzostw Świata XTRI Norseman 2024 (Norwegia), czy Swissman 2025 (Szwajcaria).
            </p>
            <p className="text-lg text-neutral-700">
              W 2024r reprezentant Polski w Mistrzostwach Świata AG
              w triathlonie na dystansie olimpijskim w Torremolinos (Hiszpania).
            </p>
            <p className="text-base text-neutral-600 mt-8">
              Z zawodu inżynier jakości, po godzinach gitarzysta samouk, fan dobrej kawy i muzyki.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="/photos/image_o_mnie.jpg" 
                alt="Bartosz Grubka cycling" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Results Section
function ResultsSection() {
  const results = [
    { flag: "🇳🇴", event: "NORSEMAN XTRI World Championship 2024", position: "", medal: "gold" },
    { flag: "🇨🇭", event: "SWISSMAN XTRI World Tour 2025", position: "", medal: "gold" },
    { flag: "🇸🇰", event: "JANOSIK XTRI World Tour 2023", position: "", medal: "gold" },
    { flag: "🇪🇸", event: "WORLD TRIATHLON AG Championships Torremolinos 2024", position: "", medal: "gold" },
    { flag: "🥇", event: "DIABLAK Beskid Extreme Triathlon 2022", position: "", medal: "gold" },
    { flag: "🥇", event: "WATAHA 1/2IM Bieszczady Extreme Triathlon 2022", position: "", medal: "gold" },
    { flag: "🥇", event: "TATRAMAN Extreme Triathlon 2023", position: "", medal: "gold" },
    { flag: "🥇", event: "OSIEK TRIATHLON 1/4IM 2024", position: "", medal: "gold" },
    { flag: "🥇", event: "ZAMIEĆ 24h Maraton Skrzyczne 2024 MM", position: "", medal: "silver" },
    { flag: "🥇", event: "ZADYMA Zamieć Skrzyczne 2023", position: "", medal: "silver" },
    { flag: "🥇", event: "ZAWIERUCHA Zamieć Skrzyczne 2022", position: "", medal: "silver" },
    { flag: "🥇", event: "BIEG PO ZDRÓJ Zima 2023", position: "", medal: "silver" },
    { flag: "🥈", event: "KOCIERZ Extreme Triathlon 2024", position: "", medal: "bronze" },
    { flag: "🥈", event: "DIABLAK 1/2IM Beskid Extreme Triathlon 2021 & 2022 & 2024", position: "", medal: "bronze" },
    { flag: "🥈", event: "WATAHA 1/2IM Bieszczady Extreme Triathlon 2021", position: "", medal: "bronze" },
    { flag: "🥈", event: "WISŁA Extreme Duathlon 2024", position: "", medal: "bronze" },
    { flag: "🥈", event: "LEŚNIK 1/2 Zima 2022", position: "", medal: "finisher" },
    { flag: "🥉", event: "KOCIERZ Extreme Triathlon 2021", position: "", medal: "finisher" },
    { flag: "🥉", event: "MARATON TATRY Race 230km 2021", position: "", medal: "finisher" },
    { flag: "🥉", event: "OSIEK TRIATHLON 1/4IM 2022 & 2025", position: "", medal: "finisher" },
    { flag: "🥉", event: "SILESIAMAN Duathlon Katowice 2023", position: "", medal: "finisher" },
    
  ];

  return (
    <section id="wyniki" className="py-20 lg:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Wyniki</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-2">
            {results.map((result, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <span className="text-xl">{result.flag}</span>
                <span className="text-neutral-900 flex-1">{result.event}</span>
                {result.position && (
                  <span className="text-neutral-700 font-semibold">{result.position}</span>
                )}
              </div>
            ))}
            
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <Link 
                href="https://www.strava.com/athletes/17131294" 
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-colors"
              >
                <StravaIcon />
                Follow me on STRAVA
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="/photos/image_wyniki.jpg" 
                alt="Bartosz Grubka race results celebration" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="kontakt" className="py-20 lg:py-32 section-dotted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Kontakt</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div>
              <p className="text-xl text-neutral-600 italic mb-6">
                Jeśli chciałbyś rozwinąć swój potencjał w:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="text-neutral-900 font-semibold">Kolarstwie szosowym</li>
                <li className="text-neutral-900 font-semibold">Biegach górskich i ulicznych</li>
                <li className="text-neutral-900 font-semibold">Triathlonie</li>
              </ul>
            </div>

            <p className="text-2xl text-neutral-900 font-semibold">
              Zapraszam do kontaktu
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Bartosz Grubka</h3>
              <div className="space-y-2">
                <p className="text-neutral-600">
                  E-mail:{" "}
                  <a href="mailto:john.doe@gmail.com" className="text-neutral-900 hover:text-neutral-700 transition-colors">
                    john.doe@gmail.com
                  </a>
                </p>
                <p className="text-neutral-600">
                  Tel.{" "}
                  <a href="tel:+48666777888" className="text-neutral-900 hover:text-neutral-700 transition-colors">
                    666-777-888
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <Link 
                href="https://www.strava.com/athletes/17131294" 
                target="_blank"
                className="p-3 bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors text-neutral-700 hover:text-neutral-900"
              >
                <StravaIcon />
              </Link>
              <Link 
                href="https://www.instagram.com" 
                target="_blank"
                className="p-3 bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors text-neutral-700 hover:text-neutral-900"
              >
                <InstagramIcon />
              </Link>
              <Link 
                href="https://www.facebook.com" 
                target="_blank"
                className="p-3 bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors text-neutral-700 hover:text-neutral-900"
              >
                <FacebookIcon />
              </Link>
              <Link 
                href="https://www.youtube.com" 
                target="_blank"
                className="p-3 bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors text-neutral-700 hover:text-neutral-900"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="/photos/image_kontakt.jpeg" 
                alt="Bartosz Grubka triathlon" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 section-dotted border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Bartosz Grubka. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://www.strava.com/athletes/17131294" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <StravaIcon />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <InstagramIcon />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
"use client";

              <FacebookIcon />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrainingSection />
      <AboutSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
