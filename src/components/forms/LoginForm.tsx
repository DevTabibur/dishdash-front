"use client"
import { Formik, Form, FormikHelpers } from 'formik'
import Link from 'next/link'
import { memo, useCallback } from 'react'

import { loginSchema } from '@/schemas/auth.schema'
import { FormInput } from '../ui'


interface LoginValues {
    email: string
    password: string 
    rememberMe: boolean
}

const initialValues: LoginValues = {
    email: '',
    password: '',
    rememberMe: false
}

const LoginForm = memo(() => {

    const handleSubmit = useCallback(
        async (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
            try {
                console.log('Form submitted:', values)
                // Handle login logic here
            } catch (error) {
                console.error('Login error:', error)
            } finally {
                setSubmitting(false)
            }
        },
        []
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
            validateOnMount={false}
            validateOnChange={false} 
            validateOnBlur={true}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-6" noValidate>
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="example@email.com"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="••••••••"
                    />

                    <div className="flex justify-between mb-4">
                        <div></div>
                        <Link 
                            href="/forgot-password"
                            className="text-[#FF6B98] text-sm hover:text-[#ff5288] transition-colors"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            className="h-4 w-4 text-[#FF6B98] focus:ring-[#FF6B98] border-gray-300 rounded"
                        />
                        <label
                            htmlFor="rememberMe"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            Remember Me
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-[#FF6B98] hover:bg-[#ff5288] text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B98] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isSubmitting ? 'Logging in...' : 'Log in'}
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        No account yet?{' '}
                        <Link
                            href="/auth/register"
                            className="text-[#FF6B98] hover:text-[#ff5288] font-medium transition-colors"
                        >
                            Register Free
                        </Link>
                    </p>
                </Form>
            )}
        </Formik>
    )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm