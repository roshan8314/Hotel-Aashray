import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '7488173091'; // Replace with actual number
  const message = encodeURIComponent('Hello, I would like to know more about OYO Aashray.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 p-3 rounded-full bg-green-500 text-white shadow-lg z-30 hover:bg-green-600 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
    </a>
  );
};

export default WhatsAppButton;