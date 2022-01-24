import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div style={{ minHeight: "500px", backgroundColor: "#463759" }}>
        <div className="grid grid-cols-12  grid-flow-row-dense gap-4 py-24 px-36">
          <div className="col-start-1 col-span-2 ">
            <Image src="/logo.png" width={114} height={32} />
            <p className="text-stone-400 font-normal text-base mt-4 ">
              Collaboration platform modern teams.
            </p>
          </div>

          <div className="col-start-4 col-span-2 ">
            <Link href="/">
              <a className="text-stone-300 font-bold text-base">Features</a>
            </Link>
            <p className="text-stone-400 font-normal text-base mt-4">
              Screen Sharing
            </p>
            <p className="text-stone-400 font-normal text-base mt-2">
              iOS & Android Apps
            </p>
            <p className="text-stone-400 font-normal text-base mt-2">
              File Sharing
            </p>
            <p className="text-stone-400 font-normal text-base mt-2">
              User Management
            </p>
          </div>

          <div className="col-start-6 col-span-2 ">
            <Link href="/">
              <a className="text-stone-300 font-bold text-base">COMPANY</a>
            </Link>
            <p className="text-stone-400 font-normal text-base mt-4">Product</p>
            <p className="text-stone-400 font-normal text-base mt-2">Blog</p>
            <p className="text-stone-400 font-normal text-base mt-2">Support</p>
          </div>

          <div className="col-start-8 col-span-2 ">
            <Link href="/">
              <a className="text-stone-300 font-bold text-base ">CONTACT US</a>
            </Link>
            <p className="text-stone-400 font-normal text-base mt-4">
              info@teamapp.com
            </p>
            <p className="text-stone-400 font-normal text-base mt-2">
              1-800-200-300
            </p>
            <p className="text-stone-400 font-normal text-base mt-2">
              3500 Deer Creek Rd Palo Alto, CA
            </p>
          </div>

          <div className="col-start-10 col-span-3 ">
            <Link href="/">
              <a className="text-stone-300 font-bold text-base">
                STAY TO UPDATE
              </a>
            </Link>
            <p className="text-stone-400 font-normal text-base mt-2">
              Subscribe to out news letter
            </p>
            <div className="flex h-14  mt-2 ">
              <input
                type="email"
                placeholder="Email"
                className=" pl-4 border-solid border-2 border-orange-500 rounded-l-md"
              />
              <button className=" bg-orange-500 px-7 rounded-r-md">v</button>
            </div>
          </div>
        </div>
        <div className="px-36 text-stone-400 font-normal text-base ">
          © Copyright Team Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
