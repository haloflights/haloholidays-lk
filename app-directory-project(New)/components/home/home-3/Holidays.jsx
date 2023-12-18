import Image from "next/image";

const HolidayBlock = () => {
  const holidayBlockContent = [
    {
      id: 1,
      icon: "/img/pages/help/icons/1.svg",
      title: "All Inclusive",
      url: "/destinations"
    },
    {
      id: 2,
      icon: "/img/pages/help/icons/2.svg",
      title: "Family",
      url: "/destinations"
    },
    {
      id: 3,
      icon: "/img/pages/help/icons/3.svg",
      title: "Couple",
      url: "/destinations"
    },
    {
      id: 4,
      icon: "/img/pages/help/icons/4.svg",
      title: "Luxury",
      url: "/destinations"
    },
    {
      id: 5,
      icon: "/img/pages/help/icons/5.svg",
      title: "Honeymoon",
      url: "/destinations"
    },
    {
      id: 6,
      icon: "/img/pages/help/icons/6.svg",
      title: "Beach",
      url: "/destinations/"
    },
    {
      id: 7,
      icon: "/img/pages/help/icons/4.svg",
      title: "Cruise",
      url: "/destinations"
    },
    {
      id: 8,
      icon: "/img/pages/help/icons/5.svg",
      title: "Last Minute",
      url: "/destinations"
    },
];
  return (
    <>
      <div className="row">
  {holidayBlockContent.map((item) => (
    <div key={item.id} className="col-lg-3 col-md-6 col-6 mb-5">
      <a href={`${item.url}`} className="text-decoration-none">
        <div className="holiday-item bg-blue-1-05 rounded-8 px-20 py-15 d-flex align-items-center hover-effect-new">
          <div className="size-60 rounded-full flex-center mr-5">
            <Image
              width={25}
              height={25}
              src={item.icon}
              alt="icon"
              className="img-fluid desktop-icon" // Add a class for desktop icon
            />
          </div>
          <div className="text-15 fw-500 ml-10">
            {item.title}
          </div>
        </div>
      </a>
    </div>
  ))}
</div>




    </>
  );
};

export default HolidayBlock;
