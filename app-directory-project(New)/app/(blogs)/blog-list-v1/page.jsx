import React from "react";
import CallToActions from "@/components/common/CallToActions";
import Header3 from "@/components/header/header-3";
import LocationTopBar from "@/components/common/LocationTopBar";
import DefaultFooter from "@/components/footer/default";
import Blog1 from "@/components/blog/Blog1";

export const metadata = {
  title: "Blog || Halo Flights LK - Here For You",
  description: "Blog || Halo Flights LK",
};

const BlogListV1 = () => {
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Travel articles</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum is placeholder text commonly used in site.
                </p>
              </div>
            </div>
          </div>
          <Blog1 />
        </div>
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogListV1;
