
//DOM
let container = document.querySelector('.container');
let h = document.querySelector('.h');
let m = document.querySelector('.m');
let s = document.querySelector('.s');
let gm = document.querySelector('.gm');
let greetingMode = document.querySelector('.greeting-mode');
let name = document.querySelector('.name');
let addTodo = document.querySelector('.add-btn');
const todoField = document.querySelector('.add-todo');
const todoContainer = document.querySelector('.todo-container');
let greet = 'Good Day!';
let value = '';

//VALUE VARIABLE
name.value = localStorage.getItem('name'); 
/* value = name.value; */

 //FUNCTION FOR CREATING LIST ELEMENT
 const listMaker = (text) =>{
    const list = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.textContent = 'x';
    list.textContent = text;
    list.appendChild(delBtn);
    orderedList.appendChild(list);
  }

//DYNAMIC TIME
let dynamicTime = (() =>{
    setInterval(() => {
        let getHour = new Date().getHours();
        let getMin = new Date().getMinutes();
        let getSec = new Date().getSeconds();
       
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

})();


//EVENT LISTENERS FOR FOCUS INPUT
name.addEventListener('focus', (e) =>{
    e.target.value = ' ';
    e.target.style.borderBottom ='.1rem solid rgb(254, 254, 255)'; 
});

//EVENT LISTENERS FOR GETTING NAME ENTERED AND STORING INTO LOCALSTORAGE
name.addEventListener('blur', (e) =>{
    e.target.style.borderBottom ='0';
    if(name.value == '' || name.value == ' '){
        //IF INPUT IS EMPTY, PREVIOUS VALUE SHOULD BE USED
        value = localStorage.getItem('name');
        name.value = value;
    }
    else{
        value = name.value;
        localStorage.setItem('name', value);
    }
}); 

//EVENT LISTENERS FOR ADD TODO
addTodo.addEventListener('click', (e) =>{
    const field = document.createElement('input');
    field.classList.add('todo-field');
    field.setAttribute('type', 'text');
    todoField.appendChild(field);
});

   const orderedList = document.createElement('ol'); 
   todoContainer.insertAdjacentElement('beforeend', orderedList);


    const todo = localStorage.getItem('items'); //STRING
//CHECK IF ANY DATA HAS BEEN ADDED TO THE LOCALSTORAGE
    if(localStorage.length > 0){
        //CHECK IF TODO EXIST 
        if(JSON.parse(todo) == null){
            var itemAray = [];
        }
        else{
            var itemAray = JSON.parse(todo); 
          }
       
    }
        else{
            var itemAray = []; 
        }  
   

    if(todo !== null){
        const todoArr = JSON.parse(todo);
        todoArr.forEach((cur) => {
         listMaker(cur); 
   })
    }
    

//EVENT LISTENERS FOR ADDING GOALS
    todoField.addEventListener('keypress', (e) =>{
   
if(e.keyCode == 13 || e.which ==13){

    itemAray.push(e.target.value);
    localStorage.setItem('items', JSON.stringify(itemAray))
    listMaker(e.target.value);
    e.target.value = '';
    e.target.focus(); 
}
})

document.addEventListener('click', (e)=>{
    console.log(e.target.parentNode);
})