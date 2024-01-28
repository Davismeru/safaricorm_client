import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_api_url, base_client_url } from "./assets/constants";

function Share() {
  const myurl = `${base_client_url}/${localStorage.getItem("mycode")}`;
  const [data, setData] = useState([]);
  const [remaining, setRemaining] = useState(15);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Safaricorm is giving away free 5GB data bundles valid for 1 month. Hurry up and recieve your offer from this link: 👉 ${myurl} `
    );

    setCopied(true);
  };

  useEffect(() => {
    console.log(myurl);
    axios
      .get(
        `${base_api_url}/register/get_data/${localStorage.getItem("mycode")}`
      )
      .then((res) => {
        setData(res.data);
        setRemaining(15 - res.data.length);
      });
  }, [remaining]);
  return (
    <div className="h-screen bg-gradient-160 blue_gradient p-5 flex flex-col items-center justify-center">
      <section className="w-full h-[90%] bg-white rounded-lg text-xl p-3 relative">
        <h1 className="text-3xl text-green-500 font-medium italic my-5">
          You are almost there!!
        </h1>
        <h2 className="text-2xl text-gray-500 font-semibold">
          <span className="font-bold text-red-500">Final Step:</span> Just share
          the link below to 15 of your friends, family or groups through
          whatsapp, facebook, telegram, twitter, etc, and the{" "}
          <span className="font-extrabold">free 5GB</span> data will immediately
          be sent to your safaricorm number
        </h2>

        <button
          className="bg-green-400 p-3 text-white rounded-md mt-3"
          onClick={handleCopy}
        >
          {!copied ? "Click to Copy link" : "✔️ Copied"}
        </button>

        {remaining > 0 && (
          <p className="mt-3 font-medium text-gray-500">
            <span className="text-red-500 text-2xl">{remaining}</span> shares
            remaining
          </p>
        )}

        {(remaining == 0 || remaining < 0) && (
          <button className="bg-red-400 p-3 text-white rounded-md mt-3">
            Click and Complete <span className="font-bold">ONE</span> offer and
            get your 5GB data Bundles instantly
          </button>
        )}

        <a href="/" className="absolute bottom-2 left-2 text-blue-600">
          #SafaricormConnects #DataBundles #StayConnected
        </a>
      </section>
    </div>
  );
}

export default Share;
