"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

// Seamless looping video component
function SeamlessVideo({
  src,
  poster,
  className,
  alt,
  playbackRate = 1.0,
}: {
  src: string;
  poster: string;
  className?: string;
  alt: string;
  playbackRate?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackRate;

    const handleTimeUpdate = () => {
      // Restart video slightly before it ends to avoid black frame
      if (video.duration - video.currentTime < 0.5) {
        video.currentTime = 0;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className={className}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      <img src={poster} alt={alt} className={className} />
    </video>
  );
}

// Navigation
function Navigation() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="#" className="flex flex-col">
            <span className="text-2xl leading-none tracking-tight text-neutral-900">
              Bartosz
            </span>
            <span className="text-2xl leading-none font-black tracking-tight text-neutral-900">
              Grubka
            </span>
          </Link>
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="#trening"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Trening
            </Link>
            <Link
              href="#o-mnie"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              O mnie
            </Link>
            <Link
              href="#wyniki"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Wyniki
            </Link>
            <Link
              href="#kontakt"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Kontakt
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.strava.com/athletes/17131294"
              target="_blank"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <StravaIcon />
            </Link>
            <Link
              href="https://www.instagram.com/lyda_grubsona/"
              target="_blank"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.facebook.com/bartosz.grubka"
              target="_blank"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://filmygorskie.pl/film/vod.544-droga-na-diablak"
              target="_blank"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax offset (slower movement for background)
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative flex min-h-screen items-end justify-start overflow-hidden pt-16 pb-20">
      {/* Background Video with Parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <SeamlessVideo
          src="/videos/bartek_main.mp4"
          poster="/photos/diablak_movie_placeholder.jpg"
          className="h-[120vh] w-full object-cover"
          alt="Diablak extreme triathlon"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          transform: `translateY(${-parallaxOffset * 0.2}px)`,
        }}
      >
        <div className="max-w-4xl">
          <h1 className="mb-8 text-5xl leading-[0.9] font-black tracking-tight uppercase sm:text-6xl lg:text-8xl">
            <span className="block text-white">Trenuj mądrze</span>
            <span className="block text-white">i po cichu,</span>
            <span className="mt-2 block text-neutral-900">a efekty niech</span>
            <span className="block text-neutral-900">robią hałas</span>
          </h1>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-8 py-4 font-bold tracking-wide text-white uppercase transition-colors hover:bg-neutral-700"
            >
              Rozpocznij trening
            </Link>
            <Link
              href="#o-mnie"
              className="inline-flex items-center justify-center rounded-lg border-2 border-neutral-900 px-8 py-4 font-bold tracking-wide text-neutral-900 uppercase transition-colors hover:bg-neutral-900 hover:text-white"
            >
              Poznaj mnie
            </Link>
          </div>
        </div>
      </div>

      {/* Side text like in reference */}
      <div className="absolute bottom-1/3 left-4 hidden origin-left -rotate-90 lg:block">
        <span className="text-xs tracking-[0.3em] text-neutral-600 uppercase">
          Bartosz Grubka
        </span>
      </div>
    </section>
  );
}

