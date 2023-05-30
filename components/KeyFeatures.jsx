import React from "react";
import { BsHospital } from "react-icons/bs";

const keyFet = [
  {
    title: "24/7 Service",
    desc: "We have the availability of doctors round the clock to provide the best emergency care needed either to out-patients or in-patients.",
    // icon: BsHospital,
    ley: 1,
  },
  {
    title: "Infertility Service",
    desc: "Our team of professionals at Shri Krushna Seva Sadan has spent years specialising in and receiving training with a singular focus on developing novel solutions to problems involving male and female infertility.",
    // icon: {BsHospital},
    ley: 2,
  },
  {
    title: "Gynaecology & Endoscopy",
    desc: "Our job doesn’t end when we help a couple conceive. With a team of experts trained in every aspect of pregnancy and childbirth, we are there with you throughout the journey.",
    // icon: BsHospital,
    ley: 3,
  },
  {
    title: "Comprehensive Antenatal care",
    desc: "We provide in-depth counseling and care for a healthy baby. First time mothers require such sessions the most...",
    // icon: BsHospital,
    ley: 4,
  },
  {
    title: "Painless Delivery",
    desc: "Painless delivery gives women a chance at experiencing natural childbirth, with very little intervention.",
    // icon: BsHospital,
    ley: 5,
  },
  {
    title: "Obstetrics & Embryology",
    desc: "our team of experts have specialized and trained for years with their soul focus on finding unique solutions to male and female infertility issues.",
    // icon: BsHospital,
    ley: 6,
  },
];

const KeyFeatures = () => {
  return (
    <div className="pb-4">
      <div className="text-center py-4 ">
        <h3 className="text-3xl font-extrabold">BEST HOSPITAL IN TOWN</h3>
        <p className="text-xl font-semibold py-2">
          When It Comes to Health Care
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {keyFet.map((e) => {
          return (
            <div
              key={e.key}
              className="max-w-sm p-6 bg-white border-gray-200 items-center"
            >
              <div className="w-full mx-auto flex justify-center items-center text-3xl text-orange-500 pb-2">
                {<BsHospital />}
              </div>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-center">
                {e.title}
              </h5>
              <p className="mb-3 font-normal text-gray-500 text-center">
                {e.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyFeatures;
