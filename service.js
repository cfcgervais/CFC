function PlayerService(){
    var players = [{
        name: 'Thibaut Courtios',
        position: 'GK',
        jersey: 13,
        age: 24,
        nationality: 'Belgium',
    },{
        name: 'Asmir Begovic',
        position: 'GK',
        jersey: 1,
        age: 29,
        nationality: 'Bosnia and Herzegovina',
    },{
        name: 'Eduardo',
        position: 'GK',
        jersey: 37,
        age: 34,
        nationality: 'Portugal',
    },{
        name: 'John Terry',
        position: 'CB',
        jersey: 26,
        age: 35,
        nationality: 'England',
    },{
        name: 'Gary Cahill',
        position: 'CB',
        jersey: 24,
        age: 30,
        nationality: 'England',
    },{
        name: 'David Luiz',
        position: 'CB',
        jersey: 30,
        age: 29,
        nationality: 'Brazil',
    },{
        name: 'Cesar Azpilicueta',
        position: 'RB/LB',
        jersey: 28,
        age: 27,
        nationality: 'Spain',
    },{
        name: 'Branislav Ivanovic',
        position: 'RB/CB',
        jersey: 2,
        age: 32,
        nationality: 'Serbia'
    },{
        name: 'Kurt Zouma',
        position: 'CB',
        jersey: 5,
        age: 21,
        nationality: 'France',
    },{
        name: 'Marcos Alonso',
        position: 'LB',
        jersey: 3,
        age: 25,
        nationality: 'Spain',
    },{
        name: 'Ola Aina',
        position: 'LB/RB',
        jersey: 34,
        age: 20,
        nationality: 'England',
    },{
        name: 'Cesc Fabregas',
        position: 'CM',
        jersey: 4,
        age: 29,
        nationality: 'Spain',
    },{
        name: 'Oscar',
        position: 'CAM',
        jersey: 8,
        age: 25,
        nationality: 'Brazil', 
    },{
        name: 'N\'golo Kante',
        position: 'DM',
        jersey: 7,
        age: 25,
        nationality: 'France',
    },{
        name: 'John Obi Mikel',
        position: 'DM',
        jersey: 12,
        age: 29,
        nationality: 'Nigeria',
    },{
        name: 'Nemanja Matic',
        position: 'DM',
        jersey: 21,
        age: 28,
        nationality: 'Serbia',
    },{
        name: 'Nathaniel Chalobah',
        position: 'CM',
        jersey: 29,
        age: 21,
        nationality: 'England',
    },{
        name: 'Ruben Loftus-Cheek',
        position: 'CM',
        jersey: 14,
        age: 20,
        nationality: 'England',
    },{
        name: 'Victor Moses',
        position: 'RW/LW',
        jersey: 15,
        age: 25,
        nationality: 'Nigeria',
    },{
        name: 'Pedro',
        position: 'RW/LW',
        jersey: 11,
        age: 29,
        nationality: 'Spain',
    },{
        name: 'Willian',
        position: 'RW',
        jersey: 22,
        age: 28,
        nationality: 'Brazil',
    },{
        name: 'Eden Hazard',
        position: 'LW',
        jersey: 10,
        age: 25,
        nationality: 'Belgium',
    },{
        name: 'Michy Batshuayi',
        position: 'ST',
        jersey: 23,
        age: 23,
        nationality: 'Belgium',
    },{
        name: 'Diego Costa',
        position: 'ST',
        jersey: 19,
        age: 28,
        nationality: 'Brazil',
    },{
        name: 'Dominic Solanke',
        position: 'ST',
        jersey: 41,
        age: 19,
        nationality: 'England',
    }];
    
    
    this.getPlayers = function() {
        return players;
    }
}