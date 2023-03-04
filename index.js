const API_KEY=`d045e1048d9bb343030196a8cea2f754`;

const loadTemp=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data => setTemp(data))
}
 const setTemp=temp=>{
    console.log(temp.weather[0].main)
    const getId=document.getElementById('tempSet');
    getId.innerText= temp.main.temp;
    document.getElementById('weather').innerText= temp.weather[0].main
 }

 document.getElementById('searchBtn').addEventListener('click',function(){
    const inputField=document.getElementById('inputField');
    const city=inputField.value;
    inputField.value=''
    document.getElementById('city').innerText= city
    
    loadTemp(city)
 })


loadTemp('dhaka')