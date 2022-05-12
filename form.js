const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles  = document.querySelectorAll('.circle')
const form = document.querySelectorAll("form")
const submitBtn = document.getElementById("submit-button")
let currentActive = 1;

update()

next.addEventListener('click', ()=>{
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }
    console.log(currentActive)
    update()
})

prev.addEventListener('click', ()=>{
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    update()
})


function update(){
    const section1 = document.getElementById('first-section')
    const section2 = document.getElementById('second-section')
    const section3 = document.getElementById('third-section')
    const section4 = document.getElementById('fourth-section')

    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length -1)/ (circles.length - 1) * 100 + "%"
    
  //updates prev and next buttons 
  if(currentActive === 1){
      prev.disabled = true
  }else if(currentActive === circles.length){
      next.disabled = true
  }else{
      prev.disabled = false;
      next.disabled = false;
  }

//   sets the current group of field forms
  if(currentActive == 1){
      section1.setAttribute('class', 'current-field')
      section2.setAttribute('class', 'hidden')
      section3.setAttribute('class', 'hidden')
      section4.setAttribute('class', 'hidden')      
  }else if (currentActive == 2){
    section1.setAttribute('class', 'hidden')
    section2.setAttribute('class', 'current-field')
    section3.setAttribute('class', 'hidden')
    section4.setAttribute('class', 'hidden') 
  }else if (currentActive == 3){
    section1.setAttribute('class', 'hidden')
    section2.setAttribute('class', 'hidden')
    section3.setAttribute('class', 'current-field')
    section4.setAttribute('class', 'hidden') 
  }else if (currentActive == 4){
    section1.setAttribute('class', 'hidden')
    section2.setAttribute('class', 'hidden')
    section3.setAttribute('class', 'hidden')
    section4.setAttribute('class', 'current-field') 
    
  }


  if(currentActive == 4){
      submitBtn.classList.remove("hidden")
  }else{
      submitBtn.classList.add("hidden")
  }


}

document.querySelector("form").addEventListener("click", function(event){
    event.preventDefault()
  });