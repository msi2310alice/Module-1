function thang(m) {
    let a = Number(m);
    if (a == 1 || a == 3 || a ==5 || a==7 ||a==8 || a==10 ||a==12) {
        console.log("Tháng" + a + "có 31 ngày");
    } else if (a==4||a==6||a==9||a==11) {
        console.log("Tháng" + a + "có 30 ngày");
    } else if (a==2) {
        console.log("Tháng " + a + " có 29 ngày");
    } else {
        console.log("Vui lòng nhập tháng");
    }
}
thang(2);