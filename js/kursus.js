var simpan = sessionStorage.getItem("data_course");
var data_user2 = JSON.parse(simpan);

var tampil1 = document.getElementById("name");
var tampil2 = document.getElementById("email");
var tampil3 = document.getElementById("gender");
var tampil4 = document.getElementById("kursus");
var tampil5 = document.getElementById("file");

tampil1.innerHTML = data_user2[0];
tampil2.innerHTML = data_user2[1];
tampil3.innerHTML = data_user2[2];
tampil4.innerHTML = data_user2[3];
tampil5.innerHTML = data_user2[5];