// By H120

var gototop_button= document.getElementById("gototop_button");
var darkmode_button= document.getElementById("darkmode_button");

var darkmode_status= false;

function cookie_check(){
    const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("darkmode_status="))
    ?.split("=")[1];
    
    //get darkmode status from sessionstorage
    if(cookieValue== null){
      // sessionStorage.setItem("darkmode_status", false);
      document.cookie= "darkmode_status= false";
    }else{
      if(cookieValue=="true"){
        //set darkmode if enabled last time
        document.body.classList.toggle("dark-mode");
        darkmode_button.src="./darkmode_sun.png";
        darkmode_status= true;
      }
    }
  }
  cookie_check();
  
  //change darkmode with click on darkmode button
  function darkmode_change(){
    if(darkmode_status){
      darkmode_button.src="./darkmode_moon.png";
    }else{
      darkmode_button.src="./darkmode_sun.png";
    }
    darkmode_status= !darkmode_status;
    document.cookie="darkmode_status="+darkmode_status;
    document.body.classList.toggle("dark-mode");
    console.log(darkmode_status);
  }
  
  darkmode_button.addEventListener("click", function(event){
    darkmode_change();
  });
  
  
  window.onload = function() {
    gototop_button.addEventListener('click', function(event){
      window.scrollTo({top:0, behavior: 'smooth'},0);
    });

  }
  //scroll listener for show/don't show go to top button
  window.addEventListener("scroll", (event)=>{
    if(this.scrollY>200){
      gototop_button.style.visibility= "visible";
      gototop_button.style.opacity= "1";
    }else{
      gototop_button.style.visibility= "hidden";
      gototop_button.style.opacity= "0";
    }
  });