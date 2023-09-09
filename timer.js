const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')

document.addEventListener('DOMContentLoaded',timer);
var time=0;
function timer(){
    setInterval(function(){
    time++;

    },500)
  
}
one.addEventListener('click',function(){
    alert(time+' saniye zaman geçirdiniz')
})
two.addEventListener('click',function(){
    alert(time+' saniye zaman geçirdiniz')
})
three.addEventListener('click',function(){
    alert(time+' saniye zaman geçirdiniz')
})
four.addEventListener('click',function(){
    alert(time+' saniye zaman geçirdiniz')
})
five.addEventListener('click',function(){
    alert(time+' saniye zaman geçirdiniz')
})
six.addEventListener('click',function(){
    alert(time+' saniye zaman geçirdiniz')
})
seven.addEventListener('click',function(){
    alert(time+' saniye zaman geçirdiniz')
})
eight.addEventListener('click',function(){
    alert(time+' saniye zaman geçirdiniz')
})


const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const message = document.querySelector("#message"); 
const send = document.querySelector("#send"); 

send.addEventListener('click',function(){
  alert(`AD:${name.value}
>> SOYAD:${surname.value}
>>ADDRESS:${address.value}
>>EMAİL:${email.value}
>>MESSAGE:${message.value} `)
})

