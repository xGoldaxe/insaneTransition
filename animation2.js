const createDiv = require('./creatDiv');

function animation2(entry, color1, color2, color3, speed, toTransit = ()=> {}) {
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
            document.querySelector(".anim2--square2").style.animation = "toRightAppear ease-in " + 1000*speed + "ms";
        }, 1000*speed);

        //step2
        setTimeout(() => {
            document.querySelector(".anim2--square").style.zIndex = 2;
            document.querySelector(".anim2--square").style.animation = "toTopAppear ease-in " + 1000*speed + "ms";
        }, 2000*speed);

        //step3
        setTimeout(() => {
            document.querySelector(".anim2--square").style.zIndex = 1;
            document.querySelector(".anim2--square2").style.zIndex = 2;
            document.querySelector(".anim2--square2").style.animation = "toBottomAppear ease-in " + 1000*speed + "ms";
        }, 3000*speed);

        //step4
        setTimeout(() => {
            document.querySelector(".anim2--square2").style.animation = "centerXDisappear ease-out " + 1000*speed + "ms forwards";
        }, 4000*speed);

        //step5
        setTimeout(() => {
            //the element to disapear animatioin

            //let square = document.querySelector(".anim2--square");
            //entry.removeChild(square);
            document.querySelector(".anim2--square").style.zIndex = 2;
            document.querySelector(".anim2--square2").style.zIndex = 1;
            document.querySelector(".anim2--square").style.animation = "centerXDisappear ease-out " + 1000*speed + "ms forwards";
        }, 5000*speed);


        //end
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                entry.innerHTML = "";
                entry.style.display = "none";
                resolve();
            }, 6000*speed);
        });
    }
}

exports.animation2 = animation2;