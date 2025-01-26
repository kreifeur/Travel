"use client";
import { useState } from "react";
import Image from "next/image";
import im1 from "../../public/images.jpg";
import paris from "../../public/paris.jpg";
import tokyo from "../../public/tokyo.jpg";
import bali from "../../public/bali.jpg";
import newyork from "../../public/newyork.jpg";
import greece from "../../public/greece.jpg";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    stars: 5,
    image: bali.src,
    categories: ["Asie", "Islands"],
    price: 1200, // Price in USD
  },
  {
    id: 2,
    name: "Paris, France",
    stars: 4.5,
    image: paris.src,
    categories: ["Popular Destination"],
    price: 1500, // Price in USD
  },
  {
    id: 3,
    name: "New York, USA",
    stars: 4.7,
    image: newyork.src,
    categories: ["Popular Destination"],
    price: 1800, // Price in USD
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    stars: 4.9,
    image: tokyo.src,
    categories: ["Popular Destination", "Asie"],
    price: 1700, // Price in USD
  },
  {
    id: 5,
    name: "Honolulu, Hawaii",
    stars: 5,
    image: im1.src,
    categories: ["Islands"],
    price: 1400, // Price in USD
  },
  {
    id: 6,
    name: "Santorini, Greece",
    stars: 4.8,
    image: greece.src,
    categories: ["Islands"],
    price: 1600, // Price in USD
  },
];

