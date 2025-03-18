import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };
  
  const officeLocations = [
    {
      city: 'Mumbai',
      address: 'MoneyTree Tower, Financial District, Mumbai 400051, India',
      phone: '+91 22 4567 8901',
      email: 'mumbai@moneytree.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
    {
      city: 'Delhi',
      address: 'MoneyTree House, Connaught Place, New Delhi 110001, India',
      phone: '+91 11 2345 6789',
      email: 'delhi@moneytree.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
    {
      city: 'Bangalore',
      address: 'MoneyTree Campus, Electronic City, Bangalore 560100, India',
      phone: '+91 80 6789 0123',
      email: 'bangalore@moneytree.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
  ];
  
  const faqs = [
    {
      question: 'How do I open an account with MoneyTree?',
      answer: 'Opening an account is simple. Click on the "Sign Up" button, fill in your details, complete the KYC verification, and fund your account to start trading.',
    },
    {
      question: 'What are the brokerage charges?',
      answer: 'We offer zero brokerage on delivery trades and ultra-low fees on intraday trades. Check our pricing page for detailed information on all charges.',
    },
    {
      question: 'How can I fund my trading account?',
      answer: 'You can fund your account through UPI, NEFT, RTGS, or IMPS. The funds are typically credited instantly or within a few hours depending on the method used.',
    },
    {
      question: 'Is my money safe with MoneyTree?',
      answer: 'Yes, your funds are held in a separate account and are protected by bank-grade security. We are also registered with SEBI and follow all regulatory guidelines.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Touch</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400 sm:mt-4">
            Have questions or need assistance? Our team is here to help you navigate your trading journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white flex items-center">
                <MessageSquare className="h-5 w-5 text-green-400 mr-2" />
                Send Us a Message
              </h2>
            </div>
            <div className="p-6">
              {formSubmitted ? (
                <div className="bg-green-900/30 border border-green-800 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-medium">Thank you for your message!</p>
                  <p className="text-gray-400 mt-2">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="">Select a subject</option>
                        <option value="account">Account Inquiry</option>
                        <option value="trading">Trading Platform</option>
                        <option value="education">Education Programs</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-5 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg shadow-green-500/20 flex items-center justify-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 mb-8">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">Contact Information</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="ml-3 text-gray-400">
                      MoneyTree Tower, Financial District, Mumbai 400051, India
                    </span>
                  </div>
                  <div className="flex">
                    <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="ml-3 text-gray-400">+91 1800 123 4567</span>
                  </div>
                  <div className="flex">
                    <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="ml-3 text-gray-400">support@moneytree.com</span>
                  </div>
                  <div className="flex">
                    <Clock className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="ml-3 text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">Customer Support:</strong> For immediate assistance, please call our toll-free number or use the live chat feature on our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">Connect With Us</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">Follow us on social media for market updates, educational content, and more.</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418z" clipRule="evenodd"></path>
                      <path d="M15.194 12 10 15V9l5.194 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Office Locations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-xl font-bold text-white">{office.city}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="ml-3 text-gray-400">{office.address}</span>
                    </div>
                    <div className="flex">
                      <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="ml-3 text-gray-400">{office.phone}</span>
                    </div>
                    <div className="flex">
                      <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="ml-3 text-gray-400">{office.email}</span>
                    </div>
                    <div className="flex">
                      <Clock className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="ml-3 text-gray-400">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            <div className="divide-y divide-gray-700">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;