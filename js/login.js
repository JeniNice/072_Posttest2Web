let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let form = document.getElementById("form");

signinBtn.onclick = function(e){
    var status = document.getElementById("signinBtn").className;
    if(status == "disable"){
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.remove("enable");
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
        signinBtn.classList.add("enable");
    }else{
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        var simpan = localStorage.getItem("data_user");

        if(simpan){
            var data_user2 = JSON.parse(simpan);
            const loc_email = data_user2[1];
            const loc_password = data_user2[2];

            if (email == loc_email && password == loc_password) {
                window.location.href = "website/Home.html";
            } else{
                alert("Email atau Password Salah");
            }
        }else{
            alert("Silahkan Daftar Dulu");
        }
    }
}

signupBtn.onclick = function(e){
    var status = document.getElementById("signupBtn").className;
    if(status == "disable"){
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signinBtn.classList.remove("enable");
        signinBtn.classList.add("disable");
        signupBtn.classList.remove("disable");
        signupBtn.classList.add("enable");
    }else{
        e.preventDefault();
        var uname = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        var data = [uname,email,pass];
        
        localStorage.setItem("data_user", JSON.stringify(data));
        return alert("Sign Up Berhasil");
    }
}