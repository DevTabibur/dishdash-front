// "use client"

// import { useState } from "react"
// import { Formik, Form, Field } from "formik"
// import { FaEnvelope, FaArrowLeft } from "react-icons/fa"
// import Link from "next/link"
// import Image from "next/image"
// import type { ForgotPasswordFormValues } from "@/types/auth"
// import { SuccessMessage } from "../ui"
// import { forgotPasswordSchema } from "@/schemas/auth.schema"

// const ForgetForm = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (
//     values: ForgotPasswordFormValues,
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
//   ) => {
//     try {
//       // Implement your password reset email logic here
//       console.log("Reset email requested for:", values.email)
//       await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
//       setIsSubmitted(true)
//     } catch (error) {
//       console.error("Password reset error:", error)
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   if (isSubmitted) {
//     return (
//       <SuccessMessage
//         title="Check your email"
//         message="We have sent a password reset link to your email address."
//         actionText="Back to login"
//         actionHref="/auth"
//       />
//     )
//   }

//   return (
//     <div className="max-w-md w-full space-y-8">
//       <div className="text-center">
//         <Image
//           src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s7BTRloPIleP8t0To9YsxM9Ioesx20.png"
//           alt="Logo"
//           width={80}
//           height={80}
//           className="mx-auto mb-4"
//         />
//         <h2 className="text-3xl font-bold text-gray-900">Forgot Password</h2>
//         <p className="mt-2 text-gray-600">Enter your email address and we&apos;ll send you a link to reset your password.</p>
//       </div>

//       <Formik initialValues={{ email: "" }} validationSchema={forgotPasswordSchema} onSubmit={handleSubmit}>
//         {({ errors, touched, isSubmitting }) => (
//           <Form className="mt-8 space-y-6">
//             <div>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <Field
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               {errors.email && touched.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? "Sending..." : "Send Reset Link"}
//             </button>
//           </Form>
//         )}
//       </Formik>

//       <div className="text-center">
//         <Link href="/auth" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700">
//           <FaArrowLeft className="mr-2" />
//           Back to login
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default ForgetForm

"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import type { ForgotPasswordFormValues } from "@/types/auth";
import { forgotPasswordSchema } from "@/schemas/auth.schema";
import HighFive from "./../../../public/assets/svg/highfive.svg";
// Ensure SuccessMessage is imported from the correct file
import SuccessMessage from "../ui/SuccessMessage";

const ForgetForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (
    values: ForgotPasswordFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      // Implement your password reset email logic here
      console.log("Reset email requested for:", values.email);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setIsSubmitted(true);
    } catch (error) {
      console.error("Password reset error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <SuccessMessage
        title="Check your email"
        message="We have sent a password reset link to your email address."
        actionText="Back to login"
        actionHref="/auth"
      />
    );
  }

  return (
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <Image
          src={HighFive}
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-900">
          Forgot
          <span className="text-[#29a060] text-xl font-bold font-['Playwrite_VN'] text-shadow-lg mx-2">
            DishDash.
          </span>
          Password
        </h2>

        <p className="mt-2 text-gray-600">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>
      </div>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="mt-8 space-y-6">
            <div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#29a060] focus:ring-0.5 focus:ring-[#29a060] focus:outline-none"
                />
              </div>
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 border border-transparent rounded-lg  text-sm font-medium text-white hover:bg-[#29a060c7] bg-[#29a060] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </Form>
        )}
      </Formik>

      <div className="text-center">
        <Link
          href="/auth"
          className="inline-flex items-center text-sm text-[#29a060] hover:text-[#41d687]"
        >
          <FaArrowLeft className="mr-2" />
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgetForm;
