"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import paris from "../../../public/paris.jpg";
import tokyo from "../../../public/tokyo.jpg";
import bali from "../../../public/bali.jpg";
import newyork from "../../../public/newyork.jpg";
import greece from "../../../public/greece.jpg";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { BiSolidOffer, BiSupport } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { BsFillCalendarCheckFill } from "react-icons/bs";

// Hero carousel data
const heroSlides = [
  {
    id: 1,
    title: "Discover Your Next Adventure",
    subtitle: "Tailor-made trips at unbeatable prices",
    image: bali.src,
    cta: "Book Now",
  },
  {
    id: 2,
    title: "Explore The World With Confidence",
    subtitle: "24/7 support from travel experts",
    image: paris.src,
    cta: "Get a Free Quote",
  },
  {
    id: 3,
    title: "Create Memories That Last Forever",
    subtitle: "Luxury experiences at affordable prices",
    image: tokyo.src,
    cta: "View Packages",
  },
];

const Destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    stars: 5,
    image: bali.src,
    categories: ["Asia", "Islands"],
    price: 1200,
    duration: "7 days",
    description:
      "Experience the beauty of tropical paradise with pristine beaches and vibrant culture.",
  },
  {
    id: 2,
    name: "Paris, France",
    stars: 4.5,
    image: paris.src,
    categories: ["Europe", "Popular Destination"],
    price: 1500,
    duration: "5 days",
    description:
      "The city of love awaits with its iconic landmarks and exquisite cuisine.",
  },
  {
    id: 3,
    name: "New York, USA",
    stars: 4.7,
    image: newyork.src,
    categories: ["North America", "Popular Destination"],
    price: 1800,
    duration: "6 days",
    description:
      "The concrete jungle where dreams are made - explore the city that never sleeps.",
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    stars: 4.9,
    image: tokyo.src,
    categories: ["Asia", "Popular Destination"],
    price: 1700,
    duration: "8 days",
    description:
      "Discover the perfect blend of ancient traditions and cutting-edge technology.",
  },
  {
    id: 5,
    name: "Santorini, Greece",
    stars: 4.8,
    image: greece.src,
    categories: ["Europe", "Islands"],
    price: 1600,
    duration: "7 days",
    description:
      "White-washed buildings and breathtaking views of the Aegean Sea.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Bali Trip",
    rating: 5,
    text: "The entire experience was flawless. The accommodations were excellent and the guides were knowledgeable and friendly.",
    image: "/user1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Paris Package",
    rating: 4.5,
    text: "We had an amazing time in Paris. Everything was well-organized and the recommendations for local dining were spot on.",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Tokyo Adventure",
    rating: 5,
    text: "This was our first trip to Japan and TravelVisor made it incredibly smooth. Would definitely book with them again!",
    image: "/user3.jpg",
  },
];

const specialOffers = [
  {
    id: 1,
    name: "Early Bird Special: Bali",
    discount: "25% OFF",
    originalPrice: 1600,
    discountedPrice: 1200,
    image: bali.src,
    expires: "2025-09-15",
  },
  {
    id: 2,
    name: "Last Minute: Paris",
    discount: "30% OFF",
    originalPrice: 2100,
    discountedPrice: 1500,
    image: paris.src,
    expires: "2025-08-30",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Destinations for 2025",
    excerpt:
      "Discover the trending travel destinations for next year that you shouldn't miss.",
    image: tokyo.src,
    date: "Aug 20, 2025",
  },
  {
    id: 2,
    title: "Travel Hacks: Pack Like a Pro",
    excerpt:
      "Learn how to pack efficiently and make the most of your luggage space.",
    image: newyork.src,
    date: "Aug 15, 2025",
  },
  {
    id: 3,
    title: "Visa Tips for Asian Countries",
    excerpt:
      "Everything you need to know about visa requirements for popular Asian destinations.",
    image: bali.src,
    date: "Aug 10, 2025",
  },
];

