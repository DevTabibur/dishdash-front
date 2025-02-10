"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaUser, FaEnvelope, FaPen, FaComment } from "react-icons/fa";

import type { ContactFormValues } from "@/types";
import { contactFormSchema } from "@/schemas/contact.schema";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (
    values: ContactFormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      // Implement your contact form submission logic here
      console.log("Form submitted:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Send us a message
      </h2>
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          Thank you for your message. We&apos;ll get back to you soon!
        </div>
      )}
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Field
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#29a060] focus:ring-0.5 focus:ring-[#29a060] focus:outline-none"
                />
              </div>
              {errors.name && touched.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Field
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#29a060] focus:ring-0.5 focus:ring-[#29a060] focus:outline-none"
                />
              </div>
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <FaPen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Field
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#29a060] focus:ring-0.5 focus:ring-[#29a060] focus:outline-none"
                />
              </div>
              {errors.subject && touched.subject && (
                <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-gray-400" />
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#29a060] focus:ring-0.5 focus:ring-[#29a060] focus:outline-none"
                />
              </div>
              {errors.message && touched.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white hover:bg-[#29a060c7] bg-[#29a060] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
