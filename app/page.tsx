"use client";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/public/011.jpg";
import img2 from "@/public/012-400EastPalmettoParkRoad-BocaRaton-FL-33432-FULL-scaled.jpg";
import img3 from "@/public/13-2.jpg";
import img4 from "@/public/2.png";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    customPaging: (i: any) => (
      <div>
        <Image
          src={`/avatar-${i}.jpg`}
          alt="avatar"
          width={1000}
          height={1000}
          className="hover:scale-125 duration-500 transition-all"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "9990px",
            marginTop: "19px",
          }}
        />
      </div>
    ),
  };
  let data = [
    {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur illum consequuntur incidunt non dicta sapiente tempore quaerat cupiditate iste beatae.",
      name: "Jennifer Lee",
      country: "Florida",
    },
    {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur illum consequuntur incidunt non dicta sapiente tempore quaerat cupiditate iste beatae.",
      name: "Jack Bon",
      country: "New York",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-none md:flex w-full">
        <div className="md:w-1/4 group relative overflow-hidden">
          <Image
            src={img1}
            alt="avatar"
            width={400}
            height={400}
            className="h-64 md:h-[512px] md:w-full scale-100 group-hover:scale-125 transition-all duration-500"
          />
          <div className="absolute  flex justify-center items-center flex-col -bottom-14 w-full h-full opacity-0 bg-white transition-all duration-600 group-hover:opacity-100 group-hover:bottom-0">
            <p className="text-xl text-purple-950 font-medium">Shiny Strands</p>
            <p className="translate-y-16 group-hover:translate-y-0 duration-1000 transition-all">
              Shampoos
            </p>
          </div>
        </div>

        <div className="md:w-1/4 ">
          <div className=" group relative overflow-hidden hidden md:block">
            <Image
              src={img2}
              alt="avatar"
              width={400}
              height={400}
              className="h-64  md:w-full scale-100 group-hover:scale-125 transition-all duration-500"
            />
            <div className="absolute  flex justify-center items-center flex-col -bottom-14 w-full h-full opacity-0 bg-white transition-all duration-600 group-hover:opacity-100 group-hover:bottom-0">
              <p className="text-xl text-purple-950 font-medium">
                Shiny Strands
              </p>
              <p className="translate-y-16 group-hover:translate-y-0 duration-1000 transition-all">
                Shampoos
              </p>
            </div>
          </div>
          <div className=" group relative overflow-hidden">
            <Image
              src={img3}
              alt="avatar"
              width={400}
              height={400}
              className="h-64  md:w-full scale-100 group-hover:scale-125 transition-all duration-500"
            />
            <div className="absolute  flex justify-center items-center flex-col -bottom-14 w-full h-full opacity-0 bg-white transition-all duration-600 group-hover:opacity-100 group-hover:bottom-0">
              <p className="text-xl text-purple-950 font-medium">
                Shiny Strands
              </p>
              <p className="translate-y-16 group-hover:translate-y-0 duration-1000 transition-all">
                Shampoos
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/4 group relative overflow-hidden md:hidden">
          <Image
            src={img3}
            alt="avatar"
            width={400}
            height={400}
            className="h-64 md:h-[512px] md:w-full scale-100 group-hover:scale-125 transition-all duration-500"
          />
          <div className="absolute  flex justify-center items-center flex-col -bottom-14 w-full h-full opacity-0 bg-white transition-all duration-600 group-hover:opacity-100 group-hover:bottom-0">
            <p className="text-xl text-purple-950 font-medium">Shiny Strands</p>
            <p className="translate-y-16 group-hover:translate-y-0 duration-1000 transition-all">
              Shampoos
            </p>
          </div>
        </div>

        <div className="md:w-2/4 group relative overflow-hidden ">
          <Image
            src={img4}
            alt="avatar"
            width={400}
            height={400}
            className="h-64 md:h-[512px] md:w-full"
          />
          <div className="absolute  flex justify-center items-center flex-col -bottom-14 w-full h-full opacity-0 bg-white transition-all duration-600 group-hover:opacity-100 group-hover:bottom-0">
            <p className="text-xl text-purple-950 font-medium">Shiny Strands</p>
            <p className="translate-y-16 group-hover:translate-y-0 duration-1000 transition-all">
              Shampoos
            </p>
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto text-center md:w-2/3 md:mx-auto lg:w-1/2">
        <div>
          <FaQuoteRight className="size-6  mx-auto mt-10" />
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <p className=" font-serif mt-4">{item.message}</p>
                <p className="font-bold mt-3 font-sans text-slate-600 text-lg">
                  {item.name}
                </p>
                <p>{item.country}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className=" flex justify-center items-center space-x-4 mt-5">
          {/* <Image
            src="/avatar.png"
            alt="avatar"
            width={400}
            height={400}
            className="size-10 rounded-full scale-100 hover:scale-125 transition-all duration-500"
          /> */}
          {/* <Image
            src={Avatar}
            alt="avatar"
            width={400}
            height={400}
            defaultValue="Jennifer Lee"
            className="size-10 rounded-full scale-100 hover:scale-125 transition-all duration-500"
          /> */}
        </div>
      </div>
      <div className="bg-[#0B0D26] text-white pt-20 px-5 mt-20 ">
        <div className="md:grid md:grid-cols-2 md:gap-x-7 lg:gap-x-20 lg:w-3/4 lg:mx-auto">
          <div className="">
            <h2 className="text-6xl font-serif">Spice</h2>
          </div>
          <div>
            <p className="mt-10 text-2xl font-serif md:mt-0 lg:text-5xl">
              We make your hair healthy smooth & shiny
            </p>
          </div>
          <div className="mt-8">
            <p>Newsletter Signup</p>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="lg:w-4/5 mt-4 bg-transparent  w-full border-b-2 border-b-slate-400"
            />
            <div className="flex space-x-4 items-center mt-4">
              <input
                type="checkbox"
                name=""
                id=""
                className="size-6 bg-transparent "
              />
              <p>I agree to the privacy Policy</p>
            </div>
          </div>
          <div className="md:flex md:space-x-10  md:mt-10">
            <div className="mt-16 md:mt-0">
              <h2 className="text-xl">Socials</h2>
              <p className="mt-3">Facebook</p>
              <p className="mt-3">twitter</p>
              <p className="mt-3">Dribble</p>
              <p className="mt-3">Instagram</p>
            </div>
            <div className="mt-12 md:mt-0">
              <p className="text-xl">Menu</p>
              <p className="mt-3">Home</p>
              <p className="mt-3">Our Services</p>
              <p className="mt-3">About Us</p>
              <p className="mt-3">Shop</p>
              <p className="mt-3">Contacts</p>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-xl">Say Hello</p>
              <p className="mt-3">info@email.com</p>
            </div>
          </div>
        </div>
        <div className=" mt-16 py-2 border-t border-t-white md:w-3/4 md:mx-auto">
          <p>AxiomThemes @ 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
