const search =document.querySelector('.search')
const input =document.querySelector('input')
const cityName = document.querySelector('.cityName')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.windSpeed')
const icon = document.querySelector('.icon')


search.addEventListener('click', ()=>{
    let weatherUrl= fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=de37329703d8f05bb0a39de5fd477e3c`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        input.value.textContent = data.name
        cityName.textContent = data.name 
        temperature.textContent = `${Math.round(data.main.temp)}°C`
        humidity.textContent = `${data.main.humidity}%`
        windSpeed.textContent = `${data.wind.speed}km/h`
        if(data.weather[0].main === 'Clouds') {
            icon.src = './images/clouds.png'
            icon.alt = 'Cloudy'
        } else if(data.weather[0].main === 'Clear') {
            icon.src = './images/clear.png'
            icon.alt = 'Clear'
        } else if(data.weather[0].main === 'Drizzle') {
            icon.src = './images/drizzle.png'
            icon.alt = 'Drizzle'
        } else if(data.weather[0].main === 'Haze') {
            icon.src = './images/weather.png'
            icon.alt = 'Haze'
        } else if(data.weather[0].main === 'Mist') {
            icon.src = './images/mist.png'
            icon.alt = 'Mist'
        } else if(data.weather[0].main === 'Rain') {
            icon.src = './images/rain.png'
            icon.alt = 'Rain'
        } else if(data.weather[0].main === 'Snow') {
            icon.src = './images/snow.png'
            icon.alt = 'Snow'
        } else if(data.weather[0].main === 'Wind') {
            icon.src = './images/wind.png'
            icon.alt = 'Wind'
        }
    })
})



