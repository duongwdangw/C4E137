// // // // // let index =1 ;
// // // // //      while (index<=200) {
// // // // //         console.log (index)
// // // // //         index ++
// // // // //      }







// // // // // In ra các số chia hết cho 2 và 3 từ 1 đến 300
// // let sum =0 ;
// // for (text=1 ; text <=300 ;text ++) {

// //     if (text % 2==0 && text % 3 == 0){
        
// //         console.log(text)     
// //     }
// // }









// // // // // Tính tổng các số chẵn trong đoạn từ [-30;50]
// // // // let sum = 0;
// // // // for (let i = -30; i<=50; i++){
// // // //     console.log(i);
// // // //  if (i %2 ==0){
// // // //     sum += i 
// // // //  }
 
// // // // }
// // // // console.log(sum)





// // Nhập vào số n. Tính giai thừa của số n
// let n = prompt ("Nhập vào một số n");
// let ketqua =1;
//  for (let i=1;i<=n;i++){
//     ketqua =ketqua*i 


//  }
//  console.log(ketqua)


// //  Nhập vào 3 số a,b,x (a<b).Tìm trong khoảng a,b số nhỏ nhất mà chia hết cho x
// let a = Number (prompt ('a'));
// let b = Number (prompt ('b'));
// let x = Number (prompt ('x'));

// let res = null

// for (let i=a;i<=b; i++){
//     if(i % x ==0){
//         res = i ;
//         break ;

//     }
// }
// console.log(res)


//Bài 6
// let s=0 ;
// let n = prompt ("Nhap n bang");
// for(let i =2, i<=n;i++) {
//    s+=1/(i*(i+1))
// }
// console.log(s)



//BÀI 7
//Nhập vào số n. Hãy in ra ước của n
// let n = prompt ("Nhập vào một số n");
// for (i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i)
//     }
// }


//BÀI 8
//Nhập vào số n. Kiểm tra xem đó có phải số nguyên tố hay không
// let n = prompt("Nhập vào một số n");
// for (i=1;i<=n-1;i++){
//     if (n%i==0){

//     }
//     console.log("n là một số nguyên tố")
// }


//BÀI 9
//Nhập vào một chuỗi s(chỉ gồm chữ số) và số l. Hãy thêm đầu chuỗi s ký tự '0' cho đến khi độ dài chuỗi s>=l





//BÀI 10
//Nhập vào 2 số m và n (m>0;n>0).Tìm ước chung lớn nhất của m và n
// let m = prompt ("Nhập vào giá trị của m");
// let n = prompt ("Nhập vào giá trị của n");
// let text ;
// for (let i=1;i<=m || i<=n ;i++){
//     if(m%i==0 && n%i==0){
//            text=i;
           
           
//     }
    
// }
// console.log("Ước số chung lớn nhất của m và n là" + text);


//BÀI 11
// Nhập vào 2 số m và n (m>0;n>0).Tìm bội chung nhỏ nhất của m và n
// let m = prompt ("Nhập vào giá trị của m");
// let n = prompt ("Nhập vào giá trị của n");
// let text = 0;
// let init;
// if(m>=n){
//     init = m;
// } else{
//     init=n;
// }
// for (let i=init;i<=m*n ;i++){
//     if(i%m==0 && i%n==0){
//            text=i;
//            break;
//     }
    
// }
// console.log("Bội số chung nhỏ nhất của m và n là" + text);

//BÀI13
//Nhập vào số n (2<=n<=10). Hãy in ra bảng cửu chương số n
// let n =prompt ("Nhập vào giá trị n");
// for (i=1;i<=10;i++) {

// }


//BÀI 17
// let x = prompt ("Hãy nhập vào cân nặng của bạn(kg) :");
// let y = prompt ("Hãy nhập vào chiều cao của bạn(m) :");

// let BMI=x/(y*y) ;
// console.log("BMI", BMI);

// if (BMI<18.5) {
//    console.log ("Nhẹ quá")
// } else if(18.5<=BMI && BMI<23) {
//     console.log ("Bình thường")
// }else if (23<=BMI && BMI<=25) {
//     console.log ("Thừa cân")
// }else {
//     console.log ("Béo Phì")
// }











