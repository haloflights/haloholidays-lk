import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-4 d-none d-sm-block">
        <Image
          width={100}
          height={100}
          src="/img/general/LK_Holidays.svg"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}

      
      <div className="col-lg-7">
        <h2 className="text-30 fw-600">About Halo Holidays</h2>
        {/* <p className="mt-5">These popular destinations have a lot to offer</p> */}
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
        HALO HOLIDAYS is a premier online travel agency dedicated to providing a seamless and stress-free experience for booking your flights from Sri Lanka. We take pride in offering unparalleled service, ensuring that your travel needs are met with efficiency and precision. Whether you're traveling for business or leisure, planning a short getaway or an extended vacation, HALO HOLIDAYS is here to cater to all your travel requirements.
          <br />
          <br />
          Our commitment to excellence is reflected in our vast selection of flights, designed to offer you the best options at affordable prices. With HALO HOLIDAYS, you can trust that your journey will be comfortable, and our attentive service will provide you with the peace of mind you deserve. Discover the beauty of hassle-free travel with HALO HOLIDAYS, where your satisfaction is our top priority.
        </p>
      </div>
      {/* End .col */}

      {/* <div className="col-lg-4">
        <Image
          width={100}
          height={100}
          src="/img/general/LK.svg"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      End .col */}
    </>
  );
};

export default Block1;
