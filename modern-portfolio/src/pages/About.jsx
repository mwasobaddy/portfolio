import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  // Skills data
  const technicalSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Management', level: 75 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'Responsive Design', level: 90 },
  ];

  const softSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Teamwork', level: 85 },
    { name: 'Time Management', level: 80 },
    { name: 'Adaptability', level: 90 },
    { name: 'Creativity', level: 95 },
  ];

  // Education timeline data
  const education = [
    {
      period: '2018 - 2022',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Nairobi',
      description: 'Graduated with honors, specializing in software engineering and web development.'
    },
    {
      period: '2023',
      degree: 'Full Stack Web Development Certification',
      institution: 'Udacity',
      description: 'Comprehensive program covering modern web development technologies and practices.'
    },
    {
      period: '2022',
      degree: 'UI/UX Design Certification',
      institution: 'Interaction Design Foundation',
      description: 'Specialized training in user experience research, interface design principles, and usability testing.'
    },
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
              About <span className="text-primary">Me</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Learn more about my journey, skills, and what drives me as a full-stack developer.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="/src/assets/images/passport.JPG" 
                  alt="Kelvin Mwangi" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x500?text=Kelvin+Mwangi';
                  }}
                />
              </div>
              {/* Background decoration */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary rounded-lg -z-10"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold mb-6"
              >
                Who Am <span className="text-primary">I?</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 mb-4"
              >
                I'm Kelvin Mwangi, a passionate and detail-oriented Full Stack Developer with a strong foundation in both front-end and back-end technologies. With over 7 years of experience in the field, I've developed a keen eye for creating intuitive user interfaces while ensuring robust functionality behind the scenes.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 mb-6"
              >
                My journey in web development began with a curiosity for how things work on the internet. This curiosity evolved into a career where I continuously strive to blend creativity with technical excellence to deliver outstanding digital experiences.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Personal Info</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="font-medium w-24">Name:</span>
                      <span className="text-gray-600">Kelvin Mwangi</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Location:</span>
                      <span className="text-gray-600">Nairobi, Kenya</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Experience:</span>
                      <span className="text-gray-600">7+ Years</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Freelance:</span>
                      <span className="text-gray-600">Available</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Contact</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="font-medium w-24">Email:</span>
                      <a href="mailto:contact@obadevops.com" className="text-primary hover:underline">contact@obadevops.com</a>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Phone:</span>
                      <a href="tel:+1234567890" className="text-primary hover:underline">+123 456 7890</a>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">LinkedIn:</span>
                      <a href="#" className="text-primary hover:underline">kelvin-mwangi</a>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">GitHub:</span>
                      <a href="#" className="text-primary hover:underline">obadevops</a>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link to="/contact" className="btn-primary">Get In Touch</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              My <span className="text-primary">Skills</span>
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I've developed a diverse set of skills over the years, allowing me to tackle various aspects of web development and design.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div 
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (0.1 * index) }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div 
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (0.1 * index) }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education & <span className="text-primary">Qualifications</span>
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              My academic journey and professional certifications that have shaped my expertise.
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary"></div>
                    
                    {/* Content */}
                    <div className="md:w-1/2 p-6">
                      <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                        <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-4">
                          {item.period}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                        <h4 className="text-gray-600 font-medium mb-4">{item.institution}</h4>
                        <p className="text-gray-700">{item.description}</p>
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
            Ready to Work Together?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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

export default About;