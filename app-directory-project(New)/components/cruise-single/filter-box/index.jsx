import Link from "next/link";

const HighlightList = () => {
  return (
    <>
      <div className="col-12">
      <ul class="list list--bullet">
    <li >Large outdoor swimming pool, hot tub, and multiple bars and restaurants </li>
    <li >Perfectly situated to explore the area's charms, with a shuttle bus for your convenience </li>
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
      </div>
      {/* End col-12 search button_item */}
    </>
  );
};

export default HighlightList;
