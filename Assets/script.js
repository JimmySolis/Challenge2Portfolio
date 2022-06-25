var enterLog = document.body
var blink = document.getElementById('blink');


setInterval(function () {

    blink.style.opacity = 

    (blink.style.opacity == 0 ? 1 : 0);

}, 500); 


enterLog.addEventListener("keydown",keyPress);

function keyPress(event){
    const keyName = event.key;
    if (keyName === 'Enter') {
      handelRedirect();
      console.log("redirected")
      }
}
  

function handelRedirect(){
    location.assign('homePage.html');
}