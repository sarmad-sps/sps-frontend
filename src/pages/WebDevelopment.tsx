import React from "react";
import Navbar from "../components/common/Navbar";
import MobileHero from "../mobiledevelop/MobileHero";
import Project from "../mobiledevelop/Project";
import Platfrom from "../mobiledevelop/Platfrom";
import { Globe, Code, Server, Layers, Smartphone } from "lucide-react";
import Mobile from "../mobiledevelop/Mobile";
import TeckStack from "../mobiledevelop/TeckStack";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import FadeUp from "../components/common/FadeUp";
const WebDevelopment = () => {
  const webFeatures = [
    {
      icon: <Globe />,
      title: "Next.js / React.js",
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      icon: <Globe />,
      title: "HTML / CSS / Tailwind",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: <Globe />,
      title: "Node.js / Express",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: <Globe />,
      title: "CMS (WordPress / Shopify)",
      color: "bg-purple-100 text-purple-500",
    },
  ];
  const webFeature = [
    {
      icon: <Globe />,
      title: "Next.js / React.js",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: <Code />,
      title: "HTML, CSS, JavaScript, TypeScript",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Layers />,
      title: "Tailwind, Bootstrap, Chakra UI",
      color: "bg-purple-100 text-purple-500",
    },
    {
      icon: <Server />,
      title: "Node.js, Express.js APIs",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: <Globe />,
      title: "CMS (WordPress, Shopify)",
      color: "bg-pink-100 text-pink-500",
    },
    {
      icon: <Server />,
      title: "Databases (MongoDB, PostgreSQL)",
      color: "bg-indigo-100 text-indigo-500",
    },
  ];

  const webReasons = [
    "Modern, fast, SEO-optimized websites",
    "Clean UI/UX with responsive design",
    "Next.js, React, Node.js experts",
    "Custom dashboards & APIs",
    "Secure, scalable architectures",
    "Free deployment & hosting setup",
  ];
  const webStack = [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS",
    "TailwindCSS",
  ];
  return (
    <div>
      <Navbar />
      <FadeUp>
        <MobileHero
          title="Web Development Services"
          subtitle="We build fast, responsive, modern websites that help your business grow."
          backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070"
        />
      </FadeUp>
      <FadeUp>
        <Platfrom title="Platform web cover" features={webFeatures} />
      </FadeUp>
      <FadeUp>
        <Project
          title="Web Technologies We Use"
          items={webFeature}
          background="bg-[#e8f1ff]"
          columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        />
      </FadeUp>
      <FadeUp>
        <Mobile
          title="Why Choose Us for Web Development?"
          reasons={webReasons}
        />
      </FadeUp>
      <FadeUp>
        <TeckStack
          title="Web Tech Stack"
          stack={webStack}
          background="bg-gradient-to-r from-blue-50 to-indigo-50"
          columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        />
      </FadeUp>
      <FadeUp>
        <FAQSection />
      </FadeUp>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
