import Link from "next/link";

const HighlightList = () => {
  return (
    <>
      <div className="col-12 pb-20 ">
      <ul class="list list--bullet">
    <li >Highlight 1</li>
    <li >Highlight 2</li>
    <li >Highlight 3</li>
    <li >Highlight 4</li>
    <li >Highlight 5</li>
</ul>
        {/* End Location */}
        
      </div>
      {/* End .col-12 */}
      

      <div className="col-12">
        <Link
        href="/enquiry"
        className="button -dark-2 py-15 px-35 h-40 col-12 rounded-4 bg-blue-1">
        <button className="text-white">  
          
          Enquire Now
        </button>
        </Link>
        <div className="col-12 bg-blue-3 rounded-4 px-20 mt-10">
      <div className="text-14 text-dark-1 text-center pb-10">
        <div className="fw-5 00 underline">INSTALMENT PLANS</div>
      </div>
      <div className="text-13 text-dark-1">
        <div className="fw-500">3 - Months from <span class="text-dark-4">LKR 73,900.00</span></div>
      </div>
      <div className="text-13 text-dark-1">
        <div className="fw-500">6 - Months from <span class="text-dark-4">LKR 36,650.00</span></div>
      </div>
      <div className="text-13 text-dark-1">
        <div className="fw-500">9 - Months from <span class="text-dark-4">LKR 24,433.33</span></div>
      </div>
      </div>
      </div>
      {/* End col-12 search button_item */}
      
    </>
  );
};

export default HighlightList;
