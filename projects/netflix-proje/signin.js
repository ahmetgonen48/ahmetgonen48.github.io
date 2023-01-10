const kayitliKullanici = JSON.parse(localStorage.getItem("kullanici"));

const eposta = document.getElementById("eposta");

console.log(kayitliKullanici)


// eposta.value =kayitliKullanici.mail.value;

mailYazdir();
function mailYazdir(){
    eposta.appendChild(document.createTextNode(kayitliKullanici.mail));
    eposta.className="kalinyazi"
};

const sifre = document.getElementById("parola");
const kayit2 = document.getElementById("kayit2");
eventListeners();

function eventListeners(){
    kayit2.addEventListener("click",kayitOlma2);
}
function kayitOlma2(){
    if(sifre.value === ""){
        
        sifreOlustur();
    } else {
        parola = sifre.value;
        mail = kayitliKullanici.mail;
        console.log(mail);
        
        localStorage.setItem("kullanici", JSON.stringify({ mail , parola }));
         
        console.log(kayitliKullanici);

        window.location = "./login.html"

    }


}



const hata = document.getElementById("hata")

function sifreOlustur(){
    const lastChild = hata.lastChild;
        hata.removeChild(lastChild);

    const p = document.createElement("p");
    p.appendChild(document.createTextNode("lütfen şifre girin..."));
    p.className = "text-danger textBig";
    hata.appendChild(p);


}