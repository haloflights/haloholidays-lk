
'use client'

import Slider from "react-slick";

const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const catContent = [
    { id: 1, icon: "icon-nature", catName: "Family", catType: "Holidays", url: "/family_holidays", name: "Family Holidays" },
    { id: 2, icon: "icon-destination", catName: "Multi-City", catType: "Holidays", url: "/multi_city_holidays", name: "Multi-City Holidays" },
    { id: 4, icon: "icon-home", catName: "Luxury", catType: "Holidays", url: "/luxury_holidays", name: "Luxury Holidays" },
    { id: 5, icon: "icon-tickets", catName: "All Inclusive", catType: "Holidays", url: "/all_inclusive_holidays", name: "All Inclusive Holidays" },
    { id: 5, icon: "icon-heart", catName: "Honeymoon", catType: "Holidays", url: "/honeymoon_holidays", name: "Honeymoon Holidays" },
    { id: 6, icon: "icon-yatch", catName: " Cruise", catType: "Holidays", url: "/cruise_holidays", name: "Cruise Holidays" },
    
  ];
  return (
    <Slider {...settings}>
      {catContent.map((item) => (
        <div className="col" key={item.id}>
          <a href={item.url}>
          <button aria-label={item.name} className="d-flex flex-column justify-center px-10 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12">
            <i className={`${item.icon} text-25 mb-10`} />
            {item.catName} {item.catType}
            
          </button>
          </a>
          
        </div>
      ))}
    </Slider>
  );
};

export default Categories;
