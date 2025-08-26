"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import paris from "../../../public/paris.jpg";
import tokyo from "../../../public/tokyo.jpg";
import bali from "../../../public/bali.jpg";
import newyork from "../../../public/newyork.jpg";
import greece from "../../../public/greece.jpg";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Destinations for 2025",
    excerpt:
      "Discover the trending travel destinations for next year that you shouldn't miss. From hidden gems to popular hotspots, we've got you covered.",
    image: tokyo.src,
    date: "Aug 20, 2025",
    author: "Sarah Johnson",
    category: "Destinations",
    readTime: "5 min read",
    content: `
      <p>As we look ahead to 2025, the travel landscape continues to evolve with new and exciting destinations emerging. Whether you're an adventure seeker, a culture enthusiast, or simply looking to relax on pristine beaches, our curated list has something for everyone.</p>
      
      <h3>1. Kyoto, Japan</h3>
      <p>With its rich history, stunning temples, and beautiful gardens, Kyoto offers a perfect blend of traditional and modern Japan. The city's culinary scene is also not to be missed.</p>
      
      <h3>2. Lisbon, Portugal</h3>
      <p>This coastal city boasts stunning architecture, delicious cuisine, and a vibrant cultural scene. Don't miss the historic Alfama district and the famous pastéis de nata.</p>
      
      <p>Continue reading to discover the remaining 8 destinations that should be on your radar for 2025!</p>
    `,
  },
  {
    id: 2,
    title: "Travel Hacks: Pack Like a Pro",
    excerpt:
      "Learn how to pack efficiently and make the most of your luggage space with these expert tips and tricks.",
    image: newyork.src,
    date: "Aug 15, 2025",
    author: "Michael Chen",
    category: "Tips & Tricks",
    readTime: "4 min read",
    content: `
      <p>Packing can be one of the most stressful parts of trip preparation, but it doesn't have to be. With these professional packing tips, you'll be able to travel lighter, smarter, and more efficiently.</p>
      
      <h3>Roll, Don't Fold</h3>
      <p>Rolling your clothes instead of folding them can save significant space and reduce wrinkles. This technique also makes it easier to see all your items at a glance.</p>
      
      <h3>Use Packing Cubes</h3>
      <p>Packing cubes are a game-changer for organization. They help compartmentalize your belongings and compress your clothes to maximize space.</p>
      
      <h3>Follow the 5-4-3-2-1 Rule</h3>
      <p>For a week-long trip, try this formula: 5 sets of underwear and socks, 4 tops, 3 bottoms, 2 pairs of shoes, and 1 hat. Adjust as needed for your specific destination and activities.</p>
    `,
  },
  {
    id: 3,
    title: "Visa Tips for Asian Countries",
    excerpt:
      "Everything you need to know about visa requirements for popular Asian destinations.",
    image: bali.src,
    date: "Aug 10, 2025",
    author: "Emma Williams",
    category: "Travel Guide",
    readTime: "6 min read",
    content: `
      <p>Navigating visa requirements can be one of the most confusing aspects of international travel. This guide breaks down everything you need to know about visas for popular Asian destinations.</p>
      
      <h3>Thailand</h3>
      <p>Citizens of many countries can enter Thailand visa-free for up to 30 days. For longer stays, you'll need to apply for a tourist visa in advance.</p>
      
      <h3>Vietnam</h3>
      <p>Most travelers need a visa to enter Vietnam. You can apply for an e-visa online, which is typically processed within 3 business days.</p>
      
      <h3>Japan</h3>
      <p>Many nationalities can visit Japan visa-free for short stays. Check the latest requirements as policies can change.</p>
      
      <p>Always check the official government websites for the most up-to-date information, as visa policies can change frequently.</p>
    `,
  },
  {
    id: 4,
    title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
    excerpt:
      "Explore ways to travel more responsibly and minimize your environmental impact.",
    image: greece.src,
    date: "Aug 5, 2025",
    author: "David Miller",
    category: "Eco Travel",
    readTime: "7 min read",
    content: `
      <p>As travelers become more conscious of their environmental impact, sustainable travel practices are gaining importance. Here's how you can reduce your carbon footprint while exploring the world.</p>
      
      <h3>Choose Eco-Friendly Accommodations</h3>
      <p>Look for hotels and resorts with sustainability certifications. These establishments typically implement water conservation, waste reduction, and energy efficiency measures.</p>
      
      <h3>Offset Your Carbon Emissions</h3>
      <p>Many airlines now offer carbon offset programs that allow you to compensate for the emissions from your flight by investing in environmental projects.</p>
      
      <h3>Support Local Communities</h3>
      <p>Choose locally-owned accommodations, eat at local restaurants, and purchase souvenirs from local artisans. This helps ensure your tourism dollars benefit the community directly.</p>
    `,
  },
  {
    id: 5,
    title: "The Ultimate Foodie Guide to Italy",
    excerpt:
      "From pasta to gelato, discover the must-try dishes and best food experiences in Italy.",
    image: paris.src,
    date: "Jul 28, 2025",
    author: "Maria Rossi",
    category: "Food & Drink",
    readTime: "8 min read",
    content: `
      <p>Italian cuisine is much more than pizza and pasta. Each region has its own specialties and culinary traditions. Here's your guide to eating your way through Italy like a local.</p>
      
      <h3>Northern Italy</h3>
      <p>In regions like Lombardy and Piedmont, you'll find rich, butter-based dishes like risotto and polenta. Don't miss the cheese varieties like Gorgonzola and Taleggio.</p>
      
      <h3>Central Italy</h3>
      <p>Tuscany is known for its simple, flavorful dishes featuring beans, bread, and olive oil. Try ribollita (a hearty vegetable soup) and bistecca alla fiorentina.</p>
      
      <h3>Southern Italy</h3>
      <p>The south is where tomato-based sauces shine. Enjoy authentic Neapolitan pizza, fresh seafood along the Amalfi Coast, and delicious pastries filled with ricotta.</p>
    `,
  },
  {
    id: 6,
    title: "Adventure Travel: Best Destinations for Thrill-Seekers",
    excerpt:
      "From mountain climbing to scuba diving, these destinations will get your adrenaline pumping.",
    image: bali.src,
    date: "Jul 20, 2025",
    author: "Alex Turner",
    category: "Adventure",
    readTime: "5 min read",
    content: `
      <p>If you're looking for more than just a relaxing beach vacation, these adventure destinations will satisfy your craving for excitement and challenge.</p>
      
      <h3>New Zealand: The Adventure Capital</h3>
      <p>Queenstown offers bungee jumping, skydiving, jet boating, and more. The country's diverse landscapes also provide excellent hiking and mountain biking opportunities.</p>
      
      <h3>Costa Rica: Nature and Adventure</h3>
      <p>Zip-line through rainforest canopies, surf Pacific waves, hike active volcanoes, and spot incredible wildlife in this Central American paradise.</p>
      
      <h3>Nepal: Himalayan Adventures</h3>
      <p>For the ultimate trekking experience, head to Nepal. The Everest Base Camp trek and Annapurna Circuit are world-renowned for their stunning mountain scenery.</p>
    `,
  },
];

