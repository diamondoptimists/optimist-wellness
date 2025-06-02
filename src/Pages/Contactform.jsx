import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { GiToaster } from "react-icons/gi";

const Contactform = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    phoneNumber: "",
    message: "",
    companyName: "",
    email: "",
  });

  // State for error messages, loading, and success
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData, // Use correct variable name (formData, not FormData)
      [e.target.name]: e.target.value,
    });
  };

  // Validation function for the contact form
  const validate = () => {
    const newErrors = {};

    // Validate Name
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      // Only alphabets and spaces allowed
      newErrors.name = "Name should only contain alphabets";
    } else if (formData.name.trim().length < 3) {
      // Name should be at least 3 characters
      newErrors.name = "Name should not be less than three characters";
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      // Simple email regex for validation
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // Validate Company Name
    if (!formData.companyName) {
      newErrors.companyName = "Company Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.companyName)) {
      newErrors.companyName = "Company Name should only contain alphabets";
    }

    // Validate Phone Number
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (
      // Check for 10-15 digits, only numbers allowed
      !/^\d{10,15}$/.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    // Validate Message
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.message)) {
      newErrors.message = "Message should only contain alphabets";
    } else if (
      // Message should be between 10 and 200 characters
      formData.message.trim().length < 10 ||
      formData.message.trim().length > 200
    ) {
      newErrors.message = "Message should be between 10 to 200 characters";
    }

    setErrors(newErrors);
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");
    setLoading(true);

    // Check for validation errors
    const isValid = validate();
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      // Prepare template parameters for emailjs
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName,
        message: formData.message,
      };

      // Send email using emailjs
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      toast.success("Message sent successfully!");
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        message: "",
        number: "",
      });


    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Message not sent successfully.");
    } finally {
      setLoading(false);
    }
  };

  // Styles for the form and layout
  const containerStyles = "py-10 bg-gray-100 sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl";
  const headerStyles = "max-w-2xl mx-auto text-center";
  const titleStyles =
    "text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl";
  const descriptionStyles =
    "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500";
  const cardStyles = "overflow-hidden bg-white rounded-xl";
  const cardContentStyles = "p-6";
  const iconStyles = "flex-shrink-0 w-10 h-10 mx-auto text-gray-400";
  const formContainerStyles = "mt-6 overflow-hidden bg-white rounded-xl";
  const formContentStyles = "px-6 py-12 sm:p-12";
  const formTitleStyles = "text-3xl font-semibold text-center text-gray-900";
  const inputStyles =
    "block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600";
  const buttonStyles =
    "inline-flex cursor-pointer items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700";

  return (
    <div>
      <section className={containerStyles}>
        <div className={innerContainerStyles}>
          <div className={headerStyles}>
            <h2 className={titleStyles}>Contact Us</h2>
            <p className={descriptionStyles}>
              Get in touch with us for any inquiries or support. We're here to
              help you with any questions you may have.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className={cardStyles}>
                <div className={cardContentStyles}>
                  <FiPhone className={iconStyles} />
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    +91-76879-06978
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    +91-76879-06878
                  </p>
                </div>
              </div>

              <div className={cardStyles}>
                <div className={cardContentStyles}>
                  <FiMail className={iconStyles} />
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    contact@auraui.com
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    hr@auraui.com
                  </p>
                </div>
              </div>

              <div className={cardStyles}>
                <div className={cardContentStyles}>
                  <FiMapPin className={iconStyles} />
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                    8502, Sector 28, Ingle Colony, Patna, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={formContainerStyles}>
              <div className={formContentStyles}>
                <h3 className={formTitleStyles}>Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        Your Name
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your full name"
                          className={inputStyles}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <span className="text-red-500 text-sm">
                            {errors.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Email Address
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email address"
                          className={inputStyles}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-base font-medium text-gray-900"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          id="phone"
                          placeholder="Enter your phone number"
                          className={inputStyles}
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                        {errors.phoneNumber && (
                          <span className="text-red-500 text-sm">
                            {errors.phoneNumber}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Company Name Field */}
                    <div>
                      <label
                        htmlFor="company"
                        className="text-base font-medium text-gray-900"
                      >
                        Company Name
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          id="company"
                          placeholder="Enter your company name"
                          className={inputStyles}
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                        {errors.companyName && (
                          <span className="text-red-500 text-sm">
                            {errors.companyName}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="text-base font-medium text-gray-900"
                      >
                        Message
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          id="message"
                          placeholder="Enter your message"
                          className={`${inputStyles} resize-y`}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        {errors.message && (
                          <span className="text-red-500 text-sm">
                            {errors.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className={buttonStyles}
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                      {success && (
                        <div className="text-green-600 mt-2">{success}</div>
                      )}
                      {errorMessage && (
                        <div className="text-red-600 mt-2">{errorMessage}</div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactform;
