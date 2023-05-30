import React from "react";
import img1 from "../assets/pediactirc-Doctors.jpg";
import Image from "next/image";

const deptData = [
  {
    title: "OBSTETRICS",
    desc: "Here's the story of a lovely lady, who was bringing up three very lovely..",
    img: img1,
    link: "",
    key: 1,
  },
  {
    title: "GYNAECOLOGY",
    desc: "We never thought of findin' a place where we belong. Don't have to stand...",
    img: img1,
    link: "",
    key: 2,
  },
  {
    title: "HIGH RISK PREGNANCY",
    desc: "You unlock this door with the key of imagination. Beyond it is another dimension:...",
    img: img1,
    link: "",
    key: 3,
  },
  {
    title: "ONCOLOGY SCREENING",
    desc: "Life is like a hurricane here in Duckburg. Race cars, lasers, aeroplanes - it's...",
    img: img1,
    link: "",
    key: 4,
  },
  {
    title: "MENOPAUSE CLINIC",
    desc: "Your tread must be light and sure, as though your path were upon rice...",
    img: img1,
    link: "",
    key: 5,
  },
  {
    title: "INFERTILTY",
    desc: "They're creepy and they're kooky, mysterious and spooky. They're all together ooky, the Addams...",
    img: img1,
    link: "",
    key: 6,
  },
  {
    title: "PATHOLOGY",
    desc: "II bet we been together for a million years, And I bet we'll be...",
    img: img1,
    link: "",
    key: 7,
  },
];

const HosDepartment = () => {
  return (
    <div className="pb-8">
      <div className="text-center text-3xl font-semibold py-8 ">
        <h3>HOSPITAL DEPARTMENTS</h3>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 justify-center">
          {deptData.map((e) => {
            return (
              <div
                key={e.key}
                class="max-w-sm flex flex-col items-center gap-20 bg-white border border-gray-200 rounded-lg shadow "
              >
                <div className="overflow-hidden">
                <a href="#">
                  <Image
                     class="rounded-t-lg hover:scale-125 transition-all duration-500 cursor-pointer"
                    src={e.img}
                    alt=""
                  />
                </a>
                </div>
                <div class="px-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">
                      {e.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal">{e.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HosDepartment;
