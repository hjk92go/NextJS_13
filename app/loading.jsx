/*
 * 페이지 로딩중일때 띄움, 구성요소는 원하는대로 할수 있지만 파일이름은 'loading'여야한다
 * 함수선언시, 대문자L 기억하기
 */
const LoadingPage = () => {
  return (
    <div>
      <button className="btn">loading</button>
    </div>
  );
};

export default LoadingPage;
