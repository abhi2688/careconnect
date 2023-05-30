import Layout from "@/components/Wrappers/Layout";
import headerImg from "../assets/header.jpg";
import Image from "next/image";
import iroom from "../assets/inpatient.jpg";
import dna from "../assets/Dna-Diagnostic-280x215.jpg";
import nephro from "../assets/Nephrologist-Care-280x215.jpg";
import parental from "../assets/prenatal-care-280x215.jpg";
import { useState } from "react";
import Link from "next/link";
export default function Departments() {
  const deps = [
    {
      pic: iroom,
      facility: "OBSTETRICS",
      desc: "Here's the story of a lovely lady, who was bringing up three very lovely...",
    },
    {
      pic: dna,
      facility: "GYNAECOLOGY",
      desc: "We never thought of findin' a place where we belong. Don't have to stand...",
    },
    {
      pic: nephro,
      facility: "HIGH RISK PREGNANCY",
      desc: "You unlock this door with the key of imagination. Beyond it is another dimension:...",
    },
    {
      pic: parental,
      facility: "ONCOLOGY SCREENING",
      desc: "One thousand years ago, superstition and the sword ruled. It was a time of...",
    },
    {
      pic: dna,
      facility: "MENOPAUSE CLINIC",
      desc: "We never thought of findin' a place where we belong. Don't have to stand...",
    },
    {
      pic: dna,
      facility: "INFERTILTY",
      desc: "We never thought of findin' a place where we belong. Don't have to stand...",
    },
    {
      pic: dna,
      facility: "I.U.I",
      desc: "We never thought of findin' a place where we belong. Don't have to stand...",
    },
    {
      pic: dna,
      facility: "LAPROSCOPIC SURGERY",
      desc: "We never thought of findin' a place where we belong. Don't have to stand...",
    },
    {
      pic: dna,
      facility: "ULTRASONOGRAPHY ",
      desc: "We never thought of findin' a place where we belong. Don't have to stand...",
    },
    {
      pic: dna,
      facility: "PATHOLOGY ",
      desc: "We never thought of findin' a place where we belong. Don't have to stand...",
    },
  ];

  const [filterPics, setFilterPics] = useState(deps);

  return (
    <Layout>
      <Image
        src={headerImg}
        className="w-full h-32 object-cover object-left-top"
      />
      <h1 className="relative -top-28 font-normal text-3xl ml-14 mt-1">
        Departments
      </h1>
      <div className="flex justify-center">
        <p className="w-4/5 p-2 px-6">
          Have you tried Wheaties? They’re whole wheat with all of the bran.
          Won’t you try Wheaties? For wheat is the best food of man. They’re
          crispy and crunchy the whole year through, The kiddies never tire of
          them and neither will you. So just try Wheaties, the best breakfast
          food in the land!
        </p>
      </div>
      <div className="mb-44 mx-12 flex-col flex justify-center items-center">
        <ul className="flex-col items-center text-gray-500 m-2 my-4 p-2 flex md:flex-row md:flex-wrap lg:flex-wrap gap-8 md:gap-8 text-sm  truncate">
          <li
            className={`cursor-default ${filterPics.length >= 4 && "border-b-2 border-orange-600"
              } `}
            onClick={() => setFilterPics(deps)}
          >
            All
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "PATHOLOGY" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(
                deps.filter((item) => item.facility == "PATHOLOGY")
              )
            }
          >
            PATHOLOGY
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "ULTRASONOGRAPHY" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(deps.filter((item) => item.facility == "ULTRASONOGRAPHY"))
            }
          >
            ULTRASONOGRAPHY
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "LAPROSCOPIC SURGERY" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(
                deps.filter((item) => item.facility == "LAPROSCOPIC SURGERY")
              )
            }
          >
            LAPROSCOPIC SURGERY
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "I.U.I" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(deps.filter((item) => item.facility == "I.U.I"))
            }
          >
            I.U.I
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "INFERTILTY" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(deps.filter((item) => item.facility == "INFERTILTY"))
            }
          >
            INFERTILTY
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "MENOPAUSE CLINIC" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(deps.filter((item) => item.facility == "MENOPAUSE CLINIC"))
            }
          >
            MENOPAUSE CLINIC
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "ONCOLOGY SCREENING CLINIC" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(deps.filter((item) => item.facility == "ONCOLOGY SCREENING"))
            }
          >
            ONCOLOGY SCREENING
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "HIGH RISK PREGNANCY CLINIC" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(deps.filter((item) => item.facility == "HIGH RISK PREGNANCY"))
            }
          >
            HIGH RISK PREGNANCY
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "GYNAECOLOGY" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(deps.filter((item) => item.facility == "GYNAECOLOGY"))
            }
          >
            GYNAECOLOGY
          </li>
          <li
            className={`cursor-default ${filterPics[0]?.facility == "OBSTETRICS" &&
              filterPics.length < 4 &&
              "border-b-2 border-orange-600"
              }`}
            onClick={() =>
              setFilterPics(deps.filter((item) => item.facility == "OBSTETRICS"))
            }
          >
            OBSTETRICS
          </li>

        </ul>

        <div className="my-4 w-full flex flex-wrap justify-center gap-4">
          {filterPics.map((item) => {
            return (
              <div
                // key={item.key}
                className="max-w-xs bg-white border border-gray-200 rounded-lg shadow "
              >
                <div className="overflow-hidden">
                  <Link href="#">
                    <Image
                      className="w-full rounded-t-lg hover:scale-125 transition-all duration-500 cursor-pointer max-h-96"
                      src={item.pic}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      {item.facility}
                    </h5>
                  </Link>
                  {/* <p className="text-gray-500">{e.specialization}</p> */}
                  <p className="mb-3 font-normal">{item.desc}</p>

                </div>
              </div>
            );
          })}
        </div>
        {!filterPics.length && <h1>not found..</h1>}
      </div>
    </Layout>
  );
}
