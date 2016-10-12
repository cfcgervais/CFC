var playerService = new PlayerService();
Roster();

var roster = [];
var myEleven = [];

function Roster(){
    var players = playerService.getPlayers();
    var rosterElem = $('#player-list');
    
    var template = '';
    for(i = 0; i < players.length; i++){
        var player = players[i];
        template += `<span id="${player.name}"><button class="btn-success" id="${player.name}">Add</button> ${player.name}<br></span>`
        }
    rosterElem.html(template);
    $('#player-list').on('click','button',function(){
        myEleven.push(this.id)
        myStartingEleven(myEleven);
    });
}
    
function myStartingEleven(myEleven){
    var players = playerService.getPlayers();
    var playerElem = $('#my-list');
    var template = '';
    for(i = 0; i < myEleven.length; i++){
        var myPlayer = myEleven[i];
        template += `<h4 id="${myPlayer}">${myPlayer}</h4>`
        if(myEleven.length > 11){
            return
        }
    }
    playerElem.html(template);
}    
   
        
        
  


        
        

    
        
    

    
    