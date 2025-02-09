import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import type { ContactInfoItem, ContactSocialLink } from "@/types";

const contactInfo: ContactInfoItem[] = [
  {
    icon: <FaMapMarkerAlt className="w-6 h-6 text-[#29a060]" />,
    title: "Our Location",
    content: "1234 Street Name, City Name, United States",
  },
  {
    icon: <FaPhone className="w-6 h-6 text-[#29a060]" />,
    title: "Phone Number",
    content: "+1 (123) 456-7890",
  },
  {
    icon: <FaEnvelope className="w-6 h-6 text-[#29a060]" />,
    title: "Email Address",
    content: "contact@example.com",
  },
];

const socialLinks: ContactSocialLink[] = [
  { icon: <FaFacebook />, url: "https://facebook.com", name: "Facebook" },
  { icon: <FaTwitter />, url: "https://twitter.com", name: "Twitter" },
  { icon: <FaInstagram />, url: "https://instagram.com", name: "Instagram" },
  { icon: <FaLinkedin />, url: "https://linkedin.com", name: "LinkedIn" },
];

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Contact Information
      </h2>
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 mr-4">{item.icon}</div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#29a060] transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
