import Image from 'next/image';
import { useRouter } from 'next/router';

const Menu = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleItemClick = (path) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      ></div>
      <nav
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="grid place-items-center p-4">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={160}
            height={160}
            onClick={() => handleItemClick('/')}
          />
        </div>
        <ul className="flex flex-col">
          <li className="border-b border-gray-200">
            <button
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              onClick={() => handleItemClick('/home')}
            >
              Home
            </button>
          </li>
          <li className="border-b border-gray-200">
            <button
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              onClick={() => handleItemClick('/search')}
            >
              Search
            </button>
          </li>
          <li className="border-b border-gray-200">
            <button
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              onClick={() => handleItemClick('/cart')}
            >
              Cart
            </button>
          </li>
          <li className="border-b border-gray-200">
            <button
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-200"
              onClick={() => handleItemClick('/about')}
            >
              Wine for beginners
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
