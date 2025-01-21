import { StepIndicatorProps } from "@/types";
import { FaCheck } from "react-icons/fa";

const StepIndicator = ({ steps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step.completed
                ? "bg-[#4F46E5] text-white"
                : step.current
                  ? "bg-[#4F46E5] text-white"
                  : "bg-gray-200 text-gray-500"
            }`}
          >
            {step.completed ? (
              <FaCheck className="w-4 h-4" />
            ) : (
              <span>{step.id}</span>
            )}
          </div>

          {/* Step Label */}
          <span
            className={`ml-2 ${step.current ? "text-[#4F46E5] font-medium" : "text-gray-500"}`}
          >
            {step.label}
          </span>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`w-24 h-0.5 mx-4 ${step.completed ? "bg-[#4F46E5]" : "bg-gray-200"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