const categories = [
  "All",
  "Destinations",
  "Tips & Tricks",
  "Travel Guide",
  "Eco Travel",
  "Food & Drink",
  "Adventure",
];
const popularPosts = blogPosts.slice(0, 3);

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedPost) {
    return (
      <div className="flex items-center flex-col max-w-screen min-h-screen">
        <div className="w-[90%] flex flex-col items-center">
          {/* navbar */}
          <div className="flex items-center justify-between w-full h-[10vh]">
            <div className="font-[600] text-xl">
              Travel
              <span className="text-[#18ABC6] font-[600] text-xl">Visor</span>
            </div>
            <ul className="sm:flex hidden items-center gap-6">
              <li className="font-[500] cursor-pointer font-bold">
                <a href="/home">Home</a>{" "}
              </li>
              <li className="font-[500]">Destinations</li>
              <li className="font-[500]">Packages</li>
              <li className="font-[500]">About Us</li>
              <li className="font-[500]">Contact</li>
              <li className="font-[500] text-[#18ABC6]">Blog</li>
            </ul>
            <div className="sm:flex hidden items-center gap-8">
              <button className="font-[500]">Sign In</button>
              <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
                Sign Up
              </button>
            </div>
          </div>

          {/* Back button */}
          <div className="w-full py-4">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-[#18ABC6] font-[500]"
            >
              <FaArrowLeft /> Back to Blog
            </button>
          </div>

          {/* Blog post detail */}
          <article className="w-full max-w-4xl mx-auto py-8">
            <div className="mb-6">
              <span className="px-3 py-1 bg-[#18ABC6] text-white rounded-full text-sm">
                {selectedPost.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1c274c] mb-4">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <FaUser className="text-sm" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-sm" />
                <span>{selectedPost.date}</span>
              </div>
              <div>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <div
              className="h-64 md:h-96 w-full mb-8 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedPost.image})` }}
            ></div>

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            ></div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  {selectedPost.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{selectedPost.author}</h4>
                  <p className="text-gray-600">
                    Travel enthusiast and writer with a passion for exploring
                    new cultures and destinations.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Footer */}
        <footer className="w-full bg-[#1c274c] text-white py-12 mt-12">
          <div className="w-[90%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-8">
            <div className="flex flex-col gap-4">
              <div className="font-[600] text-xl">
                Travel
                <span className="text-[#18ABC6] font-[600] text-xl">Visor</span>
              </div>
              <p className="text-gray-300">
                Making your travel dreams come true with personalized
                experiences and unmatched service.
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
                <li className="hover:text-white cursor-pointer">
                  Destinations
                </li>
                <li className="hover:text-white cursor-pointer">Packages</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Popular Destinations</h3>
              <ul className="flex flex-col gap-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">
                  Bali, Indonesia
                </li>
                <li className="hover:text-white cursor-pointer">
                  Paris, France
                </li>
                <li className="hover:text-white cursor-pointer">
                  Tokyo, Japan
                </li>
                <li className="hover:text-white cursor-pointer">
                  New York, USA
                </li>
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
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-2 rounded text-gray-800"
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

  return (
    <div className="flex items-center flex-col max-w-screen min-h-screen">
      <div className="w-[90%] flex flex-col items-center">
        {/* navbar */}
        <div className="flex items-center justify-between w-full h-[10vh]">
          <div className="font-[600] text-xl">
            Travel
            <span className="text-[#18ABC6] font-[600] text-xl">Visor</span>
          </div>
          <ul className="sm:flex hidden items-center gap-6">
            <li className="font-[500] ">
                <a className="cursor-pointer " href="/home">Home</a>{" "}
              </li>
            <li className="font-[500]">Destinations</li>
            <li className="font-[500]">Packages</li>
            <li className="font-[500]">About Us</li>
            <li className="font-[500]">Contact</li>
            <li className="font-[500] text-[#18ABC6]">Blog</li>
          </ul>
          <div className="sm:flex hidden items-center gap-8">
            <button className="font-[500]">Sign In</button>
            <button className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500] shadow">
              Sign Up
            </button>
          </div>
        </div>

        {/* Blog Header */}
        <section className="w-full py-12 mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#1c274c] mb-4">
            Travel Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover travel tips, destination guides, and inspiring stories to
            help you plan your next adventure.
          </p>
        </section>

        {/* Search and Filter */}
        <section className="w-full max-w-4xl mx-auto mb-12">
          <div className="flex sm:flex-row flex-col gap-4 items-center justify-between mb-8">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18ABC6]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex items-center gap-2">
              <BiSolidCategory className="text-[#18ABC6]" />
              <select
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18ABC6]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-[#18ABC6] text-white rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-[500] text-xl text-[#1c274c] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No blog posts found matching your criteria.
              </p>
            </div>
          )}
        </section>

        {/* Popular Posts */}
        <section className="w-full max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-[#1c274c] mb-6">
            Popular Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="p-4">
                  <span className="px-2 py-1 bg-[#18ABC6] text-white rounded-full text-xs">
                    {post.category}
                  </span>
                  <h3 className="font-[500] text-lg text-[#1c274c] mt-2 mb-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="w-full max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-[#1c274c] mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-4">
            {categories
              .filter((cat) => cat !== "All")
              .map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? "bg-[#18ABC6] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="w-full bg-gray-100 py-12 mb-12 rounded-2xl">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-2xl font-semibold text-[#1c274c] mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest travel tips, destination guides, and exclusive
              offers delivered straight to your inbox.
            </p>
            <form className="flex sm:flex-row flex-col gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18ABC6]"
                required
              />
              <button
                type="submit"
                className="px-6 bg-[#18ABC6] text-white py-3 rounded-lg font-[500] shadow"
              >
                Subscribe
              </button>
            </form>
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
              <li className="hover:text-white cursor-pointer">Blog</li>
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
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded text-gray-800"
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
