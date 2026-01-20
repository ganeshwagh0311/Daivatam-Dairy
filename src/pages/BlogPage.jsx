import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaUser, FaArrowRight } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";

const blogs = [

{
  id: 3,
  title: "Ashok Kharat Appointed GM | Leadership Update at Navnath Milk",
  image: "/blog/blog4.jpg",
  author: "Quality Department",
  date: "Oct 01, 2025",
  readTime: "8 min read",
  excerpt: `Navnath Milk Collection & Chilling Centre has announced the appointment of Mr. Ashok Kharat as its General Manager (GM), with immediate effect.

Mr. Kharat brings with him over 30 years of rich experience in the dairy industry, spanning quality control, milk procurement, sales, farmer engagement, and modern feeding systems. He holds a B.Sc. degree along with an MBA, combining strong technical knowledge with professional management expertise.

Speaking on the appointment, the management of Navnath Milk said the organisation has been highly impressed by Mr. Kharat’s leadership abilities, deep understanding of the dairy value chain, and his consistent focus on farmer-centric growth.

“Ashok Kharat has delivered strong performance under diverse and often challenging conditions. Building a sustainable, quality-driven dairy ecosystem requires long-term vision, transparency with milk producers, SHGs, and stakeholders, and the courage to take difficult decisions. Mr. Kharat has demonstrated these qualities consistently throughout his career,” the management stated.

Mr. Kharat began his professional journey in the Quality Department at S.R. Thorat Milk Sangamner, where he gained strong foundational experience in milk quality and processing standards. He later worked with Prabhat Dairy in the Procurement and Sales Department, playing a key role in strengthening milk sourcing networks and market operations.

His career also includes significant roles in leading national and international dairy organisations such as Lactalis (Sales Department) and KissanKonnect (Sales), where he contributed to market expansion, customer engagement, and value-added dairy sales. Additionally, he has hands-on experience with the TMR (Total Mixed Ration) Project, supporting scientific feeding practices to improve milk productivity and farmer profitability.

“Mr. Kharat’s extensive experience across quality, procurement, sales, and nutrition projects makes him uniquely qualified to lead Navnath Milk during its current phase of growth and transformation,” the management added.

Mr. Ashok Kharat expressed his gratitude for the confidence placed in him and said he looks forward to working closely with farmers, women SHGs, and the internal team.

“I am thankful for the trust shown by the organisation. Together with our farmers and team members, we will focus on clean milk production, transparent systems, women empowerment, and sustainable dairy practices to strengthen Navnath Milk as a trusted rural institution,” he said.`
},
{
  id: 7,
  title: "Quality Management System & Food Safety Excellence at Daivatam Dairy",
  image: "/blog/blog4.jpg",
  author: "Quality Management Team",
  date: "Oct 01, 2025",
  readTime: "8 min read",
  excerpt: `We have established a robust and sustainable quality management system that ensures food safety, regulatory compliance, and consistent product quality across all operations at Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam), Takalimiya. We aim to build quality into the system, not inspect it at the end.

We begin with Quality Control and maintain it through effective monitoring of raw milk, in-process material, and finished products through defined specifications and validated testing methods. By controlling critical quality parameters at each stage, we ensure early detection and prevention of non-conformities.

Our Quality Assurance objective is to strengthen preventive and risk-based controls in alignment with FSSC 22000, ISO 22000, GMP, GHP, and FSSAI requirements. Through documented SOPs, traceability, internal audits, and CAPA systems, we ensure consistent compliance and continual improvement.

We ensure Process Control to achieve process stability and product uniformity by monitoring and controlling critical process parameters, operational PRPs, and food safety controls. Deviations are managed through structured corrective actions to protect product integrity.

Through disciplined execution, data-driven decisions, and ongoing improvement, Navnath Dudh Sankalan and Shitkaran Kendra i.e. Daivatam Dairy remains committed to delivering safe, high-quality dairy products, while continuously strengthening trust across our supply chain and with our consumers.

Mrs. Pratiksha S. Dighe  
Manager – Quality Control and Assurance  
Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam), Takalimiya`
},

{
  id: 5,
  title: "Navnath Milk Collection & Chilling Centre – Growth & Vision",
  image: "/blog/blog6.jpg",
  author: "Collection & Chilling",
  date: "Oct 08, 2025",
  category: "Collection & Chilling",
  readTime: "7 min read",
  excerpt: `Navnath Milk Collection & Chilling Centre was founded in 2000 by Mr. Dadasaheb Shivajirao Shinde with a humble beginning of just 40 litres of milk collection per day. The initiative was started with a strong commitment to support local dairy farmers by providing fair prices, organised milk collection, and reliable market access.

Over the years, Navnath Milk steadily expanded its operations by building trust among farmers, strengthening village-level milk collection systems, and focusing on hygiene and quality. Through consistent efforts in farmer engagement, timely payments, and transparent operations, the organisation witnessed gradual but sustainable growth.

From its initial collection of 40 litres, Navnath Milk has grown into a large and well-organised dairy institution, currently handling approximately 5,50,000 litres of milk per day. This remarkable growth reflects the confidence of thousands of farmers and the organisation’s commitment to quality and professionalism.

In its growth journey, Navnath Milk has continuously evolved by investing in modern chilling infrastructure, quality control systems, farmer training programs, and women-led SHG participation. Recent initiatives such as Project Navprabha mark a new phase of development, focusing on clean milk production, scientific feeding practices, digital transparency, accountability, and women empowerment.

Today, Navnath Milk stands as a symbol of rural entrepreneurship and cooperative strength—transforming from a small village-level milk collection effort into a large-scale, quality-driven dairy development organisation with a clear vision for sustainable growth and farmer prosperity.`
},
 {
  
  id: 1,
  title: "Vision for Clean & Quality Milk Procurement at Navnath Dairy",
  image: "/blog/blog2.png",
  author: "Team Quality Milk",
  date: "Sept 10, 2025",
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
  id: 2,
  title: "Subhash Vishwanath Wagh – GM Operations | Navnath Dairy Automation Launch",
  image: "/blog/blog3.png",
  author: "General Manager",
  date: "Aug 28, 2025",
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
  id: 4,
  title: "Govind Balkrishna Pande – AGM Procurement | Quality & Farmer-Centric Vision at Navnath Milk",
  image: "/blog/blog5.jpg",
  author: "Quality & Farmer-Centric",
  date: "Oct 05, 2025",
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
  id: 6,
  title: "Prajakta Gaikwad – Head HRD | Youth Empowerment & HR Vision at Daivatam",
  image: "/blog/blog2.png",
  author: "HRD Daivatam",
  date: "Sept 10, 2025",
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

{
  id: 8,
  title: "Shivaji Shinde – Leadership Vision for Building DAIVATAM as a World-Class Dairy Brand",
  image: "/blog/blog2.png",
  author: "Team Daivatam",
  date: "Sept 10, 2025",
  category: "Sustainability",
  readTime: "7 min read",
  excerpt: `Shivaji Shinde

Shivaji Shinde is a distinguished leader with over 30 years of experience in the dairy industry, spanning milk procurement, quality excellence, and production operations. As an M.Sc. (Agri.) in Dairy Science, he has held senior leadership roles with reputed organizations such as Vadilal Dairy International Ltd., Parmalat (SPA) India Ltd., Parag Milk Foods (Gowardhan), and Patanjali Ayurved Ltd., where he successfully led Maharashtra’s milk procurement operations at a large scale.

At DAIVATAM, his vision is to build a world-class, integrated dairy brand offering a comprehensive portfolio of high-quality dairy products, including milk powder, ghee, butter, whey powder, and other value-added dairy ingredients.

With a strong focus on farmer empowerment, uncompromising quality, innovation, and sustainability, he is committed to positioning DAIVATAM as a trusted Pan-India brand and expanding its footprint into global markets—meeting international standards while preserving the purity and integrity of Indian dairy traditions.

“As DAIVATAM, a world-class dairy brand is built on strong farmer partnerships and uncompromising quality.”`
}


];

const leaders = [
  "Ashok Kharat : GM – Procurement",
  "Sandip Pare : Plant-In-Charge (NDSSK)",
  "Subhash Wagh : GM – Plant Operations",
  "Govind Pandey : AGM – Procurement",
  "Mr. Dadasaheb Shivajirao Shinde",
  "Mrs. Pratiksha S. Dighe : QC & QA Manager",
  "Miss. Prajakta Gaikwad : Head-HRD, Daivatam",
  "Shivaji Shinde : Chairman"
];

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
    <div className="bg-gradient-to-b from-emerald-50 font-poppins to-white min-h-screen pt-28 pb-20 px-6 md:px-16 font-[Poppins]">

      {/* Floating Icons */}
      <div className="fixed top-20 left-10 font-poppins opacity-10 animate-float">
        <GiMilkCarton size={120} className="text-blue-400" />
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-3xl shadow-2xl p-8 mb-16 text-center"
      >
        <h1 className="text-5xl font-extrabold font-poppins ">Our Blog</h1>
        <p className="text-xl mt-2 font-poppins ">Fresh Insights & Dairy Knowledge 🥛</p>
      </motion.div>

      {/* Leader Buttons */}
      <div className="mb-14 flex font-poppins flex-wrap gap-4">
        {leaders.map((name, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className="bg-white shadow-md border text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50"
          >
            {name}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 font-poppins md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            ref={(el) => (cardRefs.current[index] = el)}
            layout
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <img src={blog.image} alt={blog.title} className="h-64 w-full object-cover" />

            <div className="p-7 font-poppins">
              <h2 className="text-2xl font-poppins font-bold text-blue-400">{blog.title}</h2>

              <div className="flex justify-between text-sm text-gray-500 my-3">
                <span className="flex items-center gap-2"><FaUser /> {blog.author}</span>
                <span className="flex items-center gap-2"><FaRegClock /> {blog.date}</span>
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
      <div className="text-center font-poppins mt-16">
        <button className="bg-gradient-to-r font-poppins from-blue-400 to-green-600 text-white font-bold px-10 py-4 rounded-full shadow-lg text-lg">
          Load More Articles
        </button>
      </div>

    </div>
  );
};

export default BlogPage;
