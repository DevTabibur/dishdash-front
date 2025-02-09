import type { TabProps } from "@/types";

const Tab = ({ label, isActive, onClick }: TabProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-sm font-medium transition-colors
        ${isActive ? "text-blue-[#29a060] border-b-2 border-[#29a060]" : "text-gray-500 hover:text-gray-700"}`}
    >
      {label}
    </button>
  );
};

export default Tab;
