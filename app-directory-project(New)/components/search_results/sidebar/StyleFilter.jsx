const StyleFilter = () => {
  const checkboxes = [
    { label: "All Inclusive", count: 12 },
    { label: "Family", count: 15 },
    { label: "Luxury", count: 6 },
    { label: "Honeymoon", count: 25 },
    { label: "Cruise", count: 3 },
    { label: "Multi-City", count: 9 },
  ];

  return (
    <>
      {checkboxes.map((checkbox, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{checkbox.label}</div>
            </div>
          </div>
          {/* End col-auto */}
          <div className="col-auto">
            <div className="text-15 text-light-1">{checkbox.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StyleFilter;
