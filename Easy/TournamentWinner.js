// Tournament Winner
// ★
// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.
// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions [i], where a 1 in the results array means that the home team in the corresponding competition won and a o means that the away team won.
// It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

// Sample Input

// competitions = [
// ["HTML","C#"]
// ["C#", "Python"],
// ["Python", "HTML"],
// ]
// results = [0, 0, 1]

// Sample Output
// "Python"
// c# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points
// C# -
// 3 points
// Python -
// 6 points


function tournamentWinner(competitions, results) {
  // Write your code here.
  let teams = {}; 
  let winner = ""

  for(let i = 0; i < competitions.length; i++){
    
    let score; 
    let won; 
    if(results[i] === 1){
      won = competitions[i][0]; 
      if(teams[won]){
        teams[won] += 3
      }else{
        teams[won] = 3
      }
   
  
    }else{
      
        won = competitions[i][1]; 
      if(teams[won]){
        teams[won] += 3
      }else{
        teams[won] = 3
      }
    
    }
  }

  let score = 0; 
  Object.keys(teams).forEach(function (final) {
    let value = teams[final]; 


    if(value > score){
      score = value; 
      winner = final
    }
  })

  return winner;
}



//NOTE: REMEMBER TO INITIALIZE THE VALUES IN THE HASH SO THAT YOU CAN PUSH ADDITIONAL VALUES TO IT 
//create a empty hash called teams. 
//create an empty string called winner
//iterate through the competitionsarray, 
//for the position of i, if results[i] === 0, competion[i][1]won,else, competition[i][0] won
//if team[winner] already exsist += 3 for the winner 
//if not team[winner] += 3. 

//after the loop 

//go through the hash and 
//compare the total score to one another 
//the team with the highest score wins 
//return winner 

//if teams[winning_team] exists, += 
// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;