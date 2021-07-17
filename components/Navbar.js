import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import { getCart } from "../utils/Cart";

const Navbars = () => {
  return (
    <div>
      <nav className="nav flex flex-wrap items-center justify-between px-4 bg-gray-600 text-white ">
        <div className="flex flex-no-shrink items-center py-1  text-grey-darkest">
          <Link href={`/`}>
            <a>
              <Image
                src="/PURPLE_360x.jpg"
                alt="Picture of the author"
                width={60}
                height={60}
              />
            </a>
          </Link>
        </div>
        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-3 relative select-none"
          for="menu-btn"
        >
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link href="/Episodes">
              <a className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker ">
                Podcast
              </a>
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link href="/Merch">
              <a className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker ">
                Merch
              </a>
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link href={`/cart`}>
              <a className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker ">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbars;
