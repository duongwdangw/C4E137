// mảng


// cách khai báo :
let names = [
    "Chinh Do ",
    "Ngoc Trinh",
    "Chi Pu",
    "Dam Vinh Biet",
    "Ngoc Trinh",
    "Chi Pu",

] ;

// console.log(names);     







// let numbers = [1,100,40,3,20] ;


// let isRich = false ;
// let isHandsome = true ;
// let hasGirlfriend = false ;

// let features =  [isRich,isHandsome,hasGirlfriend];








// Truy xuất một giá trị bất kì trong mảng ?
// console.log (names[1]); // Lấy giá trị phần tử thứ 2 trong mảng
// console.log (names[0]); // Lấy giá trị phần tử thứ 1 trong mảng





// Thay đổi giá trị phần tử bất kỳ trong mảng ?
// names [0] = "hello world" ;
// names [4] = "goodbye everyone" ;
// console.log (names);



// console.log (features) ;




// let array1 = ['a','b','c'];
// let array2 = ['a','b','c'];

// let array3= array1;


// Kiểm tra kiểu dữ liệu của mảng ?
// console.log(typeof(array1));
// console.log (array1+array2) ; // chương trình tự động ép kiểu về string khi thực hiện phép cộng
// console.log (array1 == array2);
// console.log (array3 == array1);

// array1[0]="Hello";
// console.log(array1,array2);




// Hoán đổi giá trị của 2 phần tử trong mảng ?
//  let tmp = names    [0];
//  names [0] =names [3] ;
//  names[3] = tmp ;

//  console.log (names);







//DUYỆT MẢNG
// CÁCH 1 : for.....let i = 0....
//  for (let i =0 ;i <names.length ;i++) {
//     let stt = i+1 ;
    //     console.log ( stt + "." +names [i]);





//     let name = names [i] ;
//     if (name == 'Ngoc Trinh' || name == 'Chi Pu') {
//         console.log ( stt + "."+name);
//     }
//  }
//CÁCH 2 : for.....of






//1. Khai báo một mảng gồm các số bất kỳ.
 const numbers =[1,7,8,-3,6,10,9];
// a, Hãy in ra các số chẵn trong mảng đó
// for (let i=0; i < numbers.length ; i++) {
//     const number = numbers[i];
//     if (number % 2 == 0){
//         console.log (number )
//     }
// }

// b, Hãy tính tổng các phần tử trong mảng\
// let sum = 0;
// for (let i=0; i < numbers.length ; i++){
//       const number = numbers[i] ;
//       sum += number ;
// }
// console.log (sum)

// c, Hãy tìm các phần tử nhỏ nhất trong mảng
// let min =numbers[2];
// for (let i=0; i < numbers.length ; i++){
//     const number = numbers[i];
//     if (min >number) min =number
// }
// console.log (min)

// d, Thêm 3 số vào đầu mảng
numbers.unshift(100,1000,-4);
console.log (numbers);

// e, Thêm 3 số vào cuối mảng
numbers.push (-9,10,50);
console.log (numbers);

// f, Xoá 1 phần tử đầu tiên trong mảng
let deletedFirstNumber = numbers.shift () ;
console.log("Giá trị phần tử đầu tiên bị xoá :" + deletedFirstNumber);

// g, Xoá 1 phần tử cuối cùng trong mảng
let deletedLastNumber = numbers.pop() ;
console.log("Giá trị phần tử cuối cùng bị xoá :" + deletedLastNumber);




 

