import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../public/assets/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { data: session } = useSession();

  return (
    <div className="fixed flex items-center w-full p-4 h-14 flex-nowrap bg-[#0e0e10] mb-[2px] z-10">
      {/* Left Side */}
      <div className="flex items-center justify-start grow">
        <Link href="/">
          <a className="flex">
            <Image src={Logo} alt="/" width="35" height="35"></Image>
          </a>
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4">
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsThreeDotsVertical size={20}></BsThreeDotsVertical>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* Middle */}
      <div className="hidden md:flex grow-[2] items-center justify-center">
        <div className="bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto px-2 rounded-2xl">
          <div>
            <input
              type="text"
              className=" bg-transparent border-none text-white focus:outline-none p-1"
              placeholder="Search here..."
            ></input>
          </div>
          <div>
            <BsSearch></BsSearch>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="hidden md:flex grow items-center justify-end">
        {session ? (
          <div className="flex items-center">
            <Link href="/account">
              <div className="flex items-center">
                <Image
                  className="rounded-full"
                  src={session.user.image}
                  alt={session.user.name}
                  width="40"
                  height="40"
                ></Image>
                <h5 className="text-[1rem] font-medium ml-2">
                  {session.user.name}
                </h5>
              </div>
            </Link>
            <Menu as="div" className="relative text-left ml-2">
              <div className="flex">
                <Menu.Button>
                  <BsThreeDotsVertical size={20}></BsThreeDotsVertical>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/account"
                          className={classNames(
                            active
                              ? "bg-gray-500 text-gray-100"
                              : "text-gray-200",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => signOut()}
                          className={classNames(
                            active
                              ? "bg-gray-500 text-gray-100 cursor-pointer"
                              : "text-gray-200",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/account">
              <button className="px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2">
                Account
              </button>
            </Link>
            <BsPerson size={30}></BsPerson>
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="block md:hidden z-10 cursor-pointer">
        {nav ? (
          <AiOutlineClose size={25}></AiOutlineClose>
        ) : (
          <AiOutlineMenu size={25}></AiOutlineMenu>
        )}
      </div>
      {/* Middle Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
            : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="text-center">
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/#live">Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/#categories">Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
