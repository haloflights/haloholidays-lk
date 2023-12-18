import Image from "next/image";
const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/24-hours-support.gif",
      title: "Support from Start to Finish",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/pound-sterling.gif",
      title: "Unbeatable Prices",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "200",
    },
    { 
      id: 3,
      icon: "/img/featureIcons/3/space.gif",
      title: "Unlimited Quotes",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "300",
    },
    {
      id : 4,
      icon: "/img/featureIcons/3/route.gif",
      title : "Flexible Bookings",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
      delayAnimation : "400", 
    }
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image
                width={70}
                height={70}
                src={item.icon}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};


export default BlockGuide;