// Training Section
function TrainingSection() {
  const trainingWeek = [
    {
      day: "Pon",
      activities: [
        {
          time: "45m",
          distance: "2.4 km",
          name: "Basen - ćwiczenia",
          color: "bg-teal-500",
          icon: "🏊",
        },
      ],
    },
    {
      day: "Wt",
      activities: [
        {
          time: "1h0m",
          distance: "",
          name: "Trening siłowy",
          color: "bg-yellow-500",
          icon: "💪",
        },
        {
          time: "56m",
          distance: "12 km",
          name: "Bieg Tempo",
          color: "bg-yellow-500",
          icon: "🏃",
        },
      ],
    },
    {
      day: "Śr",
      activities: [
        {
          time: "56m",
          distance: "3 km",
          name: "Basen wytrzymałość",
          color: "bg-teal-500",
          icon: "🏊",
        },
        {
          time: "1h30m",
          distance: "",
          name: "Rower / trenazer",
          color: "bg-orange-500",
          icon: "🚴",
        },
      ],
    },
    {
      day: "Czw",
      activities: [
        {
          time: "1h8m",
          distance: "14 km",
          name: "Bieg Interwał",
          color: "bg-yellow-500",
          icon: "🏃",
        },
      ],
    },
    {
      day: "Pt",
      activities: [
        {
          time: "1h0m",
          distance: "",
          name: "Trening siłowy",
          color: "bg-gray-300",
          icon: "💪",
        },
      ],
    },
    {
      day: "Sob",
      activities: [
        {
          time: "1h30m",
          distance: "",
          name: "Wybieganie teren",
          color: "bg-emerald-500",
          icon: "🏃",
        },
        {
          time: "56m",
          distance: "3 km",
          name: "Basen wytrzymałość",
          color: "bg-teal-500",
          icon: "🏊",
        },
      ],
    },
    {
      day: "Ndz",
      activities: [
        {
          time: "3h30m",
          distance: "",
          name: "Rower szosa",
          color: "bg-orange-500",
          icon: "🚴",
        },
      ],
    },
  ];

  return (
    <section id="trening" className="section-gradient py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-16 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Trening</span>
          </h2>
          <div className="card mx-auto max-w-2xl rounded-xl p-8">
            <p className="mb-4 text-2xl font-bold text-neutral-900">
              Dostajesz plan treningowy na:
            </p>
            <div className="flex flex-col items-center justify-center gap-4 text-xl font-semibold sm:flex-row">
              <span className="cursor-pointer rounded-lg border-2 border-neutral-900 px-6 py-2 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white">
                14 dni
              </span>
              <span className="font-normal text-neutral-600">lub</span>
              <span className="cursor-pointer rounded-lg border-2 border-neutral-900 px-6 py-2 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white">
                miesiąc
              </span>
            </div>
            <p className="mt-4 text-xl font-light text-neutral-600 italic">
              ...Ty wybierasz
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <div className="card rounded-xl p-8">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                W zależności od Twoich potrzeb umawiamy się na:
              </h3>
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
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                Plan:
              </h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-neutral-900">•</span>
                  <span>plan treningowy jest spersonalizowany</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-neutral-900">•</span>
                  <span>
                    uwzględnia Twoje doświadczenie, predyspozycje oraz cele sportowe
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-neutral-900">•</span>
                  <span>
                    rozwija obszary, nad którymi chcesz pracować
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-neutral-900">•</span>
                  <span>widzisz zaplanowane treningi wraz z komentarzem i wskazówkami</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-neutral-900">•</span>
                  <span>
                    możesz dzielić się swoimi odczuciami po wykonanym treningu — ja widzę, jak go wykonałaś/-eś i na tej podstawie mogę odpowiednio reagować na Twój dalszy rozwój
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-3xl font-bold text-neutral-900">
            Proste!
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-bold text-neutral-900">
            Przykładowy plan treningowy
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
            {trainingWeek.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="card rounded-xl p-4 transition-shadow hover:shadow-lg"
              >
                <div className="mb-3 text-xs font-bold tracking-wide text-neutral-900 uppercase">
                  {day.day}
                </div>
                {day.activities.map((activity, actIndex) => (
                  <div
                    key={actIndex}
                    className={
                      actIndex > 0
                        ? "mt-3 border-t border-neutral-200 pt-3"
                        : ""
                    }
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-xs font-medium text-neutral-900">
                        {activity.time}{" "}
                        {activity.distance && `• ${activity.distance}`}
                      </div>
                      <div className="text-lg">
                        {activity.icon}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-neutral-900">
                      {activity.name}
                    </div>
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
    <section id="o-mnie" className="section-dotted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">To o mnie</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
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
              Zwycięzca m.in. Diablak Beskid Extreme Triathlon 2022, Tatraman
              2023, czy Osiek Triathlon 2024.
            </p>
            <p className="text-lg font-semibold text-neutral-900">
              Uczestnik zawodów z cyklu XTRI World Tour Janosik 2023 (Słowacja),
              Mistrzostw Świata XTRI Norseman 2024 (Norwegia), czy Swissman 2025
              (Szwajcaria).
            </p>
            <p className="text-lg text-neutral-700">
              W 2024r reprezentant Polski w Mistrzostwach Świata AG w
              triathlonie na dystansie olimpijskim w Torremolinos (Hiszpania).
            </p>
            <p className="mt-8 text-base text-neutral-600">
              Z zawodu inżynier jakości, po godzinach gitarzysta samouk, fan
              dobrej kawy i muzyki.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="/photos/image_o_mnie.jpg"
                className="h-full w-full object-cover grayscale"
                alt="Bartosz Grubka cycling"
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
    {
      flag: "🇳🇴",
      event: "NORSEMAN XTRI World Championship 2024",
      position: "",
      medal: "gold",
    },
    {
      flag: "🇨🇭",
      event: "SWISSMAN XTRI World Tour 2025",
      position: "",
      medal: "gold",
    },
    {
      flag: "🇸🇰",
      event: "JANOSIK XTRI World Tour 2023",
      position: "",
      medal: "gold",
    },
    {
      flag: "🇪🇸",
      event: "WORLD TRIATHLON AG Championships Torremolinos 2024",
      position: "",
      medal: "gold",
    },
    {
      flag: "🥇",
      event: "DIABLAK Beskid Extreme Triathlon 2022",
      position: "",
      medal: "gold",
    },
    {
      flag: "🥇",
      event: "WATAHA 1/2IM Bieszczady Extreme Triathlon 2022",
      position: "",
      medal: "gold",
    },
    {
      flag: "🥇",
      event: "TATRAMAN Extreme Triathlon 2023",
      position: "",
      medal: "gold",
    },
    {
      flag: "🥇",
      event: "OSIEK TRIATHLON 1/4IM 2024",
      position: "",
      medal: "gold",
    },
    {
      flag: "🥇",
      event: "ZAMIEĆ 24h Maraton Skrzyczne 2024 MM",
      position: "",
      medal: "silver",
    },
    {
      flag: "🥇",
      event: "ZADYMA Zamieć Skrzyczne 2023",
      position: "",
      medal: "silver",
    },
    {
      flag: "🥇",
      event: "ZAWIERUCHA Zamieć Skrzyczne 2022",
      position: "",
      medal: "silver",
    },
    {
      flag: "🥇",
      event: "BIEG PO ZDRÓJ Zima 2023",
      position: "",
      medal: "silver",
    },
    {
      flag: "🥈",
      event: "KOCIERZ Extreme Triathlon 2024",
      position: "",
      medal: "bronze",
    },
    {
      flag: "🥈",
      event: "DIABLAK 1/2IM Beskid Extreme Triathlon 2021 & 2022 & 2024",
      position: "",
      medal: "bronze",
    },
    {
      flag: "🥈",
      event: "WATAHA 1/2IM Bieszczady Extreme Triathlon 2021",
      position: "",
      medal: "bronze",
    },
    {
      flag: "🥈",
      event: "WISŁA Extreme Duathlon 2024",
      position: "",
      medal: "bronze",
    },
    {
      flag: "🥈",
      event: "LEŚNIK 1/2 Zima 2022",
      position: "",
      medal: "finisher",
    },
    {
      flag: "🥉",
      event: "KOCIERZ Extreme Triathlon 2021",
      position: "",
      medal: "finisher",
    },
    {
      flag: "🥉",
      event: "MARATON TATRY Race 230km 2021",
      position: "",
      medal: "finisher",
    },
    {
      flag: "🥉",
      event: "OSIEK TRIATHLON 1/4IM 2022 & 2025",
      position: "",
      medal: "finisher",
    },
    {
      flag: "🥉",
      event: "SILESIAMAN Duathlon Katowice 2023",
      position: "",
      medal: "finisher",
    },
  ];

  return (
    <section id="wyniki" className="section-gradient py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Wyniki</span>
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-2">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg px-4 py-2 transition-colors hover:bg-neutral-100"
              >
                <span className="shrink-0 text-xl">
                  {result.flag}
                </span>
                <span className="flex-1 text-neutral-900">{result.event}</span>
                {result.position && (
                  <span className="font-semibold text-neutral-700">
                    {result.position}
                  </span>
                )}
              </div>
            ))}

            <div className="mt-8 flex justify-center border-t border-neutral-200 pt-8 lg:justify-start">
              <Link
                href="https://www.strava.com/athletes/17131294"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-neutral-700"
              >
                <StravaIcon />
                Follow me on STRAVA
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/photos/image_wyniki_1.jpg"
                  className="h-full w-full object-cover grayscale"
                  alt="Bartosz Grubka race results"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/photos/image_wyniki_2.jpg"
                  className="h-full w-full object-cover grayscale"
                  alt="Bartosz Grubka race celebration"
                />
              </div>
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
    <section id="kontakt" className="section-dotted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Kontakt</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <p className="mb-6 text-xl text-neutral-600 italic">
                Jeśli chciałbyś rozwinąć swój potencjał w:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="font-semibold text-neutral-900">
                  Kolarstwie szosowym
                </li>
                <li className="font-semibold text-neutral-900">
                  Biegach górskich i ulicznych
                </li>
                <li className="font-semibold text-neutral-900">Triathlonie</li>
              </ul>
            </div>

            <p className="text-2xl font-semibold text-neutral-900">
              Zapraszam do kontaktu
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">
                Bartosz Grubka
              </h3>
              <div className="space-y-2">
                <p className="text-neutral-600">
                  E-mail:{" "}
                  <a
                    href="mailto:john.doe@gmail.com"
                    className="text-neutral-900 transition-colors hover:text-neutral-700"
                  >
                    john.doe@gmail.com
                  </a>
                </p>
                <p className="text-neutral-600">
                  Tel.{" "}
                  <a
                    href="tel:+48666777888"
                    className="text-neutral-900 transition-colors hover:text-neutral-700"
                  >
                    666-777-888
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4 lg:justify-start">
              <Link
                href="https://www.strava.com/athletes/17131294"
                target="_blank"
                className="rounded-lg bg-neutral-200 p-3 text-neutral-700 transition-colors hover:bg-neutral-300 hover:text-neutral-900"
              >
                <StravaIcon />
              </Link>
              <Link
                href="https://www.instagram.com/lyda_grubsona/"
                target="_blank"
                className="rounded-lg bg-neutral-200 p-3 text-neutral-700 transition-colors hover:bg-neutral-300 hover:text-neutral-900"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.facebook.com/bartosz.grubka"
                target="_blank"
                className="rounded-lg bg-neutral-200 p-3 text-neutral-700 transition-colors hover:bg-neutral-300 hover:text-neutral-900"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://filmygorskie.pl/film/vod.544-droga-na-diablak"
                target="_blank"
                className="rounded-lg bg-neutral-200 p-3 text-neutral-700 transition-colors hover:bg-neutral-300 hover:text-neutral-900"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="/photos/image_kontakt.jpeg"
                className="h-full w-full object-cover grayscale"
                alt="Bartosz Grubka triathlon"
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
    <footer className="section-dotted border-t border-neutral-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Bartosz Grubka. Wszystkie prawa
            zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.strava.com/athletes/17131294"
              target="_blank"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <StravaIcon />
            </Link>
            <Link
              href="https://www.instagram.com/lyda_grubsona/"
              target="_blank"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.facebook.com/bartosz.grubka"
              target="_blank"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://filmygorskie.pl/film/vod.544-droga-na-diablak"
              target="_blank"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
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
