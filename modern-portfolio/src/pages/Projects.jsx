import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Sample project data
  const projectsData = [
    {
      id: 1,
      title: "KeNHA Innovation Hub",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/src/assets/images/projects/kenha.jpg",
      description: "A cutting-edge innovation hub designed for Kenya National Highways Authority to foster creativity and streamline internal processes.",
      client: "Kenya National Highways Authority",
      link: "#"
    },
    {
      id: 2,
      title: "CSEA Online Store",
      category: "E-commerce",
      tags: ["React", "Express", "PostgreSQL"],
      image: "/src/assets/images/projects/csea.jpg",
      description: "A comprehensive e-commerce platform for Classic Steel East Africa to showcase their products and reach a wider customer base.",
      client: "Classic Steel East Africa",
      link: "#"
    },
    {
      id: 3,
      title: "Task Master Pro",
      category: "Mobile App",
      tags: ["React Native", "Firebase", "Redux"],
      image: "/src/assets/images/projects/taskmaster.jpg",
      description: "A productivity mobile app designed to help users manage tasks, track progress, and improve time management.",
      client: "Personal Project",
      link: "#"
    },
    {
      id: 4,
      title: "Real Estate Dashboard",
      category: "UI/UX Design",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      image: "/src/assets/images/projects/realestate.jpg",
      description: "A modern UI/UX design for a real estate management dashboard that provides comprehensive analytics and property management tools.",
      client: "Confidential",
      link: "#"
    },
    {
      id: 5,
      title: "Health Tracker",
      category: "Mobile App",
      tags: ["Flutter", "Firebase", "Health API"],
      image: "/src/assets/images/projects/healthtracker.jpg",
      description: "A health tracking mobile application that helps users monitor their fitness goals, nutrition, and overall wellness.",
      client: "Fitness First",
      link: "#"
    },
    {
      id: 6,
      title: "Financial Analytics Platform",
      category: "Web Development",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      image: "/src/assets/images/projects/finance.jpg",
      description: "A comprehensive financial analytics platform that provides real-time insights, reporting, and visualization tools.",
      client: "Investment Partners Ltd.",
      link: "#"
    }
  ];

  // State for filtering projects
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Categories for filter
  const categories = ['All', 'Web Development', 'Mobile App', 'UI/UX Design', 'E-commerce'];

  // Initial filter setup and search functionality
  useEffect(() => {
    // First filter by category
    let filtered = projectsData;
    if (activeFilter !== 'All') {
      filtered = projectsData.filter(project => project.category === activeFilter);
    }
    
    // Then filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter, searchTerm]);

  // Handle filter click
  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My <span className="text-primary">Projects</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Explore my portfolio of web development, mobile apps, and UI/UX design projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container mx-auto">
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            {/* Filter Categories */}
            <motion.div 
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleFilterClick(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeFilter === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Search Bar */}
            <motion.div 
              className="w-full md:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-600">No projects found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gray-50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects.
              Let's discuss how I can help bring your ideas to life.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/600x400?text=${project.title.replace(' ', '+')}`;
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-gray-200 text-sm">
              {project.category} | Client: {project.client}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-secondary text-primary text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 mb-6">
          {project.description}
        </p>
        <a 
          href={project.link} 
          className="text-primary font-medium flex items-center hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;