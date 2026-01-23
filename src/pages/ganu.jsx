<div className="grid grid-cols-1 font-poppins md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
  {blogs.map((blog, index) => (
    <motion.div
      key={blog.id}
      ref={(el) => (cardRefs.current[index] = el)}
      layout
      className="bg-white font-poppins rounded-3xl shadow-xl overflow-hidden flex flex-col h-full"
    >
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="h-64 w-full object-cover"
      />

      {/* Content */}
      <div className="p-7 font-poppins flex flex-col flex-grow">
        {/* Title */}
        <p className="text-2xl font-poppins font-bold text-blue-400">
          {blog.title}
        </p>

        {/* Meta */}
        <div className="flex justify-between text-sm text-gray-500 my-3">
          <p className="flex items-center gap-2">
            <FaUser /> {blog.author}
          </p>
          <p className="flex items-center gap-2">
            <FaRegClock /> {blog.date}
          </p>
        </div>

        {/* Excerpt */}
        <p
          className={`text-gray-600 ${
            expandedCard === blog.id ? "" : "line-clamp-3"
          }`}
        >
          {blog.excerpt}
        </p>

        {/* Button always at bottom */}
        <button
          onClick={() => toggleExpand(blog.id)}
          className="mt-auto pt-4 flex items-center gap-2 text-blue-400 font-bold"
        >
          {expandedCard === blog.id ? "Read Less" : "Read More"} <FaArrowRight />
        </button>
      </div>
    </motion.div>
  ))}
</div>