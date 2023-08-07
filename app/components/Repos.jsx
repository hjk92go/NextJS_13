/*
사용자의 repos를 검색하는 구성요소
페이지의 경우, 페이지와 비슷하지만 구성요소의 경우에
이름또는 실제로 사용자를 가져오려면 prop해줘야한다.

그런 다음 해당 상뇽자의 저장소를 검색 => const repos, 선언 await해서 repos가져올 것이다.
*/

async function fetchRepos(user) {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);
  const json = await res.json();
  return json;
}

//여기 대기가 잇으면 비동기를 넣어야한다.
const Repos = async ({ user }) => {
  const repos = await fetchRepos(user);
  // console.log(repos);

  return (
    <div>
      <h1>{user}'s Repos</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => (
              <tr>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Repos;
