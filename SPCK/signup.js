function signup(e){
    event.preventDefault () ;
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const user = {
    username : username,
    email :email ,
    password : password,
};
const json =JSON.stringify(user);
localStorage.setItem(username,json);
alert("Bạn đã đăng kí thành công, xin mời relax lậu");
}