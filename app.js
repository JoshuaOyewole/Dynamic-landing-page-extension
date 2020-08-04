//DOM

let container = document.querySelector('.container');
let h = document.querySelector('.h');
let m = document.querySelector('.m');
let s = document.querySelector('.s');
let gm = document.querySelector('.gm');
let greetingMode = document.querySelector('.greeting-mode');
let name = document.querySelector('.name');
let greet = 'Good Day!';
/* let getHour = new Date().getHours(); */

//DYNAMIC TIME
let dynamicTime = (() =>{
    setInterval(() => {
        let getHour = new Date().getHours();
        let getMin = new Date().getMinutes();
        let getSec = new Date().getSeconds();
        console.log(getHour);
        if(getHour >=22){
            greet = 'What a Lovely Night!';
            container.style.background = 'url(img/night.jpg)';
        }
        else if(getHour >=16){
            greet = 'Good Evening!'
            container.style.background = 'url(img/evening.jpg)';
        }
        else if(getHour >=12){
            greet = 'Good Afternoon!';
            container.style.background = 'url(img/afternoon.jpg)';
        }
        else if(getHour< 12){
            greet = 'Good Morning!';
            container.style.background = 'url(img/morning.jpg)';
        }
            
            
    gm.innerText = getHour>=12 ? 'PM' : 'AM';
    getHour = getHour > 12 ? getHour%12 : getHour;
    h.innerText = getHour< 10 ? '0'+ getHour: getHour;
    m.innerText = getMin< 10 ? '0'+ getMin: getMin;
    s.innerText =  getSec < 10 ? '0'+ getSec : getSec;
    greetingMode.innerText = greet;

        }, 1000);

//DYNAMIC BACKGROUND

})();

