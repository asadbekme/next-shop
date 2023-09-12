import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-0 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href={"/"}>
        <Image src={"/shop.jpeg"} alt="logo image" width={100} height={20} />
      </Link>
      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home page
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900 ">
            All products
          </Link>
        </nav>
        <Link href={"/shopping-cart"}>
          <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
            My bag
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
