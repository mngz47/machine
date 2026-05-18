
				function read(){
					
				var res =  sendreq("machine/campaigns/clipster_campaigns.json");
					res.onload = function(){

					if(res.responseText){
				if(!res.responseText.includes("<!DOCTYPE")){
			let jsonData = JSON.parse(res.responseText);
					
            alert("active campaigns("+jsonData.length+")");
					
						for(var a=0;a<jsonData.length;a++){

             var campaign = jsonData[a];

							var camp_f_web = '<h2>'+campaign["title"]+'</h2> '+campaign["description"]+', <br> <label class=block >Audio:</label> <a href='+campaign["audio"]+' >'+campaign["audio"]+'</a> <br> <label class=block >Platform:</label>  '+campaign["platform"]+'  <br> <label class=block >Allowed Content:</label> '+campaign["allowed content"]+'';

								var telegram_ref_description = campaign["description"].replace("<a href=https://clipster.onelink.me/2HTk/invite?deep_link_value=ref%3Dmngz44 >[active]</a>","");
								
								var camp_f_telegram = campaign["title"]+'\n'+
									telegram_ref_description+
									'\n Audio: ('+campaign["audio"]+
									'\n Platform: '+campaign["platform"]+
									')\n Allowed Content: '+campaign["allowed content"];

								var discord_ref_description = campaign["description"].replace("<a href=https://clipster.onelink.me/2HTk/invite?deep_link_value=ref%3Dmngz44 >[active]</a>","[active](https://clipster.onelink.me/2HTk/invite?deep_link_value=ref%3Dmngz44)");
									
							
							var camp_f_copy = campaign["title"]+'\n'+
								discord_ref_description+
									'\n Audio: ('+campaign["audio"]+
									'\n Platform: '+campaign["platform"]+
									')\n Allowed Content: '+campaign["allowed content"];

							
e('campaigns').innerHTML += '<p style="animation: 20s slider infinite;" >'+camp_f_web+'</p>';
e('campaigns').innerHTML += '<a href="https://t.me/share/url?url=https://bit.ly/48GtBaZ&text='+camp_f_telegram+'" target="_blank">Share on Telegram</a> - <a onclick="navigator.clipboard.writeText(\''+camp_f_copy+'\');this.innerHTML=\'Copied\';return false;" >Copy</a>';
							
						}

					}
					}	
					};
			
	}

read();
