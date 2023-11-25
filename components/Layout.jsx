import Image from 'next/image';
import { useState } from 'react';
import { Menu } from '.';
import barsIcon from '/public/icons/bars.svg';

const Layout = ({ children, title }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full flex-col bg-white">
      <header className="flex flex-row items-center border-2 border-b border-gray-200 bg-white px-4 py-3 shadow-md">
        <Image
          src={barsIcon}
          alt="bars"
          width={24}
          height={24}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        <h1 className="w-full text-center text-xl font-medium uppercase tracking-tight text-gray-800">
          {title}
        </h1>
      </header>
      <main className="flex flex-1 flex-col">
        <section className="grid flex-1 p-4">{children}</section>
      </main>
      <Menu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Layout;
