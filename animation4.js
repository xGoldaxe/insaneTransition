const createDiv = require('./creatDiv');

function animation4(entry, color1, color2, color3, speed,  toTransit = ()=> {}) {
    if(entry.innerHTML===""){
        entry.style.display = "block";
        //toTransit
        setTimeout(() => {
            toTransit();
        }, 4000*speed);

        //start
        createDiv("anim4--smallSquare", color1, entry);
        createDiv("anim4--smallSquare1", color1, entry);
        createDiv("anim4--smallSquare2", color1, entry);
        createDiv("anim4--smallSquare3", color1, entry);
        entry.querySelector(".anim4--smallSquare").style.animation = "centerAppear ease-in " + 2000*speed + "ms";
        entry.querySelector(".anim4--smallSquare1").style.animation = "centerAppear ease-in " + 2000*speed + "ms";
        entry.querySelector(".anim4--smallSquare2").style.animation = "centerAppear ease-in " + 2000*speed + "ms";
        entry.querySelector(".anim4--smallSquare3").style.animation = "centerAppear ease-in " + 2000*speed + "ms";

        //step1
        setTimeout(() => {
            createDiv("anim2--square", color2, entry);
            entry.querySelector(".anim4--smallSquare").style.animation = "centerDisappear ease-in " + 2000*speed + "ms";
            entry.querySelector(".anim4--smallSquare1").style.animation = "centerDisappear ease-in " + 2000*speed + "ms";
            entry.querySelector(".anim4--smallSquare2").style.animation = "centerDisappear ease-in " + 2000*speed + "ms";
            entry.querySelector(".anim4--smallSquare3").style.animation = "centerDisappear ease-in " + 2000*speed + "ms";
        }, 2000*speed);

        //step2
        setTimeout(() => {
            //color
            entry.querySelector(".anim4--smallSquare").style.background = color3;
            entry.querySelector(".anim4--smallSquare1").style.background = color3;
            entry.querySelector(".anim4--smallSquare2").style.background = color3;
            entry.querySelector(".anim4--smallSquare3").style.background = color3;
            //animation
            entry.querySelector(".anim4--smallSquare").style.animation = "centerAppear ease-in " + 2000*speed + "ms";
            entry.querySelector(".anim4--smallSquare1").style.animation = "centerAppear ease-in " + 2000*speed + "ms";
            entry.querySelector(".anim4--smallSquare2").style.animation = "centerAppear ease-in " + 2000*speed + "ms";
            entry.querySelector(".anim4--smallSquare3").style.animation = "centerAppear ease-in " + 2000*speed + "ms";
        }, 4000*speed);

        //step3
        setTimeout(() => {
            //create
            createDiv("anim2--square2", color1, entry);
            entry.querySelector(".anim2--square2").classList.add("anim2--square");
            //color
            entry.querySelector(".anim2--square").style.background = color3;
            entry.querySelector(".anim2--square").style.zIndex = 3;
            //destroy
            entry.removeChild(entry.querySelector(".anim4--smallSquare"));
            entry.removeChild(entry.querySelector(".anim4--smallSquare1"));
            entry.removeChild(entry.querySelector(".anim4--smallSquare2"));
            entry.removeChild(entry.querySelector(".anim4--smallSquare3"));
            //animation
            entry.querySelector(".anim2--square").style.animation = "centerYDisappear ease-in " + 1000*speed + "ms forwards";
        }, 6000*speed);

        //step4
        setTimeout(() => {
            entry.querySelector(".anim2--square2").style.animation = "centerYDisappear ease-in " + 1000*speed + "ms forwards";
        }, 7000*speed);

        //end
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                entry.innerHTML = "";
                entry.style.display = "none";
                resolve();
            }, 8000*speed);
        });
    }
}

exports.animation4 = animation4;