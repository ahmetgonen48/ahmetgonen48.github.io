const epostaa = document.getElementById("girisBilgi");
const sifree = document.getElementById("sifreBilgi");
const oturumac = document.getElementById("oturumAcma");
const hata = document.getElementById("hata1");

const kayitliKullanici = JSON.parse(localStorage.getItem("kullanici"));
console.log(kayitliKullanici)
eventListeners();

function eventListeners(){
    oturumac.addEventListener("click",giris);
}

function giris(){
    if(epostaa.value === ""){

        hatamesaji();

    
        console.log("hata")
    }else if (sifree.value === ""){
        
        hatamesaji();
        
        console.log("hata2")
    } else if(epostaa.value === kayitliKullanici.mail && sifree.value === kayitliKullanici.parola){
        window.location = "./kullanici.html"

    }
    
}
function hatamesaji(){
    const lastChild = hata.lastChild;
        hata.removeChild(lastChild);

    const p = document.createElement("p");
    p.appendChild(document.createTextNode("Bilgileri eksiksiz girin"));
    p.className = "text-warning";

    hata.appendChild(p);

}
