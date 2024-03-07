let game = document.getElementById("ga_me")
let main = document.getElementById("ma_in")

let U = document.getElementById("US")
let U1 = document.getElementById("US1")
let U2 = document.getElementById("US2")
let U3 = document.getElementById("US3")
let U4 = document.getElementById("US4")


let U_0 = document.getElementById("US-0")
let U_1 = document.getElementById("US-1")
let U_2 = document.getElementById("US-2")
let U_3 = document.getElementById("US-3")
let U_4 = document.getElementById("US-4")

let points = 0

let H1 = document.getElementById("heading")
let Head = document.getElementById("head2")
let H2 = document.getElementById("heading2")
let headpic=document.getElementById("headpic")
let F=document.getElementById("final")

let fail
let fail_1
let fail_2
let fail_3
let fail_4
let fail_0
let fail_11
let fail_22
let fail_33
let fail_44

let B=document.getElementById("btn")
let B2=document.getElementById("btn-2")

const cursor = document.querySelector('.cursor');


const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
window.addEventListener('mousemove', positionElement)




H1.innerHTML = points

function play() {
  setTimeout(() => {
    U4.classList.add("useranime")
    U4.style.animation = "forward 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U.style.display = "flex"
  fail = setTimeout(() => {
  failed()
    
  }, 13000)
  U.addEventListener("click", function (e) {
    clearTimeout(fail)

    
    U.style.margin = `${e.y-33}px ${e.x-33}px`
    H1.innerHTML = points += 1
    U.id = "USZ"
    U.style.animation = "opacity 2s linear 2s forwards"
    // setTimeout(() => { again1() }, 1000)
    setTimeout(() => {
      U.classList.remove("useranime")
      U.id = "US"
      U.style.animation = ""
      
      U.style.margin = "0px 0px"
      fail = setTimeout(() => {
        H2.innerHTML = "GAME OVER!"

      }, 13000)

    }, 5000)

  })
}
function again1() {
  setTimeout(() => {
    U.classList.add("useranime")
    U.style.animation = "forward 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U1.style.display = "flex"
  fail_1 = setTimeout(() => {
    failed()
  }, 14000)
  U1.addEventListener("click", function (e) {
    clearTimeout(fail_1)
    U1.classList.add("useranime")
    H1.innerHTML = points += 1
    U1.style.margin = `${e.y-33}px ${e.x-33}px`
    U1.style.animation = "opacity 2s linear 2s forwards"
    U1.id = "US1Z"
    // setTimeout(() => { again2() }, 1000)
    setTimeout(() => {
      U1.classList.remove("useranime")
      U1.id = "US1"
      U1.style.animation = ""
      fail_1 = setTimeout(() => {
        failed()
      }, 14000)
      U1.style.margin = "0px 0px"


    }, 4000)
  })
}
function again2() {
  setTimeout(() => {
    U1.classList.add("useranime")
    U1.style.animation = "forward2 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U2.style.display = "flex"
  fail_2 = setTimeout(() => {
    failed()
  }, 14000)
  U2.addEventListener("click", function (e) {
    clearTimeout(fail_2)
    U2.classList.add("useranime")
    U2.style.margin = `${e.y-33}px ${e.x-33}px`
    U2.style.animation = "opacity 2s linear 2s forwards"
    H1.innerHTML = points += 1
    U2.id = "US2Z"
    // setTimeout(() => { again3() }, 2000)
    setTimeout(() => {
      U2.classList.remove("useranime")
      U2.id = "US2"
      U2.style.animation = ""
      
      U2.style.margin = "0px 0px"
      fail_2 = setTimeout(() => {
        failed()
      }, 14000)

    }, 6000)
  })
}
function again3() {
  setTimeout(() => {
    U2.classList.add("useranime")
    U2.style.animation = "forward3 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U3.style.display = "flex"
  fail_3 = setTimeout(() => {
    failed()
  }, 14000)
  U3.addEventListener("click", function (e) {
    clearTimeout(fail_3)
    U3.classList.add("useranime")
    U3.style.margin = `${e.y-33}px ${e.x-33}px`
    U3.style.animation = "opacity 2s linear 2s forwards"
    H1.innerHTML = points += 1
    U3.id = "US3Z"
    // setTimeout(() => { again4() }, 2000)
    setTimeout(() => {
      U3.classList.remove("useranime")
      U3.id = "US3"
      U3.style.animation = ""
      
      U3.style.margin = "0px 0px"
      fail_3 = setTimeout(() => {
        failed()
      }, 14000)

    }, 8000)
  })
}
function again4() {
  setTimeout(() => {
    U3.classList.add("useranime")
    U3.style.animation = "forward4 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U4.style.display = "flex"
  fail_4 = setTimeout(() => {
    failed()
  }, 14000)
  U4.addEventListener("click", function (e) {
    clearTimeout(fail_4)
    U4.classList.add("useranime")
    U4.style.margin = `${e.y-33}px ${e.x-33}px`
    U4.style.animation = "opacity 2s linear 2s forwards"
    H1.innerHTML = points += 1
    U4.id = "US4Z"
    // setTimeout(() => { play() }, 2000)
    setTimeout(() => {
      U4.classList.remove("useranime")
      U4.id = "US4"
      U4.style.animation = ""
      
      U4.style.margin = "0px 0px"
      
      fail_4 = setTimeout(() => {
        failed()
      }, 14000)
    }, 10000)
  })
}






function play_0() {
  setTimeout(() => {
    U_4.classList.add("useranime")
    U_4.style.animation = "forward5 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U_0.style.display = "flex"
  fail_0 = setTimeout(() => {
    failed()

  }, 13000)
  U_0.addEventListener("click", function (e) {
    clearTimeout(fail_0)

    
    U_0.style.margin = `${e.y-33}px ${e.x-33}px`
    H1.innerHTML = points += 1
    U_0.id = "US-0Z"
    U_0.style.animation = "opacity 2s linear 2s forwards"
    // setTimeout(() => { again1() }, 1000)
    setTimeout(() => {
      U_0.classList.remove("useranime")
      U_0.id = "US-0"
      U_0.style.animation = ""
      
      U_0.style.margin = "0px 0px"
      fail_0 = setTimeout(() => {
        failed()

      }, 13000)

    }, 5000)

  })
}
function again_1() {
  setTimeout(() => {
    U_0.classList.add("useranime")
    U_0.style.animation = "forward 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U_1.style.display = "flex"
  fail_11 = setTimeout(() => {
    failed()
  }, 14000)
  U_1.addEventListener("click", function (e) {
    clearTimeout(fail_11)
    U_1.classList.add("useranime")
    H1.innerHTML = points += 1
    U_1.style.margin = `${e.y-33}px ${e.x-33}px`
    U_1.style.animation = "opacity 2s linear 2s forwards"
    U_1.id = "US-1Z"
    // setTimeout(() => { again2() }, 1000)
    setTimeout(() => {
      U_1.classList.remove("useranime")
      U_1.id = "US-1"
      U_1.style.animation = ""
      fail_11 = setTimeout(() => {
        failed()
      }, 14000)
      U_1.style.margin = "0px 0px"


    }, 4000)
  })
}
function again_2() {
  setTimeout(() => {
    U_1.classList.add("useranime")
    U_1.style.animation = "forward8 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U_2.style.display = "flex"
  fail_223 = setTimeout(() => {
    failed()
  }, 14000)
  U_2.addEventListener("click", function (e) {
    clearTimeout(fail_223)
    U_2.classList.add("useranime")
    U_2.style.margin = `${e.y-33}px ${e.x-33}px`
    U_2.style.animation = "opacity 2s linear 2s forwards"
    H1.innerHTML = points += 1
    U_2.id = "US-2Z"
    // setTimeout(() => { again3() }, 2000)
    setTimeout(() => {
      U_2.classList.remove("useranime")
      U_2.id = "US-2"
      U_2.style.animation = ""
      
      U_2.style.margin = "0px 0px"
      fail_223 = setTimeout(() => {
        failed()
      }, 14000)

    }, 6000)
  })
}
function again_3() {
  setTimeout(() => {
    U_2.classList.add("useranime")
    U_2.style.animation = "forward7 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U_3.style.display = "flex"
  fail_33 = setTimeout(() => {
    failed()
  }, 14000)
  U_3.addEventListener("click", function (e) {
    clearTimeout(fail_33)
    U_3.classList.add("useranime")
    U_3.style.margin = `${e.y-33}px ${e.x-33}px`
    U_3.style.animation = "opacity 2s linear 2s forwards"
    H1.innerHTML = points += 1
    U_3.id = "US-3Z"
    // setTimeout(() => { again4() }, 2000)
    setTimeout(() => {
      U_3.classList.remove("useranime")
      U_3.id = "US-3"
      U_3.style.animation = ""
      
      U_3.style.margin = "0px 0px"
      fail_33 = setTimeout(() => {
        failed()
      }, 14000)

    }, 8000)
  })
}
function again_4() {
  setTimeout(() => {
    U_3.classList.add("useranime")
    U_3.style.animation = "forward6 12s linear forwards, opacity 2s linear 2s forwards;"
  }, 11000)
  U_4.style.display = "flex"
  fail_44 = setTimeout(() => {
    failed()
  }, 14000)
  U_4.addEventListener("click", function (e) {
    clearTimeout(fail_44)
    U_4.classList.add("useranime")
    U_4.style.margin = `${e.y-33}px ${e.x-33}px`
    U_4.style.animation = "opacity 2s linear 2s forwards"
    U_4.id = "US-4Z"
    // setTimeout(() => { play() }, 2000)
    setTimeout(() => {
      U_4.classList.remove("useranime")
      H1.innerHTML = points += 1
      U_4.id = "US-4"
      U_4.style.animation = ""
      
      U_4.style.margin = "0px 0px"

      fail_44 = setTimeout(() => {
        failed()
      }, 14000)
    }, 10000)
  })
}


function failed(){
  console.log("failed")
  setTimeout(()=>{
    H2.style.visibility= "visible"
    B2.style.display="block"
    cursor.style.display="none"
    ga_me.style.cursor="pointer"
  },2500)
  game.style.transition="background-color 2s linear"
 game.addEventListener("click",function(){
})
game.style.backgroundColor="rgba(255, 0, 0, 0.466)";
  U.style.display="none"
  U1.style.display="none"
  U2.style.display="none"
  U3.style.display="none"
  U4.style.display="none"
  U_0.style.display="none"
  U_1.style.display="none"
  U_2.style.display="none"
  U_3.style.display="none"
  U_4.style.display="none"
  F.style.animation="point 1s linear forwards"
  F.style.alignItems="center"

}





B.onclick=function(){
  setTimeout(() => {
    game.style.display="flex"
    
play()
setTimeout(()=>{
  again1()
}, 1000)
setTimeout(()=>{
  again2()
}, 1500)
setTimeout(()=>{
  again3()
}, 2000)
setTimeout(()=>{
  again4()
}, 2500)

setTimeout(()=>{
  play_0()
},4000)
setTimeout(()=>{
  again_1()
}, 6000)
setTimeout(()=>{
  again_2()
}, 8000)
setTimeout(()=>{
  again_3()
}, 1000)
setTimeout(()=>{
  again_4()
}, 12000)
  }, 3000);
  setTimeout(() => {
    
    cursor.style.display="block"
    B.style.display="none"
    game.style.cursor="none"
    Head.style.display="none"
  },1000);
  headpic.src="in2.png"
}
// B2.onclick=function(){
//   setTimeout(() => {
//     game.style.display="flex"
    
// play()
// setTimeout(()=>{
//   again1()
// }, 1000)
// setTimeout(()=>{
//   again2()
// }, 1500)
// setTimeout(()=>{
//   again3()
// }, 2000)
// setTimeout(()=>{
//   again4()
// }, 2500)

// setTimeout(()=>{
//   play_0()
// },4000)
// setTimeout(()=>{
//   again_1()
// }, 6000)
// setTimeout(()=>{
//   again_2()
// }, 8000)
// setTimeout(()=>{
//   again_3()
// }, 1000)
// setTimeout(()=>{
//   again_4()
// }, 12000)
//   }, 3000);
//   setTimeout(() => {
//     H2.style.visibility= "hidden"
//     cursor.style.display="block"
//     B2.style.display="none"
//     game.style.cursor="none"
//     Head.style.display="none"
//     game.style.transition="";
//     F.style.animation=""

//   F.style.alignItems="right"
//   },1000);
// }

