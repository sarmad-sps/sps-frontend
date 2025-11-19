import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const InsuranceDetailsSection = () => {
  const sidebarItems = [
    { name: "Car Insurance", active: false },
    { name: "Bike Insurance", active: false },
    { name: "Travel Insurance", active: false },
    // { name: "Home Insurance", active: false },
    { name: "Health Insurance", active: false },
  ];

  const mainFeatures = [
    {
      icon: CheckCircle,
      title: "International Plans",
      color: "text-[#1894a4]",
    },
    {
      icon: CheckCircle,
      title: "Student Study Plans",
      color: "text-[#1894a4]",
    },
    { icon: CheckCircle, title: "Donation", color: "text-[#1894a4]" },
    {
      icon: CheckCircle,
      title: "Specialized Investigations",
      color: "text-[#1894a4]",
    },
  ];

  const processFeatures = [
    {
      icon: "/insurancedetailssectionvector1.png",
      title: "Fast & Easy Process",
      description:
        "There are many not of age of quis available the simply free text available in the market today you can use them maority.",
      bgColor: "bg-[#E8F8FA]",
      iconColor: "text-[#1894a4]",
    },
    {
      icon: "/insurancedetailssectionvextor2.png",
      title: "Quick Claim Handle",
      description:
        "There are many not of age of quis available the simply free text available in the market today you can use them maority.",
      bgColor: "bg-[#E8F8FA]",
      iconColor: "text-[#1894a4]",
    },
    {
      icon: "/insurancedetailssectiomvector3.png",
      title: "Save Your Money",
      description:
        "There are many not of age of quis available the simply free text available in the market today you can use them maority.",
      bgColor: "bg-[#E8F8FA]",
      iconColor: "text-[#1894a4]",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18"> 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            {/* Insurance Types List */}
            <div className="bg-[#f3f5f9] rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`w-full flex items-center justify-between p-3 rounded transition-all ${
                        item.active
                          ? "bg-gradient-to-r from-[#1894a4] to-[#0d7a87] text-white font-semibold"
                          : "bg-gradient-to-r from-[#f0f3f7] to-[#ffffff] text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Talk to Insurance Agent */}
            <div className="bg-[#1A3970] rounded-lg overflow-hidden relative">
              {/* Background Image */}
              <img
                src="/Insuarncedetailssectionimage2.png"
                alt="Insurance agent background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A3970] to-[#2A4D8F] opacity-95"></div>

            <a href="tel:+130088090" className="relative z-10 p-8 text-center text-white">
              <div className="relative z-10 p-8 text-center text-white">
                <div className="w-16 h-16 bg-[#1894a4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Talk to our insurance agent
                </h3>
                <p className="text-lg font-bold mb-1">+13 (00) 88-090</p>
                <p className="text-sm text-white/80">Call Us Get Expert</p>
              </div>
            </a>
            </div>

            {/* Bottom Image Card */}
            <div className="mt-6 rounded-lg overflow-hidden relative h-64">
              <img
                src="/Insurancedetailssectionimage3.png"
                alt="Happy couple"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-[#0CE0FF] to-[#015fc9] text-white text-center py-4 px-8">
                <h3 className="text-lg font-bold mb-1">Hope for the Best,</h3>
                <p className="text-base font-semibold">Prepare for the Worst</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-9">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden mb-8">
              <img
                src="/Insurancedetailssectionimage1.png"
                alt="Insurance consultation"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Eligible Ages */}
            <div className="mb-8">
              {/* Ages Card with Background */}
              <div className="bg-[#f2f5f9] rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">
                      Eligibility ages
                    </h3>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-gray-600 mr-2">
                      Minimum ages:
                    </span>
                    <span className="text-[#1894a4] font-bold text-lg">
                      10 Years
                    </span>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="text-sm text-gray-600 mr-2">
                      Maximum ages:
                    </span>
                    <span className="text-[#1894a4] font-bold text-lg">
                      65 Years
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Outside the Card */}
              <p className="text-gray-600 text-sm leading-relaxed">
                Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                port lacus quis enim var sed efficitur turpis gilla sed sit amet
                finibus eros. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

            {/* Biophilia Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Biophilia is the idea that humans possess an innate tendency to
                seek connections with nature and other forms translates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When ask unknown printer took a galley of type aawer awtnd
                scrambled it to make a type specimen book. It has the ells essr
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Aelltes
                port lacus quis enim var sed efficitur turpis gilla sed amet
                finibus eros. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

            {/* Main Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Main features
              </h3>
              <p className="text-gray-600 mb-6">
                There are many variations of passages of available but the
                majority have suffered alteration in suring form by injected hum
                developed words which don't slightly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {mainFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    <span className="text-gray-700 font-medium">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Features Cards */}
            <div className="grid grid-cols-1 gap-4">
              {processFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className={`w-6 h-6 ${feature.iconColor}`}
                    />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceDetailsSection;