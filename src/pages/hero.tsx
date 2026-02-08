"use client";

import Navbar from "@/components/NavBar";
import { Particles } from "@/components/ui/particles";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden font-heading">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Particles
          quantity={120}
          staticity={60}
          size={2}
          color="#64748b"
          className="opacity-40"
        />
        <Meteors number={12} maxDuration={12} minDuration={2} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20">
        {/* Main Content */}
        <div className="max-w-5xl">
          {/* Greeting */}
          <BoxReveal width="100%" boxColor="#F7F7FF" duration={0.8}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base font-body tracking-wider text-muted-foreground mb-2 sm:mb-4"
            >
              WELCOME TO
            </motion.p>
          </BoxReveal>

          {/* Main Heading */}
          <BoxReveal width="100%" boxColor="#F7F7FF" duration={0.8}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
            >
              <span className="inline-block">HORIZON</span>
            </motion.h1>
          </BoxReveal>

          {/* Subtitle */}
          <BoxReveal width="100%" boxColor="#F7F7FF" duration={0.8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 sm:mt-6 lg:mt-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-foreground/90">
                Cloud Computing Club
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-body text-muted-foreground max-w-full sm:max-w-xl lg:max-w-2xl leading-relaxed">
                Where passion meets purpose. We’re a bunch of curious builders obsessed with figuring out how the cloud actually works — from AWS to Azure, and whatever’s next.
              </p>
            </motion.div>
          </BoxReveal>

          {/* CTA Button */}
          <BoxReveal width="fit-content" boxColor="#F7F7FF" duration={0.6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 sm:mt-8 lg:mt-10"
            >
              <motion.button
                onClick={scrollToAbout}
                whileHover={{ color: 'white' }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm sm:text-base overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Horizon
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </BoxReveal>
        </div>

        {/* Stats/Highlights - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden lg:flex absolute bottom-8 right-20 gap-12"
        >
          {[
            { value: "50+", label: "Members" },
            { value: "20+", label: "Projects" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs font-body text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator - Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:hidden"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 right-8 lg:right-20 w-32 h-32 lg:w-48 lg:h-48 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/4 left-8 lg:left-20 w-24 h-24 lg:w-40 lg:h-40 bg-primary/10 rounded-full blur-3xl"
      />
    </main>
  );
}
