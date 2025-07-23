import logo from "../assets/logo.svg";
import FooterCard from "./FooterCard";
import LogoLink from "./LogoLink";
import Circle from "./svg/Circle";
import Facebook from "./svg/Facebook";
import Git from "./svg/Git";
import Instagram from "./svg/Instagram";
import Twitter from "./svg/Twitter";
export default function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <FooterCard
              label="Company"
              list={["About", "Careers", "Brand Center", "Blog"]}
            ></FooterCard>

            <FooterCard
              label="Help center"
              list={["Discord Server", "Twitter", "Facebook", "Contact Us"]}
            ></FooterCard>

            <FooterCard label="Legal" list={["Privacy Policy", "Licensing", "Terms"]}></FooterCard>

            <FooterCard
              label="Company"
              list={["About", "Careers", "Brand Center", "Blog"]}
            ></FooterCard>

            <FooterCard label="Download" list={["iOS", "Android", "Windows", "MacOS"]}></FooterCard>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="text-center">
            <a
              href="#"
              className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img src={logo} className="h-6 mr-3 sm:h-9" alt="Learn with Sumit Logo" />
              Vibeloft{" "}
            </a>

            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2024-2025 Viveloft. All Rights Reserved. Built with{" "}
              <a target="_blank" className="text-purple-600 hover:underline dark:text-purple-500">
                Flowbite
              </a>{" "}
              and{" "}
              <a className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
            </span>

            <ul className="flex justify-center mt-5 space-x-5">
              <LogoLink logo={Facebook}></LogoLink>
              <LogoLink logo={Instagram}></LogoLink>
              <LogoLink logo={Twitter}></LogoLink>
              <LogoLink logo={Git}></LogoLink>
              <LogoLink logo={Circle}></LogoLink>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
