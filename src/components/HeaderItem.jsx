export default function HeaderItem({ menu }) {
  return (
    <div>
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {menu.map((item, index) => (
          <li key={index}>
            <a className={item.theme}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
