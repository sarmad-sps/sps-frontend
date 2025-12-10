import React from "react";
import Navbar from "../components/common/Navbar";
import Mobile from "../mobiledevelop/Choosingus";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import MobileHero from "../mobiledevelop/MobileHero";
import Platfrom from "../mobiledevelop/Platfrom";
import TeckStack from "../mobiledevelop/TeckStack";
import Project from "../mobiledevelop/Project";
import { Smartphone } from "lucide-react";
import FadeUp from "../components/common/FadeUp";
import mobile from "../assets/it-consulting.png"
import { SiReact, SiFlutter, SiKotlin, SiFirebase, SiNodedotjs, SiExpress, SiSwift } from "react-icons/si";
import {
  Globe,
  ShoppingCart,
  Heart,
  CreditCard,
  BookOpen,
} from "lucide-react";

const MobileDevelopment = () => {
const mobileFeatures = [
  {
    icon: <Smartphone />,
    title: "Native iOS (Swift / SwiftUI)",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: <Smartphone />,
    title: "Native Android (Kotlin / Jetpack Compose)",
    color: "bg-green-100 text-green-500",
  },
  {
    icon: <Globe />,
    title: "Cross-Platform (React Native, Flutter)",
    color: "bg-purple-100 text-purple-500",
  },
  {
    icon: <Globe />,
    title: "Progressive Web Apps (PWA)",
    color: "bg-indigo-100 text-indigo-500",
  },
  {
    icon: <ShoppingCart />,
    title: "E-commerce App Development",
    color: "bg-pink-100 text-pink-500",
  },
  {
    icon: <CreditCard />,
    title: "Fintech & Payment Solutions",
    color: "bg-yellow-100 text-yellow-500",
  },
];

  const appTypes = [
    {
      icon: <ShoppingCart />,
      title: "E-commerce & Shopping Apps",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: <Heart />,
      title: "Social Networking Apps",
      color: "bg-red-100 text-red-500",
    },
    {
      icon: <Globe />,
      title: "Food Delivery & Booking Apps",
      color: "bg-purple-100 text-purple-500",
    },
    {
      icon: <Heart />,
      title: "Fitness & Health Tracking",
      color: "bg-pink-100 text-pink-500",
    },
    {
      icon: <CreditCard />,
      title: "FinTech & Wallet Apps",
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      icon: <BookOpen />,
      title: "Education & E-learning",
      color: "bg-blue-50 text-blue-400",
    },
  ];

  const reasons = [
    "5+ years of mobile app experience",
    "50+ successful apps launched",
    "100% client satisfaction rate",
    "Clean UI/UX with modern design",
    "Push notifications, offline mode, payment gateways",
    "App Store & Play Store deployment included",
  ];

const mobileStackWithIcons = [
  { name: "React Native", icon: <SiReact />, color: "#61DAFB" },      // React cyan
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },          // Flutter blue
  { name: "Kotlin", icon: <SiKotlin />, color: "#0095D5" },            // Kotlin blue
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },        // Firebase yellow
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },        // Node.js green
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },       // Express black
  { name: "Swift", icon: <SiSwift />, color: "#FA7343" },              // Swift orange
 { 
    name: "AWS", 
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-12 h-12 object-contain" />, 
    color: "#FF9900" 
  },
];

  return (
    <div>
      <Navbar />
      <FadeUp>
        <MobileHero
          title="Mobile Development Services"
          subtitle=" We craft fast, beautiful, and highly engaging apps for iOS & Android that your customers will love and use daily."
          // backgroundImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&q=85&w=2070"
          backgroundImage={mobile}
        />
      </FadeUp>
      <FadeUp>
        <Platfrom title="Platforms We Cover" features={mobileFeatures} />
      </FadeUp>
      <FadeUp>
        <Project
          title="Types of Apps We Build"
          items={appTypes}
          background="bg-[#e8f1ff]"
          columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        />
      </FadeUp>
      <FadeUp>
        <Mobile
          title="Why Choose Us?"
          reasons={reasons}
          background="bg-gray-50"
          columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        />
      </FadeUp>

      <FadeUp>
        {/* <TeckStack
          title="Tech Stack"
          stack={techStack}
          background="bg-gradient-to-r from-blue-50 to-indigo-50"
          columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        /> */}
        <TeckStack
  title="Tech Stack"
  stackWithIcons={mobileStackWithIcons}
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

export default MobileDevelopment;
