var enterLog = document.body


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