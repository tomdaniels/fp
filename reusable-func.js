// Partial Application

const fetch = require('node-fetch');

const getFromApi = baseUrl => endpoint => cb =>
  fetch(`${baseUrl}${endpoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => {
      console.error(err.message)
    })

const getGithub = getFromApi(
  'https://api.github.com'
);

const getGithubUsers = getGithub('/users')
const getRepos = getGithub('/repositories');

getGithubUsers(data => {
  console.log(data.map(user => user.login))
})

getGithubUsers(data => {
  console.log(data.map(user => user.avatar_url))
})
