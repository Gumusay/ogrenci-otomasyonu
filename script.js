// Öğrencileri içeren dizi
const ogrenciler = [];

// HTML elementlerini seçme
const ogrenciTablosu = document.getElementById("ogrenciTablosu");
const ogrenciEkleFormu = document.getElementById("ogrenciEkleFormu");

// Yeni öğrenci eklemek için form gönderildiğinde çalışacak fonksiyon
ogrenciEkleFormu.addEventListener("submit", function (e) {
    e.preventDefault(); // Formun varsayılan davranışını engelle

    // Form verilerini al
    const ad = document.getElementById("ad").value;
    const soyad = document.getElementById("soyad").value;
    const yas = document.getElementById("yas").value;
    const cinsiyet = document.getElementById("cinsiyet").value;

    // Yeni öğrenciyi oluştur
    const yeniOgrenci = {
        ad,
        soyad,
        yas,
        cinsiyet,
    };

    // Öğrenciyi diziye ekle
    ogrenciler.push(yeniOgrenci);

    // Öğrenciyi tabloya ekle
    ogrenciyiTabloyaEkle(yeniOgrenci);

    // Formu temizle
    ogrenciEkleFormu.reset();
});

// Öğrenciyi tabloya eklemek için fonksiyon
function ogrenciyiTabloyaEkle(ogrenci) {
    const yeniSatir = document.createElement("tr");

    // Ad Soyad sütunu
    const adSoyadHucresi = document.createElement("td");
    adSoyadHucresi.textContent = `${ogrenci.ad} ${ogrenci.soyad}`;

    // Yaş sütunu
    const yasHucresi = document.createElement("td");
    yasHucresi.textContent = ogrenci.yas;

    // Cinsiyet sütunu
    const cinsiyetHucresi = document.createElement("td");
    cinsiyetHucresi.textContent = ogrenci.cinsiyet;

    // Sil butonu sütunu
    const silHucresi = document.createElement("td");
    const silDugmesi = document.createElement("button");
    silDugmesi.textContent = "Sil";
    silDugmesi.addEventListener("click", function () {
        if (confirm("Bu öğrenciyi silmek istediğinizden emin misiniz?")) {
            // Öğrenciyi dizi ve tablodan sil
            const index = ogrenciler.indexOf(ogrenci);
            if (index !== -1) {
                ogrenciler.splice(index, 1);
                yeniSatir.remove();
            }
        }
    });
    silHucresi.appendChild(silDugmesi);

    // Satırı oluşturulan hücrelerle doldur
    yeniSatir.appendChild(adSoyadHucresi);
    yeniSatir.appendChild(yasHucresi);
    yeniSatir.appendChild(cinsiyetHucresi);
    yeniSatir.appendChild(silHucresi);

    // Tabloya yeni satırı ekle
    ogrenciTablosu.querySelector("tbody").appendChild(yeniSatir);
}

// Örnek öğrencileri ekleyelim
const ornekOgrenciler = [
    { 
        ad: "Ahmet", 
        soyad: "Yılmaz",
        yas: 20, 
        cinsiyet: "Erkek" 
    },
    {
         ad: "Ayşe", 
         soyad: "Kara", 
         yas: 22, 
         cinsiyet: "Kadın" 
    },
    { 
        ad: "Selenay", 
        soyad: "Gümüşay",
        yas: 23, 
        cinsiyet: "Kadın" 
    },
    { 
        ad: "Yaman", 
        soyad: "Ok",
        yas: 25, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Nihat", 
        soyad: "Duysa",
        yas: 35, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Mert", 
        soyad: "Yapıcı",
        yas: 27, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Umut", 
        soyad: "Ordukaya",
        yas: 24, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Arzu", 
        soyad: "Sönmez",
        yas: 55, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Ezgi", 
        soyad: "Portakal",
        yas: 27, 
        cinsiyet: "Kadın" 
    },
    { 
        ad: "Esra", 
        soyad: "Kol",
        yas: 24, 
        cinsiyet: "Kadın" 
    },
    { 
        ad: "Aleyna", 
        soyad: "Çalışye",
        yas: 20, 
        cinsiyet: "Kadın" 
    },
    { 
        ad: "Abdullah", 
        soyad: "Anlı",
        yas: 26, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Yağmur", 
        soyad: "Karaca",
        yas: 21, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Sefa", 
        soyad: "Yıldırım",
        yas: 28, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Mert", 
        soyad: "İskender",
        yas: 26, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Nuray", 
        soyad: "Efe",
        yas: 35, 
        cinsiyet: "Kadın" 
    },
    { 
        ad: "Kevser", 
        soyad: "Dursun",
        yas: 23, 
        cinsiyet: "Kadın" 
    },
    { 
        ad: "Orhan", 
        soyad: "Ekici",
        yas: 35, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Furkan", 
        soyad: "Özay",
        yas: 24, 
        cinsiyet: "Erkek" 
    },
    { 
        ad: "Emre", 
        soyad: "Bilir",
        yas: 25, 
        cinsiyet: "Erkek" 
    },
   
];

ornekOgrenciler.forEach((ogrenci) => {
    ogrenciler.push(ogrenci);
    ogrenciyiTabloyaEkle(ogrenci);
});