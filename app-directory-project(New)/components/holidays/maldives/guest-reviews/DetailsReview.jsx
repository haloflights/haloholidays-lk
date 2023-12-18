import Image from "next/image";

const DetailsReview = () => {
  return (
    <div className="row y-gap-60">
      <div className="col-lg-6">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-auto">
            <Image
              width={40}
              height={40}
              src="/img/avatars/user.png"
              alt="image"
            />
          </div>
          <div className="col-9">
            <div className="fw-500 lh-15">Azam Mohamed</div>
            <div className="text-14 text-light-1 lh-15 ">December 2023</div>
            
          </div>
          <div className="col-1">
          <div className="size-40 flex-center bg-blue-1 rounded-4 ml-10">
              
              <div className="text-14 fw-600 text-white">5.0</div>
              
            </div>
            
          </div>
          
        </div>
        {/* End .row */}

        
        <p className="text-15 text-dark-1 mt-30">
        I like the service of halo flight. They helped me in getting the best fare to Canada, they even took care of my requirement. Thanks for the team and have a great journey ahead{" "}
        </p>
        

        <div className="d-flex x-gap-30 items-center pt-20">
          <button className="d-flex items-center text-blue-1">
            <i className="icon-like text-16 mr-10" />
            Helpful
          </button>
          <button className="d-flex items-center text-light-1">
            <i className="icon-dislike text-16 mr-10" />
            Not helpful
          </button>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-auto">
            <Image
              width={40}
              height={40}
              src="/img/avatars/user.png"
              alt="image"
            />
          </div>
          <div className="col-9">
            <div className="fw-500 lh-15">Hussain Farook</div>
            <div className="text-14 text-light-1 lh-15 ">December 2023</div>
            
          </div>
          <div className="col-1">
          <div className="size-40 flex-center bg-blue-1 rounded-4 ml-10">
              
              <div className="text-14 fw-600 text-white">5.0</div>
              
            </div>
            
          </div>
          
        </div>
        {/* End .row */}

        
        <p className="text-15 text-dark-1 mt-30">
        I was so amazed by the tour that was arranged by the team for my holiday to Dubai. Special thanks for Muzzammil really appreciate his hard work{" "}
        </p>

        <div className="d-flex x-gap-30 items-center pt-20">
          <button className="d-flex items-center text-blue-1">
            <i className="icon-like text-16 mr-10" />
            Helpful
          </button>
          <button className="d-flex items-center text-light-1">
            <i className="icon-dislike text-16 mr-10" />
            Not helpful
          </button>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-auto">
            <Image
              width={40}
              height={40}
              src="/img/avatars/user.png"
              alt="image"
            />
          </div>
          <div className="col-9">
            <div className="fw-500 lh-15">Tarika Ethapana</div>
            <div className="text-14 text-light-1 lh-15 ">November 2023</div>
            
          </div>
          <div className="col-1">
          <div className="size-40 flex-center bg-blue-1 rounded-4 ml-10">
              
              <div className="text-14 fw-600 text-white">5.0</div>
              
            </div>
            
          </div>
          
        </div>
        {/* End .row */}

        
        <p className="text-15 text-dark-1 mt-30">
        Absolutely recommended. Quick and very friendly service. Extremely accommodating and very helpful. Special thank you to Piyumi from the SL team and Ashwin from the India team for all their wonderful help.{" "}
        </p>
        <div className="d-flex x-gap-30 items-center pt-20">
          <button className="d-flex items-center text-blue-1">
            <i className="icon-like text-16 mr-10" />
            Helpful
          </button>
          <button className="d-flex items-center text-light-1">
            <i className="icon-dislike text-16 mr-10" />
            Not helpful
          </button>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-auto">
            <Image
              width={40}
              height={40}
              src="/img/avatars/user.png"
              alt="image"
            />
          </div>
          <div className="col-9">
            <div className="fw-500 lh-15">Kgf Tesla</div>
            <div className="text-14 text-light-1 lh-15 ">December 2023</div>
            
          </div>
          <div className="col-1">
          <div className="size-40 flex-center bg-blue-1 rounded-4 ml-10">
              
              <div className="text-14 fw-600 text-white">5.0</div>
              
            </div>
            
          </div>
          
        </div>
        {/* End .row */}

        
        <p className="text-15 text-dark-1 mt-30">
        This is my second holiday booked through Halo Flights. Thanks for arranging a wonderful Thailand trip. Thanks for Muzzammil and team for there effort on making this trip memorable{" "}
        </p>
        <div className="d-flex x-gap-30 items-center pt-20">
          <button className="d-flex items-center text-blue-1">
            <i className="icon-like text-16 mr-10" />
            Helpful
          </button>
          <button className="d-flex items-center text-light-1">
            <i className="icon-dislike text-16 mr-10" />
            Not helpful
          </button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default DetailsReview;
