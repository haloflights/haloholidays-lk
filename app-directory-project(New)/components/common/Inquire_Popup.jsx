import Link from "next/link";

const Inquire_Popup = () => {
  return (
    <form className="row y-gap-20">
      <div className="col-12">
        <h1 className="text-22 fw-500">Enquire Now</h1>
      </div>
      {/* End .col */}

      <div className="col-6 h-5">
        <div className="form-input ">
          <input type="text" required/>
          <label className="lh-1 text-14 text-light-1">First Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-6">
        <div className="form-input ">
          <input type="text" required/>
          <label className="lh-1 text-14 text-light-1">Last Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="email" required/>
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-6">
        <div className="form-input ">
          <input type="tel"/>
          <label className="lh-1 text-14 text-light-1">Phone Number (Optional)</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-6">
        <div className="form-input ">
          <input type="text" required/>
          <label className="lh-1 text-14 text-light-1">Destination</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-6">
        <div className="form-input">
          <input type="date" required />
          <label className="lh-1 text-14 text-light-1">Departure Date</label>
        </div>
      </div>
      {/* End .col */}
      
      <div className="col-6">
        <div className="form-input ">
          <input type="date" required/>
          <label className="lh-1 text-14 text-light-1">Return Date</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="d-flex ">
          <div className="form-checkbox mt-5">
            <input type="checkbox" name="name" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div className="text-15 lh-15 text-light-1 ml-10">
            Email me exclusive promotions.
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          href="#"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Submit <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default Inquire_Popup;
