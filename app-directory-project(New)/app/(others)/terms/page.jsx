import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header3 from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/default";
import TermsConent from "@/components/common/TermsConent";

export const metadata = {
  title: "Terms & Conditions || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Terms = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsConent />
          </div>
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Terms), { ssr: false });
