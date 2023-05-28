import Image from "next/image";
import AppShell from "./components/AppShell";
import * as Icons from "react-icons/bs";
import homeCardImage1 from "../public/assets/ss.jpg";
import homeCardImage2 from "../public/assets/aaa.jpg";
import art1 from "../public/assets/illustrrations/Studying-amico.svg";
import Link from "next/link";

export default function HomePage() {
  return (
    <AppShell>
      <header className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col items-center justify-start">
          <h2 className="text-lg font-semibold tracking-wider">Educ App</h2>
          <p className="flex text-sm text-gray-600">Good morning</p>
        </div>
        <Icons.BsPersonCircle className="_hover-settings h-6 w-6 text-gray-600 hover:text-gray-500" />
      </header>
      {/* The App Home Content */}
      <section className="flex w-full flex-col items-center justify-start gap-8 px-2">
        {/* The Horizontal Scroll View Cards */}
        <section className="flex w-full">
          <div className="relative flex w-full items-center justify-between gap-4 rounded-lg bg-teal-500 px-2 py-3 text-white">
            <div className="flex w-full flex-col items-start justify-between gap-2 px-2">
              <h2 className="flex text-lg font-bold">Learn</h2>
              <p className="--text-sm flex">
                All pdfs, videos <br /> and papers are <br /> in there
              </p>
            </div>
            <div className="flex w-full items-center justify-between gap-2">
              <Image src={art1} className="w-full" alt="card image" />
            </div>
          </div>
        </section>
        {/* The Search Bar */}
        <div className="group relative flex w-full">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search here..."
            className="w-full rounded-lg border-none bg-gray-100 py-3 outline-none hover:border-blue-50 focus:border-slate-400"
          />
          <Icons.BsSearch className="_hover-settings --pl-4 absolute bottom-3 right-4 top-4 h-4 w-4 text-gray-500 will-change-transform group-hover:translate-x-1 group-hover:text-gray-400" />
        </div>
        <h3 className="flex w-full text-lg font-semibold">
          Latest news and <br /> updates
        </h3>
        {/* The News Cards */}
        <Link
          href="/post1"
          className="flex w-full flex-col items-center justify-between gap-2"
        >
          <Image
            src={homeCardImage1}
            className="w-full rounded-lg"
            alt="card image"
          />
          <p className="flex w-full items-center justify-start gap-2 font-semibold">
            first lady lobbies unaids to fund HIV <br /> prevention programme
          </p>
          <div className="flex w-full items-center justify-start gap-2 text-sm">
            <Icons.BsClock className="h-4 w-4 text-gray-500" />
            <span className="flex text-gray-500">2hr ago</span>
          </div>
        </Link>
        {/* Card 2 */}
        <Link
          href="/post2"
          className="mt-8 flex w-full flex-col items-center justify-between gap-2"
        >
          <Image
            src={homeCardImage2}
            className="w-full rounded-lg"
            alt="card image"
          />
          <p className="flex w-full items-center justify-start gap-2 font-semibold">
            fields become the classroom: <br /> transforming education in
            Uganda.
          </p>
          <div className="flex w-full items-center justify-start gap-2 text-sm">
            <Icons.BsClock className="h-4 w-4 text-gray-500" />
            <span className="flex text-gray-500">3d ago</span>
          </div>
        </Link>
      </section>
    </AppShell>
  );
}
