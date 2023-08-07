async function fetchGitHunUsers() {
  //https://api.github.com/search/users?q=greg
  const res = await fetch("https://api.github.com/search/users?q=greg");
  const json = await res.json();
  return json;
}

const GitHubUsersPage = async () => {
  const users = await fetchGitHunUsers();
  console.log(users);
  return (
    <div>
      <h1>GitHub Users Page</h1>
    </div>
  );
};

export default GitHubUsersPage;
