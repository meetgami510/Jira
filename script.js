let bttage = document.querySelector(".bt1");
let modulecont = document.querySelector(".area-2")
let taskAreacont = document.querySelector(".content")
let maincont = document.querySelector(".main-cont");
let allpaircolour = document.querySelectorAll(".priority-colour");

let temp = true;

bttage.addEventListener("click",function(){
    if(temp)
    {
        modulecont.style.display = "flex";
    }else{
        modulecont.style.display = "none";
    }
    temp = !temp;
})


modulecont.addEventListener("keydown",function(e){
    let key = e.key;
    console.log(key);
    let p=0001;
    if(key =='Enter')
    {
        p++;
        creatTicket(taskAreacont.value,p);
        taskAreacont.value="";
        modulecont.style.display = "none";
        temp = !temp;
    }
})

for(let i=0;i<allpaircolour.length;i++)
{
    let takeone = allpaircolour[i];
    takeone.addEventListener("click",function(){
        for(let j=0;j<allpaircolour.length;j++)
        {
            allpaircolour[i].classList.remove("active");
        }
        
        takeone.classList.add("active");
    })
}

function creatTicket(task,p){
    let ticketcont = document.createElement("div");
    ticketcont.setAttribute('class','ticket-cont')
    ticketcont.innerHTML = `<div class="ticket-colour yellow"></div>
                        <div class="ticket-id">${p++}</div>
                        <div class="task-area">${task}</div>`
    maincont.appendChild(ticketcont);
}