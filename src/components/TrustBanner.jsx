import Cart from "./svg/Cart";
import Countries from "./svg/Countries";
import RightArrow from "./svg/RightArrow";
import UpTime from "./svg/UpTime";
import Users from "./svg/Users";
import TrustCard from "./TrustCard";

export default function TrustBanner() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          {/* description start */}
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
              Trusted Worldwide
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our rigorous security and compliance standards are at the heart of all we do. We work
              tirelessly to protect you and your customers.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <a className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                  Explore Legality Guide
                  <RightArrow></RightArrow>
                </a>
              </div>
              <div>
                <a className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                  Visit the Trust Center
                  <RightArrow></RightArrow>
                </a>
              </div>
            </div>
          </div>
          {/* description end */}

          {/* details start */}
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <TrustCard
              title="99.99% uptime"
              description="Trusted by over 600 milion users around the world"
              logo={UpTime}
            ></TrustCard>

            <TrustCard
              title="600M+ Users"
              description="For Landwind, with zero maintenance downtime"
              logo={Users}
            ></TrustCard>

            <TrustCard
              title="100+ countries"
              description="Have used Landwind to create functional websites"
              logo={Countries}
            ></TrustCard>

            <TrustCard
              title="5+ Million"
              description="Transactions per day"
              logo={Cart}
            ></TrustCard>
          </div>
          {/* details end */}
        </div>
      </section>
    </div>
  );
}
