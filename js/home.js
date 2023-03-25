var simpan = localStorage.getItem("data_user");
var data_user2 = JSON.parse(simpan);

var tampil = document.getElementById("user");
tampil.innerHTML = data_user2[0];