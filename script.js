var team = "X"
document.getElementById("turn").innerHTML = team
var grid = [" "," "," "," "," "," "," "," "," "]



function clickedButton(name){
    box = document.getElementById(name)

    index = name[name.length-1]-1

    if(grid[index] == " "){
        grid[index] = team
        team = team=="X" ? "O" : "X"
        document.getElementById("turn").innerHTML = team
    }
    updateGame()
}

function updateGame(){

    for(var i=0;i<grid.length;i++){
        var box = document.getElementById("box"+(i+1))
        if(grid[i] != " "){box.innerHTML = grid[i]}else{box.innerHTML = " "}

    }
    chechkGame()

}

function chechkGame(){
    if(grid[0]=="X"&&grid[1]=="X"&&grid[2]=="X"){
       return win("X")
    }
    if(grid[0]=="O"&&grid[1]=="O"&&grid[2]=="O"){
        return win("O")
     }

     if(grid[3]=="X"&&grid[4]=="X"&&grid[5]=="X"){
        return win("X")
     }
     if(grid[3]=="O"&&grid[4]=="O"&&grid[5]=="O"){
        return win("O")
     }

     if(grid[6]=="X"&&grid[7]=="X"&&grid[8]=="X"){
        return win("X")
     }
     if(grid[6]=="O"&&grid[7]=="O"&&grid[8]=="O"){
        return win("O")
     }


     if(grid[0]=="X"&&grid[3]=="X"&&grid[6]=="X"){
        return win("X")
     }
     if(grid[0]=="O"&&grid[3]=="O"&&grid[6]=="X"){
        return win("O")
     }

     if(grid[1]=="X"&&grid[4]=="X"&&grid[7]=="X"){
        return win("X")
     }
     if(grid[1]=="O"&&grid[4]=="O"&&grid[7]=="O"){
        return win("O")
     }

     if(grid[2]=="X"&&grid[5]=="X"&&grid[8]=="X"){
        return win("X")
     }
     if(grid[2]=="O"&&grid[5]=="O"&&grid[8]=="O"){
        return win("O")
     }

     if(grid[0]=="X"&&grid[4]=="X"&&grid[8]=="X"){
        return win("X")
     }
     if(grid[0]=="O"&&grid[4]=="O"&&grid[8]=="O"){
        return win("O")
     }

     if(grid[2]=="X"&&grid[4]=="X"&&grid[6]=="X"){
        return win("X")
     }
     if(grid[2]=="O"&&grid[4]=="O"&&grid[6]=="O"){
        return win("O")
     }
     

}

function win(wichTeam){

    for (let i = 0; i < grid.length; i++) {
        grid[i]=" "
        
    }
    updateGame()
    alert("Kazanan: "+wichTeam)
}