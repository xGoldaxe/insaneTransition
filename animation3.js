const createDiv = require('./creatDiv');

function animation3(entry, color1, color2, color3, speed, toTransit = ()=> {}) {
    if(entry.innerHTML===""){
        entry.style.display = "block";
        //toTransit
        setTimeout(() => {
            toTransit();
        }, 2000*speed);
        
        //start
        createDiv("anim2--square", color1, entry);
        document.querySelector(".anim2--square").style.animation = "toLeftAppear ease-in " + 1000*speed + "ms";

        //step1
        setTimeout(() => {
            createDiv("anim2--square2", color2, entry);
            document.querySelector(".anim2--square2").classList.add("anim2--square");
            document.querySelector(".anim2--square2").style.animation = "toLeftAppear ease-in " + 1000*speed + "ms";
        }, 1000*speed);

        //step2
        setTimeout(() => {
            createDiv("anim2--square3", color3, entry);
            document.querySelector(".anim2--square3").classList.add("anim2--square");
            document.querySelector(".anim2--square3").style.animation = "toLeftAppear ease-in " + 1000*speed + "ms";
        }, 2000*speed);

        //step3
        setTimeout(() => {
            document.querySelector(".anim2--square3").style.animation = "centerXDisappear ease-out " + 750*speed + "ms forwards";
        }, 3500*speed);

        //step4
        setTimeout(() => {
            document.querySelector(".anim2--square2").style.animation = "centerYDisappear ease-out " + 750*speed + "ms forwards";
        }, 4250*speed);

        //step4
        setTimeout(() => {
            document.querySelector(".anim2--square").style.animation = "centerXDisappear ease-out " + 750*speed + "ms forwards";
        }, 5000*speed);

        //end
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                entry.innerHTML = "";
                entry.style.display = "none";
                resolve();
            }, 5750*speed);
        });
    }
}

exports.animation3 = animation3;