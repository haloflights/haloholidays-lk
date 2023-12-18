import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import holidayData from "@/data/holidays";
import Header3 from "@/components/header/header-3";
import Overview from "@/components/holidays/bangkok_and_phuket/Overview";
import TopBreadCrumb from "@/components/holidays/bangkok_and_phuket/TopBreadCrumb";
import SidebarRight from "@/components/holidays/bangkok_and_phuket/SidebarRight";
import SidebarRight2 from "@/components/holidays/bangkok_and_phuket/SidebarRight2";
import ReviewProgress from "@/components/holidays/bangkok_and_phuket/guest-reviews/ReviewProgress";
import DetailsReview from "@/components/holidays/bangkok_and_phuket/guest-reviews/DetailsReview";
import ReplyForm from "@/components/holidays/bangkok_and_phuket/ReplyForm";
import ReplyFormReview from "@/components/holidays/bangkok_and_phuket/ReplyFormReview";
import Facilities from "@/components/holidays/bangkok_and_phuket/Facilities";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import MapPropertyFinder from "@/components/holidays/bangkok_and_phuket/MapPropertyFinder";
import GalleryCruiseSlider from "@/components/holidays/bangkok_and_phuket/GalleryCruiseSlider";
import TopDestinations2 from "@/components/destinations/TopDestinations2";

export const metadata = {
  title: "Bangkok & Phuket || Halo Holidays - Here For You",
  description: "Bangkok & Phuket || Halo Holidays",
};

const bangkok_and_phuket = () => {
  const id = 5;
  const holiday = holidayData.find((item) => item.id == id);
  

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <TopBreadCrumb />
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <h1 className="text-26 fw-600">{holiday?.title}</h1>
              <div className="d-flex x-gap-5 items-center pt-5">
                <i className="icon-location-2 text-16 text-light-1" />
                <button
                  data-x-click="mapFilter"
                  className="text-15 text-blue-1 underline">
                  <a href="#mapSection">Show on Map</a>
                </button>
              </div>
            </div>
            {/* End .col-auto */}

            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10">
                <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1">
                    <i className="icon-share mr-10" />
                    Share
                  </button>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1 bg-light-2">
                    <i className="icon-heart mr-10" />
                    Save
                  </button>
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End top gallery header section */}

      <section className="pt-30">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <GalleryCruiseSlider />
              {/* End gallery grid wrapper */}

              <Overview />
              {/* End Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight holiday={holiday} /><br />
              <SidebarRight2 />
              
            </div>
            
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      <section className="mt-40">
        <div className="container border-top-light pt-40">
          <div className="row x-gap-40 y-gap-40">
            <div className="col-12">
              <h3 className="text-22 fw-500">Facilities of this Holiday</h3>
              <div className="row x-gap-40 y-gap-40 pt-20">
                <Facilities />
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End facilities */}

      <section id="mapSection" className="pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Holiday Location</h3>
          <div className=" rounded-4 overflow-hidden map-500">
            <MapPropertyFinder />
          </div>
        </div>
      </section>
      {/* End MapPropertyFinder */}

      <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Guest reviews</h3>
            </div>
          </div>
          {/* End .row */}

          <ReviewProgress holiday={holiday} />
          {/* End review with progress */}

          <div className="pt-40">
            <DetailsReview />
            {/* End review with details */}
          </div>

          <div className="row pt-30 pb-30">
            <div className="col-auto">
              <a href="#" className="button -md -outline-blue-1 text-blue-1">
                Show all reviews{" "}
                <div className="icon-arrow-top-right ml-15"></div>
              </a>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        {/* End container */}
      </section>
      {/* End Review section */}

      <section className="layout-pt-md pb-20">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Similar Destinations
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

      
      {/* End facilites section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(bangkok_and_phuket), {
  ssr: false,
});
