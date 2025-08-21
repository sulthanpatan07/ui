import React from "react";
import { 
  BookOpen, Scissors, Utensils, Brush, Baby, Palette, 
  ShoppingBag, Dumbbell, Laptop, Camera 
} from "lucide-react";

function ExploreSkills() {
  const categories = [
    { 
      name: "Tailoring / Stitching", 
      icon: <Scissors size={40} />, 
      color: "bg-pink-100",
      desc: "Blouse stitching, dress alterations"
    },
    { 
      name: "Tutoring / Tuition", 
      icon: <BookOpen size={40} />, 
      color: "bg-blue-100",
      desc: "School subjects, spoken English coaching"
    },
    { 
      name: "Cooking / Catering", 
      icon: <Utensils size={40} />, 
      color: "bg-yellow-100",
      desc: "Homemade tiffins, lunch boxes, party orders"
    },
    { 
      name: "Beauty / Mehendi Services", 
      icon: <Brush size={40} />, 
      color: "bg-green-100",
      desc: "Bridal makeup, mehendi, hair styling"
    },
    { 
      name: "Fitness / Yoga", 
      icon: <Dumbbell size={40} />, 
      color: "bg-indigo-100",
      desc: "Yoga sessions, personal fitness training"
    },
    { 
      name: "Baby Care / Babysitting", 
      icon: <Baby size={40} />, 
      color: "bg-purple-100",
      desc: "Taking care of kids at home"
    },
    { 
      name: "Handicrafts / Home Decoration", 
      icon: <Palette size={40} />, 
      color: "bg-orange-100",
      desc: "Handmade gifts, art & craft, decor items"
    },
    { 
      name: "Home-made Products", 
      icon: <ShoppingBag size={40} />, 
      color: "bg-red-100",
      desc: "Candles, soaps, bags, accessories"
    },
    { 
      name: "Remote Work / Freelancing", 
      icon: <Laptop size={40} />, 
      color: "bg-teal-100",
      desc: "Data entry, freelance writing, social media"
    },
    { 
      name: "Photography & Videography", 
      icon: <Camera size={40} />, 
      color: "bg-gray-200",
      desc: "Events, portraits, reels, short films"
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 p-10">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer ${cat.color}`}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              {cat.icon}
              <h3 className="text-xl font-semibold">{cat.name}</h3>
              <p className="text-gray-600 text-sm">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreSkills;
