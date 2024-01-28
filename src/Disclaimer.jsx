import React from "react";

function Disclaimer() {
  return (
    <div className="text-[12px] md:text-[8px] text-gray-400">
      <p>Please read before using the website</p>
      <ul>
        <li>
          This website is for academic and research purposes only and is
          entirely a personal research project
        </li>
        <li>
          Any references in this website that may seem similar to real places,
          people, companies, industries or service providers is completely
          coincidental
        </li>
        <li>
          By using this website, every user is agreeing to participate in the
          website owner's personal research.
        </li>
        <li>
          Any profits made from this reserch project are entirely entitled to
          the website's owner and any other user is not entitled to the profits
        </li>
      </ul>

      <p className="text-lg text-black">
        Please don't use the website if any of the text above is not readable or
        understandable to you!!
      </p>
    </div>
  );
}

export default Disclaimer;
