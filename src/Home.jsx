import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { base_api_url } from "./assets/constants";
import BannerAd from "./BannerAd";

function Home() {
  const [safNo, setSafNo] = useState(0);
  const [error, setError] = useState("");
  const [proceed, setProceed] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const referer_code = params.code;

  const handleChange = (e) => {
    setSafNo(e.target.value);
  };

  const handleConfirm = async () => {
    setLoading(true);
    const res = await axios.post(`${base_api_url}/register/confirm`, {
      number: safNo,
    });
    setLoading(false);

    if (res.data.error) {
      setError(res.data.error);
    } else {
      setError("");
      setProceed(true);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await axios.post(`${base_api_url}/register`, {
      number: safNo,
      referer_code: referer_code,
    });
    setLoading(false);

    localStorage.setItem("mycode", res.data);
    navigate("/share/final");
    console.log(referer_code);
  };

  return (
    <div className="min-h-screen bg-gradient-160 blue_gradient p-5 flex flex-col items-center justify-center relative">
      <section className="w-full h-[90%] bg-white rounded-lg text-xl p-3">
        {/* <p> Good news everybody!! Safaricon has patnered with Cloudflare Internet Services (United Kingdom) to Unleash the power of connectivity and to celebrate this milestone, they are gifting all their esteemed customers with 5GB free data bundles </p> */}
        <p className="my-10">
          📱📱Get ready to experience seamless browsing and stay connected 🌐
          with our amazing 5GB free data bundles Offer!🌟
        </p>

        <p>
          Enter the Safaricorm number that will recieve the free data bundles
          <br />
        </p>

        <section className="border mt-2 border-green-600 flex justify-between rounded-md">
          <input
            type="text"
            placeholder="07 XX XXX XXX"
            className="p-3 outline-none w-[60%]"
            onChange={handleChange}
          />
          <button
            className="bg-green-400 p-3 text-white"
            onClick={handleConfirm}
          >
            {loading ? "Just a sec..." : "Confirm"}
          </button>
        </section>

        <p className="italic text-gray-400">
          (Please don't enter a number that has already recieved the offer)
        </p>
        {error && <p className="text-red-500 italic">{error}</p>}
        {proceed && (
          <section className="mt-5">
            <h1>
              <span className="text-2xl font-medium text-red-400 italic">
                Congratulations!!!
              </span>{" "}
              Your number{" "}
              <span className="text-red-400 font-semibold">{safNo}</span>{" "}
              qualifies to recieve <span>5GB free data</span> valid for one
              month
            </h1>

            <button
              className="font-semibold mt-2 w-full bg-green-500 text-white p-2 rounded-md"
              onClick={handleSubmit}
            >
              {loading ? "just a sec..." : "RECIEVE FREE 5GB DATA"}
            </button>
          </section>
        )}

        {/* adsterra ad */}
        <BannerAd />
      </section>
      <p className="text-gray-500 text-[10px] absolute bottom-0">
        <Link to="/read/disclaimer">Disclaimer</Link>
      </p>
    </div>
  );
}

export default Home;
