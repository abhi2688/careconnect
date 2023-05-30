import Layout from "@/components/Wrappers/Layout";
import { useEffect, useState } from "react";
import mailLogo from "../assets/gmail.png"
import wpLogo from "../assets/whatsapp.png"
import instaLogo from "../assets/instagram.png"
import Image from "next/image";
export default function ContactUsService() {
    const [directions, setDirections] = useState(null);
    const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   const directionsService = new window.google.maps.DirectionsService();
  
    //   directionsService.route(
    //     {
    //       origin: 'San Francisco, CA',
    //       destination: 'Los Angeles, CA',
    //       travelMode: 'DRIVING'
    //     },
    //     (response, status) => {
    //       if (status === 'OK') {
    //         setDirections(response);
    //       } else {
    //         setError('Directions request failed due to ' + status);
    //       }
    //     }
    //   );
    // }, []);
    return <Layout>
        <div className="lg:px-22 px-4 mt-2 ">
            <h1 className="ml-4 text-gray-800 text-xl">Contact us</h1>
            <div className="flex flex-col items-center lg:items-baseline lg:flex-row justify-around mx-4 m-2 gap-8">


                <div className="flex-grow-0 lg:w-1/2 flex flex-col gap-4">
                    <h1 className="text-gray-600 text-xl mt-4 ">Get in touch</h1>
                    <div className="text-md text-gray-700">
                        This is Herman Brooks. Herman is just like the rest of us. Everyday he has to make all kinds of decisions like what to wear, whom to date and when to panic.
                    </div>
                    <div className="text-md text-gray-700">

                        Now these decisions should be easy but if you take a look inside Herman’s head, you’ll see why he sometimes has trouble making up his mind. Sometimes they agree… usually they don’t. But the struggle is going on inside all of us and it’s all going on inside Herman’s head.
                    </div>


                    <div className="mt-4">
                        CONTACT INFO
                        <div>

                            <p className="flex item-center gap-2 mt-2">
                                <Image src={mailLogo} height={5} width={23} />
                                <a
                                    href="mailto:example@example.com"
                                    className="text-gray-700 hover:text-blue-700 "
                                >
                                    info@hospitalplus.com
                                </a>
                            </p>
                            <p className="flex item-center gap-2 mt-2">
                                <Image src={wpLogo} height={5} width={23} />

                                <a
                                    href="https://api.whatsapp.com/send?phone=+1234567890"
                                    className="text-gray-700 hover:text-blue-700 "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +3212345678
                                </a>
                            </p>
                            <p className="flex item-center gap-2 mt-2">
                                <Image src={instaLogo} height={5} width={23} />

                                <a
                                    href="tel:+1234567890"
                                    className="text-gray-700 hover:text-blue-700 "
                                >
                                    +3212345678
                                </a>
                            </p>
                        </div>

                    </div>
                </div>


            </div>
            <div>
      {/* {directions && (
        <div>
          <h2>Directions</h2>
          <p>{directions.routes[0].legs[0].distance.text}</p>
          <p>{directions.routes[0].legs[0].duration.text}</p>
          <ul>
            {directions.routes[0].legs[0].steps.map((step, index) => (
              <li key={index}>{step.instructions}</li>
            ))}
          </ul>
        </div>
      )}
      {error && <p>{error}</p>} */}
    </div>
        </div>

    </Layout >
}