//bai 1
let arr1 =[1,6,23,-11,5,2,-89,22,11,100];
let count=0;
for (let i = 0; i<arr1.length; i++) {
    if (arr1[i]>=10) {
        count++;
    }
}
console.log(`Có ${count} số nguyên lớn hơn hoặc bằng 10`);
//bài 2
let max = arr1[0];
let index = 0;
let tb=0;
for (let i=0; i<arr1.length; i++) {
    if (max<arr1[i]) {
        max = arr1[i];
        index = i;
    }
    tb+=arr1[i]/arr1.length;
}
console.log(`Giá trị lơn nhất là ${max} ở vị trí ${index}`);
//bài 3
console.log(`Gía trị trung bình của mảng ${arr1} là ${tb}`);
//bài 4
console.log(arr1.reverse());
// bài 5
let countAm=0;
for (let i = 0; i<arr1.length; i++) {
    if (arr1[i]<0) {
        countAm++;
    }
}
console.log(`Mảng ${arr1} có ${countAm} số nguyên âm`);
//bài 6
let arr2 = [1,6,23,"V",5,2,-89,22,11,100];
let countV=0;
for (let i = 0; i<arr2.length; i++) {
    if (arr2[i] != "V") {
        countV++;
    }
}
if (countV>0) {
    console.log("V is in the array.");
} else {
    console.log("V is not in the array.");
}

