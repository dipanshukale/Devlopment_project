const cont = document.querySelector(".whether-website");
const city = document.querySelector(".cities");
const input = document.querySelector(".click");
const submit = document.querySelector(".btn");
const place = document.querySelector('form');

let cityinput = "France";
let image =  


cont.addEventListener("click", () => {
    if(input.value.length==0){
       
        // cont.style.backgroundImage = "url(production_id-4771356 (1080p).mp4)";
      
    }else{
        cityinput = input.value;
        // cont.style.backgroundImage = "url(pexels-sindre-fs-1028538.jpg)";
        // console.log("you entered a city name.!")
    }
})

    city.addEventListener("click", (e) => {
        
            let err = alert("you click here! ");
            console.log(alert);
      
    })

    // submit.addEventListener("click", (e) => {
    //     // cityinput = e.target.innerHTML;
    //     console.log("button was clicked !");
        
    // })
    

