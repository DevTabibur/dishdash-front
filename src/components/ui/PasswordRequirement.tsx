import { FaCheck, FaTimes } from "react-icons/fa";
import type { PasswordRequirementProps } from "@/types";

const PasswordRequirement = ({ met, text }: PasswordRequirementProps) => {
  return (
    <div className="flex items-center space-x-2">
      {met ? (
        <FaCheck className="w-4 h-4 text-green-500" />
      ) : (
        <FaTimes className="w-4 h-4 text-gray-300" />
      )}
      <span className={`text-sm ${met ? "text-green-500" : "text-gray-500"}`}>
        {text}
      </span>
    </div>
  );
};

export default PasswordRequirement;
