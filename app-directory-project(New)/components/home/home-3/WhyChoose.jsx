import Image from "next/image";

const WhyChoose = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/support.svg",
      title: "Customer Support",
      tagline: "24/7",
      text: `Always available for assistance, our customer support ensures timely help and satisfaction.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/discount.svg",
      title: "Unbeatable",
      tagline: "Prices",
      text: `Providing unbeatable prices, our customer support ensures timely help and satisfaction.`,
      delayAnimation: "200",
    },
    { 
      id: 3,
      icon: "/img/featureIcons/quote-request.svg",
      title: "Pay in Instalments!",
      tagline: "No Credit Card Needed",
      text: `Facilitating payments in convenient instalments, our support ensures your financial ease and satisfaction.`,
      delayAnimation: "300",
    },
    {
      id : 4,
      icon: "/img/featureIcons/booking.svg",
      title : "Visa",
      tagline: "Assistance",
      text: `For seamless visa assistance, our customer support ensures efficient guidance and satisfaction.`,
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
                width={50}
                height={50}
                src={item.icon}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-center mt-30">
              <h3 className="text-18 fw-500">{item.title}<br/>{item.tagline}</h3>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
          
        </div>
        
      ))}
    </>
  );
};

export default WhyChoose;
