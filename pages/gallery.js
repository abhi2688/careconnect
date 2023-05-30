import Layout from "@/components/Wrappers/Layout";
import Image from "next/image";
import gal1 from "../assets/gal1.jpeg";
import gal2 from "../assets/gal2.jpeg";
import gal3 from "../assets/gal3.jpeg";
import gal4 from "../assets/gal4.jpeg";
import gal5 from "../assets/gal5.jpeg";
import gal6 from "../assets/gal6.jpeg";
import gal7 from "../assets/gal7.jpeg";
import Doc1 from "../assets/Doc1.jpeg"
import Doc2 from "../assets/Doc2.jpeg"
import Doc3 from "../assets/Doc3.jpeg"
import searchLogo from "../assets/searchlogo.png";
import { useState } from "react";
import headerImg from "../assets/header.jpg";
import Link from "next/link";
export default function Gallery(options) {
  const gallery = [
    { key:1, pic: gal1, title: "Inpatient Room", facility: "Facility" },
    { key:2, pic: gal2, title: "Inpatient Room", facility: "Facility" },
    { key:3, pic: gal3, title: "Inpatient Room", facility: "Facility" },
    { key:4, pic: gal4, title: "Inpatient Room", facility: "Facility" },
    { key:5, pic: gal5, title: "Inpatient Room", facility: "Facility" },
    { key:6, pic: gal6, title: "Inpatient Room", facility: "Facility" },
    { key:7, pic: gal7, title: "Inpatient Room", facility: "Facility" },
    { key:8, pic: Doc1, title: "Inpatient Room", facility: "Facility" },
    { key:9, pic: Doc2, title: "Inpatient Room", facility: "Facility" },
    { key:10, pic: Doc3, title: "Inpatient Room", facility: "Facility" },
  ];

  const [filterPics, setFilterPics] = useState(gallery);

  return (
    <Layout>
      <Image
        src={headerImg}
        alt="header Img"
        className="w-full h-32 object-cover object-left-top"
      />
      <h1 className="relative -top-28 font-normal text-3xl ml-14 mt-1">
        Gallery
      </h1>

      <div className=" mb-44 px-3 flex-col flex justify-center items-center ">
        {/* <ul className="text-gray-500 m-2 my-4 p-2 flex flex-col items-center md:flex-row gap-8 md:gap-8 ">
          <li
            className={`cursor-default ${filterPics.length >= 8 && "border-b-2 border-orange-600"
              } `}
            onClick={() => setFilterPics(gallery)}
          >
            All
          </li>
          <li
            className={`cursor-default ${filterPics[0].facility == "Facility" &&
              filterPics.length < 8 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(
                gallery.filter((item) => item.facility == "Facility")
              )
            }
          >
            Facility
          </li>
          <li
            className={`cursor-default ${filterPics[0].facility == "Hospital" &&
              filterPics.length < 8 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(
                gallery.filter((item) => item.facility == "Hospital")
              )
            }
          >
            Hospital
          </li>
          <li
            className={`cursor-default ${filterPics[0].facility == "Services" &&
              filterPics.length < 8 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(
                gallery.filter((item) => item.facility == "Services")
              )
            }
          >
            Services
          </li>
        </ul> */}

        <div className="my-4 lg:px-42 w-full flex flex-wrap justify-center gap-4 rounded-lg">
          {filterPics.map((item) => {
            console.log(item.pic);
            return (
              <Link
              key={item.key}
                href="/"
                className="flex flex-wrap justify-center w-42 h-62 m-2 overflow-hidden transition-all delay-1000"
              >
                {/* <Image
                  src={searchLogo}
                  className="z-50 cursor-pointer absolute mt-14 bg-white rounded-full p-1 bg-opacity-50 hover:bg-opacity-100"
                  height={35}
                  width={35}
                /> */}
                <Image
                  src={item.pic}
                  className="h-52 w-48 hover:scale-125 transition-all rounded-lg"
                 
                  alt="hospital logo"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
