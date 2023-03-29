 //Bài 1
//  function timNghiemPTBac2 (a,b,c){
//     if (a ==0 ) {
//         console.log("Không phải phương trình bậc 2");
//         return null;
//     }
//       const delta =b**2-4*a*c;
//       if (delta =0){
//         const x =-b/(a*2);
//         return [x];
//       } else if(delta >0){
//         const x1 =(-b+Math.sqrt(delta)/(a*2));
//         const x2 =(-b-Math.sqrt(delta)/(a*2));
//         return [x1,x2];
//       }else {
//         return [];
//       }
//       }
// let nghiem = timNghiemPTBac2(1,-3,-4);
// console.log(nghiem);


//Bài 2:
// function tamGiac (a,b,c){
//     if(a<0 ||b<0 ||c<0){
//         return ;
//     }
//     if(a+b>c && a+c>b && b+c>a){
//         return true ;
//     }else {
//         return false ;
//     }
// }

// let canh =tamGiac(1,1,3);
// console.log(canh);

//Bai3
function ngayThangNam(a,b,c){
    
    if(a<1 &&a>31 ||b<1 &&b>12 ||c>2023){
        return ;
    }else (c%400 ==0 || c%100!=0 && c%4==0 ) 
    {
           return true ;
    }
    return true ;
}
let check = ngayThangNam(26,12,2004);
console.log(check);


//Tìm user có id thoả mãn
// function findUserById(id) {
//     // dùng for, for...of, forEach
//     for (let user of users){
//         if(user.id == id) return user ;

//     }
//     return null ;
//     //dùng phương thức find của mảng
// }