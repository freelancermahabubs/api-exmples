const loadUser = () =>{
  fetch('https://randomuser.me/api/?gender=female')
  .then(res => res.json())
  .then(data => displayUser(data))
}

const displayUser = (user) =>{
  const userGender = document.getElementById('gender');
  userGender.innerHTML = user.results[0].gender;
  const userName = document.getElementById('name');
  userName.innerHTML = user.results[0].name.first + ' ' + user. results[0].name.last + ' ' + user.results[0].name.title;
  console.log(user.results[0].first)
}
loadUser();