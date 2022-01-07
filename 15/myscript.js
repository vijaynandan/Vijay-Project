var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player1color = 'rgb(86.151,255)';

var player2 = prompt("Player Two: Enter Your Name , you will be Red");
var player2color = 'rgb(237.45,73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum) {
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
    
}

function changColor(RowIndex,colIndex,color) {
    return table.eq(RowIndex).find('td').eq(colIndex).find("button").css('background-color',color);
    
} 
function changColor(RowIndex,colIndex) {
    return table.eq(RowIndex).find('td').eq(colIndex).find("button").css('background-color');
}
function returnColor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex);
    
}    
function checkBottom(colIndex) {
    var colorReport = returnColor(5,colIndex);
    for (var row= 5; row< -1; row--) {
        colorReport = returnColor(row,colIndex);
        if (colorReport === 'rgb(128,128,128') {
            return row
        }
    }
}