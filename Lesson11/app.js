//localStorage


//Lưu dữ liệu vào localStorage
// localStorage.setItem('name','Chinh Do');
// localStorage.setItem('address','Thai Binh');
// localStorage.setItem('wetght',70);


// localStorage.setItem('name','someone');
// localStorage.setItem('favorites',['a','b','c','d']);
// localStorage.setItem('pet',{type :'cat',name :'bob',age :2});
//Lấy dữ liệu từ localStorage
// const value = localStorage.getItem('weight'); //Kiểu dữ liệu trả về string | null
// const favorites =localStorage.getItem('favorites');
// const pet =localStorage.getItem('pet');
// console.log(pet);
// console.log(favorites);


// const favorites = ['money','sleeping','girl'];
// const pet ={type :'cat',name :'bob',age :2};

// const users = [
//     {id :1 ,name :'A',username:'user_a',password :'12345678'},
//     {id :2 ,name :'B',username:'user_b',password :'12345678'}
// ];

//Biến đổi object | array =>string(json)

// const favoritesJSON =JSON.stringify(favorites);
// console.log(favoritesJSON);


//Lưu lại users vào localstorage
// const usersJSON =JSON.stringify(users); // biến đổi user => jsom
// localStorage.setItem('users',usersJSON);
// console.log(usersJSON);

//Biến đổi string (json) => object || array
// const newPet = JSON.parse(petJSON);
// console.log(newPet);

//Lấy users từ localStorage
// const value = localStorage .getItem('users');
// const newUsers = JSON.parse(value);
// console.log

const $seconds =document.getElementById('seconds');
const $startTimerBtn = document.getElementById('start-timer-btn');
const $pauseTimerBtn = document.getElementById('pause-timer-btn');
const $resetTimerBtn = document.getElementById('reset-timer-btn');

$startTimerBtn.onclick = function () {
    setInterval(()=> {
       let value = $seconds.innerHTML;
       value = value -1;
       $seconds.innerHTML = value ;
       if(value ==0){
        clearInterval(timer);
        return ;
       }
    },1000);
};

$pauseTimerBtn.onclick = function () {
    clearInterval(timer) ;
}

// let name = 'Chinh Do';




//Spread
let nums1 = [1,2,3,4];
let nums2 = [8,9,10];

let res1 = [... nums1,10,9,...nums1];
let res2 = [...nums1,...nums2];
console.log(res2);

let part1 = {type :'Cat', name :'Bob'};
let part2 ={age :20};

let summary = {name :'Peter',...part1,...part2,address :"HN"};
console.log(summary)

//Destructuring
// let type = summary.type;
// let name =summary.name;
let {type,name }=summary;
console.log(type,name);


let['a']
