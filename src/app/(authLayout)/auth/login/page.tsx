

import Link from 'next/link'
import { FiArrowLeft, FiUser } from 'react-icons/fi'
import LoginForm from '@/components/forms/LoginForm'



const LoginPage: React.FC = () => {
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Logo */}
      <div className="flex justify-center py-8">
        {/* <Logo size="lg" /> */}
      </div>

      <div className="container mx-auto px-4">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto overflow-hidden bg-white rounded-2xl shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Left Section */}
            <div className="bg-[#00B2FF] p-10 text-white flex flex-col justify-center min-h-[400px]">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome Back to<br />Our Website
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Log In to continue to your Account
              </p>
            </div>

            {/* Right Section */}
            <div className="p-10">
              <div className="max-w-sm mx-auto">
                {/* Avatar and Title */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <FiUser className="w-8 h-8 text-[#00B2FF]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Male Login
                  </h2>
                </div>

                {/* Login Form */}
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

