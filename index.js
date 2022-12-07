let addToList=document.querySelector('.add');
let toDoList=document.querySelector('.toDoList');
let addcontent=document.querySelector('#addcontent');
// let removeList=document.querySelector('.remove');


addToList.addEventListener('click',()=>{
    var list=document.createElement('p')
    list.innerText=addcontent.value;
    toDoList.appendChild(list);
    list.classList.add('newlyAdded')
    var checkbox=document.createElement('input')
    checkbox.type="checkbox";
    toDoList.appendChild(checkbox);
    checkbox.classList.add('newlyAdded')
    addcontent.value='';
    addcontent.focus();
    // list.addEventListener('click',()=>{
    //     list.style.textDecoration="line-through";
    // })
    checkbox.addEventListener('dblclick',()=>{
        toDoList.removeChild(list);
        toDoList.removeChild(checkbox)
    })
    
})


