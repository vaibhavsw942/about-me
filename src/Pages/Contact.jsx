import React, { useEffect } from "react";
import { Share2 } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#E5E5E5] to-[#A3A3A3]"
        >
          <span
            style={{
              color: "#E5E5E5",
              backgroundImage:
                "linear-gradient(45deg, #E5E5E5 10%, #A3A3A3 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Got a question or an opportunity? Reach out to me on any of the
          platforms below.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
        id="Contact"
      >
        <div className="container px-[1%] grid grid-cols-1 max-w-3xl mx-auto gap-12">
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#E5E5E5]/10"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#E5E5E5] to-[#A3A3A3]">
                  Get in Touch
                </h2>
                <p className="text-gray-400">
                  Have something to discuss? Message me on LinkedIn or
                  Instagram, or send an email.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#E5E5E5] opacity-50" />
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
