import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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

const DecorativeCircle = ({ size, color, top, left, delay }) => (
  <motion.div
    className={`absolute rounded-full border-4`}
    style={{ 
      width: size, 
      height: size, 
      borderColor: color,
      top: `${top}%`, 
      left: `${left}%`, 
      zIndex: 0 
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: 1, 
      opacity: 0.8,
      transition: { 
        delay, 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }}
  />
);

const Home = () => {
  const typewriterRef = useRef(null);
  const roles = ['Full-stack Developer', 'Web Developer', 'UI/UX Designer'];
  
  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const typeWriter = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (currentCharIndex > 0) {
          typewriterRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
          setTimeout(typeWriter, typingSpeed / 2);
        } else {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          setTimeout(typeWriter, 500);
        }
      } else {
        if (currentCharIndex < currentRole.length) {
          typewriterRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
          setTimeout(typeWriter, typingSpeed);
        } else {
          setTimeout(() => {
            isDeleting = true;
            typeWriter();
          }, 1500);
        }
      }
    };
    
    typeWriter();
  }, []);
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="flex flex-col"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  The best <span ref={typewriterRef} className="text-primary"></span>
                </h1>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4">Hey! I Am Kelvin Mwangi</h2>
              </motion.div>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 mb-8 text-lg"
              >
                Product designer and digital creative director working in design field for 7 years, 
                specializing in user interface design and development of robust web applications.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary">
                  Hire Me
                </Link>
                <a href="#" className="btn-outline">
                  Download CV
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-full max-w-md">
                <img 
                  src="/src/assets/images/hero.png" 
                  alt="Kelvin Mwangi" 
                  className="w-full h-auto relative z-10"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x800?text=Portfolio+Image';
                  }}
                />
                
                {/* Decorative background element */}
                <motion.div
                  className="absolute w-4/5 h-4/5 bg-secondary rounded-full -z-[1]"
                  style={{ top: '10%', right: '0%' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.8, 
                    duration: 0.6, 
                    type: "spring" 
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative circles */}
        <DecorativeCircle size="100px" color="#ff7300" top={15} left={10} delay={1.2} />
        <DecorativeCircle size="50px" color="black" top={25} left={85} delay={1.4} />
        <DecorativeCircle size="75px" color="#4BB3FD" top={75} left={15} delay={1.6} />
        <DecorativeCircle size="120px" color="green" top={65} left={80} delay={1.8} />
      </section>

      {/* Clients Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Clients I Have <span className="text-primary">Worked With</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-48 bg-white flex items-center justify-center p-4">
                <img 
                  src="/src/assets/images/KeNHA-Logo.jpeg" 
                  alt="Kenya National Highways Authority" 
                  className="h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x200?text=KeNHA';
                  }}
                />
              </div>
              <div className="p-6 bg-secondary">
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Kenya <span className="text-primary">National Highways</span> Authority
                </h3>
                <p className="text-gray-600">
                  As a trusted partner, I played a pivotal role in developing a cutting-edge innovation hub and a streamlined internal car booking system for Kenya National Highways Authority. These solutions were designed to enhance efficiency, drive innovation, and optimize resource utilization within the organization.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-48 bg-white flex items-center justify-center p-4">
                <img 
                  src="/src/assets/images/CSEA-Logo.jpeg" 
                  alt="Classic Steel East Africa" 
                  className="h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x200?text=CSEA';
                  }}
                />
              </div>
              <div className="p-6 bg-secondary">
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Classic <span className="text-primary">Steel East</span> Africa
                </h3>
                <p className="text-gray-600">
                  At Classic Steel East Africa, I played a key role in developing a dynamic online presence that helped them attract new clients and expand their market reach. The website I designed not only showcases their impressive range of products but also provides a seamless user experience for potential customers.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-primary">
              Hire Me
            </Link>
            <Link to="/projects" className="btn-outline">
              View More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-secondary border-2 border-primary rounded-xl overflow-hidden h-[500px] p-4">
                <div className="overflow-auto h-full pr-2 space-y-4">
                  {[
                    {
                      title: "Full-Stack Developer",
                      description: "As a Full-Stack developer, I'm a versatile digital craftsman, skilled to build complete web applications from the ground up, handling everything from the user interface to the server-side logic."
                    },
                    {
                      title: "Web Developer",
                      description: "As a web developer, I'm the creative force behind the digital world. I craft the intricate web of code that brings websites to life, shaping how people interact with information and services online."
                    },
                    {
                      title: "Front-End Developer",
                      description: "As a Front-End developer, I'm the artist of the digital world, responsible for creating visually appealing and user-friendly interfaces. I transform designs into functional, engaging web experiences."
                    },
                    {
                      title: "Back-End Developer",
                      description: "As a Back-End developer, I'm the unsung hero behind the scenes, powering the functionality and performance of web applications. My work is crucial for the smooth operation and performance of websites and applications."
                    },
                    {
                      title: "UI/UX Designer",
                      description: "As a UI/UX designer, I'm the architect of digital experiences, shaping how people interact with products and services. My work is essential for creating products that are not only functional but also delightful to use."
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-md border-l-4 border-primary"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <div className="flex gap-4 items-start">
                        <div className="text-primary text-2xl font-bold">
                          {index + 1}.
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                My Awesome <span className="text-primary">Services</span>
              </h2>
              <p className="text-gray-600 mb-8">
                As a highly skilled and versatile professional, I bring together expertise in full-stack development, web development, front-end development, back-end development, and UI/UX design. This unique combination allows me to offer a complete range of services, from crafting seamless and responsive user interfaces to building robust and scalable server-side architectures resulting in seamless, efficient, and engaging web applications for my clients.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Hire Me
                </Link>
                <a href="#" className="btn-outline">
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                My Clients Always Get <span className="text-primary">Exceptional Results</span> From Me
              </h2>
              <p className="text-gray-600 mb-6">
                By working with me, you are guaranteed to get:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Premium Quality Work",
                  "Unwavering Commitment",
                  "Dedicated Support",
                  "24/7 Accessibility"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index, duration: 0.4 }}
                  >
                    <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                      ✓
                    </span>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Hire Me
                </Link>
                <a href="#" className="btn-outline">
                  Download CV
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border-4 border-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/src/assets/images/hero2.webp" 
                alt="Professional Developer" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x800?text=Professional+Developer';
                }}
              />
              
              {/* Decorative circles */}
              <motion.div
                className="absolute w-16 h-16 rounded-full bg-red-500 border-4 border-white"
                style={{ top: '5%', left: '10%' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              />
              <motion.div
                className="absolute w-10 h-10 rounded-full bg-blue-500 border-4 border-white"
                style={{ top: '20%', right: '15%' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              />
              <motion.div
                className="absolute w-12 h-12 rounded-full bg-green-500 border-4 border-white"
                style={{ bottom: '15%', left: '5%' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
              />
              <motion.div
                className="absolute w-14 h-14 rounded-full bg-yellow-500 border-4 border-white"
                style={{ bottom: '10%', right: '10%' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex flex-col items-center lg:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Ready To <span className="text-primary">Get Started?</span>
              </h2>
              
              <Link to="/contact" className="btn-primary mb-6">
                Hire Me
              </Link>
              
              <p className="text-center mb-6">or</p>
              
              <div className="flex justify-center gap-6">
                {[
                  { icon: "💼", color: "bg-blue-400", link: "#" },
                  { icon: "📁", color: "bg-gray-700", link: "#" },
                  { icon: "🐦", color: "bg-blue-500", link: "#" },
                  { icon: "📷", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500", link: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index, duration: 0.4 }}
                  >
                    {social.icon}
                  </motion.a>
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
              <div className="bg-white rounded-lg shadow-xl p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  You Know About Me, Let's Talk About You
                </h3>
                <h4 className="text-xl mb-6 text-primary font-semibold">
                  Shoot Message
                </h4>
                
                <div className="flex flex-col space-y-4">
                  <Link to="/contact" className="btn-primary text-center">
                    Contact Me
                  </Link>
                </div>
              </div>
              
              {/* Background decoration */}
              <div 
                className="absolute w-48 h-48 bg-primary rounded-full -z-10 opacity-20"  
                style={{ top: '20%', left: '10%' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;