const availableCategories = Array.from(
  new Set(Destinations.flatMap((destination) => destination.categories))
);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 !== 0; // Whether there’s a half star
    const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

    return (
      <div style={{ display: "flex" }}>
        {[...Array(fullStars)].map((_, index) => (
          <IoIosStar className="text-lg text-[#fd346e]" key={`full-${index}`} />
        ))}
        {halfStar && (
          <IoIosStarHalf className="text-lg text-[#fd346e]" key="half" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <IoIosStarOutline
            className="text-lg text-[#fd346e]"
            key={`empty-${index}`}
          />
        ))}
      </div>
    );
  };

  // Filter destinations by selected category
  const filteredDestinations = selectedCategory
    ? Destinations.filter((destination) =>
        destination.categories.includes(selectedCategory)
      )
    : Destinations; // Show all if no category is selected

  return (
    <div className="flex items-center flex-col max-w-screen min-h-screen ">
      <div className="w-[90%] flex flex-col items-center ">
        {/* navbar */}
        <div className="flex items-center justify-between w-full h-[10vh]">
          <div className="font-[600] text-xl">
            Travel
            <span className="text-[#18ABC6] font-[600] text-xl">Visor</span>
          </div>
          <ul className="sm:flex hidden items-center gap-6 ">
            <li className="font-[500]">Home</li>
            <li className="font-[500]">ticket</li>
            <li className="font-[500]">explore</li>
            <li className="font-[500]">activity</li>
          </ul>
          <div className="sm:flex hidden items-center gap-8 ">
            <button className="font-[500]">sign in</button>
            <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
              sign up
            </button>
          </div>
        </div>
        {/* hero */}
        <div className="h-[90vh] w-full flex sm:pt-[5vh] justify-center ">
          <div
            style={{ backgroundImage: `url(${im1.src})` }}
            className=" w-full sm:h-[70%] h-[100%] bg-center bg-cover rounded-3xl relative flex justify-center"
          >
            {/* search */}
            <div className="w-[80%] shadow rounded-xl bg-white h-[20vh] absolute  bottom-[-10vh] p-4 sm:flex flex-col justify-around hidden">
              <ul className="flex gap-8 items-center font-[500]">
                <li className="font-[500]">Hotel</li>
                <li className="font-[500]">Flight</li>
                <li className="font-[500]">Bus & Train</li>
                <li className="font-[500]">Holiday</li>
              </ul>
              <hr className="border-[0.7px] border-gray-100" />
              <div className="flex items-center gap-8 justify-between">
                {/* one */}
                <div className="flex flex-col gap-2 ">
                  <div className="font-[500] text-gray-500">Destination</div>
                  <input
                    placeholder="Bali , Indonesia"
                    type="text"
                    className="outline-none px-3 py-2 rounded-xl bg-gray-100 placeholder:text-black placeholder:font-[500]"
                  />
                </div>
                {/* one */}
                <div className="flex flex-col gap-2 ">
                  <div className="font-[500] text-gray-500">Destination</div>
                  <input
                    placeholder="Bali , Indonesia"
                    type="text"
                    className="outline-none px-3 py-2 rounded-xl bg-gray-100 placeholder:text-black placeholder:font-[500]"
                  />
                </div>

                {/* one */}
                <div className="flex flex-col gap-2 ">
                  <div className="font-[500] text-gray-500">Destination</div>
                  <input
                    placeholder="Bali , Indonesia"
                    type="text"
                    className="outline-none px-3 py-2 rounded-xl bg-gray-100 placeholder:text-black placeholder:font-[500]"
                  />
                </div>

                {/* one */}
                <div className="flex flex-col gap-2 ">
                  <div className="font-[500] text-gray-500">Destination</div>
                  <input
                    placeholder="Bali , Indonesia"
                    type="text"
                    className="outline-none px-3 py-2 rounded-xl bg-gray-100 placeholder:text-black placeholder:font-[500]"
                  />
                </div>

                {/* search */}

                <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* best of the week */}

        <div className="flex items-center justify-between sm:h-[50vh]  w-full py-6 sm:flex-row flex-col-reverse gap-8">
          {/* image */}
          {Destinations.slice(0, 2).map((destination) => (
            <div
              key={destination.id}
              className="sm:w-[20%] w-full sm:h-full h-[40vh] flex flex-col gap-2"
            >
              <div
                style={{ backgroundImage: `url(${destination.image})` }}
                className=" w-full h-full bg-center bg-cover rounded-3xl relative flex justify-center"
              ></div>
              <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-[500] text-lg text-[#1c274c]">
                  {destination.name}
                </h3>
                <StarRating rating={destination.stars} />
              </div>
              <div className="font-[600] text-xl text-[#1c274c]">
              {destination.price} $
              </div>
              </div>
            </div>
          ))}

          {/* text */}
          <div className="sm:w-[50%] sm:h-full w-full  flex flex-col items-start gap-4">
            <div className="text-3xl font-[500] text-[#1c274c]">
              Best of this week
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dicta enim officia cumque alias sapiente recusandae accusantium,
              iste numquam veniam eius, sit placeat maxime vero quasi illo quis
              facilis cupiditate.
            </div>

            <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
              Find new place
            </button>
          </div>
        </div>

        {/* Most Popular in 2023 */}
        <div className="w-full flex flex-col gap-4 py-6">
          <div>
            <h2 className="text-3xl font-[500] text-[#1c274c]">
              Most Popular in 2023
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="w-full grid sm:grid-cols-4 grid-cols-1 gap-8">
            {Destinations.slice(0, 4).map((destination) => (
              <div key={destination.id} className="w-full flex flex-col gap-2">
                <div
                  style={{ backgroundImage: `url(${destination.image})` }}
                  className="h-[30vh] w-full bg-center bg-cover rounded-3xl"
                ></div>
                <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-[500] text-lg text-[#1c274c]">
                  {destination.name}
                </h3>
                <StarRating rating={destination.stars} />
              </div>
              <div className="font-[600] text-xl text-[#1c274c]">
              {destination.price} $
              </div>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/*  explore more */}

        <div className="w-full flex flex-col gap-6 py-6">
          <div>
            <h2 className="text-3xl font-[500] text-[#1c274c]">Explore More</h2>
            <p>Let’s go for an adventure.</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {availableCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)} // Set the selected category
                className={`px-4 py-2 rounded font-[500] ${
                  selectedCategory === category
                    ? "bg-[#1c274c] text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {category}
              </button>
            ))}
            <button
              onClick={() => setSelectedCategory("")} // Reset to show all
              className="px-4 py-2 rounded font-[500] bg-gray-200 text-black"
            >
              Show All
            </button>
          </div>

          {/* Filtered Destinations */}
          <div className="w-full grid sm:grid-cols-4 grid-cols-1 gap-8">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="w-full flex flex-col gap-2">
                <div
                  style={{ backgroundImage: `url(${destination.image})` }}
                  className="h-[30vh] w-full bg-center bg-cover rounded-3xl"
                ></div>
                <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-[500] text-lg text-[#1c274c]">
                  {destination.name}
                </h3>
                <StarRating rating={destination.stars} />
              </div>
              <div className="font-[600] text-xl text-[#1c274c]">
              {destination.price} $
              </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="w-full bg-[#1c274c] text-white py-6 flex flex-col items-center">
        <div className="w-[90%] flex flex-wrap justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">TravelVisor</h3>
            <p>Your travel companion for unforgettable journeys.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-1">
              <li>Home</li>
              <li>Ticket</li>
              <li>Explore</li>
              <li>Activity</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <div className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center bg-[#1877F2]">
                <FaFacebookF />
              </div>
              <div className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center bg-[#1DA1F2]">
                <FaTwitter />
              </div>
              <div className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center bg-[#E1306C]">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          © 2025 TravelVisor. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
