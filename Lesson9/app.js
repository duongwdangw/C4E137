const mySelf1 ={
    // đặc điểm (thuộc tính)
    firstName : "Chinh",
    lastName : "Do",
    dob :"25/11/1995",
    address : "Thai Binh",
    phoneNumber :"0977666332",
    pet: {
        name:"Bob",
        age :2,
        kind:"dog"

    }

    //hành vi (phương thức)
};


const mySelf2 ={
    // đặc điểm (thuộc tính)
    firstName : "Chinh",
    lastName : "Do",
    dob :"25/11/1995",
    address : "Thai Binh",
    phoneNumber :"0977666332",
    pet: {
        name:"Bob",
        age :2,
        kind:"dog"

    }

    //hành vi (phương thức)
};


// console.log (mySelf1);


//Lấy ra giá trị thuộc tính "firstName" trong mySelf1
console.log (mySelf1.firstName);
// console.log(mySelf1['firstName']);

// const key = 'firstName' ;
// console.log(mySelf1[key]);

// console.log( mySelf1.firstName == mySelf2.firstName);
console.log( mySelf1.pet == mySelf2.pet);

//Thay đổi giá trị thuộc tính phoneNumber của mySelf1
mySelf1.phoneNumber = "09826578333";
mySelf1['phoneNumber']="09826578333";


//Thêm thuộc tính isHandsome cho mySelf1
mySelf1.isHandsome = true ;
mySelf1['isHandsome']= true ;

//Xoá thuộc tính dob của mySelf1    
delete mySelf1.dob;


console.log(mySelf1);

//Trong mảng ta dùng for ...of ; còn trong Object ta dùng for...in
for (let key in mySelf1) {
    console.log("Đặc điểm " + key + "có giá trị là :" +mySelf1[key]); //Khác mySelf1.key đó :v
}

// Khai báo funciton nhập và kiểm tra 1 số :
// let a =0;
// let b =0;

function inputNumber () {
    let input = NaN;
    do {
        input = Number(prompt("Nhập vào số : "));
        console.log(input);
    }while(isNaN(input));

    return input ; //trả về giá trị khi gọi hàm và không thực thi các đoạn code bên dưới
    console.log("Thực thi chỗ này không ?")
}


// function test () {
//     let a =100;
//     let b =10;

//     //closure (bao đóng)
//     function calculateAB () {
//         return a+b ;
//     }
//     return calculateAB();
// }
// console.log(test());

//Gọi function inputNumber
// a=inputNumber () ;
// b=inputNumber () ;

// console.log(a+b);





//function có tính chất hoisting : sử dụng function trước khi khai báo

function doSomething (){
    console.log("Do Something here");
}


function sayHello() {
    console.log("hello world");
}


function executeAfterSeconds (seconds,work) {
    console.log("Thực thi gì đó sau "+seconds +"giây")
setTimeout(work,seconds*1000);
}
executeAfterSeconds(3,sayHello);
executeAfterSeconds(5,doSomething);



