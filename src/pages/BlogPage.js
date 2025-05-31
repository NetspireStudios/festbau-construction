import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaClock, FaTag } from 'react-icons/fa';
import './PageStyles.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Latest Trends in Commercial Construction for 2025",
      excerpt: "Discover the innovative approaches and cutting-edge technologies that are reshaping the commercial construction landscape this year.",
      content: "The commercial construction industry is evolving rapidly with new technologies and sustainable practices taking center stage. From AI-powered project management to eco-friendly building materials...",
      author: "Sarah Johnson",
      publishDate: "2025-05-28",
      readTime: "5 min read",
      category: "Commercial Construction",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Building Materials: The Future of Construction",
      excerpt: "Explore how eco-friendly materials are not just good for the environment but also cost-effective for modern construction projects.",
      content: "Sustainability in construction is no longer optional—it's essential. Modern builders are increasingly turning to materials that reduce environmental impact while maintaining durability...",
      author: "Michael Chen",
      publishDate: "2025-05-25",
      readTime: "7 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Project Management Best Practices in Construction",
      excerpt: "Learn the essential strategies that keep construction projects on time, within budget, and exceeding quality expectations.",
      content: "Effective project management is the backbone of successful construction projects. From initial planning to final delivery, proper management ensures smooth execution...",
      author: "David Rodriguez",
      publishDate: "2025-05-22",
      readTime: "6 min read",
      category: "Project Management",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Residential Renovation Trends: Transforming Homes",
      excerpt: "Discover the latest design trends and renovation techniques that are turning ordinary houses into extraordinary homes.",
      content: "Home renovation is experiencing a renaissance as homeowners seek to create spaces that reflect their lifestyle and values. Modern renovation trends focus on...",
      author: "Emma Thompson",
      publishDate: "2025-05-20",
      readTime: "4 min read",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Smart Technology Integration in Modern Buildings",
      excerpt: "How IoT, automation, and smart systems are revolutionizing the way we design and construct buildings.",
      content: "The integration of smart technology in construction is creating buildings that are more efficient, secure, and comfortable. From automated lighting systems to...",
      author: "Alex Kim",
      publishDate: "2025-05-18",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "The Art of Deck Construction: Beauty Meets Function",
      excerpt: "Creating outdoor living spaces that seamlessly blend aesthetic appeal with practical functionality.",
      content: "Deck construction has evolved from simple wooden platforms to sophisticated outdoor living spaces. Modern deck design considers not just structural integrity but...",
      author: "Jennifer Walsh",
      publishDate: "2025-05-15",
      readTime: "5 min read",
      category: "Additional Services",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Commercial Construction", "Residential", "Project Management", "Sustainability", "Technology", "Additional Services"];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      className="page-container blog-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <motion.div
            className="blog-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="blog-hero-title">
              Construction <span className="gold-text">Insights</span>
            </h1>
            <p className="blog-hero-subtitle">
              Stay informed with the latest trends, tips, and innovations in the construction industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          {/* Category Filter */}
          <motion.div
            className="blog-categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`category-btn ${index === 0 ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Post */}
          <motion.div
            className="featured-post"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="featured-post-image">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} />
              <div className="featured-badge">Featured</div>
            </div>
            <div className="featured-post-content">
              <div className="post-meta">
                <span className="category-tag">
                  <FaTag /> {blogPosts[0].category}
                </span>
                <span className="publish-date">
                  <FaCalendar /> {new Date(blogPosts[0].publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h2 className="featured-post-title">{blogPosts[0].title}</h2>
              <p className="featured-post-excerpt">{blogPosts[0].excerpt}</p>
              <div className="post-footer">
                <div className="author-info">
                  <FaUser />
                  <span>By {blogPosts[0].author}</span>
                </div>
                <div className="read-time">
                  <FaClock />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <motion.button
                  className="read-more-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            className="blog-posts-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-post-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-overlay">
                    <motion.button
                      className="read-post-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Read Article
                    </motion.button>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="category-tag">
                      <FaTag /> {post.category}
                    </span>
                    <span className="publish-date">
                      <FaCalendar /> {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="author-info">
                      <FaUser />
                      <span>{post.author}</span>
                    </div>
                    <div className="read-time">
                      <FaClock />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            className="load-more-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button
              className="load-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage; 