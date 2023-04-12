function tinhTong() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var tong = 0;

    for (var i = a; i <= b; i++) {
        if (isPrime(i)) {
            tong += i;
        }
    }

    document.getElementById("ketqua").innerHTML = "Tổng các số nguyên tố từ " + a + " đến " + b + " là : " + tong;
}


function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
    
}