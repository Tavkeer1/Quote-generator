// Variable
let btn = document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person= document.querySelector('.person');

const quotes = [
    {
    quote:'“If we rated greatness by the influence of the great, we will say "Muhammad is the greatest of the great in history”',
    person:"Will Durant"
},{
    quote:"When a broken heart heals, it becomes stronger than anything in the world.",
    person:"Tavkeer Pathan"
},{
    quote:"Patience is a pillar of faith.",
    person:"Hz. Umar (RA)"
},{
    quote:"Stick to the Truth, even if the Truth kills you.",
    person:"Hz. Umar (RA)"
},{
    quote:"Your charity will not be accepted until you believe: “I need the reward more than the beggar needs the money.",
    person:"Hz. Usman (RA)"
},{
    quote:"“He that is without sin among you, let him cast the first stone.”",
    person:"Jesus christ"
},{
    quote:"“With man this is impossible, but with God all things are possible.”",
    person:"Mathew"
},{
    quote:"“The planet is fine. The people are fucked.”",
    person:"George Carlin"
},{
    quote:"“Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart.”",
    person:"MAhatma Gandhi"
},{
    quote:"“One love, one heart, one destiny.”",
    person:"Robert Marley"
},
];
console.log(quotes.length)
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
