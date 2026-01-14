import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "../ContactModal";


const SLIDE_DURATION = 2000; // 6s – premium timing

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  const TEAL_COLOR = "#00B7B3";

  const slides = [
    {
      id: 1,
      image: "/hero_img/hero1.webp",
      zoom: "in",
      title: "IT Risk & Audit Advisory",
      desc: "Strengthening governance, internal controls, and risk management through independent IT audits and risk-focused advisory services.",
    },
    {
      id: 2,
      image: "/hero_img/hero2.webp",
      zoom: "out",
      title: "Cybersecurity & Compliance",
      desc: "Assessing cybersecurity posture, SOC readiness, and regulatory compliance to protect enterprise data, systems, and reputation.",
    },
  ];

  /*  SMOOTH AUTO CAROUSEL */
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(slideTimer);
  }, [currentSlide, slides.length]);

  /*  PERFECTLY SYNCED PROGRESS */
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 1));
    }, SLIDE_DURATION / 100);

    return () => clearInterval(interval);
  }, [currentSlide]);

  /*  CINEMATIC SLIDE VARIANTS */
  const slideVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.9, ease: "easeIn" },
    },
  };

  return (
    <>
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-black">



      {/* 🎞 BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          {/*  CINEMATIC ZOOM */}
          <motion.div
            className="absolute inset-0 will-change-transform"
            initial={{ scale: slides[currentSlide].zoom === "in" ? 1 : 1.12 }}
            animate={{ scale: slides[currentSlide].zoom === "in" ? 1.12 : 1 }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative h-full flex items-center pl-8 sm:pl-12 lg:pl-20 xl:pl-32">
        <div className="max-w-2xl text-white">

          {/* PROGRESS */}
          <div className="mb-12">
            

            <div className="h-[1px] w-24 bg-white/30">
              <motion.div
                className="h-full"
                animate={{ width: `${progress}%` }}
                style={{ backgroundColor: TEAL_COLOR }}
              />
            </div>
          </div>

          {/* TEXT */}
          <motion.h1
            key={slides[currentSlide].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            key={slides[currentSlide].desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-lg lg:text-xl text-white/90 font-light"
          >
            {slides[currentSlide].desc}
          </motion.p>

          {/* CTA */}
          <button
  onClick={() => setContactOpen(true)}
  className="mt-10 px-8 py-4 rounded-full text-lg font-medium hover:scale-[1.03] transition"
  style={{ backgroundColor: TEAL_COLOR }}
>
  Get Started →
</button>
        </div>
      </div>

      {/* LABEL */}
      <div className="absolute bottom-8 left-8 text-xs text-white/50 tracking-widest uppercase">
        SofSecure — IT Risk Advisory
      </div>
    </section>
    <ContactModal
  open={contactOpen}
  onClose={() => setContactOpen(false)}
/>
    </>
  );
};

export default HeroSection;
