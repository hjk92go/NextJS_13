import books from "./data.json";
import { NextResponse } from "next/server"; //가져오기 요청

//내보내기 비동기 함수
export async function GET(req) {
  return NextResponse.json(books); //books를 반환
}
