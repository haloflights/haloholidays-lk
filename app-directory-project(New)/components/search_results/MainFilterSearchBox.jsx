import DateSearch from "../../components/search_results/common/DateSearch";
import GuestSearch from "../../components/search_results/common/GuestSearch";
import LocationSearch from "../../components/search_results/common/LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -col-3-big bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30">
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location */}

          <div className="searchMenu-date px-20 lg:py-20  sm:px-5 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Departure Date - Return Date
              </h4>
              <DateSearch />
            </div>
          </div>
          {/* End check-in-out */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item h-full">
            <button className="button -dark-1 py-15 px-80 h-full col-12 rounded-0 bg-blue-1 text-white">
              <i className="icon-search text-20 mr-10" />
              <a href="/search_results">Search</a>
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
