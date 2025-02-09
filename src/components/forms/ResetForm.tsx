"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { ResetPasswordFormValues } from "@/types";
import { PasswordRequirement, SuccessMessage } from "../ui";
import { resetPasswordSchema } from "@/schemas/auth.schema";
import HighFive from "./../../../public/assets/svg/highfive.svg";

const ResetForm = ({ token }: { token: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidToken, setIsValidToken] = useState(true);

  useEffect(() => {
    // Validate token on component mount
    const validateToken = async () => {
      try {
        // Implement your token validation logic here
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsValidToken(true);
      } catch (error) {
        setIsValidToken(false);
      }
    };

    validateToken();
  }, []); // Removed unnecessary dependency: token

  const handleSubmit = async (
    values: ResetPasswordFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      // Implement your password reset logic here
      console.log("Password reset:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Password reset error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isValidToken) {
    return (
      <SuccessMessage
        title="Invalid or Expired Link"
        message="This password reset link is invalid or has expired."
        actionText="Request new link"
        actionHref="/forgot-password"
      />
    );
  }

  if (isSubmitted) {
    return (
      <SuccessMessage
        title="Password Reset Successfully"
        message="Your password has been reset. You can now login with your new password."
        actionText="Login"
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
          Reset
          <span className="text-[#29a060] text-xl font-bold font-['Playwrite_VN'] text-shadow-lg mx-2">
            DishDash.
          </span>
          Password
        </h2>

        <p className="mt-2 text-gray-600">
          Please enter your new password below.
        </p>
      </div>

      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={resetPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, isSubmitting }) => (
          <Form className="mt-8 space-y-6">
            <div>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
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

            <div>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Field
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#29a060] focus:ring-0.5 focus:ring-[#29a060] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">
                Password Requirements:
              </h3>
              <PasswordRequirement
                met={values.password.length >= 6}
                text="At least 6 characters"
              />
              <PasswordRequirement
                met={/[A-Z]/.test(values.password)}
                text="One uppercase letter"
              />
              <PasswordRequirement
                met={/[a-z]/.test(values.password)}
                text="One lowercase letter"
              />
              <PasswordRequirement
                met={/\d/.test(values.password)}
                text="One number"
              />
              <PasswordRequirement
                met={
                  values.password === values.confirmPassword &&
                  values.password !== ""
                }
                text="Passwords match"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white hover:bg-[#29a060c7] bg-[#29a060] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetForm;
