var playerService = new PlayerService();
Roster();

var roster = [];
var myEleven = [];
var myBench = [];
var myFormation = [];

// <button class="btn-danger bench-btn" name="${player.name}">Bench</button>
function Roster(){
    var players = playerService.getPlayers();
    var rosterElem = $('#player-list');
    var template = '';
    
    
    for(i = 0; i < players.length; i++){
        this.player = players[i];
        template += `<span id="${player.name}"><button class="btn-danger remove-btn" id="${player.name}">Remove</button><button class="btn-success start-btn" id="${player.name}">Start</button> ${player.name}<br></span>`
        }
    rosterElem.html(template);

    $('.start-btn').on('click', function(){
        myEleven.push(this.id);
        myStartingEleven(myEleven);
        
    });
    $('.remove-btn').on('click', function(){
        for(var i = 0; i < myEleven.length; i++){
            if(myEleven[i] == this.id){
                myEleven.splice(i, 1);
            }
        }
        myStartingEleven(myEleven);
    })
    // $('.bench-btn').on('click', function(){
    //     myBench.push(this.name);
    //     myStartingBench(myBench);
    // });
}
        
function myStartingEleven(myEleven){
    var players = playerService.getPlayers();
    var playerElem = $('#draggable');
    var template = '';
    var myPlayer;
    for(var j = 0; j < myEleven.length; j++){
        myPlayer = myEleven[j];
        template += `<div class="ui-widget-content drag"><h5>${myPlayer}</h5><i class="fa fa-futbol-o fa-2x" aria-hidden="true"></i></div>`
        if(myEleven.length > 11){
            return
        }
    }
   
    playerElem.html(template);
    
    $( function() {
        event.preventDefault();
        $( ".drag" ).draggable();
        $( ".drag" ).droppable({
        drop: function( event, ui ) {
            $( this )
            .addClass( "ui-state-highlight" )
            .find( "h4" );
        }
        });
    } );
}    
    
function myStartingBench(myBench){
    var players = playerService.getPlayers();
    var benchElem = $('#bench');
    var template = '';
    for(var i = 0; i < myBench.length; i++){
        if(myBench.length >7){
            return
        }
        var myBenchWarmer = myBench[i];
        template += `<h4 id="${myBenchWarmer}">${myBenchWarmer}</h4>`
    }
    benchElem.html(template);
}    

        


   
    
    
  
   
        
    


        
        

    
        
    

    
    