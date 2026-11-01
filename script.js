const roles = [
    "Web3 Developer",
    "AI Engineer",
    "Full Stack Developer"
];


let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");


function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingElement.textContent += 
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(deleteEffect,1500);

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

        setTimeout(deleteEffect,50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;

        }


        setTimeout(typeEffect,500);

    }

}



typeEffect();





// Smooth scroll animation

const links = document.querySelectorAll("a");


links.forEach(link => {


    link.addEventListener(
        "click",
        function(e){


            const target =
            document.querySelector(
            this.getAttribute("href")
            );


            if(target){

                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth"

                });

            }


        }
    );


});





// Console message

console.log(
"🚀 Web3 AI Portfolio Loaded Successfully"
);

console.log(
"Built by Ahmad Ilham"
);
