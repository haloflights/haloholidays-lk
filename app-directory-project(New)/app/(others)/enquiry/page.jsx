import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/default";
import Enquiry_Popup from "@/components/common/Inquire_Popup";

export const metadata = {
  title: "Enquiry || Halo Flights LK - Here For You",
  description: "Halo Flights LK - Here For You",
};

const Enquire = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-sm layout-pb-sm bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <Enquiry_Popup />
                {/* End SignUP */}

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Enquire), { ssr: false });
