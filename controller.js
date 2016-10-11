var playerService = new PlayerService
var players = playerService.players

function myStartingEleven(players){
    var myEleven = [];
    var template = ''
    for(i = 0; players.length; i++){
        var player = players[i]
        }
        template = `<div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-6">
                                <ul>
                                    <li>${player.name}</li>
                            
                                </ul>
                            </div>
                            <div class="col-xs-6">
                                <div class="card">
                                    <div id="soccerfield">
                                        <div id="infield">
                                            <div id="left">
                                            <div class="penaltybox">
                                                <div class="goalbox"></div>
                                                <div class="penaltyspot"></div>
                                            </div>
                                            <div class="penaltyarc"></div>
                                            </div>
                                            <div id="halfwayline"></div>
                                            <div id="centercircle">
                                            <div id="centerspot"></div>
                                            </div>
                                            <div id="right">
                                            <div class="penaltybox">
                                                <div class="goalbox"></div>
                                                <div class="penaltyspot"></div>
                                            </div>
                                            <div class="penaltyarc"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`

}