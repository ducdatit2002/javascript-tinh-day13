// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
function tinhTongLuong() {
  //input: tienluong1h, so gio lam:number
  var tienLuong = 100000;
  var soGioLam = document.getElementById("soGioLam").value;
  //Kiểm tra input
  // console.log(tienLuong);
  // console.log(soGioLam);

  let tongLuong = 0;

  //progress
  tongLuong = tienLuong * soGioLam;

  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
}

// BÀI 2: TÍNH TRUNG BÌNH 5 SỐ THỰC
function tinhTrungBinh() {
  var sothuc01 = document.getElementById("sothuc01");
  var sothuc02 = document.getElementById("sothuc02");
  var sothuc03 = document.getElementById("sothuc03");
  var sothuc04 = document.getElementById("sothuc04");
  var sothuc05 = document.getElementById("sothuc05");

  let trungBinh = 0;

  trungBinh = (sothuc01 + sothuc02 + sothuc03 + sothuc04 + sothuc05)/5;

   document.getElementById("trungBinh").innerHTML = trungBinh.toLocaleString();
}
