import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

function ContactUs() {
  return (
    <section className="min-h-screen bg-gray-50 p-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Get in <span className="text-pink-600">Touch</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <Mail className="text-pink-600" />
              <h4 className="font-semibold text-gray-800">Email</h4>
            </div>
            <p className="text-gray-700">support@skill2earn.com</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <Phone className="text-pink-600" />
              <h4 className="font-semibold text-gray-800">Phone</h4>
            </div>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <MapPin className="text-pink-600" />
              <h4 className="font-semibold text-gray-800">Address</h4>
            </div>
            <p className="text-gray-700">123, Women Street, City, India</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 justify-center md:justify-start">
            <Facebook className="text-pink-600 cursor-pointer hover:scale-110 transition-transform" />
            <Instagram className="text-pink-600 cursor-pointer hover:scale-110 transition-transform" />
            <Linkedin className="text-pink-600 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
