
				function read(){
					
				var res =  sendreq("machine/clipster_campaigns.json");
					res.onload = function(){

					if(res.responseText){
				if(!res.responseText.includes("<!DOCTYPE")){
			let jsonData = JSON.parse(res.responseText);

            alert(jsonData.length);
						for(var a=0;a<jsonData.length;a++){

             var campaign = jsonData[a];

							
e('campaigns').innerHTML += '<p style="animation: 20s slider infinite;" > <h2>'+campaign["title"]+'</h2> '+campaign["description"]+', <br> <label class=block >Audio:</label> <a href='+campaign["audio"]+' >'+campaign["audio"]+'</a> <br> <label class=block >Platform:</label>  '+campaign["platform"]+'  <br> <label class=block >Allow Content:</label> '+campaign["allowed content"]+'</p>';
							e('campaigns').innerHTML += '<a href="https://t.me/share/url?url=https://app.clipster.gg/dashboard/auth?ref_code=mngz44&text='+campaign["title"]+','+campaign["audio"]+','+campaign["allowed content"]+'" target="_blank">Share on Telegram</a>';
							
						}

					}
					}	
					};
			
	}

read();
