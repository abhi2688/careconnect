import React from "react";
import serv1 from "../assets/Dna-Diagnostic-280x215.jpg";
import Image from "next/image";
import Link from "next/link";
const servicesData = [
  {
    title: "Infertility Service",
    desc: "If you and your partner are facing an infertility issue you can contact the Shri Krusna Seva Sadan centre to start your journey of family building with the most successful provider of infertility treatments in India.",
    img: serv1,
    link: "",
    key: 1,
  },
  {
    title: "Gynaecology & Endoscopy",
    desc: "At Shri Krushna Seva Sadan, our expert surgeons employ Gynaecologic Minimally Invasive Surgery (MIS) techniques as they provide modern, precise and safe care for women with conditions like uterine fibroids, abnormal uterine bleeding, pelvic pain, infertility, endometriosis, pelvic organ prolapse, cervical incompetence and ovarian cysts.",
    img: serv1,
    link: "",
    key: 2,
  },
  {
    title: "Obstetrics & Paediatric",
    desc: "Our state-of-the-art facility, our specially trained clinicians and nurses, supported by paediatric specific equipment and technologies all contribute to expert, timely and efficient care to even our smallest of patients.",
    img: serv1,
    link: "",
    key: 3,
  },
  {
    title: "Embryology",
    desc: "At Shri Krushna Seva Sadan our team of experts have specialized and trained for years with their soul focus on finding unique solutions to male and female infertility issues. Be it medication, surgeries, hormone therapy, or any other Assisted Reproductive Techniques, we got you covered.",
    img: serv1,
    link: "",
    key: 4,
  },
];

const OurServices = () => {
  return (
    <>
      <div className="text-center text-3xl font-semibold py-8">
        <h3>Our Services</h3>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 justify-center lg:justify-around px-14">
          {servicesData.map((e) => {
            return (
              <div
                key={e.key}
                class="p-1 max-w-xs lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow "
              >
                <div className="overflow-hidden flex justify-center">
                  <Link href="#">
                    <Image
                      class=" rounded-t-lg hover:scale-125 transition-all duration-500 cursor-pointer"
                      src={e.img}
                      alt=""
                    />
                  </Link>
                </div>
                <div class="p-1">
                  <Link href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">
                      {e.title}
                    </h5>
                  </Link>
                  <p class="mb-3 font-normal">{e.desc}</p>
                  <Link
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurServices;
