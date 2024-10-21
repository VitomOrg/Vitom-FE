import { MapPin, Phone, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const ContentSection = () => {
  return (
    <section className="flex flex-col items-start justify-center flex-1 p-8 transition-transform transform border shadow-md bg-gradient-to-br from-blue-500 to-green-500 border-border rounded-xl hover:scale-105 hover:shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-white">Get In Touch</h2>
      <p className="mb-4 text-white/90">
        Have questions about our 3D models? We're here to help! Reach out to us
        anytime, and our team will assist you in finding the perfect model for
        your project.
      </p>
      <ul className="space-y-4 text-white">
        <li className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-white" />
          <span>123 3D Models Ave, Design City, USA</span>
        </li>
        <li className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-white" />
          <span>+1-800-3D-MODEL</span>
        </li>
        <li className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-white" />
          <span>support@3dmodels.com</span>
        </li>
      </ul>
      <p className="mt-6">
        <NavLink to="/" className="text-white hover:underline">
          Explore our extensive collection of high-quality 3D models today!
        </NavLink>
      </p>
    </section>
  );
};

export default ContentSection;
