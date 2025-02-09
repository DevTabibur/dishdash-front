import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import type { SocialLoginProps } from "@/types";
import toast from "react-hot-toast";

const SocialLogin = ({ type }: SocialLoginProps) => {
  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} ${type} clicked`);
    // Implement social login logic here
    toast.success("Coming Soon!");
  };

  return (
    <div className="mt-6">
      <p className="text-center text-sm text-gray-500 mb-4">Or {type} with</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleSocialLogin("Facebook")}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Login with Facebook"
        >
          <FaFacebook className="w-5 h-5 text-blue-600" />
        </button>
        <button
          onClick={() => handleSocialLogin("Google")}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Login with Google"
        >
          <FaGoogle className="w-5 h-5 text-red-500" />
        </button>
        <button
          onClick={() => handleSocialLogin("Twitter")}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Login with Twitter"
        >
          <FaTwitter className="w-5 h-5 text-blue-400" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
