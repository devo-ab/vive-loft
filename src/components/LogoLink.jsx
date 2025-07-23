export default function LogoLink({logo: Logo}) {
  return (
    <div>
      <li>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
        >
          {<Logo />}
        </a>
      </li>
    </div>
  );
}
