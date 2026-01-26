import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaUser, FaArrowRight } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const blogs = [
  {
  id: 5,
    title: "Mr.Ashok Kharat   General Manager / Procurement / Navnath Dairy",
  image: "/blog/B5.png",
  author: "Collection & Chilling",
  date: "Jan 01, 2026",
  readTime: "7 min read",
  excerpt: `Navnath Milk Collection & Chilling Centre has announced the appointment of Mr. Ashok Kharat as its General Manager (GM) with immediate effect. With over 30 years of experience across quality control, milk procurement, sales, and farmer engagement, Mr. Kharat brings strong technical and managerial expertise to the organisation.

The management expressed confidence in his farmer-centric leadership approach and stated that his experience will play a key role in strengthening clean milk production, transparency, women empowerment, and sustainable dairy practices at Navnath Milk.`
},
{
  id: 2,
  title: "Subhash Vishwanath Wagh – GM Operations | Navnath Dairy Automation Launch",
  image: "/blog/B2.png",
  author: "General Manager",
  date: "Jan 01, 2026",
  readTime: "6 min read",
  excerpt: `Subhash Vishwanath Wagh  
General Manager – Operations  
Dairy Technologist (Dairy Diploma)  
27 Years of Experience with Schreiber Dynamix, PMD & Lactalis (Prabhat)

We are delighted to announce the launch of our state-of-the-art, fully automated dairy production facility at Takalimiya (Rahuri) under Navnath Dairy (Daivatam).

Commitment to Excellence  
With decades of expertise in the dairy industry, we bring world-class processes and innovation to deliver high-quality dairy products to our customers.

Our facility is designed to uphold the highest standards of food safety and hygiene, strictly complying with both national and international food safety regulations.

Food safety is non-negotiable for us, and every stage of production is governed by rigorous protocols.

Safety First  
We are embedding a strong human safety culture, with the clear goal of achieving Zero Accidents.

The plant fully complies with all legal, statutory, and mandatory requirements for food manufacturing.

People safety is our foremost priority — for our employees, our community, and our organization.

At Navnath Dairy, we are proud to combine innovation, automation, and responsibility to serve our customers with products they can trust.`
},

{
  id: 8,
  title: "Mr. Sachin Sukumar Bulle – Engineering Leadership & Automation Excellence at Daivatam Dairy",
  image: "/blog/B8.png",
  author: "Engineering & Operations Team",
  date: "Jan 01, 2026",
  readTime: "9 min read",
  excerpt: `
Engineering Leadership & Plant Excellence  

Mr. Sachin Sukumar Bulle, General Manager – Engineering, brings over 25 years of rich experience in the dairy industry, supported by a Diploma in Mechanical Engineering. His professional journey includes leadership roles at renowned organizations such as Warana Dairy, Rajarambapu Patil Co-operative Dairy, Godrej CDPL, and Shri Dutt India Ltd (Dairy Division).

Under his engineering leadership, Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam) proudly launched a state-of-the-art, fully automated dairy production facility at Takalimiya (Rahuri) under the brand name “Daivatam.” The facility reflects a strong commitment to operational excellence, automation, and global best practices in dairy processing.

With over two decades of expertise, Mr. Bulle focuses on implementing world-class engineering processes to ensure uninterrupted plant operations, optimal asset utilization, and high standards of food safety, hygiene, and regulatory compliance. Food safety remains non-negotiable, with every production stage governed by rigorous national and international safety protocols.

Safety First Culture  

A strong human safety culture is embedded across the plant, with a clear objective of achieving Zero Accidents. The facility fully complies with all legal, statutory, and mandatory requirements for food manufacturing. People safety remains the foremost priority — safeguarding employees, the community, and the organization.

Engineering & Process Excellence  

As General Manager – Engineering, Mr. Bulle oversees all engineering and technical functions including plant design, utilities, processing equipment, automation, maintenance, energy management, and project execution. His department supports critical dairy processes such as milk reception, pasteurization, chilling, packaging, and processing of by-products including cream, butter, ghee, skim milk powder, and other value-added derivatives.

Special emphasis is placed on CIP systems, HVAC, refrigeration, boilers, effluent treatment plants (ETP), and utilities optimization. The engineering team works closely with quality, production, procurement, and regulatory teams to ensure strict compliance with FSSAI, ISO, HACCP, and GMP requirements.

Driven by reliability, food safety, energy efficiency, automation, and continuous improvement, the engineering strategy at Daivatam Dairy enables sustainable growth, operational excellence, and the delivery of safe, high-quality dairy products that customers can trust.
`
},

{
  id: 8,
  title: "Shivaji Shinde – Leadership Vision for Building DAIVATAM as a World-Class Dairy Brand",
  image: "/blog/B8.png",
  author: "Team Daivatam",
  date: "Jan 01, 2026",
  category: "Sustainability",
  readTime: "7 min read",
  excerpt: `Shivaji Shinde

Shivaji Shinde is a distinguished leader with over 30 years of experience in the dairy industry, spanning milk procurement, quality excellence, and production operations. As an M.Sc. (Agri.) in Dairy Science, he has held senior leadership roles with reputed organizations such as Vadilal Dairy International Ltd., Parmalat (SPA) India Ltd., Parag Milk Foods (Gowardhan), and Patanjali Ayurved Ltd., where he successfully led Maharashtra’s milk procurement operations at a large scale.

At DAIVATAM, his vision is to build a world-class, integrated dairy brand offering a comprehensive portfolio of high-quality dairy products, including milk powder, ghee, butter, whey powder, and other value-added dairy ingredients.

With a strong focus on farmer empowerment, uncompromising quality, innovation, and sustainability, he is committed to positioning DAIVATAM as a trusted Pan-India brand and expanding its footprint into global markets—meeting international standards while preserving the purity and integrity of Indian dairy traditions.

“As DAIVATAM, a world-class dairy brand is built on strong farmer partnerships and uncompromising quality.”`
},
{
  id: 4,
  title: "Govind Balkrishna Pande – AGM Procurement | Quality & Farmer-Centric Vision at Navnath Milk",
  image: "/blog/B4.png",
  author: "Quality & Farmer-Centric",
  date: "Jan 01, 2026",
  category: "Quality",
  readTime: "6 min read",
  excerpt: `Govind Balkrishna Pande, Assistant General Manager, holds an M.Sc. in Mathematics and brings over 15 years of experience across the dairy, FMCG, and agro-based sectors. He has worked with reputed organizations such as Igloo Dairy (Mumbai), Prabhat Dairy, Parag Milk Foods Ltd. (Gowardhan), Daivat Dairy & Agro Farms, and Patanjali Ayurved Ltd.

Throughout his career, he has actively contributed to building farmer-centric milk procurement systems, strengthening grassroots milk quality, and promoting ethical, transparent, and sustainable dairy practices.

Pande strongly believes that Navnath Milk Procurement is not merely a collection system, but a trust-based partnership with farmers. According to him, “Navnath Milk represents the hard work, dignity, and commitment of rural farmers. Every drop of milk collected must reflect fairness in pricing, transparency in measurement, and respect for the farmer’s effort.”

He emphasizes that Navnath’s procurement model should focus on clean milk production, timely payments, women-led participation, and continuous farmer education—ensuring that quality begins at the farm level and value flows back to the producer.

He envisions Navnath Milk as a symbol of purity, responsibility, and rural pride, where quality excellence goes hand in hand with farmer welfare, women empowerment, and community development.

According to him, the true progress of the dairy sector lies in combining high-quality milk procurement with social responsibility, knowledge sharing, and inclusive growth—creating a sustainable future for farming communities.`
},
 { 
  id: 1,
    title: "Mr. Sandeep Ramdas Pare Plant In-Charge - NDSSK",
  image: "/blog/B1.png",
  author: "Team Quality Milk",
  date: "Jan 01, 2026",
  readTime: "7 min read",
  excerpt: `Vision for Clean and Quality Milk Procurement at Navnath Dudh Sankalan and Shitkaran Kendra

          With over 23 years of experience in the dairy sector, I have been directly involved in establishing and strengthening milk procurement systems focused on quality, hygiene, and compliance. My journey began in October 2003 with Hindustan Co-op, followed by the joint milk procurement operations of Dynamics Company and Hindustan Agro at the Rahuri taluka level, during a period when structured clean milk practices were limited.

          At Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam), Takalimiya, milk procurement is managed through a system-driven approach, ensuring that quality is controlled from the farm gate to plant reception. Continuous farmer engagement and training have enabled the implementation of clean milk production practices, resulting in the consistent collection at a single Milk Collection Centre (MCC) of approximately 90,000 litres of fresh milk per day, with a planned and scalable procurement model targeting a capacity of 3 to 4 lakh litres per day.

          All incoming milk is subjected to defined quality evaluation protocols, including organoleptic assessment, temperature control, acidity checks, compositional analysis (fat and SNF), and adulteration screening, along with advanced analysis such as Gas Chromatographic techniques and FTIR technology. Procurement operations strictly follow Good Hygiene Practices (GHP), Good Manufacturing Practices (GMP), and laboratory control principles in alignment with FSSAI and applicable food safety requirements.

          Our vision is to strengthen preventive quality control at the procurement level, minimize variability in raw milk quality, and ensure full traceability and compliance across the milk supply chain. Navnath Dairy remains committed to delivering safe, compliant, and high-quality raw milk as the foundation for consistent dairy product excellence.

         Mr. Sandeep Ramdas Pare  
        Plant In-Charge – NDSSK  
        B.Sc. Chemistry  
        23 Years of experience with Schreiber Dynamix, NDSSK`
},
{
  id: 7,
    title: "Mrs. Pratiksha S. Dighe  - Quality Management System & Food Safety Excellence at Daivatam Dairy",
  image: "/blog/B7.png",
  author: "Quality Management Team",
  date: "Jan 01, 2026",
  readTime: "8 min read",
  excerpt: `
Quality Control and Assurance  
Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam), Takalimiya .We have established a robust and sustainable quality management system that ensures food safety, regulatory compliance, and consistent product quality across all operations at Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam), Takalimiya. We aim to build quality into the system, not inspect it at the end.

We begin with Quality Control and maintain it through effective monitoring of raw milk, in-process material, and finished products through defined specifications and validated testing methods. By controlling critical quality parameters at each stage, we ensure early detection and prevention of non-conformities.

Our Quality Assurance objective is to strengthen preventive and risk-based controls in alignment with FSSC 22000, ISO 22000, GMP, GHP, and FSSAI requirements. Through documented SOPs, traceability, internal audits, and CAPA systems, we ensure consistent compliance and continual improvement.

We ensure Process Control to achieve process stability and product uniformity by monitoring and controlling critical process parameters, operational PRPs, and food safety controls. Deviations are managed through structured corrective actions to protect product integrity.

Through disciplined execution, data-driven decisions, and ongoing improvement, Navnath Dudh Sankalan and Shitkaran Kendra i.e. Daivatam Dairy remains committed to delivering safe, high-quality dairy products, while continuously strengthening trust across our supply chain and with our consumers.

`
},
{
  id: 6,
  title: "Prajakta Gaikwad – Head HRD | Youth Empowerment & HR Vision at Daivatam",
  image: "/blog/B6.png",
  author: "HRD Daivatam",
  date: "Jan 01, 2026",
  readTime: "7 min read",
  excerpt: `Miss. Prajakta Gaikwad  
Head – HRD, Daivatam  
Qualification – B.Tech (Food Technology), MBA (Human Resource Management)

Swami Vivekananda said, “Give me a hundred energetic young men and I shall transform India.”

India’s youth are not just future leaders but today’s workforce. From an HRD standpoint, integrating young professionals into both management and operational roles is a strategic approach to harnessing their energy, creativity, and innovation—transforming potential into measurable performance.

At Daivatam, this philosophy translates into structured talent acquisition, skill development programs, leadership grooming, and employee engagement initiatives that prepare the workforce for present and future organizational challenges.

By empowering youth, the company not only strengthens productivity and operational excellence but also fosters a culture of continuous learning, accountability, and ownership.

Further, providing meaningful employment to rural India, empowering women, strengthening the rural economy through effective livestock management, and ensuring an integrated farm-to-fork approach reflects a holistic HRD vision where social responsibility and sustainable growth are embedded into workforce development.

The focus on CSR initiatives ensures that organizational growth goes hand-in-hand with societal impact, creating a workforce that is skilled, motivated, and aligned with long-term business and community objectives.

As we invest in youth, nurture talent, and embrace responsibility, we live by the words of Swami Vivekananda:  
“Arise, awake, and stop not until the goal is reached.”`
},
];
// const leaders = [
//   "Ashok Kharat : GM – Procurement",
//   "Mrs. Pratiksha S. Dighe : QC & QA Manager",
//   "Sandip Pare : Plant-In-Charge (NDSSK)",
//   "Subhash Wagh : GM – Plant Operations",
//   "Govind Pandey : AGM – Procurement",
//   // "Mr. Dadasaheb Shivajirao Shinde",
//   "Miss. Prajakta Gaikwad : Head-HRD, Daivatam",
//   "Shivaji Shinde"
// ]
const BlogPage = () => {
  const cardRefs = useRef([]);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };
  const scrollToCard = (index) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 pt-20 font-poppins">
