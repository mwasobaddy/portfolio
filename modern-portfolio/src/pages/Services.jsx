import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  // Services data
  const servicesData = [
    {
      id: 1,
      title: "Full-Stack Development",
      icon: "💻",
      description: "End-to-end web application development with seamless integration between front-end and back-end systems.",
      features: [
        "Custom web application development",
        "API development and integration",
        "Database design and optimization",
        "Full system architecture"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Front-End Development",
      icon: "🎨",
      description: "Creating responsive, interactive, and visually appealing user interfaces with modern frameworks and technologies.",
      features: [
        "Responsive website development",
        "Interactive UI components",
        "Frontend framework expertise (React, Vue)",
        "Performance optimization"
      ],
      color: "purple"
    },
    {
      id: 3,
      title: "Back-End Development",
      icon: "⚙️",
      description: "Building robust server-side applications, RESTful APIs, and efficient database solutions to power your digital products.",
      features: [
        "Server-side application logic",
        "Database management",
        "API development",
        "Server configuration and maintenance"
      ],
      color: "green"
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: "🎭",
      description: "Designing intuitive and engaging user experiences that balance aesthetic appeal with functional efficiency.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design",
        "Usability testing"
      ],
      color: "orange"
    },
    {
      id: 5,
      title: "Mobile App Development",
      icon: "📱",
      description: "Creating native and cross-platform mobile applications that deliver a seamless user experience across all devices.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "App store deployment",
        "Mobile UI/UX design"
      ],
      color: "red"
    },
    {
      id: 6,
      title: "Web Maintenance & Support",
      icon: "🔧",
      description: "Ongoing maintenance, updates, and support to ensure your digital products remain secure, up-to-date, and performing optimally.",
      features: [
        "Regular updates and security patches",
        "Performance monitoring",
        "Content updates",
        "Technical support and troubleshooting"
      ],
      color: "teal"
    }
  ];

  // Process flow data
  const processSteps = [
    {
      number: 1,
      title: "Discovery & Requirements",
      description: "I begin by understanding your business needs, objectives, and the problems you're trying to solve."
    },
    {
      number: 2,
      title: "Planning & Strategy",
      description: "Based on the requirements, I create a detailed plan outlining the solution architecture, technologies, and timeline."
    },
    {
      number: 3,
      title: "Design & Development",
      description: "I design and develop the solution, keeping you informed and involved throughout the process."
    },
    {
      number: 4,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures that the final product is bug-free, secure, and meets all requirements."
    },
    {
      number: 5,
      title: "Deployment & Launch",
      description: "The solution is deployed to production and launched, with careful monitoring to ensure smooth operations."
    },
    {
      number: 6,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance keep your solution running smoothly and up-to-date."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
              My <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Comprehensive solutions to help your business thrive in the digital landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How I <span className="text-primary">Work</span>
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              My structured approach ensures successful project delivery and client satisfaction.
            </motion.p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Process steps */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Process step number */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white font-bold text-xl items-center justify-center z-10">
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-1/2 p-6">
                      <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                        <div className="md:hidden flex w-12 h-12 rounded-full bg-primary text-white font-bold text-xl items-center justify-center mb-4 mx-auto">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty space for alignment in timeline */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose <span className="text-primary">Me?</span></h2>
              <p className="text-gray-600 mb-8">
                With over 7 years of experience in web development and design, I bring a unique blend of technical expertise and creative thinking to every project. Here's what sets me apart:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expertise & Experience",
                    description: "Years of hands-on experience across various technologies and industries."
                  },
                  {
                    title: "Quality & Attention to Detail",
                    description: "Commitment to delivering high-quality, polished products that exceed expectations."
                  },
                  {
                    title: "Clear Communication",
                    description: "Regular updates and transparent communication throughout the project lifecycle."
                  },
                  {
                    title: "Timely Delivery",
                    description: "Respect for deadlines and efficient project management to ensure on-time delivery."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="mt-1">
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                        ✓
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 border-t-4 border-primary">
                <h3 className="text-2xl font-bold mb-4 text-center">Get a Free Consultation</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Have a project in mind? Let's discuss how I can help bring your ideas to life.
                </p>
                
                <div className="space-y-4 mb-6">
                  {[
                    "✅ No obligation discussion",
                    "✅ Project scope and requirements analysis",
                    "✅ Technology stack recommendations",
                    "✅ Initial timeline and budget estimates"
                  ].map((benefit, index) => (
                    <div key={index} className="text-gray-700">
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="btn-primary w-full text-center">
                  Schedule Consultation
                </Link>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-secondary rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Here are answers to some common questions about my services and process.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with clients remotely?",
                answer: "Yes, I work with clients globally and have established effective remote collaboration processes. Regular video calls, clear communication channels, and project management tools ensure smooth project execution regardless of location."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in modern web technologies including React, Node.js, Express, MongoDB, and various CSS frameworks like Tailwind. I'm constantly learning and adapting to new technologies to provide the best solutions for my clients."
              },
              {
                question: "How do you handle project changes?",
                answer: "I understand that requirements can evolve during a project. I follow an agile approach with regular check-ins to accommodate changes. Major scope changes may require timeline and budget adjustments, which I'll discuss transparently."
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes, I offer various maintenance packages to keep your website or application secure, up-to-date, and performing optimally. We can discuss these options based on your specific needs."
              },
              {
                question: "How do you determine project pricing?",
                answer: "Project pricing depends on scope, complexity, timeline, and specific requirements. I provide detailed quotes after our initial consultation and requirements gathering. I believe in transparent pricing with no hidden costs."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let's discuss your project needs and how I can help bring your vision to reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link 
              to="/contact" 
              className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => {
  const getColorClass = (color) => {
    const colorClasses = {
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      green: "bg-green-500",
      orange: "bg-orange-500",
      red: "bg-red-500",
      teal: "bg-teal-500"
    };
    
    return colorClasses[color] || "bg-primary";
  };
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary h-full flex flex-col"
    >
      <div className="p-6">
        <div className={`w-16 h-16 rounded-lg ${getColorClass(service.color)} flex items-center justify-center text-white text-3xl mb-6`}>
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
      </div>
      
      <div className="border-t border-gray-100 p-6 mt-auto">
        <h4 className="font-semibold mb-4">What's Included:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Services;