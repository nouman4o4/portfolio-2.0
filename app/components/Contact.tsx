"use client"
import { useState } from "react"
import toast from "react-hot-toast"
import emailjs from "@emailjs/browser"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation check
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields", {
        style: { background: "#ef4444", color: "#fff" },
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.text === "OK") {
        toast.success("Email sent successfully! ✅")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error("Failed to send email. Please try again.")
      }
    } catch (error) {
      console.error("Email sending error:", error)
      toast.error("Something went wrong while sending the email.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Have a project in mind? Let's work together to create something
          amazing
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
