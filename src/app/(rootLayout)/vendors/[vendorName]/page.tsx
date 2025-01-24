import { Breadcrumb } from "@/components";

const Page = ({ params }: { params: { vendorName: string } }) => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb title="Vendor Details" />
      <div className="max-w-[90%] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {decodeURIComponent(params.vendorName)}
        </h1>
        {/* Add vendor specific content here */}
      </div>
    </main>
  );
};

export default Page;
