"use client"
import { Form, Formik, FormikHelpers } from "formik"
import { memo, useCallback } from "react"
import { registerSchema } from "@/schemas/auth.schema"
import { FormInput } from '../ui'

interface RegisterValues {
  gender: 'male' | 'female'
  firstName: string
  middleName: string
  lastName: string
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
}

const initialValues: RegisterValues = {
  gender: 'female',
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: ''
}

const RegisterForm = memo(() => {
  const handleSubmit = useCallback(
    async (values: RegisterValues, { setSubmitting }: FormikHelpers<RegisterValues>) => {
      try {
        console.log('Form submitted:', values)
        // Handle registration logic here
      } catch (error) {
        console.error('Registration error:', error)
      } finally {
        setSubmitting(false)
      }
    },
    []
  )

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
      validateOnMount={false}
      validateOnChange={false}
      validateOnBlur={true}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6" noValidate>
          {/* <GenderSelect name="gender" /> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              name="firstName"
              label="First Name"
              placeholder="Enter first name"
              required
            />
            <FormInput
              name="middleName"
              label="Middle Name"
              placeholder="Enter middle name"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              placeholder="Enter last name"
              required
            />
          </div>

          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            required
          />

          <FormInput
            name="confirmEmail"
            type="email"
            label="Confirm Email"
            placeholder="Confirm your email"
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            placeholder="••••••••"
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            label="Re-type password"
            placeholder="••••••••"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-[#00B2FF] hover:bg-[#0099FF] text-white font-medium rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#00B2FF] focus:ring-offset-2 
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors duration-200"
          >
            {isSubmitting ? 'Creating Account...' : 'Confirm'}
          </button>
        </Form>
      )}
    </Formik>
  )
})

RegisterForm.displayName = 'RegisterForm'

export default RegisterForm