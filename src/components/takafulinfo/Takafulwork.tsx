import React from "react";

const TakafulWorking = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 space-y-8 ">

      {/* --- Heading --- */}
      <h2 className="text-3xl font-bold text-center">How It Works</h2>

      {/* --- Video Section --- */}
      <div className="w-full flex justify-center">
        <iframe
          className="w-full h-64 md:h-96 rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/tuSS61eKC48"
          title="How Takaful Works Video"
          allowFullScreen
        />
      </div>

      {/* --- Text Section --- */}
      <div className="space-y-4 text-lg leading-relaxed text-gray-700 ">
        <p>
          <strong>Contributions:</strong> Participants contribute a specific amount of money
          into a shared <em>"Participants' Takaful Fund"</em> based on their required coverage
          and circumstances.
        </p>

        <p>
          <strong>Management:</strong> A Takaful operator manages and administers this fund
          on behalf of the participants, typically charging a pre-agreed fee (known as
          <em> Wakala </em>) for their services.
        </p>

        <p>
          <strong>Investments:</strong> The pooled funds are invested in Shariah-compliant
          assets and ventures that avoid interest, alcohol, gambling, and other prohibited
          activities.
        </p>

        <p>
          <strong>Claims:</strong> In the event of a loss, the eligible claim is paid to the
          affected participant directly from the Takaful fund.
        </p>
      </div>
    </section>
  );
};

export default TakafulWorking;
