const $options = document.querySelector(".options-container");
const $buttons = document.querySelectorAll(".description-buttons");
const $articles = document.querySelectorAll(".content");
const $redirect = document.querySelectorAll("#redirect-content");

const $main = document.querySelector(".main");
const $toolTip= document.querySelector(".tooltipColors")
const $textmuted = document.querySelector(".text-muted")
const $body= document.querySelector("body")
const $close= document.querySelector(".close")
const $closeInt= document.querySelector(".close-int")

const $buttonAll= document.getElementsByClassName("filter-buttons all")[0]
const $buttonJs= document.getElementsByClassName("filter-buttons htmljs")[0]
const $buttonReact= document.getElementsByClassName("filter-buttons react")[0]
const $buttonOthers= document.getElementsByClassName("filter-buttons others")[0]

const $project1= document.getElementsByClassName("project1")[0]
const $project2= document.getElementsByClassName("project2")[0]
const $project3= document.getElementsByClassName("project3")[0]
const $project4= document.getElementsByClassName("project4")[0]

const $sectiontech= document.getElementsByClassName("section-Technologies")[0]

$redirect.forEach(function (e){
  e.addEventListener("click", function (e) {
   window.location.href="#target"
})
})

$options.addEventListener("click", function (e) {
  // console.log($main.target);
  const change=e.target.dataset.change
 if (change) {

 $buttons.forEach(function (element) {
    console.log(element.classList);
    element.classList.remove("active");
     });
     e.target.classList.add("active");

    $articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(change);
    //El nombre de ambos dataset y id es igual, por eso funciona este rollo de andarlos pidiendo dentro de la misma funcion
    // console.log(element);
    element.classList.add("active");
  }
});

$close.addEventListener("click", function (e) {
if ($close) {
  console.log($close)
  $articles.forEach(function(article){
    article.classList.remove("active")
  })
}
});

$closeInt.addEventListener("click", function (e) {
if ($closeInt) {
  console.log($closeInt)
  $articles.forEach(function(article){
    article.classList.remove("active")
  })
}
});

function displaydefault(){ 
  $project1.style.display= 'block'
  $project2.style.display= 'block'
  $project3.style.display= 'block'
  $project4.style.display= 'block'
  }
  
  $buttonAll.addEventListener("click", function (e) {
    $project1.style.gridArea= 'project1'
    $project2.style.gridArea= 'project2'
    $project3.style.gridArea= 'project3'
    $project4.style.gridArea= 'project4'
    displaydefault()
    $sectiontech.style.marginTop= '0'
    
  })
  
  $buttonJs.addEventListener("click", function (e) {
    displaydefault()
    $project1.style.gridArea= 'project1'
     $project2.style.display= 'none'
    $project3.style.gridArea= 'project2'
     $project4.style.display= 'none'

  })
  
  $buttonReact.addEventListener("click", function (e) {
    displaydefault()
    $project1.style.display= 'none'
    $project2.style.gridArea= 'project1'
    $project3.style.display= 'none'
    $project4.style.gridArea= 'project2'
  })
  
  $buttonOthers.addEventListener("click", function (e) {
    displaydefault()
    $project4.style.gridArea= 'project1'
    $project2.style.display= 'none'
    $project3.style.display= 'none'
    $project1.style.display= 'none'
    // $project4.style.height= '80%'
  })
  
  $toolTip.addEventListener('mouseenter', e => {
  if ($toolTip){$textmuted.style.display= 'block'}
  });
  
  $toolTip.addEventListener('mouseleave', e => {
  $textmuted.style.display= 'none'
  $toolTip.dataset.color= 'Addicted colors everywhere! OMG, tasty!'
  });
  
  const messagesColor=['Addicted colors everywhere! OMG, tasty!','Haha, This is like being on drugs', 'I cannot stop clicking the center, WOW', "The real Dr.Spiegel was in my basement..." ]
  let counterColor=0
  $toolTip.addEventListener('click', function(e) {
    counterColor++
    $toolTip.dataset.color= messagesColor[counterColor]
    if(counterColor==3) counterColor=0
    // {$toolTip.style.display='none' }
  
  })
