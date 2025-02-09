import { ResetForm } from "@/components";

const page = ({ params }: { params: { token: string } }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ResetForm token={params.token} />
    </div>
  );
};

export default page;
