import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // clear error while typing
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setStatus("");
      
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // ✅ FIXED
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");

        // reset form
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 ">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 
              hover:border-indigo-400 transition 
              ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 
              hover:border-indigo-400 transition 
              ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 
              hover:border-indigo-400 transition 
              ${errors.message ? "border-red-500" : ""}`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Status Message */}
          {status && (
            <p
              className={`text-center text-sm mt-2 
              ${status.includes("successfully") ? "text-green-600" : "text-red-500"}`}
            >
              {status}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-700 text-white px-6 py-3 rounded-lg 
            hover:bg-indigo-800 transition duration-300 w-full
            disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
