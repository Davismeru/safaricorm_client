import React, { useEffect, useRef } from "react";

function BannerAd() {
  const banner = useRef();

  const atOptions = {
    key: "36f9c8433f9d28bd97cd4ccd2dd5a0ab",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//www.topcreativeformat.com/36f9c8433f9d28bd97cd4ccd2dd5a0ab/invoke.js";

      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);
  return (
    <div
      className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
      ref={banner}
    ></div>
  );
}

export default BannerAd;
