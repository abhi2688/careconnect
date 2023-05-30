import Layout from "@/components/Wrappers/Layout";
import Image from "next/image";

import Doc1 from "../assets/Doc1.jpeg";
import Doc2 from "../assets/Doc2.jpeg";
import Doc3 from "../assets/Doc3.jpeg";
import { useState } from "react";
import headerImg from "../assets/header.jpg";

export default function DoctorsInfo() {
  const docs = [
    {
      name: "Dr. Shyam Sunder pd Singh",
      img: Doc1,
      specialization: "Pulmonary",
      about: "Veranda was born and raised in Jakarta, Indonesia. He graduated from the University of...",
      key: 1
  },
  {
      name: "Dr. Raj Kishori singh",
      img: Doc2,
      specialization: "Pulmonary",
      about: "Veranda was born and raised in Jakarta, Indonesia. He graduated from the University of...",
      key: 2
  },
  {
      name: "Dr. Hari Priya",
      img: Doc3,
      specialization: "Pulmonary",
      about: "Veranda was born and raised in Jakarta, Indonesia. He graduated from the University of...",
      key: 3
  },
  ];

  const [filterPics, setFilterPics] = useState(docs);

  return (
    <Layout>
      <Image
      alt="head img"
        src={headerImg}
        className="w-full h-32 object-cover object-left-top"
      />
      <h1 className="relative -top-28 font-normal text-3xl ml-14 mt-1">
        Doctors
      </h1>
      <div className="mb-44 px-3 flex-col flex justify-center items-center">
        <ul className="flex-col text-gray-500 m-2 my-4 p-2 flex md:flex-row gap-8 md:gap-8">
          <li
            className={`cursor-default ${
              filterPics.length >= 3 && "border-b-2 border-orange-600"
            } `}
            onClick={() => setFilterPics(docs)}
          >
            All
          </li>
          <li
            className={`cursor-default ${
              filterPics[0]?.specialization == "Pulmonary" &&
              filterPics.length <= 3 &&
              "border-b-2 border-orange-600"
            }`}
            onClick={() =>
              setFilterPics(docs.filter((item) => item.specialization == "Pulmonary"))
            }
          >
            Pulmonary
          </li>
          <li
            className={`cursor-default ${
              filterPics[0]?.specialization == "Neurologist" &&
              filterPics.length <= 3 &&
              "border-b-2 border-orange-600"
            }`}
            onClick={() =>
              setFilterPics(
                docs.filter((item) => item.specialization == "Neurologist")
              )
            }
          >
            Neurologist
          </li>
          <li
            className={`cursor-default ${
              filterPics[0]?.specialization == "Pediatric" &&
              filterPics.length <= 3 &&
              "border-b-2 border-orange-600"
            }`}
            onClick={() =>
              setFilterPics(docs.filter((item) => item.specialization == "Pediatric"))
            }
          >
            Pediatric
          </li>
        </ul>

        <div className="my-4 px-14 w-full flex flex-wrap justify-center gap-4">
          {filterPics.map((item) => {
            return (
              <div
                key={item.key}
                className="max-w-xs bg-white border border-gray-200 rounded-lg shadow "
              >
                <div className="overflow-hidden">
                <a href="#">
                  <Image
                    className=" rounded-t-lg hover:scale-125 transition-all duration-500 cursor-pointer max-h-96"
                    src={item.img}
                    alt=""
                  />
                </a>
                </div>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      {item.name}
                    </h5>
                  </a>
                  <p className="text-gray-500">{item.specialization}</p>
                  <p className="mb-3  font-semibold">{item.about}</p>
                  
                </div>
              </div>
            );
          })}
          {!filterPics.length && <h1>not found..</h1>}
        </div>
      </div>
    </Layout>
  );
}
