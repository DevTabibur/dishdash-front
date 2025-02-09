import { Breadcrumb } from "@/components";

interface Props {
  params: {
    vendorDetails: string;
  };
}

const VendorDetailsPage = ({ params }: Props) => {
  const { vendorDetails } = params;

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-[90%] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Vendor Details</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
          <div className="col-span-1 md:col-span-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Vendor Information</h2>
              {/* Vendor info content will go here */}
            </div>
          </div>

          <div className="col-span-1 md:col-span-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Products</h2>
              {/* Product listings will go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetailsPage;
