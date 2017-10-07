const token = '4241f4c46ba8ce93d7084c5f43fe02aaef4c376'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
