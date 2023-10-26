
let nameDOM = document.querySelector('#myName')
let nameİnfo = prompt('Lütfen Adınızı Giriniz.')
nameDOM.innerHTML = nameİnfo
let now = new Date();  // mevcut zamanı al
let daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
document.querySelector("#day").innerHTML = daysOfWeek[now.getDay()]
function updateTime() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    

    seconds++;
  
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
  
    if (minutes === 60) {
      minutes = 0;
      hour += 1;
    }
  
    if (hour === 24) {
      hour = 0;
      document.querySelector("#day").innerHTML = daysOfWeek[now.getDay()]
    }
    
    document.querySelector("#saat").innerHTML = hour.toString().padStart(2, '0');
    document.querySelector("#dakika").innerHTML = minutes.toString().padStart(2, '0');
    document.querySelector("#saniye").innerHTML = seconds.toString().padStart(2, '0');
    
  }
  
  setInterval(updateTime, 1000);  // 1 saniye aralıklarla fonksiyonu çalıştır.

