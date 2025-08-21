import React from "react";

function CommunitySection() {
  const features = [
    { title: "Earn Money", color: "bg-red-500" },
    { title: "Showcase Skills", color: "bg-green-500" },
    { title: "Local Reach", color: "bg-blue-500" },
  ];

  return (
    <section className="relative bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Empowering Women through Skills
        </h2>

        {/* Center Circular Image with Gradient Overlay */}
        <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
          <img
            src="/assets/community.jpg" // 👉 public/assets/community.jpg lo image petti pettandi
            alt="Community Work"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay (Stylish soft look) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30"></div>
        </div>

        {/* Orbiting Feature Circles */}
        <div className="absolute inset-0 flex justify-center items-center">
          {features.map((item, index) => (
            <div
              key={index}
              className={`absolute w-28 h-28 flex items-center justify-center text-center 
                          rounded-full text-white font-semibold shadow-lg ${item.color}`}
              style={{
                transform: `rotate(${index * 120}deg) translate(14rem) rotate(-${
                  index * 120
                }deg)`,
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
