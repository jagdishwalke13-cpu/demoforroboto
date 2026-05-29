"use client";

import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, Play, Cpu, Brain, Printer, Plane, Zap, Building, 
  CheckCircle2, Users, BookOpen, Layers, Plus, Minus, Mail, Phone, MapPin,
  MessageSquare, Quote
} from "lucide-react";
import { useState } from "react";
import { 
  TextRotator, FloatingImage, StaggeredHeading, AnimeMagneticButton, AnimeAnimatedCard 
} from "@/components/AnimeComponents";

// Fade in up animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FFF8F1] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 z-10">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FFB547]/30 via-transparent to-transparent -z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1E293B] leading-[1.1]">
                Innovating the Future with{" "}
                <TextRotator phrases={["Robotics & Automation.", "AI & Machine Learning.", "IoT & Smart Gadgets.", "3D Printing & CAD."]} />
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
                Empowering Indian students through hands-on DIY Robotics, AI, and Tech Projects.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <AnimeMagneticButton className="bg-[#FF7A00] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FFB547] hover:shadow-xl hover:shadow-[#FF7A00]/30 transition-all duration-300 flex items-center justify-center gap-2">
                  Explore Programs <ArrowRight className="h-5 w-5" />
                </AnimeMagneticButton>
                <AnimeMagneticButton className="border-2 border-[#FF7A00] text-[#1E293B] bg-transparent px-8 py-4 rounded-full font-semibold hover:bg-[#FF7A00]/5 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="h-5 w-5 text-[#FF7A00] fill-[#FF7A00]" /> Watch Demo
                </AnimeMagneticButton>
              </motion.div>
            </motion.div>

            {/* Right: Bento Box Collage (using Anime Floating Images) */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative h-[500px] sm:h-[600px] w-full">
              <div className="absolute inset-0 bg-[#FFB547]/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
              
              <FloatingImage 
                duration={3000} delay={0}
                src="/images/indian_students_stem.png" 
                alt="Indian students with STEM kit" 
                className="absolute top-0 right-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20" 
              />
              <FloatingImage 
                duration={4000} delay={500}
                src="/images/indian_arduino_project.png" 
                alt="Arduino project" 
                className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-30" 
              />
              <FloatingImage 
                duration={3500} delay={1000}
                src="/images/indian_3d_printer.png" 
                alt="3D Printer" 
                className="absolute top-1/4 left-[10%] w-[35%] h-[35%] rounded-full overflow-hidden shadow-xl border-4 border-white z-10" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STATISTICS */}
      <section className="relative z-20 -mt-10 sm:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 sm:p-12 shadow-xl shadow-orange-500/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200/50">
              {[
                { label: "Partner Schools", value: "50+" },
                { label: "Students Guided", value: "10,000+" },
                { label: "Practical Learning", value: "100%" },
                { label: "STEM Modules", value: "20+" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-[#FF7A00] mb-2">{stat.value}</h3>
                  <p className="text-sm sm:text-base text-[#1E293B] font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT COMPANY */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
            <StaggeredHeading text="We turn curiosity into real-world creations." className="text-4xl sm:text-5xl font-extrabold text-[#1E293B]" />
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Robotonic Innovations SDDP is an educational technology company introducing a cutting-edge approach. We emphasize hands-on learning, transitioning fundamental science into practical models.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. CORE SERVICES */}
      <section className="py-24 bg-white rounded-[3rem] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="Our Robotics & Automation Solutions" className="text-4xl font-extrabold text-[#1E293B] mb-4" />
            <p className="text-lg text-gray-600">Comprehensive hands-on programs designed for the innovators of tomorrow.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "Robotics & Automation", desc: "Focus on mechanics, precision, and building physical functioning models." },
              { icon: Brain, title: "Artificial Intelligence & ML", desc: "Introduction to machine learning, AI concepts, and smart programming." },
              { icon: Printer, title: "3D Printing", desc: "Master SLA, FDM, and CAD software to print your own parts." },
              { icon: Plane, title: "Aeromodelling", desc: "Aero Star Program: Build and fly your own drones and aircraft." },
              { icon: Zap, title: "Electronics", desc: "Learn PCB making, circuit design, and professional soldering." },
              { icon: Building, title: "Atal Lab Setup", desc: "Complete school integration and Atal Tinkering Lab setups." }
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <AnimeAnimatedCard className="bg-[#FFF8F1] p-8 rounded-3xl border border-transparent hover:border-white shadow-sm h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#FF7A00]">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {[
            { title: "Hands-on Practical Science", desc: "Move beyond textbooks. We provide tangible kits so students can physically build what they learn, cementing complex scientific principles through immediate application.", img: "/images/indian_practical_science.png", reverse: false },
            { title: "Logical Thinking Development", desc: "Programming and circuit design naturally enhance problem-solving skills. Students learn to think sequentially, debug issues, and develop resilience.", img: "/images/logical_thinking.png", reverse: true },
            { title: "National Tech Fests & Science Fairs", desc: "We prepare our students to compete. Our curriculum ensures they are ready to present their innovative projects at national-level science fairs and competitions.", img: "/images/indian_tech_fest.png", reverse: false }
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
                <div className="w-12 h-1 bg-[#FF7A00] rounded-full"></div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3 text-[#1E293B] font-medium"><CheckCircle2 className="h-5 w-5 text-[#FF7A00]" /> Curriculum Aligned</li>
                  <li className="flex items-center gap-3 text-[#1E293B] font-medium"><CheckCircle2 className="h-5 w-5 text-[#FF7A00]" /> Expert Mentorship</li>
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white rounded-[3rem] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="Educational Sectors We Serve" className="text-4xl font-extrabold text-[#1E293B] mb-4" />
            <p className="text-lg text-gray-600">Tailored solutions for every level of the educational ecosystem.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "K-12 Schools", sub: "Academic Integration" },
              { icon: Building, title: "Govt Initiatives", sub: "Atal Innovation Mission" },
              { icon: Users, title: "STEM Institutes", sub: "Private Learning Centers" },
              { icon: Layers, title: "B2C Home Kits", sub: "Individual Learning" }
            ].map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <AnimeAnimatedCard className="bg-[#FFF8F1] p-8 rounded-3xl text-center border border-white shadow-sm h-full">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <ind.icon className="h-8 w-8 text-[#FF7A00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-2">{ind.title}</h3>
                  <p className="text-sm text-[#FF7A00] font-semibold uppercase tracking-wider">{ind.sub}</p>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="Student Showcase" className="text-4xl font-extrabold text-[#1E293B] mb-4" />
            <p className="text-lg text-gray-600">Real projects built by our talented innovators.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { img: "/images/indian_bluetooth_robot.png", title: "Bluetooth Controlled Robot", h: "h-[400px]" },
              { img: "/images/indian_smart_dustbin.png", title: "Smart Dustbin", h: "h-[300px]" },
              { img: "/images/indian_aeromodels.png", title: "Aeromodels", h: "h-[450px]" },
              { img: "/images/indian_surveillance_robot.png", title: "Webcam Surveillance Robot", h: "h-[350px]" }
            ].map((proj, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative group rounded-3xl overflow-hidden w-full ${proj.h} shadow-lg break-inside-avoid border-4 border-white`}>
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#1E293B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center p-6 text-center">
                  <h3 className="text-white font-bold text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{proj.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW WE WORK */}
      <section className="py-24 bg-[#1E293B] text-white rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="The Process" className="text-4xl font-extrabold mb-4" />
            <p className="text-lg text-gray-400">How we integrate innovation into the curriculum.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Program Integration", desc: "Curriculum designed specifically for grades 1-10." },
              { num: "02", title: "20-30 Sessions", desc: "Immersive hands-on sessions throughout the academic year." },
              { num: "03", title: "DIY Kits", desc: "Individual kits provided to ensure personal engagement." },
              { num: "04", title: "Competition Ready", desc: "Assessments and readiness for national tech fests." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <AnimeAnimatedCard className="relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 h-full">
                  <div className="text-5xl font-extrabold text-[#FF7A00]/20 absolute top-4 right-6">{step.num}</div>
                  <h3 className="text-xl font-bold mb-3 mt-8">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGY STACK MARQUEE */}
      <section className="py-20 border-b border-[#FFB547]/20 overflow-hidden">
        <div className="text-center mb-12">
          <StaggeredHeading text="Technologies We Teach" className="text-3xl font-extrabold text-[#1E293B]" />
        </div>
        <div className="flex w-[200%]">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex gap-6 whitespace-nowrap px-3">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-6">
                {[
                  "Python", "C++", "Arduino", "Raspberry Pi", "CAD Software", 
                  "FDM Printers", "IoT Sensors", "React"
                ].map((tag, i) => (
                  <div key={`${arrayIndex}-${i}`} className="px-8 py-4 bg-white text-[#1E293B] rounded-full font-bold text-lg border border-[#FFB547]/30 shadow-sm">
                    {tag}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. CLIENT TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="What People Say" className="text-4xl font-extrabold text-[#1E293B]" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "My child became more curious and confident after the STEM program. Building and taking home the model made learning real and exciting.", author: "Mrs. Ananya Rao", role: "Parent" },
              { text: "A well-structured STEM solution... thoughtfully aligned with the school syllabus, ensuring hands-on activities reinforce classroom concepts.", author: "Dr. Rekha Reddy", role: "Principal" }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
                <AnimeAnimatedCard className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl shadow-orange-500/5 relative border border-gray-100 h-full">
                  <Quote className="absolute top-8 right-8 h-20 w-20 text-[#FFF8F1] z-0" />
                  <p className="text-xl text-gray-700 leading-relaxed relative z-10 font-medium italic mb-8">"{t.text}"</p>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-bold text-xl">{t.author.charAt(5)}</div>
                    <div>
                      <h4 className="font-bold text-[#1E293B]">{t.author}</h4>
                      <p className="text-[#FF7A00] font-semibold text-sm">{t.role}</p>
                    </div>
                  </div>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. LATEST NEWS */}
      <section className="py-24 bg-white rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <StaggeredHeading text="Latest Insights" className="text-4xl font-extrabold text-[#1E293B] mb-4" />
              <p className="text-lg text-gray-600">News and updates from our innovation hubs.</p>
            </div>
            <AnimeMagneticButton className="hidden sm:flex items-center gap-2 text-[#FF7A00] font-bold hover:gap-4 transition-all">
              View All <ArrowRight className="h-5 w-5"/>
            </AnimeMagneticButton>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Highlights from Robotics Fest 2024", img: "/images/indian_robotics_fest.png" },
              { title: "How 3D Printing is Changing Indian Classrooms", img: "/images/indian_3d_printing_classroom.png" },
              { title: "Setting up an Atal Lab: A Complete Guide", img: "/images/indian_atal_lab.png" }
            ].map((blog, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <AnimeAnimatedCard className="group cursor-pointer">
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] mb-6 shadow-md border-4 border-[#FFF8F1]">
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-[#FF7A00] transition-colors">{blog.title}</h3>
                  <p className="text-gray-500 mt-2 font-medium">Read Article →</p>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="Frequently Asked Questions" className="text-4xl font-extrabold text-[#1E293B]" />
          </div>

          <div className="space-y-4">
            {[
              { q: "What age group is this for?", a: "Our core programs are seamlessly integrated for students in Grades 1-10." },
              { q: "Do students get to keep the models?", a: "Yes! We provide individual DIY kits that students build and take home to continue learning." },
              { q: "How do we setup a lab in our school?", a: "We provide end-to-end consulting, equipment procurement, and training for Atal Tinkering Labs and private STEM centers." }
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-sm border border-[#FFB547]/20 overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none">
                  <span className="font-bold text-lg text-[#1E293B]">{faq.q}</span>
                  {openFaq === i ? <Minus className="h-5 w-5 text-[#FF7A00] flex-shrink-0" /> : <Plus className="h-5 w-5 text-[#FF7A00] flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 text-gray-600 font-medium">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CONTACT US */}
      <section className="py-24 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
              <StaggeredHeading text="Call us for a free demo on Innovation and Technology." className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] leading-tight" />
              <motion.div variants={fadeInUp} className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF8F1] flex items-center justify-center"><MapPin className="h-5 w-5 text-[#FF7A00]" /></div>
                  <p className="text-lg text-gray-700 font-medium">Ramamurthy Nagar, Bangalore 560016</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF8F1] flex items-center justify-center"><Phone className="h-5 w-5 text-[#FF7A00]" /></div>
                  <p className="text-lg text-gray-700 font-medium">9731554348</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF8F1] flex items-center justify-center"><Mail className="h-5 w-5 text-[#FF7A00]" /></div>
                  <p className="text-lg text-gray-700 font-medium break-all">Robotonicinnovationsddp@gmail.com</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-[#FFF8F1] p-8 sm:p-12 rounded-3xl border border-white shadow-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1E293B] mb-2">Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1E293B] mb-2">Role</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none" placeholder="Principal / Parent" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1E293B] mb-2">Email</label>
                    <input type="email" className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1E293B] mb-2">Phone</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1E293B] mb-2">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <AnimeMagneticButton className="w-full bg-[#FF7A00] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#FFB547] hover:shadow-xl hover:shadow-[#FF7A00]/30 transition-all flex items-center justify-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Book Free Demo
                </AnimeMagneticButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
