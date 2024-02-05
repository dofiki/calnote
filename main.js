let first7 = document.querySelectorAll(".f7 div");
let first7notes = document.querySelectorAll(".nf7 div");
let calendarSection = document.querySelector('.calendarSection')
first7.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        //to remove previous note
        first7notes.forEach((nelement)=>{
            nelement.classList.remove('active')
        })
        first7notes[index].classList.add('active');
        
    })
})

/*

note tab functionality
save button
local storage


*/