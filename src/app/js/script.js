const form =document.querySelector("#form")
const email = document.querySelector("#email")
const submit = document.querySelector("#submit")

// Event Listeners

window.addEventListener('load',()=>{
    email.value=''
})

form.addEventListener('submit',e =>{
    
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(!emailRegex.test(email.value)){
        e.preventDefault();
        show_alert();
        console.log("Email is invlid");
        return false;
    }    

    return true;
})

email.addEventListener('focus', ()=>{
    if(form.clientWidth < 712){
        email.classList.replace('mb-1','mb-3');
        email.classList.replace('border-Light_Red','border-Pale_Blue');
    }else{
        form.classList.replace('md:mb-2','md:mb-20');
        email.classList.replace('border-Light_Red','border-Pale_Blue');
    }
    document.querySelector('.alert').remove();
    submit.disabled=false;
    submit.classList.replace('cursor-not-allowed','cursor-pointer')
})

// Helper functions

function show_alert(){
    const div = document.createElement('div');
    div.append("Please provide a valid email address");

    if(form.clientWidth < 712){
        div.className = "alert italic text-xs text-center text-Light_Red mb-6 font-semibold";
        email.classList.replace('mb-3', 'mb-1');
        email.classList.replace('border-Pale_Blue', 'border-Light_Red');
        email.placeholder = "example@email/com";
        email.classList.add("placeholder:text-Very_Dark_Blue");
        email.after(div);
    }else{
        div.className = "alert italic text-xs ps-7 mb-20 w-full text-left text-Light_Red font-semibold"
        form.classList.replace('md:mb-20', 'md:mb-2');
        email.classList.replace('border-Pale_Blue', 'border-Light_Red');
        email.placeholder = "example@email/com";
        email.classList.add("placeholder:text-Very_Dark_Blue");
        form.after(div);
    }
    submit.disabled=true;
    submit.classList.replace('cursor-pointer','cursor-not-allowed')
}





