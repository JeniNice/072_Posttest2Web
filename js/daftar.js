let daftarBtn = document.getElementById("daftarBtn");

daftarBtn.onclick = function(){
    
    const nama = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementsByName("gender");
    const course = document.getElementById("course").value;
    const message = document.getElementById("message").value;
    const file = document.getElementById("file").value;
    const terms = document.getElementsByName("terms_policy");

    var val_gender;
    var val_terms="";

    for(i=0; i<gender.length; i++){
        if(gender[i].checked){
            val_gender = gender[i].value;
        }
    }
    for(j=0; j<terms.length; j++){
        if(terms[j].checked){
            val_terms += terms[j].value + ",";
        }
    }
    var data = [nama,email,val_gender,course,message,file,val_terms];
    sessionStorage.setItem("data_course",JSON.stringify(data));
    alert("Berhasil Daftar Kursus");
    window.location.href = "Kursus.html"
}