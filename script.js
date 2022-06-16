let weather = {
    apiKey : "e4af1aaaf7154581a1860648221506",
    fetchWeather: function(city){
        fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`
        ).then((response)=>response.json()
        ).then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data){

        const {name,localtime} = data.location;
        const {temp_c,wind_kph,humidity} = data.current; 
        const {text,icon} = data.current.condition;

        console.log(icon);

        document.querySelector('.title').innerText = `Weather in ${name}`;
        document.querySelector('.subtitle').innerText = `${localtime}`;
        document.querySelector('.temp').innerText = `${temp_c}° Celcius`;
        document.querySelector('.weather').innerText = `${text}`;
        document.querySelector('.icon').src = `https://${icon}`;
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
        document.querySelector('.wind-speed').innerText = `Wind speed: ${wind_kph}kmph`;

        setTimeout(()=>{
            document.querySelector('.weather-container').classList.remove('loading');
        },2000)






    },
    search:function(){
        this.fetchWeather(document.querySelector('.search-input').value);
    }

}


document.querySelector('#search-form').addEventListener('submit',(e)=>{
    e.preventDefault();

})


document.querySelector('.search-button').addEventListener('click',()=>{
    weather.search();

})

document.querySelector('.search-input').addEventListener('keyup',(e)=>{
    if(e.key == "Enter"){
        weather.search();
    }
})


weather.fetchWeather("Nairobi");