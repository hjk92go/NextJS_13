//next.js에서 react서버 컴포넌트는 기본구성임.
//서버 구성요소를 클라이언트 구성요소로 전환하려면 마켓을 이용해야한다(with use client)
//클라이언트 구성요소에서 작동하기 떄문에 "use client"사용해줄것(아래와 같이)
// "use client";
// import { useState } from "react";

//about페이지의 메타데이터를 정의할 수 있다.
export const metadata = {
  title: "About Next App First Step",
  description: "Next.js 13 Courses About Pages",
  keywords: "next13, js",
};

// 클라이언트를 사용하는 구성요소는 메타데이터를 가질수 없다는 오류가 발생하기 떄문에
// 클라이언트를 사용하려면, 메타디데이터를 주석처리해준다.

//메타데이터를 주석처리하게되면 about page는 일반적인 클라이언트로 처리할 수 있게됨.
//즉, useState및 useEffecte 등등 사용할 수 있게 된다.

//하지만 현재 예제에서는 상호작용이 없기 때문에 서버 구성 요소로 유지할 예정

/* 예제 _ 리액트 서버 구성요서에서 데이터를 가져오기 
-> 깃허브 사용자를 클릭하면 깃허브 사용자 목록을 검색하는것이 목표 

1. 깃허브 사용자를 위한 경로를 만들어 준다 app폴더 -> githubpage.jsx

*/

const AboutPage = () => {
  return <div>About Page</div>;
};

export default AboutPage;
