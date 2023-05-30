import Image from "next/image";
import React from "react";
import img from "../assets/DrKathirnia.jpg";

const Testimonials = () => {
  return (
    <div>
      <section class="bg-black dark:bg-slate-400 ">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure class="max-w-screen-md mx-auto">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-black"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <div className="flex justify-center py-6 font-extrabold text-white">
              <h3 className="text-2xl">TESTIMONIALS</h3>
            </div>
            <blockquote>
              <p class="text-xl font-medium text-gray-900">
              &quot;Dr. Priya and Teams are incredible. She is not just a doctor for us, she becomes a friend, philosopher, guide during our journey of hope… She was always there with us with her medical, emotional support, which kept us motivated and confident to sail through the complete process from just a thought to a tiny little baby in our hand. She works with you to address your health concerns, rather than just telling you random things to do. She will make sure you and she is on the same page and comfortable enough for treatment process. She does that extra mile to get you confident and explain the things in details. I was so touched with the final phase when she was more concern than us and taking a regular note of the health status, not only giving medical advices but training us for practicality of delivering a baby & handles the situation after that. It was so delightful to see the sparkle and happiness in hers eyes when she holds our baby first time in her hand after delivery. It was li...&quot;
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <Image
                class="w-6 h-6 rounded-full"
                src={img}
                alt="profile picture"
              />
              <div class="flex items-center divide-x-2 divide-gray-700">
                <div class="pr-3 font-medium text-white">
                  Abhishek K
                </div>
                <div class="pl-3 text-sm font-light text-white">
                  SDE at Microsoft
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
