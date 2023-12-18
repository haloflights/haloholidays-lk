const neighborhoods = [
  { name: "Asia", count: 20 },
  { name: "Australia", count: 5 },
  { name: "America", count: 6 },
  { name: "Africa", count: 11 },
  { name: "Europe", count: 16 },
];

const NeighborhoddFilter = () => {
  return (
    <>
      {neighborhoods.map((neighborhood, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{neighborhood.name}</div>
            </div>
          </div>
          {/* End .col */}
          <div className="col-auto">
            <div className="text-15 text-light-1">{neighborhood.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NeighborhoddFilter;
