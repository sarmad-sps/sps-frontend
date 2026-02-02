import React from "react";
import Navbar from "../components/common/Navbar";
import MobileHero from "../mobiledevelop/MobileHero";
import Project from "../mobiledevelop/Project";
import Platfrom from "../mobiledevelop/Platfrom";
import {
  Globe,
  Code,
  Layout,
  Server,
  ShoppingCart,
  CreditCard,
  Database,
} from "lucide-react";
import Mobile from "../mobiledevelop/Choosingus";
import TeckStack from "../mobiledevelop/TeckStack";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import FadeUp from "../components/common/FadeUp";
import website from "../assets/webdev.webp"
import { SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiMongodb,SiTailwindcss, SiTypescript } from "react-icons/si";
const WebDevelopment = () => {
const webFeatures = [
  {
    icon: <Code className="w-10 h-10" />,
    title: "Next.js / React.js",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    icon: <Layout className="w-10 h-10" />,
    title: "HTML / CSS / Tailwind",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: "Node.js / Express",
    color: "bg-green-100 text-green-500",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "CMS (WordPress / Shopify)",
    color: "bg-purple-100 text-purple-500",
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: "E-commerce Websites",
    color: "bg-pink-100 text-pink-500",
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: "Fintech / Payment Portals",
    color: "bg-indigo-100 text-indigo-500",
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
      icon: <Layout />,
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
const webStackWithIcons = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },       // Next.js black
  { name: "React.js", icon: <SiReact />, color: "#61DAFB" },          // React cyan
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },       // Node.js green
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },      // Express black
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },         // MongoDB green
{ 
    name: "AWS", 
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-12 h-12 object-contain" />, 
    color: "#FF9900" 
  },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" }, // Tailwind blue
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },   // TypeScript blue
];

  return (
    <div>
      <Navbar />
      <FadeUp>
        <MobileHero
          title="Web Development Services"
          subtitle="We build fast, responsive, modern websites that help your business grow."
          // backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070"
          backgroundImage={website}
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
        {/* <TeckStack
          title="Web Tech Stack"
          stack={webStack}
          background="bg-gradient-to-r from-blue-50 to-indigo-50"
        /> */}
        <TeckStack
  title="Web Tech Stack"
  stackWithIcons={webStackWithIcons}
  background="bg-gradient-to-r from-blue-50 to-indigo-50"
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
