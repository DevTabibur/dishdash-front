"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { LoginFormValues, RegisterFormValues, AuthFormProps } from "@/types";
import { loginSchema, registerSchema } from "@/schemas/auth.schema";
import { SocialLogin, Tab } from "../ui";
import HighFive from "./../../../public/assets/svg/highfive.svg";
import Link from "next/link";

export const AuthForm = ({ type: initialType }: AuthFormProps) => {
  const [type, setType] = useState<"login" | "register">(initialType);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: LoginFormValues | RegisterFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      // Implement your authentication logic here
      console.log("Form submitted:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues =
    type === "login"
      ? { email: "", password: "" }
      : { fullname: "", email: "", password: "" };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-md shadow-lg">
        {/* Logo and Title */}
        <div className="text-center">
          <Image
            src={HighFive}
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome to{" "}
            <span className="text-[#29a060] text-xl font-bold font-['Playwrite_VN'] text-shadow-lg">
              DishDash.
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b">
          <Tab
            label="Login"
            isActive={type === "login"}
            onClick={() => setType("login")}
          />
          <Tab
            label="Register"
            isActive={type === "register"}
            onClick={() => setType("register")}
          />
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={type === "login" ? loginSchema : registerSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              {type === "register" && (
                <div>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Field
                      name="fullname"
                      type="text"
                      placeholder="Full Name"
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#29a060] focus:ring-0.5 focus:ring-[#29a060] focus:outline-none"
                    />
                  </div>
                  {errors.fullname && touched.fullname && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullname}
                    </p>
                  )}
                </div>
              )}

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

              <div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#29a060] focus:ring-0.5 focus:ring-[#29a060] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && touched.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white hover:bg-[#29a060c7] bg-[#29a060] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Processing..."
                  : type === "login"
                    ? "Login"
                    : "Register"}
              </button>

              {type === "login" && (
                <div>
                  <Link
                    href={"/auth/forget-password"}
                    className="text-gray-500 hover:underline"
                  >
                    Forget Password?
                  </Link>
                </div>
              )}
            </Form>
          )}
        </Formik>

        <SocialLogin type={type} />
      </div>
    </div>
  );
};

export default AuthForm;
