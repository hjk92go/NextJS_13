import Link from "next/link";

async function fetchGitHunUsers() {
  // https://api.github.com/search/users?q=greg
  const res = await fetch("https://api.github.com/search/users?q=greg", {
    // 가져오기 기능에서 실제 모든것을 캐시 하는데, 성능에는 좋지만 가져오는 항목이 자주 변경되면 문제가 발생할수 있음
    // 그래서 revalidate라는 기능을 이용, 새로 고침을 수행하기 전에 대기할 시간(초)를 설정
    // 빈번하게 확인하여 과부화 되지 않도록 설정해주는것
    // 현재의 값을 비교, 값이 달라지면 받아옴
    next: {
      revalidate: 60,
    },
  });

  // 로딩페이지 확인을 위해 일부러 지연시키기위해 데이터 로드전에 await new promise 사용함
  // 아래는 1초후에 해결된다를 의미
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const users = await res.json();
  return users.items;
  // 서버의 구성요소이기 때문에 개발자도구(브라우저)에서는 아무것도 볼 수 없다.
  // 서버에서 진행되기 때문 => 터미널에서 서버 로그를 봐야한다.
}

//비동기식
const GitHubUsersPage = async () => {
  const users = await fetchGitHunUsers();
  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Repos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.avatar_url} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.login}</div>
                    <div className="text-sm opacity-50">{user.id}</div>
                  </div>
                </div>
              </td>

              <td>
                <Link href={user.html_url} className="btn btn-link">
                  View On Github
                </Link>
              </td>
              <th>
                <Link href={`/githubusers/${user.login}`} className="btn btn-link">
                  Go to Repos
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GitHubUsersPage;
