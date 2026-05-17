//bài 5
function min(a,b,c) {
    if (a<b && a<c) {
        return a;
    } else if (b<a && b<c) {
        return b;
    } else {
        return c;
    }
}
console.log(min(3, 8, 1));
//bài 6
function soDuong(number) {
    if (number>0) {
        return "true";
    } else {
        return "false";
    }
}
console.log(soDuong(5));
//bài 7
function doiCho(a,b) {
    let c = [b,a];
    return c;
}
console.log(doiCho(5,7));
//bài 8 
function daoMang(arr) {
    if (arr.length == 0 ) {
        console.log("Đây là mảng rỗng!")
    } else {
        for (let i=0; i<arr.length/2; i++) {
            let a = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1]= a;
        }
        return arr;
    }
    
}
console.log(daoMang([1,2,8,0,5,4]));
//bài 9
function kyTuTrongMang(a, arr) {
    let arrSplit=arr.split("");
    let count = 0;
    let index=[];
    for (let i=0; i<arrSplit.length; i++) {
        if (a == arrSplit[i]) {
            count++;
            index.push(i);
        } 
    }
    let b = [count,index];
    if (count>0) {
        return b;
    } else {
        return -1;
    }
}
console.log(kyTuTrongMang("a","khongvuivui"));