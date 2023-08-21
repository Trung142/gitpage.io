const pare = document.querySelector('.pare');
const pare1 = document.querySelector('.pare1');
const comment = document.querySelector('#list-comment');
const commentItem = document.querySelectorAll('#list-comment .item2');
var translateY = 0;
var count = commentItem.length;
pare.addEventListener('click' , function(event){
    if(pare){
        pare.style.background = "#99bdb1";
        pare1.style.background ="#d0dcd8"
    }
    event.preventDefault();
    if(count == 1){
        return false;
    }
    else{
    translateY = translateY -400;
    comment.style.transform = `translateY(${translateY}px)`;
    count--
    }
})
pare1.addEventListener('click', function(event){
    if(pare1){
        pare1.style.background = "#99bdb1"
        pare.style.background = "#d0dcd8"

    }
    event.preventDefault()
    if(count == 3){
        return false;
    }
    else{
    translateY = translateY + 400;
    comment.style.transform = `translateY(${translateY}px)`;
    count++
    }
})
/*email*/
const email = document.querySelector('#email');
const pas = document.querySelector('#pasw')
const menu = document.querySelector('#submit button');
function showlError(input, message){
    let parent = input.parentElement;
    parent.classList.add('error');
    let small =parent.querySelector('small');
    small.innerText =message;
}
function showaccsee(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error');
    small.innerText = '';
}
function  checkEmailError(input){
    let checkemai = true;
    input.value = input.value.trim();
    if(input.value == ""){
        checkemai = true;
        showlError(input,'khong duoc de trong')
    }
    else{
        showaccsee(input);
    }
    return checkemai;
}
function checklength(input,min, max){
    input.value = input.value.trim();
    if(input.value.length < min){
        showlError(input,`nhieu hon ${min} ky tu`);
        return true;
    }
    if(input.value.length > max){
        showlError(input,`it hon ${max} ky tu`);
        return true;
    }
    return false;
}
menu.addEventListener('click', function(e){
    e.preventDefault()
    let ismailError = checkEmailError(email);
    let ismailErrors = checkEmailError(pas);
    checklength(pas,5,10)
})
