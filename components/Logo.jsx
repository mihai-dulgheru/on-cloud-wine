import Image from 'next/image';

const Logo = (props) => {
  return (
    <Image
      src="/images/logo.jpg"
      alt="logo"
      width={160}
      height={160}
      className="w-auto cursor-pointer"
      {...props}
    />
  );
};

export default Logo;
