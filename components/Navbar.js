import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" background">
      <div className="grid grid-cols-12 gap-4 py-6 px-36">
        <div className="col-start-1 col-span-2 z-10">
          <Image src="/logo.png" width={114} height={32} />
        </div>
        <div className="col-start-8 flex justify-between items-center z-10 text-white">
          <Link href="/">
            <a className=" ">Product</a>
          </Link>
        </div>
        <div className="col-start-9 flex justify-between items-center z-10 text-white">
          <Link href="/">
            <a className=" ">Service</a>
          </Link>
        </div>
        <div className="col-start-10 flex justify-between items-center z-10 text-white">
          <Link href="/">
            <a className=" ">Contact</a>
          </Link>
        </div>
        <div className="col-start-11  flex justify-between items-center z-10 text-white">
          <Link href="/">
            <a className=" ">Sign in</a>
          </Link>
        </div>
        <button className="border-solid border-2 border-white rounded-md py-1 px-4 text-white z-10 w-max">
          Get Access
        </button>
      </div>

      <div className="px-36 mt-32 grid grid-cols-12 gap-4">
        <div className=" col-start-1 cols col-span-4 text-white font-bold text-5xl">
          Instant collaboration for remote teams
        </div>
        <div className=" col-start-1 cols col-span-4 text-white">
          All-in-one place for your remote team to chat, collaborate and track
          project progress.
        </div>
        <div className=" col-start-1 cols col-span-5 text-white">
          <input placeholder="Email" className=" pl-4 h-14 w-64" />
          <button className=" bg-orange-500 text-white ml-4 w-44 h-14">
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
