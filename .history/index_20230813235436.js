// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
function tinhTongLuong() {
  //input: tienluong1h, so gio lam:number
  var tie
  var soGioLam = document.getElementById("soGioLam").value;
  //Kiểm tra input
  // console.log(tienLuong);
  // console.log(soGioLam);

  let tongLuong = 0;

  //progress
  tongLuong = tienLuong * soGioLam;

  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
}