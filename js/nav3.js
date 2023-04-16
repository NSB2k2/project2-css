// thẻ ul
var mainNav = document.getElementById("mainNav");
//các thẻ con li
var listNav = mainNav.getElementsByTagName("li");
for (var i = 0; i < listNav.length; i++) {
  listNav[i].addEventListener("click", function () {
    //tìm thẻ đang được gắn class active
    var current = document.querySelector("#mainNav .active");
    //Xóa class active của thẻ đang được gắn
    current.className = current.className.replace("active", "");
    //thêm class active vào cho thẻ li được click
    this.className += "active";
  });
}
