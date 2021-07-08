const team = {
    _players : [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      }
    ],
    _games : [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }
    ],
    get players(){
      return this._players
    },
    // takes object
    set players(updatePlayers){
      // should push into array
      this._players.push(updatePlayers)
    },
    get games(){
      return this._games
    },
    set games(updateGames){
      this._games.push(updateGames)
    },
    addPlayer(firstName, lastName, age){
      const player = {
        firstname: firstName,
        lastName : lastName,
        age: age
      }
      this.players.push(player);
    },
    addGame(opponentsName, teamPoints, opponentPoints){
      const game = {
        opponent: opponentsName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this.games.push(game)
    }
  
  }
  
  // test blocks
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  console.log(team.players)
  
  // add games
  team.addGame('Bears', 13, 6)
  team.addGame('Bulls', 44, 22)
  team.addGame('Knicks', 66, 23)
  console.log(team.games)
  
  