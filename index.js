function animation1(entry, color1, color2, color3, speed, toTransit = ()=> {}) {
    
    if(entry.innerHTML===""){
        entry.style.display = "block";
        //toTransit
        setTimeout(() => {
            toTransit();
        }, 4000*speed);

        //start
        createDiv("mainSquare", color1, entry);
        document.querySelector(".mainSquare").style.animation = "toLeftAppear ease-in-out " + 2000*speed + "ms forwards";
        //step0
        setTimeout(() => {
            createDiv("bgSquare", color2, entry);
            document.querySelector(".mainSquare").style.animation = "mainSquareAnimation ease-in " + 2000*speed + "ms forwards";
        }, 2000*speed);


        //step1
        setTimeout(() => {
            createDiv("mainSquare2", color3, entry);
            document.querySelector(".mainSquare2").style.animation = "opacityAppear ease-in " + 500*speed + "ms forwards";
        }, 4000*speed);

        //step2
        setTimeout(() => {
            document.querySelector(".mainSquare2").style.animation = "scaleXMax ease-in " + 1000*speed + "ms forwards";
        }, 5000*speed);

        //step3
        setTimeout(() => {
            document.querySelector(".mainSquare2").style.animation = "scaleYMax ease-in " + 750*speed + "ms forwards";
        }, 6000*speed);

        //step4
        setTimeout(() => {
            createDiv("mainSquare3", color2, entry);
            document.querySelector(".mainSquare3").style.animation = "xMax ease-in-out " + 1000*speed + "ms forwards";
        }, 7250*speed);

        //step5
        setTimeout(() => {
            createDiv("mainSquare4", color1, entry);
            document.querySelector(".mainSquare4").style.animation = "xMax ease-in-out " + 1000*speed + "ms forwards";
        }, 8250*speed);
        //step5
        setTimeout(() => {
            entry.innerHTML = "";
            createDiv("mainSquare4--left", color1, entry);
            createDiv("mainSquare4--right", color1, entry);
            document.querySelector(".mainSquare4--left").style.animation = "disapear-left ease-in-out " + 1000*speed + "ms forwards";
            document.querySelector(".mainSquare4--right").style.animation = "disapear-right ease-in-out " + 1000*speed + "ms forwards";
        }, 9250*speed);

        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                entry.innerHTML = "";
                entry.style.display = "none";
                resolve();
            }, 10250*speed);
        });
    }

    function createDiv(name,color, entry) {
        let element = document.createElement("div");
        element.classList.add(name);
        element.style.background = color;
        entry.appendChild(element);
    }
    
}

module.exports.animation1 = animation1;

