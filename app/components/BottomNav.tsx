"use client";
import * as Icons from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import all icons
import { BiHomeAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { TbBook2 } from "react-icons/tb";
import { IoTelescopeOutline } from "react-icons/io5";

interface Props {}

const BottomNav = (props: Props) => {
  const pathname = usePathname();

  const isActive = (route: string) => {
    return pathname === route ? "text-blue-500" : "text-gray-600";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex w-full items-center justify-around bg-white px-2 py-4 shadow ring-1 ring-gray-100 md:mx-auto md:w-1/4">
      <Link
        href="/"
        className={`_hover-settings flex flex-col items-center hover:text-blue-400 ${isActive(
          "/"
        )}`}
      >
        <BiHomeAlt className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href="/learn"
        className={`_hover-settings flex flex-col items-center hover:text-blue-400 ${isActive(
          "/learn"
        )}`}
      >
        <TbBook2 className="h-6 w-6" />
        <span className="text-xs">Learn</span>
      </Link>
      <Link
        href="/schools"
        className={`_hover-settings flex flex-col items-center hover:text-blue-400 ${isActive(
          "/schools"
        )}`}
      >
        <IoTelescopeOutline className="h-6 w-6" />
        <span className="text-xs">Schools</span>
      </Link>
      <Link
        href="/more"
        className={`_hover-settings flex flex-col items-center hover:text-blue-400 ${isActive(
          "/more"
        )}`}
      >
        <BsThreeDots className="h-6 w-6" />
        <span className="text-xs">More</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
