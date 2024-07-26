const apikey="069e722b253fa5a26b1018e62982c8d5"

const Api=`https://api.openweathermap.org/data/2.5/weather?q=`

const btn=document.querySelector('.search button')
const searchBox=document.querySelector('.search input')

const wheatherImage=document.querySelector('.icon')

const wheather=async (city)=>{
let response=await fetch(Api+city+`&appid=${apikey}`)
let data=await response.json()
console.log(data)

document.querySelector('.temp').innerText=Math.round(data.main.temp)/10+"°C"
document.querySelector('.city').innerText=data.name+","+data.sys.country
document.querySelector('.wind').innerText=data.wind.speed+"km/h"
document.querySelector('.humidity').innerText=data.main.humidity+"%"


if(data.weather[0].main=='Clouds'){
    wheatherImage.src='images/clouds.png'
}
else if(data.weather[0].main=='Clear'){
    wheatherImage.src='images/clear.png'
}
else if(data.weather[0].main=='Snow'){
    wheatherImage.src='images/snow.png'
}else if(data.weather[0].main=='Rain'){
    wheatherImage.src='images/Rain.png'
}else if(data.weather[0].main=='Haze'){
    wheatherImage.src='images/clear.png'
}
else if(data.weather[0].main=='Mist'){
    wheatherImage.src='images/mist.png'
}

}




btn.addEventListener('click',()=>{
    wheather(searchBox.value) })