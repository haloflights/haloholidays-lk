const Counter = () => {
  const blockContent = [
    {
      id: 1,
      number: "60",
      meta: "Destinations",
      hasUnit: "+",
      delayAnim: "100",
    },
    {
      id: 2,
      number: "50",
      meta: "Employees",
      hasUnit: "+",
      delayAnim: "200",
    },
    {
      id: 3,
      number: "100,000",
      meta: "Happy customers",
      hasUnit: "+",
      delayAnim: "300",
    },
    {
      id: 4,
      number: "5",
      meta: "Our Partners",
      hasUnit: "",
      delayAnim: "400",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-xl-3 col-3"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <div className="text-40 lg:text-30 lh-13 fw-600 sm:text-25">
            {item.number}
            {item.hasUnit}
          </div>
          <div className="text-14 lh-14 text-light-1 mt-5 sm:text-12">{item.meta}</div>
        </div>
      ))}
    </>
  );
};

export default Counter;
