import books from "./data.json";
import { NextResponse } from "next/server"; //가져오기 요청

//내보내기 비동기 함수
export async function GET(req) {
  return NextResponse.json(books); //books를 반환
}

//새로운 책을 추가하고자함
export async function POST(req) {
  //제이슨에서 제목,링크,이미지를 얻을꺼임
  const { title, link, img } = await req.json();

  const newBook = {
    id: books.length + 1,
    title,
    link,
    img,
  };

  books.push(newBook);

  return NextResponse.json("Book added successfully");
}
