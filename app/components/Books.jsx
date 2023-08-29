"use client"; // this is a client component 👈🏽

import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingPage from "../loading";

//data.json에서 추출하는 api경로 핸들러 만들기
async function getBooks() {
  const res = await fetch("/api/books"); //
  const json = await res.json();
  return json;
}

const Books = () => {
  // const books = await getBooks();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getBooks().then(() => {
      setBooks(books);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/books/search?query=${query}`);
    const books = await res.json();
    setBooks(books);
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <h1>Books</h1>
      {books.map((book) => (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl" key={book.id}>
            <figure>
              <img src={book.img} width="200" height="150" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.id}</h2>
              <p>{book.title}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <Link href={book.link}>See in Amazon Now</Link>
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Books;
