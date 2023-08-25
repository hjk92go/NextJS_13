import Link from "next/link";
import Books from "./components/Books";
const HomePage = () => {
  return (
    <div>
      <Books />
      {/* <ul>
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/contact">Contact</Link>
        </li>
      </ul> */}
    </div>
  );
};
export default HomePage;
