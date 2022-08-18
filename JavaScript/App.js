const getElement=(selector)=>{
    const element=document.querySelector(selector);
    if(element)
      {   
        return element;
      }
      throw Error(`Please double check your class name, there is no${selector} class`);
};


const links=getElement('.nav-links');
const navBtnDOM=getElement('.nav-btn');
//Controlling the hide and visible of the menu
navBtnDOM.addEventListener('click',()=>{links.classList.toggle('show-link')});

//Setting the Date on the nav bar
const date=getElement('#date');
const currentYear=new Date().getFullYear();
console.log(currentYear);
date.textContent=currentYear;

