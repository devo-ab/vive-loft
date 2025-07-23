export default function Button({label, className, logo: Logo}) {
  
  return (
    <div>
      <a
        target="_blank"
        className={className}
      >
        {Logo && <Logo />}{label}
      </a>
    </div>
  );
}
