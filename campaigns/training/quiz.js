

function read(){
					
				var res =  sendreq("machine/campaigns/training/quiz.json");
					res.onload = function(){

					if(res.responseText){
				if(!res.responseText.includes("<!DOCTYPE")){
			let jsonData = JSON.parse(res.responseText);
					
            alert("active campaigns("+jsonData.length+")");
					
						for(var a=0;a<jsonData.length;a++){

             var campaign = jsonData[a];

              var isSlide = getCookie("display")=="slideshow";
							
e('quiz').innerHTML += '<div style="animation: 20s slider infinite;" > <h2>'+campaign["title"]+'</h2> '+campaign["description"]+', <br> <label class=block >Audio:</label> <a href='+campaign["audio"]+' >'+campaign["audio"]+'</a> <br> <label class=block >Platform:</label>  '+campaign["platform"]+'  <br> <label class=block >Allow Content:</label> '+campaign["allowed content"]+'</p>';
							e('quiz').innerHTML += '<a href="#" onclick="" target="_blank">Next Question</a>';
							
						}

         if(isSlide){
           slideshow();
         }else{
           chat();
         }
          
					}
					}	
					};
			
	}

function quiz_item(question,option1,option2,option3,answer){

  return
  "<div>"+


      "<div id=options >"+

     "<input type=checkbox/>";

    
    "</div>";
    "</div>";
  
}

function slideshow(){
e('quiz').className = "clipper-slideshow";
}

function next_slideshow(){
e('quiz').innerHTML = "clipper-slideshow";
}


function chat(){
e('quiz').className = "clipper-chat";
}

function set_test_display(display){
 setCookie("display", display, 80);
}

function score(){

}



read();
