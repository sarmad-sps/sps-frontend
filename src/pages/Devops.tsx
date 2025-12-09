import React from "react";
import Navbar from "../components/common/Navbar";
import MobileHero from "../mobiledevelop/MobileHero";
import Platfrom from "../mobiledevelop/Platfrom";
import Project from "../mobiledevelop/Project";
import {
  Server,
  Cloud,
  ShieldCheck,
  Cog,
  GitBranch,
  LineChart,
} from "lucide-react";
import Mobile from "../mobiledevelop/Mobile";
import TeckStack from "../mobiledevelop/TeckStack";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import FadeUp from "../components/common/FadeUp";
const Devops = () => {
  const devopsFeatures = [
    {
      icon: <Server />,
      title: "Docker & Kubernetes",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: <Cloud />,
      title: "AWS / Azure / GCP",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: <ShieldCheck />,
      title: "CI/CD (GitHub Actions, Jenkins)",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: <Server />,
      title: "Monitoring (Grafana, Prometheus)",
      color: "bg-indigo-100 text-indigo-500",
    },
  ];
  const devopsFeature = [
    {
      icon: <Server />,
      title: "Docker & Kubernetes",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: <Cloud />,
      title: "AWS / Azure / GCP Cloud",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: <ShieldCheck />,
      title: "CI/CD (GitHub Actions, Jenkins)",
      color: "bg-purple-100 text-purple-500",
    },
    {
      icon: <GitBranch />,
      title: "Version Control (Git, GitLab)",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: <LineChart />,
      title: "Monitoring (Grafana, Prometheus)",
      color: "bg-red-100 text-red-500",
    },
    {
      icon: <Cog />,
      title: "Automation & Infrastructure as Code",
      color: "bg-indigo-100 text-indigo-500",
    },
  ];
  const devopsReasons = [
    "End-to-end CI/CD implementation",
    "Docker & Kubernetes deployment",
    "Cloud experts (AWS, Azure, GCP)",
    "Automated monitoring & alerts",
    "Zero-downtime deployment strategy",
    "High-security infrastructure setup",
  ];
  const devopsStack = [
    "Docker",
    "AWS",
    "Azure",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "Terraform",
  ];
  return (
    <div>
      <Navbar />
      <FadeUp>
        <MobileHero
          title="DevOps & Cloud Services"
          subtitle="Automate, scale, and secure your infrastructure with our DevOps solutions — CI/CD, Docker, Kubernetes, and cloud infrastructures."
          backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=85&w=2070"
        />
      </FadeUp>
      <FadeUp>
        <Platfrom
          title="DevOps Tools & Technologies"
          features={devopsFeatures}
        />
      </FadeUp>
      <FadeUp>
        <Project
          title="DevOps Tools & Technologies"
          items={devopsFeature}
          background="bg-[#eef7ff]"
          columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        />
      </FadeUp>
      <FadeUp>
        <Mobile title="Why Choose Us for DevOps?" reasons={devopsReasons} />
      </FadeUp>
      <FadeUp>
        <TeckStack
          title="Our DevOps Tech Stack"
          stack={devopsStack}
          background="bg-[#eef7ff]"
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

export default Devops;
