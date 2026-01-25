import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaUser,
  FaHome,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaListAlt,
  FaPen, // ✅ added
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("product");

  // ✅ NEW: state for the "Other" custom inquiry input
  const [customInquiry, setCustomInquiry] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Submit
const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSubmitting) return; 

  setIsSubmitting(true); 

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxBSzQmr1tgjSlIaLcapXKSWh1hNEG8waavLCQL3LRUAQTedT_rTaQ_3bs9BFfA7UTFIQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          category: inquiryType,
          email,
          phone,
          address,
          message,
        }),
      }
    );

    alert("Message sent successfully ✅");

    // ✅ FORM CLEAR
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
    setInquiryType("product");
    setCustomInquiry("");

  } catch (error) {
    alert("Something went wrong ❌");
  } finally {

    setIsSubmitting(false);
  }
};

  const inquiryTypes = [
    { value: "product", label: "Product Inquiry", icon: "🛒" },
    { value: "feedback", label: "Company Feedback", icon: "💬" },
    { value: "career", label: "Career Inquiry", icon: "💼" }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
        @keyframes float-gentle { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-15px);} }
        @keyframes pulse-ring { 0%{transform:scale(0.8);opacity:1;} 100%{transform:scale(1.5);opacity:0;} }
        @keyframes shimmer { 0%{background-position:-1000px 0;} 100%{background-position:1000px 0;} }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s cubic-bezier(0,0,0.2,1) infinite; }
        .animate-shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); background-size: 1000px 100%; animation: shimmer 3s infinite; }
      `}</style>
<Helmet>
  <title>Contact Daivatam Dairy | Milk Supplier</title>
  <meta
    name="description"
    content="Contact Daivatam Dairy for fresh milk supply, partnership and business enquiries."
  />
  <link rel="canonical" href="https://daivatamdairy.com/contact" />
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
  <h1>Contact Daivatam Dairy – Fresh Dairy Products Supplier</h1>

</div>
      <div className="bg-gradient-to-br font-poppins from-orange-50 via-white to-green-50 min-h-screen pb-16 pt-20 overflow-hidden">
        <div className="fixed top-20 font-poppins left-10 opacity-10 animate-float-gentle pointer-events-none">
          <FaEnvelope size={150} className="text-green-500" />
        </div>
        <div className="fixed bottom-20 font-poppins right-20 opacity-10 pointer-events-none animate-float-gentle">
          <FaPhone size={120} className="text-blue-500" />
        </div>

        <section className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-10 overflow-hidden">
          <motion.p
            className="text-4xl md:text-5xl font-poppins  lg:text-6xl font-poppins font-bold tracking-wide drop-shadow-lg text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto font-poppins text-center text-lg mt-6 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We'd love to hear from you! Reach out for any queries, B2B partnerships, or product information.
          </motion.p>
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 md:p-10 border border-white/30 relative overflow-hidden"
          >
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-t-3xl"
            />
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-poppins md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8"
            >
              Send Us a Message
            </motion.p>

            <div className="space-y-6">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">Select Inquiry Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {inquiryTypes.map((type) => (
                    <motion.button
                      key={type.value}
                      type="button"
                      onClick={() => setInquiryType(type.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        inquiryType === type.value
                          ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white border-transparent shadow-lg'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="text-xs font-semibold">{type.label}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <FaUser className="text-yellow-500 text-xl" />
                </motion.div>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-500/20 rounded-full animate-pulse-ring" />
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-12 p-4 w-full rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 shadow-md transition-all duration-300 bg-white/80"
                />
              </div>

              {/* Dropdown Field — uses existing state "inquiryType" */}
              <div className="relative mb-6 group">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                >
                  <FaListAlt className="text-green-500 text-xl" />
                </motion.div>

                {/* Pulsing background circle */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500/20 rounded-full animate-pulse-ring" />

                {/* SELECT DROPDOWN */}
                <select
                  required
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="pl-12 p-4 w-full rounded-xl border-2 border-gray-200 
                             focus:border-green-500 focus:ring-4 focus:ring-green-500/20
                             shadow-md transition-all duration-300 bg-white/80 text-gray-700"
                >
                  {/* DEFAULT OPTION */}
                  <option value="">Select Inquiry Type</option>

                  {/* AVAILABLE OPTIONS */}
                  <option value="product">Product Inquiry</option>
                  <option value="feedback">Company Feedback</option>
                  <option value="career">Career Inquiry</option>

                  {/* NEW → USER CAN TYPE CUSTOM INQUIRY */}
                  <option value="other">Other</option>
                </select>
              </div>

              {/* CUSTOM INPUT BOX IF "OTHER" SELECTED */}
              {inquiryType === "other" && (
                <div className="relative mb-6 group">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                  >
                    <FaPen className="text-blue-500 text-xl" />
                  </motion.div>

                  <div className="absolute left-3 top-1/2 -translate-y-1/2
                                  w-8 h-8 bg-blue-500/20 rounded-full animate-pulse-ring" />

                  <input
                    required
                    type="text"
                    placeholder="Type your inquiry here..."
                    value={customInquiry}
                    onChange={(e) => setCustomInquiry(e.target.value)}
                    className="pl-12 p-4 w-full rounded-xl border-2 border-gray-200 
                               focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                               shadow-md transition-all duration-300 bg-white/80"
                  />
                </div>
              )}

              <div className="relative group">
                <motion.div whileHover={{ scale: 1.2, rotate: -10 }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <FaEnvelope className="text-blue-500 text-xl" />
                </motion.div>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse-ring" />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 p-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 shadow-md transition-all duration-300 bg-white/80"
                />
              </div>

              <div className="relative group">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <FaPhone className="text-green-500 text-xl" />
                </motion.div>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500/20 rounded-full animate-pulse-ring" />
                <input
                  required
                  type="tel"
                  maxLength={10}
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-12 p-4 w-full rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 shadow-md transition-all duration-300 bg-white/80"
                />
              </div>

              <div className="relative group">
                <motion.div whileHover={{ scale: 1.2, rotate: -10 }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <FaHome className="text-red-500 text-xl" />
                </motion.div>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-500/20 rounded-full animate-pulse-ring" />
                <input
                  type="text"
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-12 p-4 w-full rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 shadow-md transition-all duration-300 bg-white/80"
                />
              </div>

              <div className="relative group">
                <motion.div whileHover={{ scale: 1.2, rotate: -10 }} className="absolute left-4 top-4 z-10">
                  <FaEnvelope className="text-yellow-500 text-xl" />
                </motion.div>
                <div className="absolute left-3 top-4 w-8 h-8 bg-yellow-500/20 rounded-full animate-pulse-ring" />
                <textarea
                  required
                  rows="5"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="pl-12 font-poppins pt-4 p-4 w-full rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 shadow-md transition-all duration-300 bg-white/80 resize-none"
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0], boxShadow: "0 20px 40px rgba(116,198,157,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-2xl shadow-lg relative overflow-hidden group"
              >
                <p className="absolute font-poppins inset-0 animate-shimmer" />
                <p className="relative font-poppins z-10 flex items-center font-poppins justify-center gap-2">
                  Send Message
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </p>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              <p className="text-2xl font-poppins font-black mb-6 relative z-10">Contact Information</p>
              <div className="space-y-4 relative z-10">
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="bg-white/20 p-3 rounded-full">
                    <FaPhone className="text-2xl" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-poppins opacity-90">Call Us</p>
                    <p className="text-lg font-poppins font-bold">+91 7066511414</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="bg-white/20 p-3 rounded-full">
                    <FaEnvelope className="text-2xl" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-poppins opacity-90">Email Us</p>
                    <p className="text-lg font-poppins font-bold">Sales@daivatamdairy.com</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="bg-white/20 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-2xl" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-poppins opacity-90">Visit Us</p>
                    <p className="text-sm font-poppins font-bold">A/P – Rahuri, Tal. Rahuri, Dist. Ahmednagar, Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                  <FaClock className="text-4xl" />
                </motion.div>
                <p className="text-2xl font-poppins font-black">Business Hours</p>
              </div>
              <div className="space-y-2 font-poppins relative z-10">
                <div className="flex font-poppins justify-between">
                  <p className="font-semibold font-poppins">Monday - Saturday</p>
                  <p>8:00 AM - 8:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full" />
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <FaHeadset className="text-4xl" />
                </motion.div>
                <p className="text-2xl font-poppins font-black">Support</p>
              </div>
              <p className="relative font-poppins z-10 opacity-90">Our support team is available 24/7 for any queries. We respond quickly and professionally.</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black font-poppins text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-8"
          >
            Find Us Here
          </motion.p>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-4 left-4 w-8 h-8 bg-green-500 rounded-full blur-md opacity-50 z-10" />
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full blur-md opacity-50 z-10" />
            <iframe
              title="Daivatam Dairy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.0095732753157!2d74.65952967506155!3d19.439095581841677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc930004cee473%3A0x1bad78d865be45b4!2z4KSF4KSC4KSc4KSo4KWAIOClsuCkl-CljeCksOCliywg4KSo4KS14KSo4KS-4KSlIOCkpuClgeCkpw!5e1!3m2!1sen!2sin!4v1757958833163!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="rounded-3xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <motion.p 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-4xl font-black font-poppins bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6"
          >
            Connect With Us
          </motion.p>
        <div className="flex justify-center gap-8 text-4xl mb-8">
  {[
    { Icon: FaInstagram, color: "text-pink-500", hoverColor: "hover:text-pink-600", link: "https://www.instagram.com/daivatamdairy/" },
    { Icon: FaFacebook, color: "text-blue-600", hoverColor: "hover:text-blue-700", link: "https://www.facebook.com/profile.php?id=61584060655508" },
    { Icon: FaLinkedin, color: "text-blue-800", hoverColor: "hover:text-blue-900", link: "https://www.linkedin.com/in/daivatam-dairy-049348392" },
    { Icon: FaWhatsapp, color: "text-green-600", hoverColor: "hover:text-green-700", link: "https://wa.me/917066511414" }, 
  ].map(({ Icon, color, hoverColor, link }, index) => (
    <motion.p
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.3, rotate: [0, -10, 10, -10, 0], y: -10 }}
      className={`${color} ${hoverColor}font-poppins transition-colors cursor-pointer`}
    >
      <Icon />
    </motion.p>
  ))}
</div>

         <motion.a
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  whileHover={{
    scale: 1.1,
    rotate: [0, -2, 2, -2, 0],
    boxShadow: "0 20px 40px rgba(255, 209, 102, 0.5)",
  }}
  whileTap={{ scale: 0.95 }}
  href="#contact"
  className="inline-block px-12 py-4 bg-gradient-to-r font-poppins from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full rounded-full shadow-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 relative overflow-hidden group"
>
  <p className="absolute inset-0 animate-shimmer" />
  <p className="relative z-10 flex items-center justify-center gap-2">
    B2B Enquiry
    <motion.span
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ⭐
    </motion.span>
  </p>
</motion.a>

        </motion.div>
      </div>
    </>
  );
};

export default Contact;
