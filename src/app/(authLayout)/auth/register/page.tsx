
import RegisterForm from '@/components/forms/RegisterForm'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'



const RegisterPage: React.FC = () => {


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Logo */}
      <div className="p-4">
        <Link href="/" className="inline-block">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lF6fsMth0URlE4Rky7eU6rGBVi5MdE.png"
            alt="Salesghor"
            width={48}
            height={48}
            className="w-12 h-12"
          /> */}
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 text-white p-6">
              <h1 className="text-2xl font-semibold text-center">
                Let&apos;s Create your Account
              </h1>
            </div>

            {/* Form */}
            <div className="p-6">
              <h2 className="text-xl text-center mb-8">
                Fill up this documents
              </h2>

              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

