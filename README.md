# Insane Transition

The simpliest way to use pre-build transition for your site!

# Installation
Usin npm:
`npm i insanetransition --save`

### In your project: 

Link the css in your HTML document
```
<link rel="stylesheet" href="./node_modules/insanetransition/index.css">
```

In your js:
```
var itrans = require('insanetransition');
```

# Use a transition
1. Select an animation (in this example its animation4)
2. Then select an entry point for your transition and link it in the first argument
3. The next 3 arguments are used for the colors of the elements of the animation
4. 5th argument is the speed of the animation
5. 6th argument is an anonymous function that will be use during the transition (ideal for changing the page content)
6. The function return a promise, and resolve it when the transition is over

```
animation = itrans.animation4(document.querySelector(".--wrapper"), "#B79D9D", "#B17575", "#973B3B", 0.5, ()=>{ //DO SOMETHING } );
//when animation is over
animation.then(
    ()=> {
        //DO SOMETHING
    }
)
```

# Where did I play the transition ?
The first argument represent the entry point of your transition, this is like a window where the transition will be played :  
Use the class below for transition entry point

```
<div id="exampleWrapper" class="itrans--wrapper"></div>
```

You must chose a width and height for your wrapper (or it wont show anything)