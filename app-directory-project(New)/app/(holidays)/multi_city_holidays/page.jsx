import dynamic from "next/dynamic";
import DefaultFooter from "@/components/footer/default";
import Header3 from "@/components/header/header-3";
// import Hero5 from "@/components/hero/hero-5";
import Testimonial from "@/components/destinations/Testimonial";
import Travellers from "@/components/home/home-2/Travellers";
import FilterHotels3 from "@/components/hotels/FilterHotels3";
import MultiCityHero from "@/components/hero/multi-city-hero";
import WhyChoose from "@/components/home/home-3/WhyChoose";
import CallToActions from "@/components/common/CallToActions";
import TopDestinations2 from "@/components/destinations/TopDestinations2";

export const metadata = {
  title: "Multi-City Holidays || Halo Flights LK - Here For You",
  description: "Multi-City Holidays || Halo Flights LK",
};

const multi_city_holidays = () => {
  return (
    <>
      {/* End Page Title */}

      <Header3 />
      {/* End Header 2 */}

      <MultiCityHero />
      {/* End Hero 2 */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Connect With Other Travellers
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <Travellers />
          {/* End travellers component */}
        </div>
        {/* End .container */}
      </section>
      {/* End Connect with Travellers Sections */}
      <FilterHotels3 />

      {/* End Best Seller Hotels Sections */}

      <section className="section-bg layout-pt-sm layout-pb-sm">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Overheard from Travelers
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="relative mt-40 md:mt-40  position-relative">
            <Testimonial />
          </div>
          {/* End .overflow-hidden */}
</div>
        {/* End .container */}
      </section>
      {/* End testimonial section */}

      <section className="layout-pt-md pb-20">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Popular Destinations
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="pt-40 relative">
            <TopDestinations2 />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End top destinations */}

      {/* <Subscribe /> */}
      {/* End Subscribe Section */}

      {/* <AppBanner /> */}
      {/* End AppBanner Section */}

      <CallToActions />
      {/* End CallToActions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(multi_city_holidays), { ssr: false });
