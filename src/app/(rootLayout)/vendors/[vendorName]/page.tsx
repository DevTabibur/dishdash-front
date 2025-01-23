import { Breadcrumb } from "@/components";

const Page = ({ params }: { params: { vendorName: string } }) => {
  return (
    <div>
      <Breadcrumb />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {decodeURIComponent(params.vendorName)}
        </h1>
        {/* Add vendor specific content here */}
      </div>
    </div>
  );
};

export default Page;
