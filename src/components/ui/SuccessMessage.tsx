import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import type { SuccessMessageProps } from "@/types/auth";

const SuccessMessage = ({
  title,
  message,
  actionText,
  actionHref,
}: SuccessMessageProps) => {
  return (
    <div className="text-center">
      <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{message}</p>
      <Link
        href={actionHref}
        className="text-blue-600 hover:text-blue-700 font-medium"
      >
        {actionText}
      </Link>
    </div>
  );
};

export default SuccessMessage;
