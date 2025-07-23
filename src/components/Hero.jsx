import hero from "../assets/hero.png";
import Button from "./Button";
import Airbnb from "./svg/Airbnb";
import Figma from "./svg/Figma";
import Github from "./svg/Github";
import Google from "./svg/Google";
import Mailchimp from "./svg/Mailchimp";
import Mashable from "./svg/Mashable";
import Microsoft from "./svg/Microsoft";
import Spotify from "./svg/Spotify";

export default function Hero() {
  const className =
    "inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800";

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          {/* hero description start */}
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Building digital <br />
              products & brands.
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              This free and open-source landing page template was built using the utility classes
              from{" "}
              <a className="hover:underline">
                Tailwind CSS and based on the components from the Flowbite Library and the Blocks
                System
              </a>
              .
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Button label="View on GitHub" className={className} logo={Github}></Button>

              <Button label="Get Figma File" className={className} logo={Figma}></Button>
            </div>
          </div>
          {/* hero description end */}

          {/* hero image start */}
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="hero image" />
          </div>
          {/* hero image end */}
        </div>

        {/* company logo start */}
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
              <a className="flex items-center lg:justify-center">
                <Airbnb></Airbnb>
              </a>

              <a className="flex items-center lg:justify-center">
                <Google></Google>
              </a>

              <a className="flex items-center lg:justify-center">
                <Microsoft></Microsoft>
              </a>

              <a className="flex items-center lg:justify-center">
                <Spotify></Spotify>
              </a>

              <a className="flex items-center lg:justify-center">
                <Mailchimp></Mailchimp>
              </a>

              <a className="flex items-center lg:justify-center">
                <Mashable></Mashable>
              </a>
            </div>
          </div>
        </section>
        {/* company logo end */}
      </section>
    </div>
  );
}
