import Repos from "@/app/components/Repos";

/* 앞의 user이름에 따른 주소는 동적인 이름이므로, 깃허브에서 수행되어야함
 * 사용자는 실제로 다른 폴더를 만든 다음 대괄호 안에 이름을 지정한 다음 사용자로 이름을 지정해야합니다.
 *
 * 따라서 특정 경로에 대한 페이지의 실제이름은 항상 page6이다
 * 모두 폴더 이름과 페이지 점 js를 기반으로 한다.
 *
 * 여기에서 우리는 그것을 사용자 저장소라고 부른 다음 사용자 저장소 페이지라고 부른다.
 */

/* 이제 특정 사용자 저장소 페이지로 이동가능하게됨.
 * 특정 사용자 페이지에서 사용자 이름을 얻으려면 params개체에서 이름또는 사용자를 가져와야한다.
 * 아래와 같이 작성하면, 사용자 이름을 추출할 수 있다.
 *
 * <Repos user={user} /> 사용하여 사용자를 전달해줄수잇다.
 */
const UserReposPage = ({ params: { user } }) => {
  return (
    <div>
      <Repos user={user} />
    </div>
  );
};

export default UserReposPage;
