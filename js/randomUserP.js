const loadRandomUser = () =>{
  fetch('https://randomuser.me/api/?gender=female')
  .then(res => res.json())
  .then(data => displayUser(data))
} 
const displayUser = (user) =>{
  const userGender = document.getElementById('gender');
  userGender.innerHTML = user.results[0].gender;
  const userName = document.getElementById('name');
  userName.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last ;

  const userLocation = document.getElementById('location');
  userLocation.innerHTML = user.results[0].location.street.number + ' ' + user.results[0].location.street.name;
  const userCity = document.getElementById('city')
  userCity.innerHTML = user.results[0].location.city;

  const userPicture = document.getElementById('large')
  userPicture.isConnected = user.results[0].picture.large;

  console.log(user.results[0].picture)
}
loadRandomUser()