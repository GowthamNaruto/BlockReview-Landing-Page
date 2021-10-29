import App from './App.svelte';

const app = new App({
	target: document.body,

});

export default app;


const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});
  


setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);




const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();
// Get Values
var name = getInputVal('name');
var email = getInputVal('email');
var subject = getInputVal('subject');
var message = getInputVal('message');
var budget = getInputVal('budget');

console.log(name);
console.log(email);
console.log(subject);
console.log(message);
console.log(budget);
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}












