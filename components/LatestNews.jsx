import React from 'react';
import news1 from "../assets/Dna-Diagnostic-280x215.jpg";
import news2 from "../assets/Facility-Optic-280x215.jpg";
import news3 from "../assets/Nephrologist-Care-280x215.jpg";
import Image from 'next/image';
import Link from 'next/link';

const newsData= [
    {
        title: "Together we can do so much",
        img: news1,
        date: "May 7, 2022",
        desc: "Chosen from among all others by the Immortal Elders - Solomon, Hercules, Atlas, Zeus, Achilles, Mercury...",
        key: 1,
    },
    {
        title: "Together we can do so much",
        img: news2,
        date: "May 7, 2022",
        desc: "Chosen from among all others by the Immortal Elders - Solomon, Hercules, Atlas, Zeus, Achilles, Mercury...",
        key: 2,
    },
    {
        title: "Together we can do so much",
        img: news3,
        date: "May 7, 2022",
        desc: "Chosen from among all others by the Immortal Elders - Solomon, Hercules, Atlas, Zeus, Achilles, Mercury...",
        key: 3,
    },
]

const LatestNews = () => {
  return (
    <>
         <div className="text-center py-4 ">
        <h3 className="text-3xl font-extrabold">LATEST NEWS</h3>
        <p className="text-xl font-semibold py-2">Latest up-to-date information from our public relation department.</p>
      </div>
      <div>
      <div className=" my-4 flex flex-wrap gap-4 justify-center">
          {newsData.map((e) => {
            return (
              <div
                key={e.key}
                class="max-w-xs flex flex-col items-center gap-20 bg-white border border-gray-200 rounded-lg shadow "
              >
                <div className='w-full flex justify-center overflow-hidden  items-center'>
                <Link className='w-full' href="#">
                  <Image
                    class="w-full rounded-t-lg hover:scale-125 transition-all duration-500 cursor-pointer "
                    src={e.img}
                    alt=""
                  />
                </Link>
                </div>
                <div class="p-2">
                  <Link href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">
                      {e.title}
                    </h5>
                  </Link>
                  <p className='text-gray-500'>{e.date}</p>
                  <p class="mb-3 font-semibold">{e.desc}</p>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default LatestNews;