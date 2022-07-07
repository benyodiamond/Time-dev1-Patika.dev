// Ansayfaya giriş yeri
let userName = prompt(" Anasdayfaya girmek için lütfen isminizi giriniz:");
let textInfo;
let info = document.querySelector("#info")
if(userName.length>0)
{
    time();
		info.innerHTML = `Merhaba, ${userName}! Hoşgeldin :)	 `
} else{
    alert('Lütfen İsminizi giriniz')
    window.location = '/index.html'
}
console.log(textInfo);

// Saat ve gün ayarlandı
function time(){
	let zaman = document.querySelector("#zaman")
	const tarih=new Date();
	let gun=tarih.getDay();
	let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
	let saat=tarih.getHours();
	let dakika=tarih.getMinutes();
	let saniye=tarih.getSeconds();
	let goster = `${saat}:${dakika}:${saniye} ${gunler[gun]}`
	zaman.innerHTML = `${goster}`
	setInterval(time, 1000);
}