<Helmet>
  <title>Dairy Blogs & Articles | Daivatam Dairy</title>
  <meta
    name="description"
    content="Read informative blogs about dairy farming, milk benefits and quality practices."
  />
  <link rel="canonical" href="https://daivatamdairy.com/blogs" />
</Helmet>
      {/* Floating Icons */}
      <div className="fixed top-20 left-10 font-poppins opacity-10 animate-float">
  <GiMilkCarton size={120} className="text-blue-400 font-poppins" />
</div>
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
<h1>Milk Powder & Butter Exporter from India</h1>
</div>
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-2xl p-18 mb-16  text-center  w-screen  mx-6 md:-mx-1 "
>
  <p className="text-5xl font-extrabold font-poppins">Our Blog</p>
  <p className="text-xl mt-2 font-poppins">Fresh Insights & Dairy Knowledge 🥛</p>
</motion.div>
      {/* Leader Buttons */}
      {/* <div className="mb-14 flex font-poppins flex-wrap gap-4">
        {leaders.map((name, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className="bg-white shadow-md border font-poppins text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50"
          >
            {name}
          </button>
        ))}
      </div> */}
      {/* Blog Cards */}
      <div className="grid grid-cols-1 font-poppins md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            ref={(el) => (cardRefs.current[index] = el)}
            layout
            className="bg-white font-poppins rounded-3xl shadow-xl overflow-hidden"
          >
            <img src={blog.image} alt={blog.title} className="h-64 font-poppins w-full object-cover" />
            <div className="p-7 font-poppins">
              <p className="text-2xl font-poppins font-bold text-blue-400">{blog.title}</p>
              <div className="flex justify-between text-sm text-gray-500 my-3">
                <p className="flex items-center font-poppins gap-2"><FaUser /> {blog.author}</p>
                <p className="flex items-center font-poppins gap-2"><FaRegClock /> {blog.date}</p>
              </div>
              <p className={expandedCard === blog.id ? "" : "line-clamp-3 text-gray-600"}>
                {blog.excerpt}
              </p>
              <button
                onClick={() => toggleExpand(blog.id)}
                className="mt-4 flex items-center gap-2 text-blue-400 font-bold"
              >
                {expandedCard === blog.id ? "Read Less" : "Read More"} <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* ✅ Load More Button – correctly at bottom */}
      <div className="text-center font-poppins mt-16 mb-8">
  <a
    href="/about"
    className="inline-block bg-gradient-to-r font-poppins from-blue-400 to-green-600 text-white font-bold px-10 py-4 rounded-full shadow-lg text-lg"
  >
    Load More Articles
  </a>
</div>
    </div>
  );
};

export default BlogPage;
