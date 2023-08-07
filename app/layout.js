import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

//원하는 다른 키워드나 메타 태그를 추가할 수도있음
//서로 다른 페이지 각각에서 지정할수 있음(복사해서 각 폴더에 넣으면됨)
export const metadata = {
  title: "Next App First Step",
  description: "Next.js 13 Courses",
  keywords: "next13, js",
};

//자식은 기본적으로 모든것임
export default function RootLayout({ children }) {
  return (
    //머리글이나 바닥글 같은 모든것을 여기에 배치, 별도의 레이아웃을 원하는 경우 만들어도 상관없음
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/about/contact">Contact</Link>
                </li>{" "}
                <li>
                  <Link href="/githubusers">GitHub Users</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              Next.JS 13 First Course
            </Link>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