const availableCategories = Array.from(
  new Set(Destinations.flatMap((destination) => destination.categories))
);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

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

  const [menuOpen, setMenuOpen] = useState(false);

  const filteredDestinations = selectedCategory
    ? Destinations.filter((destination) =>
        destination.categories.includes(selectedCategory)
      )
    : Destinations;

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <div className="flex items-center flex-col max-w-screen min-h-screen ">
      <div className="w-[90%] flex flex-col items-center ">
        {/* navbar */}
        <div className="flex items-center justify-between w-full h-[10vh] z-[100]">
          <div className="font-[600] text-xl">
            Travel
            <span className="text-[#18ABC6] font-[600] text-xl">Visor</span>
          </div>

          {/* Desktop Menu */}
          <ul className="sm:flex hidden items-center gap-6">
            <li className="font-[500] cursor-pointer">Home</li>
            <li className="font-[500] cursor-pointer">Destinations</li>
            <li className="font-[500] cursor-pointer">Packages</li>
            <li className="font-[500] cursor-pointer">About Us</li>
            <li className="font-[500] cursor-pointer">Contact</li>
          </ul>

          {/* Desktop Buttons */}
          <div className="sm:flex hidden items-center gap-8">
            <button className="font-[500]">Sign In</button>
            <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
              Sign Up
            </button>
          </div>

          {/* Burger Icon (Mobile) */}
          <div
            className="sm:hidden flex flex-col gap-1 cursor-pointer z-[100]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-[#1c274c]"></span>
            <span className="w-6 h-0.5 bg-[#1c274c]"></span>
            <span className="w-6 h-0.5 bg-[#1c274c]"></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden fixed top-[0] bg-white text-[#1c274c] z-[99] h-screen w-screen flex flex-col items-center gap-4 justify-center py-4 shadow">
            <a className="font-[500]" href="#">
              Home
            </a>
            <a className="font-[500]" href="#">
              Destinations
            </a>
            <a className="font-[500]" href="#">
              Packages
            </a>
            <a className="font-[500]" href="#">
              About Us
            </a>
            <a className="font-[500]" href="#">
              Contact
            </a>
            <button className="font-[500]">Sign In</button>
            <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
              Sign Up
            </button>
          </div>
        )}

        {/* Hero Carousel Section */}
        <section className="min-h-[90vh] w-full flex justify-center relative mb-12">
          <div className="w-full h-[80vh] bg-center bg-cover rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Slides */}
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>
              </div>
            ))}

            {/* Content */}
            <div className="z-10 text-center text-white px-4 transition-transform duration-1000 transform">
              <h1 className="sm:text-5xl text-3xl font-bold mb-4">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="sm:text-xl text-lg mb-8 max-w-2xl mx-auto">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
                <button className="px-6 bg-[#18ABC6] text-white py-3 rounded-full font-[500] shadow text-lg">
                  {heroSlides[currentSlide].cta}
                </button>
                <button className="px-6 bg-white text-[#1c274c] py-3 rounded-full font-[500] shadow text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 p-3 rounded-full hover:bg-opacity-50 transition"
            >
              <FaArrowLeft className="text-white text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 p-3 rounded-full hover:bg-opacity-50 transition"
            >
              <FaArrowRight className="text-white text-xl" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Us / Why Choose Us */}
        <section className="w-full py-12 mb-12 ">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[500] text-[#1c274c]">
              Why Choose TravelVisor
            </h2>
            <p className="text-gray-600">
              We make your travel dreams come true with our exceptional service
            </p>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 ">
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center ">
              <GiWorld className="text-4xl text-[#18ABC6] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">
                Our experienced guides know the hidden gems and will make your
                trip unforgettable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              <BiSolidOffer className="text-4xl text-[#18ABC6] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                We offer competitive prices without compromising on quality or
                experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              <BiSupport className="text-4xl text-[#18ABC6] mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our support team is available round the clock to assist you
                during your travels.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-100 p-8 rounded-2xl">
            <div className="flex sm:flex-row flex-col items-center justify-between">
              <div className="sm:w-1/2 w-full mb-6 sm:mb-0">
                <h3 className="text-2xl font-semibold mb-4">
                  About TravelVisor
                </h3>
                <p className="text-gray-600 mb-4">
                  With over 10 years of experience in the travel industry, we've
                  helped thousands of travelers discover amazing destinations
                  around the world. Our team of travel experts carefully curates
                  each itinerary to ensure you have the most memorable
                  experience.
                </p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#18ABC6]">
                      50K+
                    </div>
                    <div className="text-gray-600">Happy Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#18ABC6]">
                      100+
                    </div>
                    <div className="text-gray-600">Destinations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#18ABC6]">15</div>
                    <div className="text-gray-600">Awards</div>
                  </div>
                </div>
              </div>
              <div className="sm:w-2/5 w-full">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h4 className="text-lg font-semibold mb-4">
                    Our Certifications
                  </h4>
                  <div className="flex items-center gap-3 mb-3">
                    <FaCheckCircle className="text-green-500" />
                    <span>IATA Certified</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <FaCheckCircle className="text-green-500" />
                    <span>ASTA Member</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <FaCheckCircle className="text-green-500" />
                    <span>Sustainable Tourism Partner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    <span>Google Premier Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations / Packages */}
        <section className="w-full py-12 mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-[500] text-[#1c274c]">
                Popular Destinations
              </h2>
              <p className="text-gray-600">
                Explore our most sought-after travel packages
              </p>
            </div>
            <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
              View All Packages
            </button>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
            {Destinations.slice(0, 3).map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-[500] text-lg text-[#1c274c]">
                        {destination.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {destination.duration}
                      </p>
                    </div>
                    <div className="font-[600] text-xl text-[#1c274c]">
                      ${destination.price}
                    </div>
                  </div>
                  <StarRating rating={destination.stars} />
                  <p className="text-gray-600 my-3 text-sm">
                    {destination.description}
                  </p>
                  <button className="w-full px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] mt-2">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Deal Banner */}
          <div className="mt-10 bg-gradient-to-r from-[#18ABC6] to-[#0f7a94] rounded-2xl p-6 text-white">
            <div className="flex sm:flex-row flex-col items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-2xl font-semibold mb-2">
                  Summer Special Deal
                </h3>
                <p>
                  Get 20% off on all European destinations. Book before August
                  31st!
                </p>
              </div>
              <button className="px-6 bg-white text-[#18ABC6] py-3 rounded-full font-[500] shadow">
                Claim Offer
              </button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 mb-12 bg-gray-100 rounded-2xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[500] text-[#1c274c]">How It Works</h2>
            <p className="text-gray-600">
              Booking your dream vacation is simple with our easy process
            </p>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-12 h-12 bg-[#18ABC6] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Destination</h3>
              <p className="text-gray-600">
                Browse our curated collection of destinations and find your
                perfect match.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-12 h-12 bg-[#18ABC6] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize Package</h3>
              <p className="text-gray-600">
                Tailor your trip with preferred accommodations, activities, and
                extras.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-12 h-12 bg-[#18ABC6] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Enjoy</h3>
              <p className="text-gray-600">
                Confirm your booking and get ready for an unforgettable
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[500] text-[#1c274c]">
              What Our Travelers Say
            </h2>
            <p className="text-gray-600">
              Hear from travelers who have explored the world with us
            </p>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 my-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#18ABC6] flex items-center justify-center text-[#18ABC6]">
              ★
            </div>
            <div>
              <span className="font-semibold">4.8</span> out of 5 based on{" "}
              <span className="font-semibold">2,458</span> reviews
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="w-full py-12 mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-[500] text-[#1c274c]">
                Special Offers
              </h2>
              <p className="text-gray-600">
                Limited-time deals you don't want to miss
              </p>
            </div>
            <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
              View All Offers
            </button>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md relative"
              >
                <div className="absolute top-4 right-4 bg-[#fd346e] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {offer.discount}
                </div>
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${offer.image})` }}
                ></div>
                <div className="p-5">
                  <h3 className="font-[500] text-lg text-[#1c274c] mb-2">
                    {offer.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-500 line-through">
                      ${offer.originalPrice}
                    </span>
                    <span className="font-[600] text-xl text-[#1c274c]">
                      ${offer.discountedPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <BsFillCalendarCheckFill />
                    <span>
                      Offer expires:{" "}
                      {new Date(offer.expires).toLocaleDateString()}
                    </span>
                  </div>
                  <button className="w-full px-4 bg-[#18ABC6] text-white py-2 rounded font-[500]">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-full py-12 mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-[500] text-[#1c274c]">
                Travel Tips & Blog
              </h2>
              <p className="text-gray-600">
                Insights and advice for the modern traveler
              </p>
            </div>
            <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
              View All Articles
            </button>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="p-5">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h3 className="font-[500] text-lg text-[#1c274c] my-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <button className="text-[#18ABC6] font-[500] flex items-center gap-1">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full py-12 mb-12 bg-gray-100 rounded-2xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[500] text-[#1c274c]">Get In Touch</h2>
            <p className="text-gray-600">
              Have questions? We're here to help plan your perfect trip
            </p>
          </div>

          <div className="flex sm:flex-row flex-col gap-8">
            <div className="sm:w-1/2 w-full">
              <form className="bg-white p-6 rounded-2xl shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18ABC6]"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18ABC6]"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="destination"
                  >
                    Preferred Destination
                  </label>
                  <select
                    id="destination"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18ABC6]"
                  >
                    <option value="">Select a destination</option>
                    {Destinations.map((dest) => (
                      <option key={dest.id} value={dest.name}>
                        {dest.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18ABC6]"
                    placeholder="Tell us about your travel plans"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 bg-[#18ABC6] text-white py-3 rounded font-[500] shadow"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="sm:w-1/2 w-full">
              <div className="bg-white p-6 rounded-2xl shadow-md h-full">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#1c274c]">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#1c274c]">Email</h4>
                  <p className="text-gray-600">info@travelvisor.com</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#1c274c]">Office Hours</h4>
                  <p className="text-gray-600">Monday-Friday: 9am-6pm</p>
                  <p className="text-gray-600">Saturday: 10am-4pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1c274c]">Live Chat</h4>
                  <p className="text-gray-600 mb-3">
                    Available during office hours
                  </p>
                  <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500]">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#1c274c] text-white py-12">
        <div className="w-[90%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-[600] text-xl">
              Travel
              <span className="text-[#18ABC6] font-[600] text-xl">Visor</span>
            </div>
            <p className="text-gray-300">
              Making your travel dreams come true with personalized experiences
              and unmatched service.
            </p>
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

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Destinations</li>
              <li className="hover:text-white cursor-pointer">Packages</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Popular Destinations</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">
                Bali, Indonesia
              </li>
              <li className="hover:text-white cursor-pointer">Paris, France</li>
              <li className="hover:text-white cursor-pointer">Tokyo, Japan</li>
              <li className="hover:text-white cursor-pointer">New York, USA</li>
              <li className="hover:text-white cursor-pointer">
                Santorini, Greece
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for exclusive deals and travel tips.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="w-[90%] mx-auto border-t border-gray-700 mt-8 pt-8 flex sm:flex-row flex-col justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 TravelVisor. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
