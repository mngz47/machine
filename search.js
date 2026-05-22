function search(txt){

		 if(txt.length>4){
			 
	var games = e('service_data').getElementsByTagName('div');

	for(var a=0;a<games.length;a++){

	var g_names =	games[a].getElementsByTagName('a');

	for(var b=0;b<g_names.length;b++){

		var game_name = g_names[b].textContent;//g_names[b].innerHTML;
		
		if(game_name.toLowerCase().includes(txt.toLowerCase()) || game_name.toLowerCase()==txt.toLowerCase()){

			e('search_results').appendChild(g_names[b]);
		}else{
			e('search_results').innerHTML = '';
		}
		
	}
	}	

}
}	  
