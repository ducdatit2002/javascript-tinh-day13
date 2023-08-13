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
  //Lấy giá trị 1 USD, số USD
  var USD = 23500;
  var soUSD = document.getElementById("soUSD").value;
  let tongUSD = 0;

  // Tính tổng só USD
  tongUSD = USD * soUSD;

  //Hiển thị kết quả
  document.getElementById("tongUSD").innerHTML = tongUSD.toLocaleString();
}

//BÀI 4: TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT
function tinhChuviDientich() {
  // Lấy giá trị chiều dài, chiều rộng
  var chieuDai = parseFloat(document.getElementById("chieuDai").value);
  var chieuRong = parseFloat(document.getElementById("chieuRong").value);

  // Tính chu vi và diện tích
  var chuVi = 0;
  var dienTich = 0;

  chuVi = (chieuDai + chieuRong) * 2;
  dienTich = chieuDai * chieuRong;

  var thongBao = "Chu vi: " + chuVi + ", Diện tích: " + dienTich;

  // Hiển thị kết quả
  document.getElementById("ChuviDientich").innerHTML = thongBao;
}

//BÀI 5: TÍNH TỔNG 2 KÝ SỐ
function tinhTongKySo() {
  var so2Chuso = parseFloat(document.getElementById("so2Chuso").value);

  var tongKyso = 0;

  var chuc = Math.floor((so2Chuso % 10);
  var donVi = (so2Chuso % 100) % 10;

  tongKyso = chuc + donVi;

  document.getElementById("tongKyso").innerHTML =tongKyso;
  
}
