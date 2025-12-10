// TakafulInfo.tsx
import React from "react";

const TakafulInfo: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto mt-12 mb-12    px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8 bg-[#e8f1ff] ">
      
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center text-[#1d3b78] mb-8">
        What is Takaful?
      </h2>

      {/* Paragraphs */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Islamic finance has developed mainly in two directions namely Islamic banking
        and Islamic insurance (Takaful). While information about Islamic banking is
        being increasingly disseminated, features, models and structures of Takaful
        are little known particularly in Pakistan. Purpose of this brief article is to
        describe main features and models of Takaful system operating in various parts
        of the world.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        All human beings are invariably exposed to the possibility of meeting
        catastrophes and disasters giving rise to misfortunes and sufferings such as
        death, loss of limbs, accident, destruction of business or wealth, etc.
        Notwithstanding the belief of all Muslims in Qadha-o-Qadr, Islam provides that
        one must find ways and means to avoid such catastrophes and disasters wherever
        possible, and to minimize his or his family's financial losses should such
        events occur.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Different views have been expressed about the status of conventional insurance
        from the point of view of Islam. An overwhelming majority of the Shariah
        scholars believe that it is unlawful due to involvement of Riba, Maisir and
        Gharar. Takaful is based on social solidarity and mutual indemnification.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Takaful is not a new concept. It is rooted in the system of ‘Aaqilah’, which
        was an arrangement of mutual help in the time of the Holy Prophet (pbuh).
      </p>

    </div>
  );
};

export default TakafulInfo;
