//Câu 1 : Khai báo 1 mảng rỗng. Nhập vào số n(n>0).
//Hãy điền số n có giá trị ngẫu nhiên vào trong mảng đó
// let arr=  [];
// let n =Number(prompt('Nhap vao so n (n>0)'));
// for (let i=0; i<n; i++){
//     let randomNumber = Math.floor(Math.random()*n);
//     arr[i]=randomNumber;
// }
// console.log(arr)







//Câu2:Khai báo 1 mảng gồm 2 phần tử. Nhập vào số tự n(n>2).
// Hãy thêm vào đầu mảng phần tử có giá trị '0'cho đến khi độ dài mảng bằng n
// let arr = [1,2];
// let n = Number(prompt('Nhap vao so n (n>0'));
// while (arr.length <n) {
//     arr.unshift(0);
// }

// console.log(arr);



//Câu 3 : Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử.
// Hãy thực hiện xoá phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1
// let arr =   [1,2,6,9];
// while (arr.length >1){
//     arr.pop()
// }
// console.log (arr)














//1. Khai báo 1 mảng gồm các số bất kì

// -Tính tích của các phần tử trong mảng đó
// let myArray = [1,2,3,4,5];
// let tich = 1;
// for (let i=0;i<myArray.length;i++){
//     tich=tich*myArray[i]
// }
// console.log(tich)








// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng
// const numbers = [1,7,9,10,2,-10,8,4,-3];
// const numbersDivideBy2 = [];
// đẩy tất cả số tìm được vào numbersDivideBy2
// for(let i=0;i < numbers.length; i++){
//     if(numbers[i] %2 ==0) numbersDivideBy2.push(numbers[i]);
// }
// if(numbersDivideBy2.length ==0){
//     console.log("Không có số nào chia hết cho 2");
// }else {
//tìm giá trị nhỏ nhất trong mảng numbersDivideBy2
//     let min = numbersDivideBy2[0];
//     for(let i=0; i<numbersDivideBy2.length;i++){
//         if(min>numbersDivideBy2 [i]){
//             min = numbersDivideBy2 [i]; 
//         }
//     }

//     console.log("Giá trị nhỏ nhất chia hết cho 2 là:" +min)
// }








// -Tìm số lớn nhất mà chia hết cho 3 trong mảng
//   const numbers = [1,3,9,5,7,15];
//   const numbersDivideBy3 =[] ;

//   for (let i =0;i <numbers.length ; i++) {
//        if (numbers[i] % 3 ==0) numbersDivideBy3.push(numbers[i]);
//   }

//   if(numbersDivideBy3.length ==0){
//     console.log ("Không có số nào chia hết cho 3");
//   }else {
//     let max = numbersDivideBy3 [1];
//     for (let i = 0;i< numbersDivideBy3.length; i++){
//         if (max<numbersDivideBy3[i]){
//             max = numbersDivideBy3 [i];
//         }
//     }

//     console.log ("Giá trị lớn nhất chia hết cho 3 là :"+ max);
//   }









// -Tính giá trị trung bình của mảng
// const numbers =[1,3,4,7,8];
// let sum =0;
// for (let i=0;i <numbers.length ; i++){
//     sum = sum + numbers[i];
// }
//    const giaTriTB = sum /numbers.length ;
//    console.log(giaTriTB);
















// -Lọc ra các số nguyên tố trong mảng
// const numbers = [7,9,11,2,16];

// for (let i =0; i<numbers.length; i++){
//     for (let j =2;j<numbers[i]-1;j++){
//         if(numbers[i] % numbers[j]==0);
        
//     }
    
// }
//    console.log (numbers);



// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không
// const numbers =[1,3,4,12,8,19];
// for(let i =0;i<numbers.length ;i++){
//     if(numbers[i]<10){
//         console.log( "Trong mảng có các số nhỏ hơn 10 là :" + numbers[i]);
//     }
// }
        
// -Kiểm tra xem tất cả các phần tử trong mảng có lớn hơn 20 hay không
const numbers =[1,3,4,7,8,21,23];
for (let i =0;i<numbers.length;i++){
    if(numbers [i]>20){
        console.log ("Trong mảng có các số lớn hơn 20 là :"+numbers[i]);
    }
}


// -Nhập vào số n cho đến khi n là 1 số trong mảng s 
// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần