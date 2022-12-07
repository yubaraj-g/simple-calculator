let strng = "";

let buttons = document.getElementsByClassName('button');

// or

// let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            strng = eval(strng);
            document.querySelector('textarea').value = strng;
        } else if(e.target.innerHTML == "C"){
            strng = "";
            document.querySelector('textarea').value = strng;
        } else if(e.target.innerHTML == 'DEL'){
            strng = document.querySelector('textarea').value.slice(0, -1);
            document.querySelector('textarea').value = strng;
        }
        else {
            // console.log(e.target);
            strng = strng + e.target.innerHTML;
            document.querySelector('textarea').value = strng;
        }
    })
})