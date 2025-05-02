import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <Link to="/" className="text-3xl font-bold text-primary mb-4">ObaDevOps</Link>
            <p className="text-gray-400 mb-4">
              Full-stack developer committed to building innovative, user-friendly, 
              and high-performance digital solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="linkedin" />
              <SocialLink href="#" icon="github" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="instagram" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Me" />
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/projects" label="Portfolio" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">📧</span>
                <a href="mailto:contact@obadevops.com" className="text-gray-400 hover:text-primary">
                  contact@obadevops.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">📱</span>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-primary">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">📍</span>
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ObaDevOps. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const FooterLink = ({ to, label }) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-primary transition-colors">
      {label}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'linkedin':
        return '💼';
      case 'github':
        return '📁';
      case 'twitter':
        return '🐦';
      case 'instagram':
        return '📷';
      default:
        return '🔗';
    }
  };
  
  return (
    <a 
      href={href} 
      className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center
                hover:bg-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{getIcon()}</span>
    </a>
  );
};

export default Footer;