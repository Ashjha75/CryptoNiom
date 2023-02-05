import React from "react";
import {
  FaWhatsappSquare,
  FaTwitter,
  FaRedditSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGoogle,
  FaFacebookSquare,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";
const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div className="bg-[#1e435d] pt-10 ">
      <section className=" text-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-6">
        <div className="mx-5">
          <h1 className="my-8 text-xl">About Us</h1>
          <span className="mb-6">
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Business Contacts</li>
              <li>Community</li>
              <li>Blog</li>
              <li>Terms</li>
              <li>Privacy</li>

              <li> News</li>
            </ul>
          </span>
        </div>
        <div className="mx-5">
          <h1 className="my-8 text-xl">Products</h1>
          <span className="mb-6">
            <ul>
              <li>Exchange</li>
              <li>Academy</li>
              <li>Cryptoniom Live</li>
              <li>Charity</li>
              <li>Card</li>
              <li>Labs</li>
              <li>Launchpad</li>

              <li>NFT</li>
            </ul>
          </span>
        </div>
        <div className="mx-5">
          <h1 className="my-8 text-xl">Service</h1>
          <span className="mb-6">
            <ul>
              <li>Downloads</li>
              <li>Desktop Application</li>
              <li>Buy Crypto</li>
              <li>Institutional & VIP Services</li>
              <li>OTC Trading</li>

              <li>Listing Application</li>
              <li>P2P Merchant Application</li>
              <li>Proof of Asset</li>
            </ul>
          </span>
        </div>
        <div className="mx-5">
          <h1 className="mt-8 mb-4 text-xl">Feedbacks</h1>
          <span className="mb-6">
            <ul>
              <li> Give Us Feedback</li>
              <li>Support Center</li>
              <li>Submit a request</li>
              <li>Fees</li>
              <li>Trading Rules</li>
              <li>Cryptoniom Verify</li>
              <li>Law Enforcement Requests</li>
              <li>Binance Legal (Court Orders)</li>
              <li>Binance Airdrop Portal</li>
            </ul>
          </span>
        </div>
        <div className="mx-5">
          <h1 className="my-8 text-xl">Community</h1>
          <ul className="mb-6 grid grid-cols-9 gap-5  sm:gap-4  cursor-pointer">
            <li>
              <FaFacebookSquare />{" "}
            </li>
            <li>
              <FaGoogle />{" "}
            </li>
            <li>
              <FaLinkedin />{" "}
            </li>
            <li>
              <FaTwitter />{" "}
            </li>
            <li>
              <FaWhatsappSquare />{" "}
            </li>
            <li>
              <FaRedditSquare />{" "}
            </li>
            <li>
              <FaInstagramSquare />{" "}
            </li>
            <li>
              <FaTiktok />{" "}
            </li>
            <li>
              <FaTelegram />
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <div className="text-blue-100 flex justify-center items-center py-5">
        Cryptoniom-@{date}
      </div>
    </div>
  );
};

export default Footer;
