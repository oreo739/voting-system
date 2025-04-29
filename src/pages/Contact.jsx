import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    try {
      const result = await emailjs.send(
        'service_lo650on',       // Your EmailJS service ID
        'template_y2r9mpe',      // Your EmailJS template ID
        templateParams,
        'HHEqk99KjMhzcnfLV'           // Your EmailJS user ID
      );

      if (result.text === 'OK') {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send the message.');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-100 to-pink-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Write your message here"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={sending}
            className="w-full px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>{status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
