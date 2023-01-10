let email = document.getElementById("email");
let kayit = document.getElementById("button-addon2");
let signin = document.querySelector(".bura");

localStorage.setItem("kullanici", JSON.stringify({ mail: "John", parola: "123456" }));
eventListeners();

function eventListeners(){
    kayit.addEventListener("click",kayitOlma);
}

function kayitOlma(){
    if(email.value === ""){
        

        emailGir();
    } else  {

        const mail = email.value;
        const parola = "";
        
        localStorage.setItem("kullanici", JSON.stringify({ mail ,parola }));

        // alert("Kayıt olma işleminiz başarıyla tamamlandı!");

        // console.log(email.value);
        window.location = "./signin.html"
    }

    e.preventDefault();
}

function emailGir(){
        const lastChild = signin.lastChild;
        signin.removeChild(lastChild);
    
    const p = document.createElement("p");

    p.appendChild(document.createTextNode("lütfen E-mail girin..."))
    p.className = "text-warning";
    signin.appendChild(p);

}
