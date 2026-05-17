//bài 2
function dienTich(bankinh) {
    return 3.14*bankinh**2;
}
console.log(dienTich(5));
function chuVi(bankinh) {
    return 3.14*bankinh*2;
}
console.log(chuVi(5));
//bài 3
function giaiThua(number) {
    let n =1;
    for (let i=1; i<=number; i++) {
        n *= i;
    }
    return n;
}
console.log(giaiThua(6));
//bài 4
function kiemTra(a) {
    if (typeof a === "number" && !Number.isNaN(a)) {
        return "true";
    } else { 
        return "false";
    }
}
console.log(kiemTra("p"));