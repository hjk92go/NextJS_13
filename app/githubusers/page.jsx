import Link from "next/link";

async function fetchGitHunUsers() {
  //https://api.github.com/search/users?q=greg
  const res = await fetch("https://api.github.com/search/users?q=greg");
  const users = await res.json();
  return users.items;
  //서버의 구성요소이기 때문에 개발자도구(브라우저)에서는 아무것도 볼수 없다.
  //서버에서 진행되기 때문 => 터미널에서 서버로그를 봐야한다.
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
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GitHubUsersPage;
