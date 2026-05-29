"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowUpRight } from "lucide-react";

/* =========================================
   ADVANCED UI COMPONENTS
========================================= */

// Magnetic Button
const MagneticButton = ({ children, className = "", type = "button" }: { children: React.ReactNode, className?: string, type?: "button" | "submit" | "reset" }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative z-50 ${className}`}
    >
      {children}
    </motion.button>
  );
};

/* =========================================
   PAGE COMPONENT
========================================= */

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-[#FFF8F1] min-h-screen text-[#1E293B]">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#FF7A00] origin-left z-[100]" style={{ scaleX }} />

      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-[#FFB547]/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/60 backdrop-blur-2xl border border-white rounded-[3rem] shadow-2xl p-8 md:p-16 overflow-hidden relative"
          >
            {/* Inner ambient light */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FFB547]/20 via-transparent to-transparent -z-10 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              
              {/* Left Side: Contact Info */}
              <div className="space-y-12">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1E293B] mb-6 leading-tight tracking-tight">Let's Innovate<br/><span className="text-[#FF7A00]">Together.</span></h1>
                  <p className="text-xl text-gray-600 font-medium">Ready to bring next-generation STEM learning to your students? Get in touch with us today.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E293B] mb-1">Headquarters</h4>
                      <p className="text-gray-600 font-medium leading-relaxed max-w-xs">#253 8th Cross near Sri Doddamma Devi Temple, Ramamurthy Nagar, Bangalore 560016</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <Mail className="w-6 h-6 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E293B] mb-1">Email Us</h4>
                      <a href="mailto:Robotonicinnovationsddp@gmail.com" className="text-gray-600 font-medium hover:text-[#FF7A00] transition-colors break-all">Robotonicinnovationsddp@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <Phone className="w-6 h-6 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E293B] mb-1">Call Us</h4>
                      <a href="tel:9731554348" className="text-gray-600 font-medium hover:text-[#FF7A00] transition-colors">9731554348</a>
                    </div>
                  </div>
                </div>

                {/* Stylized Minimalist Map Placeholder */}
                <div className="h-48 rounded-3xl bg-[#1E293B] relative overflow-hidden group border border-[#1E293B]/10">
                  <div className="absolute inset-0 bg-[url('/images/indian_robotics_fest.png')] opacity-40 mix-blend-overlay grayscale object-cover"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 group-hover:bg-[#FF7A00] group-hover:border-[#FF7A00] transition-all cursor-pointer hover:scale-105">
                      View on Maps <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Inquiry Form */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#1E293B]">Request a Free Demo</h3>
                  <p className="text-gray-500 mt-2 font-medium">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form 
                  className="space-y-6" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    // BACKEND LOGIC PLACEHOLDER:
                    alert("Form submitted! A notification email has been sent to Robotonicinnovationsddp@gmail.com (Simulated)");
                  }}
                >
                  <div className="relative">
                    <input type="text" id="name" className="peer w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-8 pb-3 outline-none transition-all" placeholder=" " required />
                    <label htmlFor="name" className="absolute left-5 top-4 text-gray-400 font-medium text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#FF7A00]">Full Name</label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <input type="email" id="email" className="peer w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-8 pb-3 outline-none transition-all" placeholder=" " required />
                      <label htmlFor="email" className="absolute left-5 top-4 text-gray-400 font-medium text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#FF7A00]">Email Address</label>
                    </div>
                    <div className="relative">
                      <input type="tel" id="phone" className="peer w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-8 pb-3 outline-none transition-all" placeholder=" " required />
                      <label htmlFor="phone" className="absolute left-5 top-4 text-gray-400 font-medium text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#FF7A00]">Phone Number</label>
                    </div>
                  </div>

                  <div className="relative">
                    <select id="role" className="w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-7 pb-3 outline-none transition-all font-medium appearance-none" required defaultValue="">
                      <option value="" disabled>Select your role</option>
                      <option value="parent">Parent</option>
                      <option value="school">School Representative</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                    <label htmlFor="role" className="absolute left-5 top-3 text-[#FF7A00] font-medium text-xs uppercase tracking-wider">I am a</label>
                  </div>

                  <div className="relative">
                    <textarea id="message" rows={4} className="peer w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-8 pb-3 outline-none transition-all resize-none" placeholder=" " required></textarea>
                    <label htmlFor="message" className="absolute left-5 top-4 text-gray-400 font-medium text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#FF7A00]">How can we help you?</label>
                  </div>

                  <MagneticButton type="submit" className="w-full bg-[#FF7A00] text-white py-5 rounded-full font-bold text-lg shadow-xl shadow-[#FF7A00]/30 hover:bg-[#FFB547] transition-colors flex items-center justify-center gap-2 group mt-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Request a Free Demo
                  </MagneticButton>
                </form>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
