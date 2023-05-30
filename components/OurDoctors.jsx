import React from "react";
import doc1 from "../assets/Doc1.jpeg";
import doc2 from "../assets/Doc2.jpeg";
import doc3 from "../assets/Doc3.jpeg";
import Image from "next/image";

const docData = [
  {
    name: "Dr. Shyam Sunder pd Singh",
    img: doc1,
    specialization: "M.B.B.S(RIMS), Physician & Pediatrician",
    about: "Veranda was born and raised in Jakarta, Indonesia. He graduated from the University of...",
    key: 1
  },
  {
    name: "Dr. Hari Priya",
    img: doc2,
    specialization: "Pulmonary",
    about: "Veranda was born and raised in Jakarta, Indonesia. He graduated from the University of...",
    key: 2
  },
  {
    name: "Dr. Raj Kishori singh",
    img: doc3,
    specialization: "Pulmonary",
    about: "Veranda was born and raised in Jakarta, Indonesia. He graduated from the University of...",
    key: 3
  },
]

const OurDoctors = () => {
  return (
    <div className="bg-yellow-50 pb-4">
      <div className="text-center py-4">
        <h3 className="text-3xl font-extrabold">OUR DOCTORS</h3>
        <p className="text-xl font-semibold py-2">Our doctors are specialized in their field and have more than 10 years of experiences.</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {docData.map((e) => {
          return (
            <div
              key={e.key}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            >
              <div className="overflow-hidden">
                <a href="#">
                  <Image
                    className=" rounded-t-lg hover:scale-125 transition-all duration-500 cursor-pointer max-h-96"
                    src={e.img}
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {e.name}
                  </h5>
                </a>
                <p className="text-gray-500">{e.specialization}</p>
                <p className="mb-3 font-normal font-semibold">{e.about}</p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurDoctors;
