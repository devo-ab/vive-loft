import ToolsCard from "./ToolsCard";
import features1 from "../assets/features/feature-1.png";
import features2 from "../assets/features/feature-2.png";

export default function Tools() {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* works tool start */}
          <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <ToolsCard
              title="Work with tools you already use "
              description="Deliver great service experiences fast - without the complexity of traditional ITSM
        solutions. Accelerate critical development work, eliminate toil, and deploy changes with
        ease."
              list={[
                "Continuous integration and deployment",
                "Development workflow",
                "Knowledge management",
              ]}
              para="Deliver great service experiences fast - without the complexity of traditional ITSM
        solutions."
            ></ToolsCard>
            <img
              className="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={features1}
              alt="dashboard feature image"
            />
          </div>
          {/* works tool start */}

          {/* invest card start */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={features2}
              alt="feature image 2"
            />
            <ToolsCard
              title="We invest in the world’s potential"
              description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
              list={[
                "Dynamic reports and dashboards",
                "Templates for everyone",
                "Development workflow",
                "Limitless business automation",
                "Knowledge management",
              ]}
              para="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
            ></ToolsCard>
          </div>
          {/* invest card start */}
        </div>
      </section>
    </div>
  );
}
