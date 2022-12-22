const username = "n1sek";
const reposDiv = document.getElementById("cards");

//Fetch my 3 most starred repositories and for each one
async function getRepos() {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  //Get only the 3 most starred repos and place the most starred in the middle between the other two
  const repos = (await response.json()).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
  for (let repo of repos) {
    const repoName = repo.name;
    const repoLink = repo.html_url;
    const repoDescription = repo.description;
    const repoStars = repo.stargazers_count;
    reposDiv.innerHTML +=
      "<div class='repo'>" +
        "<a href='" + repoLink + "' target=_blank>" + repoName + " " + "<span>&#x1F517;</span>" + "</a>" +
        "<p>" + repoDescription + "</p>" +
        "<p id='p-stars'> <span class='repo-stars'>Stars: </span> " + repoStars + "</p>" +
      "</div>";
  }
}

getRepos();
// const accessToken = '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';
// const username = 'N1sek';