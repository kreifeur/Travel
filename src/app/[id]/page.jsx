"use client";

import { useSearchParams } from "next/navigation";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
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

  return (
    <div className="w-full h-screen flex items-center justify-center  p-8">
      <div className="flex  justify-center  gap-6 h-[60%] w-full">
        <img
          className=" w-[50%] h-[auto]"
          src={searchParams.get("image")}
          alt=""
        />
        <div className="w-[50%]  h-full flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold ">{name}</h1>
            <StarRating rating={searchParams.get("stars")} />
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            repellat ducimus veniam delectus error recusandae inventore et sit
            fugit explicabo.
          </h1>
          <h1 className="font-bold">{searchParams.get("price")} $</h1>
        </div>
      </div>
    </div>
  );
}
