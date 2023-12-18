
'use client'



const FilterTabsHotels3 = ({filterOption,setFilterOption}) => {


  const filterOptions = [
    { label: "All Inclusive", value: "hotel" },
    { label: "Family", value: "tour" },
    { label: "Honeymoon", value: "activity" },
    { label: "Cruise", value: "cruise" },
    
    // add more options as needed

  ];

  return (
    <div className="tabs__controls row x-gap-10 y-gap-10">
      {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
              filterOption === option.value ? "is-tab-el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterTabsHotels3;
