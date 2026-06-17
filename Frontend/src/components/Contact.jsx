import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Headphones,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "KDIP Headquarters",
      sub: "Upper Hill, Nairobi, Kenya",
      action: "https://maps.google.com/?q=Upper+Hill,Nairobi,Kenya",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+254 20 123 4567",
      sub: "Mon-Fri, 8am-5pm",
      action: "tel:+254201234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@kdip.go.ke",
      sub: "Response within 24-48 hours",
      action: "mailto:info@kdip.go.ke",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 8am - 5pm",
      sub: "Saturday: 9am - 1pm | Sunday: Closed",
      action: null,
    },
  ];

  const faqs = [
    {
      question: "How do I report a project issue?",
      answer: "You can report project issues through our Citizen Participation Hub by clicking 'Report Project Issues' and filling out the form.",
    },
    {
      question: "How can I track budget utilization?",
      answer: "Visit our Budget page to see real-time budget utilization across all sectors and counties.",
    },
    {
      question: "How do I become a volunteer monitor?",
      answer: "Complete the volunteer application form in our Participate page. Our team will contact you within 5 business days.",
    },
    {
      question: "How long does it take to review a report?",
      answer: "Reports are reviewed within 48 hours. Complex cases may take up to 14 days for resolution.",
    },
  ];

  const partners = [
    { name: "Ministry of Devolution", logo: "🏛️", role: "Strategic Partner" },
    { name: "World Bank Kenya", logo: "🌍", role: "Technical Partner" },
    { name: "UNDP Kenya", logo: "🤝", role: "Development Partner" },
    { name: "Kenya Vision 2030", logo: "🎯", role: "Implementation Partner" },
    { name: "County Governments", logo: "🏘️", role: "Implementation Partner" },
    { name: "ICT Authority", logo: "💻", role: "Technical Partner" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-2xl mb-4">
            <Headphones size={32} className="text-[#22c55e]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about development projects, budget tracking, or citizen participation? 
            Our team is here to help you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition group hover:border-[#22c55e]/30"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-[#22c55e]/10 rounded-xl mb-4 group-hover:bg-[#22c55e]/20 transition border border-[#22c55e]/20">
                    <Icon size={24} className="text-[#22c55e]" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">{info.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{info.details}</p>
                  <p className="text-xs text-gray-400">{info.sub}</p>
                  {info.action && (
                    <a
                      href={info.action}
                      target={info.action.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="mt-3 text-sm font-semibold text-[#22c55e] hover:text-[#16a34a] transition"
                    >
                      {info.title === "Call Us" ? "Call Now" : info.title === "Email Us" ? "Send Email" : "Get Directions"} →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-[#0f172a] px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Send size={20} />
                Send us a Message
              </h2>
              <p className="text-slate-300 text-sm mt-1">
                We'll get back to you within 48 hours
              </p>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-[#22c55e]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-4">
                    Thank you for reaching out. Our team will respond to your message within 48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-6 py-2 text-white font-semibold hover:bg-[#16a34a] transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe your question or concern in detail..."
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] resize-none"
                      required
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-600">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#22c55e] py-3 text-sm font-bold text-white hover:bg-[#16a34a] transition disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side - FAQs & Support */}
          <div className="space-y-6">
            {/* FAQs */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-[#0f172a] px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageCircle size={20} />
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-300 text-sm mt-1">
                  Quick answers to common questions
                </p>
              </div>
              <div className="p-6 space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-[#0f172a] mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Banner */}
            <div className="bg-[#22c55e]/10 rounded-2xl border border-[#22c55e]/20 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                    <Headphones size={20} className="text-[#22c55e]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">24/7 Support</p>
                    <p className="text-xs text-gray-500">For urgent project-related issues</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+254722123456"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] px-4 py-2 text-white font-semibold hover:bg-[#16a34a] transition"
                  >
                    <Phone size={16} />
                    Emergency Hotline
                  </a>
                  <Link
                    to="/participate"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-[#22c55e]/20 px-4 py-2 text-[#22c55e] font-semibold hover:bg-[#22c55e]/5 transition"
                  >
                    <MessageCircle size={16} />
                    Report an Issue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#0f172a] px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin size={20} />
              Find Us Here
            </h2>
          </div>
          <div className="p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d36.8167!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf3d2d9f30b8e4!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KDIP Nairobi Location"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Our Partners & Collaborators */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#0f172a] px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Handshake size={20} />
              Our Partners & Collaborators
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Working together to build a transparent and developing Kenya
            </p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 group-hover:bg-[#22c55e]/10 transition border border-gray-100 group-hover:border-[#22c55e]/20">
                    {partner.logo}
                  </div>
                  <h3 className="font-semibold text-[#0f172a] text-sm">{partner.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{partner.role}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                Interested in partnering with KDIP? Contact our partnerships team at <a href="mailto:partnerships@kdip.go.ke" className="text-[#22c55e] font-medium hover:text-[#16a34a]">partnerships@kdip.go.ke</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}