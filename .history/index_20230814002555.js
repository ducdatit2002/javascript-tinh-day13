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
  // Lấy giá trị của 5 số từ các phần tử input
  var sothuc01 = parseFloat(document.getElementById("sothuc01").value);
  var sothuc02 = parseFloat(document.getElementById("sothuc02").value);
  var sothuc03 = parseFloat(document.getElementById("sothuc03").value);
  var sothuc04 = parseFloat(document.getElementById("sothuc04").value);
  var sothuc05 = parseFloat(document.getElementById("sothuc05").value);

  // Tính giá trị trung bình
  var trungBinh = (sothuc01 + sothuc02 + sothuc03 + sothuc04 + sothuc05) / 5;

  // Hiển thị kết quả trung bình
  document.getElementById("trungBinh").innerHTML = trungBinh.toLocaleString();
}

// BÀI 3: QUY ĐỔI USD TO VNĐ
function tinhUSD() {
    var 1USD = 23500;
    var soUSD = 
}