import Check from "./svg/Check";

export default function ToolsCard({ title, description, list, para }) {
  return (
    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-8 font-light lg:text-xl">{description}</p>

      <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
        {list.map((item, index) => (
          <li key={index} className="flex space-x-3">
            <Check></Check>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <p className="mb-8 font-light lg:text-xl">
        {para}
      </p>
    </div>
  );
}
