import FilterBox2 from "../../holidays/singapore/filter-box/highlights";
const SidebarRight2 = ({ holiday }) => {
  return (
    <div className="ml-50 lg:ml-0">
      <div className="px-30 py-30 border-light rounded-4 shadow-4">
        <div className="d-flex items-center">
          <div>
            <span className="text-20 fw-500 ml-50">What's Included</span>  
          </div>
          
          
        </div>
        {/* End d-flex */}

        <div className="row y-gap-20 pt-20">
          
          <FilterBox2 />
          
        </div>
      </div>
      {/* End px-30 FilterBox */}
    </div>
  );
};

export default SidebarRight2;
