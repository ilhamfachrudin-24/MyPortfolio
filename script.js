const roles = [
    "Web3 Developer",
    "AI Engineer",
    "Full Stack Developer"
];


let roleIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");



function typeEffect(){


    if(charIndex < roles[roleIndex].length){


        typingElement.textContent +=
        roles[roleIndex].charAt(charIndex);


        charIndex++;


        setTimeout(
            typeEffect,
            100
        );


    } else {


        setTimeout(
            deleteEffect,
            1500
        );


    }


}





function deleteEffect(){


    if(charIndex > 0){


        typingElement.textContent =
        roles[roleIndex].substring(
            0,
            charIndex - 1
        );


        charIndex--;


        setTimeout(
            deleteEffect,
            50
        );



    } else {



        roleIndex++;



        if(roleIndex >= roles.length){

            roleIndex = 0;

        }



        setTimeout(
            typeEffect,
            500
        );


    }


}





typeEffect();






// Smooth scrolling

document.querySelectorAll(
"a[href^='#']"
)
.forEach(link => {


    link.addEventListener(
    "click",
    function(e){


        e.preventDefault();


        const target =
        document.querySelector(
        this.getAttribute("href")
        );



        if(target){


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});








// Scroll reveal


const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},

{

threshold:0.15
