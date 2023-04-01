//Quy ước nhỏ :tất cả biến lưu phần tử html để có dấu $ ở đằng trước


//Truy xuất phần tử thông qua id 
// const $title =document.getElementById ('big-title');
// console.log($title);



//Truy xuất phần tử class   
// const $paragraphs = document.getElementsByClassName('red-paragraph'); //Trả về html collection
// for(const $paragraph of $paragraphs){
//      console.log($paragraph);
// }
// console.log($paragraphs);



//truy xuất thông qua  tên thẻ 
// const $image =document.getElementsByTagName('img'); //Trả về html collection
// console.log($image);

//documment.querySelector() ,document.querySelectorAll() =>tìm hiểu thêm 
 
// let titleContent = $title.innerHTML;
// console.log(titleContent);

// $title.innerHTML = "Nội dung mới 🥰";


//Lấy ra thuộc tính của 1 phần tử 
// let  titleAttributeValue = $title.getAttribute('data-hello');
// console.log (titleAttributeValue);

//Thêm mới, thay đổi thuộc tính của 1 phần tử
// $title.setAttribute('data-goodbye', 'This is goodbye');
// $title.setAttribute('data-hello','This is hello'); 


// Xoá thuộc tính của một phần tử 
// $title.removeAttribute('data-goodbye');


// thay đổi định dạng của một phần tử 
// $title.style.color= 'red';
// $title.style.backgroundColor = 'black';
// $title.style.display = 'flex';
// $title.setAttribute('style','color :red;background-color:blue');



// for(const $p of $paragraphs){
//   $p.style.color ='red';
// }

// $paragraphs[0].style.color ='blue';




//Thêm phần tử vào trang web
// const $link = document.createElement('a');
// $link.innerHTML = "This is link to somewhere";
// $link.setAttribute('href','http://google.com');

// document.body.prepend($link);        
//  $title.before($link);//Thêm $link vào trước $title
//  $title.after ($link);//Thêm $link vào sau $title
//  $title.append($link);//Thêm $link vào trong $title


//Cách xoá phần tử trên trang web
// $title.remove();
// $title.parentElement.remove()


//Listener sau ghi đè lên listener trước
// $title.onclick = handleClickTitle1;
// $title.onclick = handleClickTitle2;

//Thêm listener
// $title.addEventListener('click',handleClickTitle1);
// $title.addEventListener('click',handleClickTitle2);


// function handleClickTitle1 (){
//   console.log('Hello ')
// }

// function handleClickTitle2 (){
//   console.log('goodbye')
// }



// const $emailInput = document.getElementById('my-email');

// $emailInput.onchange=function () {
//   let email = $emailInput.value ; //Lấy giá trị nhập vào của ô input
//   if(!isEmailValid(email)) alert ('Hãy nhập lại email');
// };

// function  isEmailValid(email){
  
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   }


const $numberA = document.getElementById('number-a');
const $numberB = document.getElementById('number-b');
const $plusBtn = document.getElementById('plus-btn');
const $subBtn  = document.getElementById('sub-btn');


$plusBtn.onclick =function (){
  let a =Number($numberA.value);
  let b = Number($numberB.value);

  alert (a+b);
}

$subBtn.onclick = function () {
  let a=Number($numberA.value);
  let b=Number($numberB.value);

  alert(a-b);
}
