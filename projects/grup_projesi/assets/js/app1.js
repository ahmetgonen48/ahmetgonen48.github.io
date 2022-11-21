let agirlik = 0
let en = 0
let boy = 0
let yükseklik = 0
let ücret = 0
function hesapla(){
   agirlik = Number (document.getElementById("agirlik").value)
   en = Number (document.getElementById("en").value)
   boy = Number (document.getElementById("boy").value)
   yükseklik = Number (document.getElementById("yükseklik").value)
    
   ücret = (agirlik * en * boy * yükseklik) / 3000

   console.log(ücret)
   //sonuc = (agirlik * en * boy * yükseklik) / 3000

   document.getElementById("sonuc").innerHTML = ücret
   

}

// vize ortaalama 


            let vize1 = 0;
            let vize2 = 0;
            let final = 0;
            let odev1 = 0;
            let odev2 = 0;
            let proje = 0;

            function ortalama(){
                vize1 = Number(document.getElementById("vize1").value)
                vize2 = Number(document.getElementById("vize2").value)
                final = Number(document.getElementById("final").value)
                odev1 = Number(document.getElementById("odev1").value)
                odev2 = Number(document.getElementById("odev2").value)
                proje = Number(document.getElementById("proje").value)

                let ortalama = ((vize1+vize2)/2)*0.3+(final*0.5)+((odev1+odev2)/2*0.1)+0.1*proje

                // console.log("ortalamanız : " + ortalama)
    
                let ortalamaDurum = (50 <= ortalama) ? "geçerli ortalama" : "geçersiz ortalama" ;
               //  console.log(ortalamaDurum)
    
                let finalDurum = ( 60 <= final ) ? "final notu geçerli" : "Final notu geçersiz "
               //  console.log(finalDurum)


                if ( final < 60){
                  document.getElementById("ort1").innerHTML =("Kaldınızz")
                }else if ( ortalama >=90 && final >= 60){
                  document.getElementById("ort1").innerHTML =("Geçme notu : AA");
                } else if ( ortalama >=80 && final >= 60){
                  document.getElementById("ort1").innerHTML =("Geçme notu : BA");
                } else if ( ortalama >=75 && final >= 60){
                  document.getElementById("ort1").innerHTML =("Geçme notu : BB");
                } else if ( ortalama >=65 && final >= 60){
                  document.getElementById("ort1").innerHTML =("Geçme notu : CB");
                } else if ( ortalama >=50 && final >= 60){
                  document.getElementById("ort1").innerHTML =("Geçme notu : CC");
                } else if ( ortalama <50 ) {
                  document.getElementById("ort1").innerHTML =("Kaldınız");
                }
    
    
    
                mesaj = `vize not ortalaması ${(vize1 + vize2)/2} ve ödev not ortalaması ${(odev1 + odev2)/2} proje notu ${proje} final notu ${final} <br> genel ortalama ${ortalama} <br> ${finalDurum}dir.`
                document.getElementById("ort").innerHTML = mesaj
            }

              //yakıt tüketimi
              let tutar= 0
              let km= 0
              let sonucc= 0
  
              function kmyol(){
              tutar = Number (document.getElementById("yakittutari").value)
              km = Number (document.getElementById("gidilenkm").value)
              
               sonucc= tutar/(km)
                document.getElementById("yeni").innerHTML = sonucc
  
              }
  
  
  





            



