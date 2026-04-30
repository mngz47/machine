
				function read(){
					
				var res =  sendreq("https://mngz47.github.io/machine/clipster_campaigns.json");
					res.onload = function(){

					if(res.responseText){
				if(!res.responseText.includes("<!DOCTYPE")){
			let jsonData = JSON.parse(res.responseText);

            alert(jsonData.length);
						for(var a=0;a<jsonData.length;a++){

             var campaign = jsonData[a];
           
e('campaigns').innerHTML += '<p style="animation: 20s slider infinite;" > <h2>'+campaign["title"]+'</h2> '+campaign["budget"]+','+campaign["rpm"]+'rpm <b> Audio: '+campaign["audio"]+' <b> Platform:  '+campaign["platform"]+'  <b> Allow Content: '+campaign["content"]+'</p>';
						}

					}
					}	
					};
			
	}

read();
