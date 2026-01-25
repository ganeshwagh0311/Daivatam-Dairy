import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  ExternalLink,
  Briefcase,
  GraduationCap,
  Clock,
  Users,
  Filter,
} from "lucide-react";
import "@fontsource/poppins";

const CareerPage = () => {
  const navigate = useNavigate();
  const googleForm =
    "https://docs.google.com/forms/d/1578rPrCGBXBdfZ7wfox8vQYMr_7Y3Ie6NTvQVTxogDA/preview";

  const jobs = [
    {
      title: "Microbiologist",
      category: "Quality",
      education:
        "B.Sc. / M.Sc. in Microbiology, Biotechnology, or Dairy Microbiology",
      responsibilities:
        "Conduct microbiological testing of milk, water, and finished products. Perform tests for pathogens, support food safety implementation, and maintain hygiene records.",
      experience: "1–2 years of relevant experience preferred",
      positions: "03 Positions",
    },
    {
      title: "Chemist",
      category: "Quality",
      education:
        "B.Sc. / M.Sc. in Chemistry, Food Technology, or Dairy Science/Technology",
      responsibilities:
        "Perform routine chemical analysis of milk, finished products, and water. Ensure compliance with BIS/FSSAI standards and maintain accurate records.",
      experience:
        "1–2 years of experience in dairy/food lab preferred (freshers may also apply)",
      positions: "06 Positions",
    },
    {
      title: "Shift In-Charge",
      category: "Operations",
      education: "IDD / B.Tech Dairy / B.Tech Food",
      responsibilities:
        "Monitor production processes including milk receiving, processing, and packaging. Maintain quality standards, ensure hygiene, and resolve operational issues.",
      experience: "5–10 years in milk processing or milk powder plant",
      positions: "06 Positions",
    },
    {
      title: "Maintenance Technician / Fitter / Electrician / Instrumentation / Refrigeration",
      category: "Technical",
      education:
        "ITI / Diploma / Degree in Mechanical, Electrical, Instrumentation, or relevant trade",
      responsibilities:
        "Perform preventive and breakdown maintenance of dairy plant equipment. Support production by minimizing downtime and ensuring safety standards.",
      experience:
        "2–5 years of experience in dairy/food processing plant maintenance preferred",
      positions: "04 of Each Trade",
    },
    {
      title: "Process Section Operator",
      category: "Technical",
      education:
        "ITI / Diploma in Dairy Technology, Mechanical, or Food Technology",
      responsibilities:
        "Operate and monitor pasteurizers, separators, and process lines. Maintain hygiene and record data according to SOP.",
      experience: "3–5 years in dairy/food industry preferred",
      positions: "04 Positions",
    },
    {
      title: "Evaporator & Dryer Operator",
      category: "Technical",
      education:
        "ITI / Diploma in Dairy Technology, Mechanical, or Chemical Engineering",
      responsibilities:
        "Operate SCADA-based evaporators and dryers for milk powder. Maintain cleanliness and assist in troubleshooting.",
      experience: "3–5 years in dairy/food industry preferred",
      positions: "06 Positions",
    },
    {
      title: "CIP System Operator",
      category: "Technical",
      education:
        "ITI / Diploma in Dairy Technology, Food Technology, or related field",
      responsibilities:
        "Operate and monitor Cleaning-In-Place systems. Maintain hygiene, handle cleaning chemicals, and ensure proper sanitization.",
      experience:
        "2–3 years in dairy industry (SCADA/PLC experience preferred)",
      positions: "03 Positions",
    },
    {
      title: "CBM (Continuous Butter Making) Machine Operator / Butter Section Operator",
      category: "Technical",
      education:
        "ITI / Diploma in Dairy Technology, Mechanical, Electrical, or relevant field",
      responsibilities:
        "Operate and monitor CBM machine. Ensure butter quality, perform in-process checks, and maintain equipment.",
      experience:
        "1–2 years in dairy processing (butter/CBM operation preferred)",
      positions: "03 Positions",
    },
    {
      title: "RMRD Dock Operator (Raw Milk Reception Dock)",
      category: "Operations",
      education:
        "ITI / Diploma in Dairy Technology, Food Technology, or related field",
      responsibilities:
        "Receive and weigh milk tankers, collect samples, operate pumps, and maintain dock hygiene and records.",
      experience: "1–2 years in dairy preferred (freshers can also apply)",
      positions: "03 Positions",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => setFade(true), 120);
    return () => clearTimeout(t);
  }, [filter]);

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((j) => j.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
    hover: {
      rotateX: 2,
      rotateY: 4,
      z: 50,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-gray-900 mt-20 font-poppins">
<Helmet>
  <title>Careers at Daivatam Dairy | Join Our Team</title>
  <meta
    name="description"
    content="Explore career opportunities at Daivatam Dairy. Join our team and grow with a leading fresh milk supplier committed to quality and innovation."
  />
  <link rel="canonical" href="https://daivatamdairy.com/career" />
</Helmet>

<div style={{
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: "0"
  }}>
  <title>Careers at Daivatam Dairy</title>
</div>
      {/* HERO SECTION (UNCHANGED) */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600  text-white">

  <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-20 md:pb-6 overflow-visible">

    <div className="pointer-events-none">
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-10 w-28 h-28 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute right-10 top-20 w-24 h-24 rounded-full bg-white/10 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/3 bottom-2 w-20 h-20 rounded-full bg-white/10 blur-2xl"
      />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-10 text-center"
    >
      <p className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold tracking-wide drop-shadow-lg">
        Daivatam Dairy,     
      </p>
       <p className="text-3xl md:text-3xl lg:text-3xl font-poppins font-bold tracking-wide drop-shadow-lg">
       Takalimiya Rahuri    
      </p>

      <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto font-poppins text-white/90">
        “We are expanding! Build your career with the growing leader in the dairy Industry”
      </p>

      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="inline-block mt-6 px-6 py-2 font-poppins rounded-xl bg-white text-[#072827] font-semibold shadow-lg"
      >
        WE ARE HIRING 🚀
      </motion.div>
    </motion.div>
  </div>

</header>

      {/* FILTERS */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="flex gap-3 flex-wrap">
            {["All", "Technical", "Operations", "Quality"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium ${
                  filter === cat
                    ? "bg-[#0077B6] text-white shadow-lg"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                <Filter className="w-4 h-4" />
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* JOB GRID */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate={fade ? "show" : "hidden"}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredJobs.map((job, i) => (
            <motion.div
              key={job.title + i}
              variants={cardVariant}
              whileHover="hover"
              className="relative flex h-full"
            >
              {/* CARD */}
              <div className="relative rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-md w-full flex flex-col">

                {/* BLURRED CONTENT */}
                <div className="relative z-10 p-6 flex-1 flex flex-col filter blur-sm pointer-events-none select-none">
                  <div className="bg-[#E0F7FA] rounded-xl p-4 mb-4">
                    <h3 className="text-lg font-semibold text-[#0077B6]">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                      <Users className="w-4 h-4 text-[#00A86B]" />
                      <span>{job.positions}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm">{job.education}</p>
                    <p className="text-sm">{job.responsibilities}</p>
                    <p className="text-sm">{job.experience}</p>
                  </div>
                </div>

                {/* OVERLAY TEXT */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/60 backdrop-blur-sm">
                  <span className="text-xl font-bold text-[#0077B6]">
                    Hiring Coming Soon
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold shadow-md"
          >
            Enquire Now
          </motion.button>
        </div>
      </main>
       <footer className="bg-white/50 py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-3xl md:text-2xl lg:text-2xl font-poppins font-bold tracking-wide  text-[#0077B6]">Want to apply directly?</p>
            <p className="text-sm text-gray-700">Send your resume to hr@daivatamdairy.com or use the form above.</p>
          </div>
          <a
            href={googleForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00A86B] text-[#fff] px-4 py-2 rounded-full font-semibold shadow"
          >
            Open Application Form
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CareerPage;
