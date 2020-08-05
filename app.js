
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

//DYNAMIC BACKGROUND

})();


//EVENT LISTENERS FOR GETTING NAMES ENTERED
name.addEventListener('focus', (e) =>{
    e.target.value = ' ';
    e.target.style.borderBottom ='.1rem solid rgb(254, 254, 255)'; 
});

name.addEventListener('blur', (e) =>{
    e.target.style.borderBottom ='0';
    if(name.value == '' || name.value == ' '){
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
   /*  container.insertBefore(field,container.lastChild); */
});
   const orderedList = document.createElement('ol'); 
   todoContainer.insertAdjacentElement('beforeend', orderedList);

todoField.addEventListener('keypress', (e) =>{
    e.target.focus(); 
if(e.keyCode == 13 || e.which ==13){
    const list = document.createElement('li');
    list.textContent = e.target.value;
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.textContent = 'x';
    list.appendChild(delBtn);
    orderedList.appendChild(list);
    e.target.value = '';
}
})

