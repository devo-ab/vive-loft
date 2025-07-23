export default function FooterCard({label, list}) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {label}
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        

        {list.map((item, index) => (<li key={index} className="mb-4">
          <a className=" hover:underline">
            {item}
          </a>
        </li>))}
      </ul>
    </div>
  );
}
