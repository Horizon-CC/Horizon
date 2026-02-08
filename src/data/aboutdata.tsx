import React from "react";

export interface AboutSection {
  id: string;
  title: string;
  heading: string;
  description: string;
  // cards: {
  //   imageUrl: string;
  //   size: { width: string; height: string };
  // }[];
}

export interface MenuItem {
  id: string;
  label: string;
  description: React.ReactNode;
}

//import images here

// const getCards = (start: number) =>
//   squareImages.slice(start, start + 4).map((img) => ({
//     imageUrl: img,
//     size: { width: "200px", height: "120px" },
//   }));

export const menuItems: MenuItem[] = [
  {
    id: "who",
    label: "WHO WE ARE",
    description: (
      <p>
        Horizon isn’t just another college club — it’s a launchpad for future{" "}
        <span className="text-yellow-500 font-bold">cloud architects</span>,
        developers, and builders who actually want to understand how modern tech
        works under the hood. We’re a crew of curious minds obsessed with breaking
        down real cloud systems — from AWS and Azure to Google Cloud — and learning
        how they power the products people use every day.
        <br />
        <br />
        Our focus is simple: turn raw ambition into real-world skills. No
        surface-level theory, no copy-paste tutorials. Just hands-on learning,
        meaningful collaborations, and projects that ship, scale, and solve real
        problems. We believe the best way to learn cloud is by building on it,
        breaking things, fixing them, and doing it all over again.
        <br />
        <br />
        Whether you’re chasing certifications, deploying your first production app,
        contributing to open-source, or just figuring out where cloud fits into your
        future, Horizon gives you the space, people, and momentum to grow.
      </p>

    ),
  },
  {
    id: "what",
    label: "WHAT WE DO",
    description: (
      <p>
        At Horizon, we don’t just talk tech — we live it. Everything we do is built
        around learning by actually doing. From deep-dive workshops and focused
        certification sprints to hack-style builds, we push cloud skills out of the
        comfort zone and into real-world scenarios where they actually matter.
        <br />
        <br />
        You’ll get hands-on with real systems — building them, breaking them,
        debugging the mess, and rebuilding them better. Along the way, you’ll work
        with peers who are just as driven, curious, and hungry to level up. No
        spectators here — everyone ships, everyone learns.
        <br />
        <br />
        The goal is simple: take you from{" "}
        <span className="text-yellow-500 font-bold">cloud curious</span> to{" "}
        <span className="text-yellow-500 font-bold">cloud certified</span>, and
        confident enough to build on your own. If it’s about cloud computing, we’re
        probably building it, breaking it, or experimenting with it — and yeah,
        we’re having fun while doing it.
      </p>

    ),
  },
  {
    id: "begin",
    label: "WHERE DID IT ALL BEGIN",
    description: (
      <p>
        Horizon started as a small group of students who wanted more than just
        lectures, slides, and surface-level explanations. We weren’t interested in
        memorizing concepts — we wanted to deploy real services, configure real
        systems, and build things that actually worked outside the classroom.
        <br />
        <br />
        What began as a late-night idea in a lab quickly turned into something
        bigger: a space for builders, dreamers, and tinkerers who learn best by
        getting their hands dirty. A place where curiosity was encouraged, mistakes
        were part of the process, and figuring things out together mattered more
        than getting everything right the first time.
        <br />
        <br />
        That original spark still drives everything we do today. Horizon exists to
        turn ideas into action, and learning into real-world impact. We’re still
        building, still experimenting, and still chasing the future of tech — just
        with a growing community and higher standards.
      </p>

    ),
  },
];

export const aboutSections: Record<string, AboutSection> = {
  who: {
    id: "who",
    title: "01 Who We Are",
    heading: "WHO WE ARE",
    description:
      "Horizon isn't just a club. it's a launchpad for future cloud architects, developers, and innovators. We're a crew of curious minds obsessed with learning how the cloud actually works, from AWS and Azure to Google Cloud. Our goal? To turn raw ambition into real-world expertise through hands-on learning, collabs, and projects that make an impact. Whether you're here to earn certifications, build something epic, or just explore what the cloud can do, Horizon is where passion meets purpose.",
    // cards: getCards(0), // img1-4
  },
  what: {
    id: "what",
    title: "02 What We Do",
    heading: "WHAT WE DO",
    description:
      "At Horizon, we don't just talk tech. We live it.We host deep-dive workshops, certification sprints, and hack-style projects that put cloud skills to the test. You'll get to build, break, and rebuild real systems while working with peers who are just as hungry to learn. We connect you with mentors, resources, and industry pros to help you go from cloud curious to cloud certified. Basically, if it's about cloud computing, we're doing it and having a blast along the way.",
    // cards: getCards(4), // img5-8
  },
  begin: {
    id: "begin",
    title: "03 Where Did It All Begin",
    heading: "WHERE DID IT ALL BEGIN",
    description:
      "Horizon started as a small group of students who wanted more than just lectures and slides. We wanted to learn by doing, to actually deploy, configure, and create stuff that works in the real world. What began as a late-night idea in a lab turned into a movement: a space for builders, dreamers, and tinkerers to chase the future of tech together. That spark still drives everything we do today.",
    // cards: getCards(8), // img9-12
  },
};

