import { NextResponse } from "next/server";
import books from "../data.json";

export async function GET(req) {
  //실제로 쿼리에서 값을 얻고자함

  //일반적으로 이름을 지정함
  //먼저 검색 매개변수를 구조화 -> 매개변수는 새 URL에서 가져온 다음 요청을 전달
  //따라서 searchParams에 우리가 전달하는 모든 쿼리 매개변수가 포함된다.
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(query.toLowerCase());
  });

  return NextResponse.json(filteredBooks);
}
