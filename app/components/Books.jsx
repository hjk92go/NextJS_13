import Link from "next/link";

//data.json에서 추출하는 api경로 핸들러 만들기
async function getBooks() {
  const res = await fetch("http://localhost:3000/api/books");
  const json = await res.json();
  return json;
}

const Books = async () => {
  const books = await getBooks();

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={book.id}>
          <figure>
            <img src={book.img} />
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
      ))}
    </div>
  );
};

export default Books;
