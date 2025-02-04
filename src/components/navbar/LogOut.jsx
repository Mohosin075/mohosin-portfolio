import Link from "next/link";
const LogOut = () => {
  return (
    <div className="">
      <li className={`rounded hover:bg-primary hover:text-white list-none`}>
        <Link
          href={``}
          className="flex items-center px-4 py-2 text-sm md:text-lg capitalize"
        >
          Log Out
        </Link>
      </li>
    </div>
  );
};

export default LogOut;
