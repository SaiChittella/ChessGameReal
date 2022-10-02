// GRAWWARLY CERTIFIED hellowkdk op wkljdoiasl,jnwadk snkjdwhajsh djwahdskj hlidkjawshdikjawshb dujqwaniokn dxwasjkdjkawn
//ajs 
// lmao wassupp bruh lmao 89ijoewdio where were we ee e e  e e e  eaself ej adsel  e e  e e ////////
 //the sky// SAIHAAN API CREATION (BEST DEV 1 (CHILD PREDATOR), BEST DEV 2 (REEEEEEEEEEEEEEEEEEEEEEEEHHHHHHHHHHHAAAAAN DA MIDGET)) 
let turn = 'white';

let whitePoints = 0;
let blackPoints = 0 ;

//where were we 
const piecesArr = ['#rook1', '#knight1', '#bishop1', '#king', '#queen', '#bishop2', '#knight2', '#rook2', '#pawn1', '#pawn2', '#pawn3', '#pawn4', '#pawn5', '#pawn6', '#pawn7', '#pawn8', '#blackrook1', '#blackknight1', '#blackbishop1', '#blackking', '#blackqueen', '#blackbishop2', '#blackknight2', '#blackrook2','#blackpawn1', '#blackpawn2', '#blackpawn3', '#blackpawn4', '#blackpawn5', '#blackpawn6', '#blackpawn7', '#blackpawn8'];

const squaresToRemove = [];

boardArr = {
    'A': [1,2,3,4,5,6,7,8],
    'B': [1,2,3,4,5,6,7,8],
    'C': [1,2,3,4,5,6,7,8],
    'D': [1,2,3,4,5,6,7,8],
    'E': [1,2,3,4,5,6,7,8],
    'F': [1,2,3,4,5,6,7,8],
    'G': [1,2,3,4,5,6,7,8],
    'H': [1,2,3,4,5,6,7,8],
}

// DA BOARD

const letters = Object.keys(boardArr);

removeHighlights();

// pieces
pieces = {
    'white': {
        'rook': 'ChessPieces/WhitePieces/Rook.png',
        'knight': 'ChessPieces/WhitePieces/Knight.png',
        'bishop': 'ChessPieces/WhitePieces/Bishop.png',
        'queen': 'ChessPieces/WhitePieces/Queen.png',
        'king': 'ChessPieces/WhitePieces/King.png',
        'pawn': 'ChessPieces/WhitePieces/Pawn.png',
    },
    'black': {
        'rook': 'ChessPieces/BlackPieces/Rook.png',
        'knight': 'ChessPieces/BlackPieces/Knight.png',
        'bishop': 'ChessPieces/BlackPieces/Bishop.png',
        'queen': 'ChessPieces/BlackPieces/Queen.png',
        'king': 'ChessPieces/BlackPieces/King.png',
        'pawn': 'ChessPieces/BlackPieces/Pawn.png',
    }
}

let img;
const letter = ['A','B','C','D','E','F','G','H']; 
const whitePieces = Object.keys(pieces['white']);
const blackPieces = Object.keys(pieces['black']);
let decrementing = false;

countForEachPiece = {
    'pawn': 1,
    'rook': 1,
    'bishop': 1,
    'knight': 1,
}
putPiecesOnBoard('white');

function putPiecesOnBoard(type) {
    let counter = 0;
    countForEachPiece['pawn'] = 1;
    countForEachPiece['rook'] = 1;
    countForEachPiece['bishop'] = 1;
    countForEachPiece['knight'] = 1;
    
    for(let i=0; i<16; i++) {
        img = document.createElement('img');
        if(type === 'white') { 
            if(whitePieces[counter] === 'king' || whitePieces[counter] === 'queen') { 
                img.id = whitePieces[counter];
            } else {
                img.id = whitePieces[counter] + countForEachPiece[whitePieces[counter]];
                countForEachPiece[whitePieces[counter]]++;
            }
            img.src = pieces[type][whitePieces[counter]];  
        } else {

            if(blackPieces[counter] === 'king' || blackPieces[counter] === 'queen') { 
                img.id = "black" + blackPieces[counter];
            } else {
                img.id = "black" + blackPieces[counter] + countForEachPiece[blackPieces[counter]];
                countForEachPiece[blackPieces[counter]]++;
            }
            img.src = pieces[type][blackPieces[counter]];  
        }
        img.style.height = "100px";
        img.style.position = 'absolute'; 
        img.style.left = "3%";
        if(type === 'black') {
            if(i >= 8) {
                document.querySelector('#' + letter[i-8] + "7").appendChild(img);
            } else {
                document.querySelector('#' + letter[i] + "8").appendChild(img);
            } 
        } else {
            if(i >= 8) {
                document.querySelector('#' + letter[i-8] + "2").appendChild(img);
            } else {
                document.querySelector('#' + letter[i] + "1").appendChild(img);
            }
        }
        if(counter === 4) {
            counter--;
            decrementing = true;
        }
        if(counter === 0 && decrementing){
            counter = 5;
            decrementing = false;
        }
        else if(counter === 5) {
            counter = 5;        
        } else if(decrementing) {
            counter--;
        } else {
            counter++;
        }
    } 
    
}

putPiecesOnBoard('black');


function putThingsOnBoard(type, backwards) {
    if(type === 'numbers') {
        numberDiv.innerHTML = '';
        let topCounter = 80;
        if(!backwards) {
            for(let i = 8; i >= 1; i--){
                let numberDiv = document.querySelector('#numberDiv');
                numberDiv.style.height = '107.5px';
                numberDiv.style.width = '107.5px';
                numberDiv.innerHTML += i + " <br /><br />";
                numberDiv.style.fontSize = "47px";
                numberDiv.style.color = 'white';
                numberDiv.style.position = 'absolute';
                numberDiv.style.left = '28%'
                numberDiv.style.top = topCounter + "%";
                topCounter -= 9.9;
            }    
        } else { 
            for(let i = 1; i <= 8; i++){
                let numberDiv = document.querySelector('#numberDiv');
                numberDiv.style.height = '107.5px';
                numberDiv.style.width = '107.5px';
                numberDiv.innerHTML += i + " <br /><br />";
                numberDiv.style.fontSize = "47px";
                numberDiv.style.color = 'white';
                numberDiv.style.position = 'absolute';
                numberDiv.style.left = '28%'
                numberDiv.style.top = topCounter + "%";
                topCounter -= 9.9;
            }    
        }
    } else{
        letterDiv.innerHTML = '';
        let leftCounter = -37;
        if(!backwards) {
            for(let i = 0; i < 8; i++){
                let letterDiv = document.querySelector('#letterDiv');
                letterDiv.style.height = '107.5px';
                letterDiv.style.width = '910px';
                letterDiv.innerHTML += letter[i] + '⠀⠀⠀';
                letterDiv.style.fontSize = "47px";
                letterDiv.style.color = 'white';
                letterDiv.style.position = 'absolute';
                letterDiv.style.top = '102%'
                letterDiv.style.left = leftCounter + "%";
                leftCounter += 10;
            }
        } else {
            for(let i = 7; i >=0; i--){
                let letterDiv = document.querySelector('#letterDiv');
                letterDiv.style.height = '107.5px';
                letterDiv.style.width = '910px';
                letterDiv.innerHTML += letter[i] + '⠀⠀⠀';
                letterDiv.style.fontSize = "47px";
                letterDiv.style.color = 'white';
                letterDiv.style.position = 'absolute';
                letterDiv.style.top = '102%'
                letterDiv.style.left = leftCounter + "%";
                leftCounter += 10;
            }
        }

    }
} 

putThingsOnBoard('numbers', false);
putThingsOnBoard('letters', false);

function putButtons() {
    let forfiet = document.querySelector("#forfietButton");
    let stats = document.querySelector("#statsButton");
    stats.style.backgroundColor = 'green';
    stats.style.height = '50px';
    stats.style.width = '100px';
    stats.style.position = 'absolute';
    stats.style.top = '10%';
    stats.style.left = '10%';

    forfiet.style.backgroundColor = 'red';
    forfiet.style.height = '50px';
    forfiet.style.width = '100px';
    forfiet.style.position = 'absolute';
    forfiet.style.top = '20%';
    forfiet.style.left = '10%';
}
putButtons();

const turns = [];
let whiteGuess = "";
let coinToss = 10;

function tossCoin() {
    let correctType = false;
    while(!correctType) {
        whiteGuess = prompt('Heads or Tails?(white)');
        if(whiteGuess.toLowerCase() === 'heads' || whiteGuess.toLowerCase() === 'tails') {
            correctType = true;
        }
    }
    
    coinToss = Math.round(Math.random() * 1);
    
    if(coinToss === 0) {
        alert('Heads!');
    } else {
        alert('Tails!');
    }
    determineWhoGoesFirst(); 
}

tossCoin();


function determineWhoGoesFirst() { 
    if(whiteGuess.toLowerCase() === 'heads' && coinToss === 0) {
        // turn = 'white';
        displayWhoGoesFirst('White');
        putTurns('White');
    } else if(whiteGuess.toLowerCase() === 'tails' && coinToss === 1) {
        // turn = 'white';
        displayWhoGoesFirst('White');
        putTurns('White');
    } else {
        // turn = 'black';
        displayWhoGoesFirst('Black');
        putTurns('Black');
    }
}

function putTurns(firstPlayer) {
    if(firstPlayer == "White"){
        turns[0] = 'White';
        turns[1] = 'Black';
    }
} 


function displayWhoGoesFirst(player) {
    alert(player + ' Goes First!');
}

// map of board
boardPieces = {
    '#rook1': 'rook1',
    '#knight1': 'knight1',
    '#bishop1': 'bishop1',
    '#king': 'king', 
    '#queen': 'queen',
    '#bishop2': 'bishop2',
    '#knight2': 'knight2',
    '#rook2': 'rook2',
    '#pawn1': 'pawn1',
    '#pawn2': 'pawn2',
    '#pawn3': 'pawn3',
    '#pawn4': 'pawn4',
    '#pawn5': 'pawn5',
    '#pawn6': 'pawn6',
    '#pawn7': 'pawn7',
    '#pawn8': 'pawn8',

    '#blackrook1': 'blackrook1',
    '#blackknight1': 'blackknight1',
    '#blackbishop1': 'blackbishop1',
    '#blackking': 'blackking', 
    '#blackqueen': 'blackqueen',
    '#blackbishop2': 'blackbishop2',
    '#blackknight2': 'blackknight2',
    '#blackrook2': 'blackrook2',
    '#blackpawn1': 'blackpawn1',
    '#blackpawn2': 'blackpawn2',
    '#blackpawn3': 'blackpawn3',
    '#blackpawn4': 'blackpawn4',
    '#blackpawn5': 'blackpawn5',
    '#blackpawn6': 'blackpawn6',
    '#blackpawn7': 'blackpawn7',
    '#blackpawn8': 'blackpawn8',
}

board = {
    'rook1': {'positionColumn': 'A', 'positionRow': '1', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right'], 'inWay': false, 'type': 'rook'},  
    'knight1': {'positionColumn': 'B', 'positionRow': '1', 'slope': {'rise': [2], 'run': [1]}, 'distance': '3', 'direction':['L'], 'inWay': false, 'type': 'knight'},   
    'bishop1': {'positionColumn': 'C', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal'], 'inWay': false, 'type': 'bishop'},
    'king': {'positionColumn': 'E', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '1', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal'], 'inWay': false},
    'queen': {'positionColumn': 'D', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal'], 'inWay': false, 'type': 'queen'},
    'rook2': {'positionColumn': 'H', 'positionRow': '1', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right'], 'inWay': false, 'type': 'rook'},  
    'knight2': {'positionColumn': 'G', 'positionRow': '1', 'slope': {'rise': [2], 'run': [1]}, 'distance': '3', 'direction': ['L'], 'inWay': false, 'type': 'knight'},  
    'bishop2': {'positionColumn': 'F', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal'], 'inWay': false, 'type': 'bishop'},
    'pawn1': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'A', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'pawn2': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'B', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn'}, 
    'pawn3': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'C', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'pawn4': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'D', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'pawn5': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'E', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'pawn6': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'F', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'pawn7': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'G', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'pawn8': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'H', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn'},

    
    'blackrook1': {'positionColumn': 'A', 'positionRow': '8', 'slope': {'rise': [0], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right'], 'inWay': false, 'type': 'rook'},  
    'blackknight1': {'positionColumn': 'B', 'positionRow': '8', 'slope': {'rise': [2], 'run': [1]}, 'distance': '4', 'direction': ['L'], 'inWay': false, 'type': 'knight'},  
    'blackbishop1': {'positionColumn': 'C', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal'], 'inWay': false, 'type': 'bishop'},
    'blackking': {'positionColumn': 'E', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '1', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal'], 'inWay': false},
    'blackqueen': {'positionColumn': 'D', 'positionRow': '8', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal'], 'inWay': false, 'type': 'queen'},
    'blackrook2': {'positionColumn': 'H', 'positionRow': '8', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right'], 'inWay': false, 'type': 'rook'},  
    'blackknight2': {'positionColumn': 'G', 'positionRow': '8', 'slope': {'rise': [2], 'run': [1]}, 'distance': '4', 'direction': 'L', 'inWay': false, 'type': 'knight'},  
    'blackbishop2': {'positionColumn': 'F', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal'], 'inWay': false, 'type': 'bishop'},
    'blackpawn1': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'A', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'blackpawn2': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'B', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn'}, 
    'blackpawn3': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'C', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'blackpawn4': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'D', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'blackpawn5': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'E', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'blackpawn6': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'F', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'blackpawn7': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'G', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn'},
    'blackpawn8': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'H', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn'},  
}

pieceStats = {
    'pawn': 1,
    'knight': 3,
    'bishop': 3,
    'rook': 5,
    'queen': 9,
}

// speedy speedy
function piecesRules() {
    for(let i = 0; i<piecesArr.length; i++) {
        let stopColor = false;
        document.querySelector(piecesArr[i]).addEventListener('mouseover', () => {
            if(!stopColor) {
                document.querySelector(piecesArr[i]).style.backgroundColor = 'yellow';
                document.querySelector(piecesArr[i]).style.left = '-0.2%';
                document.querySelector(piecesArr[i]).style.height = '107.5px';
                document.querySelector(piecesArr[i]).style.width = '107.5px'; 
            }
        });

        document.querySelector(piecesArr[i]).addEventListener('mouseout', () => {
            if(!stopColor) {
                document.querySelector(piecesArr[i]).style.backgroundColor = ''; 
            }
        });

        document.querySelector(piecesArr[i]).addEventListener('click', () => {
            // removeAllClicks();
            // piecesRules();
            removeHighlights(true); 
            document.querySelector(piecesArr[i]).style.backgroundColor = 'lightGreen'; 
            stopColor = true;  
            findSlopePawns(boardPieces[piecesArr[i]]); 
        }); 
    }

    // document.querySelector('#'+ statsButton).addEventListener('click', () => {
        
    // });
}



piecesRules();
 
function findSlopePawns(piece) {
    let rise;
    let run;

    if(piece.charAt(0) == 'p' || (piece.charAt(0) === 'b' && piece.charAt(5) === 'p')){
        if(board[piece]['firstMove']) {
            rise = 2;
        } else {
            rise = 1;
        }
        run = 0;
    } else {
        rise = board[piece]['slope']['rise'];   
        run = board[piece]['slope']['run'];
    }
    
    highlightMoves(rise, run, piece);
}

function highlightMoves(rise, run, currPiece) {
    let positionColumns = board[currPiece]['positionColumn'];
    let positionRow = board[currPiece]['positionRow'];
    const direction = board[currPiece]['direction'];    
    let distance = parseInt(board[currPiece]['distance']);
    let letterIndex = findIndex(positionColumns);
    for(let i=0; i<direction.length; i++) {
        if(direction[i] === 'forward') {
            findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece);
        } else if(direction[i] === 'backward'){
            findMovesDirection(direction[i], positionColumns, positionRow, distance,(letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece);
        } else if(direction[i] === 'left') {
            findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece);
        } else if(direction[i] === 'right') {
           findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece);
        } else if(direction[i] === 'diagonal') {
           findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece);
        } else if(direction[i] === 'L') {
            findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), true, currPiece);
        }
    }    

}
function findIndex(positionColumns) {
    for(let i=0; i<letter.length; i++) {
        if(positionColumns === letter[i]){
            return i; 
        }  
    }
}
let dictOfPieces = {
    'rook1': 'rook',
    'knight1': 'knight',
    'bishop1': 'bishop',
    'king': 'king',
    'queen': 'queen',
    'bishop2': 'bishop',
    'knight2': 'knight',
    'rook2': 'rook',
    'pawn1': 'pawn',
    'pawn2': 'pawn',
    'pawn3': 'pawn',
    'pawn4': 'pawn',
    'pawn5': 'pawn',
    'pawn6': 'pawn',
    'pawn7': 'pawn',
    'pawn8': 'pawn',
}

function findMovesDirection(direction, positionColumn, positionRow, distance, position, knight, piece){
    let originalPosition = positionColumn + parseInt(positionRow);
    let newPosition = ''; 
    let count = 0;
    let index = findIndex(positionColumn);
    positionRow = parseInt(positionRow);
    let king = false;
    let pawn = false;

    if(piece.charAt(0) === 'p' || (piece.charAt(0) === 'b' && piece.charAt(5) === 'p')){
        pawn = true;
    }

    if(knight) {
        diagonalHighlight(index, positionRow, positionColumn, (letter[index] + '' + positionRow), false, true);
    }

    if(distance === 1 && !pawn) { 
        king = true;
    }

    do {
        if(direction === 'forward') { 
            positionRow+=1;
            newPosition = positionColumn + (parseInt(positionRow)); 
        } else if(direction === 'backward') {
            positionRow-=1;
            newPosition = positionColumn + (parseInt(positionRow));
        } else if(direction === 'left') {
            newPosition = (letter[index-1]) + positionRow;
            index-=1;
        } else if(direction === 'right') {
            newPosition = (letter[index+1]) + positionRow;
            index+=1;
        } else if(direction === 'diagonal'){
            if(pawn) {
                let temp;
                if(turn == 'black') {
                    temp = (letter[index-1]) + (positionRow-1);
                } else {
                    temp = (letter[index+1]) + (positionRow+1);
                }

                if(checkIfPieceIsInWay(temp, true)) {
                    alert('HERE');
                    document.querySelector('#' + (letter[index+1]) + (positionRow+1)).style.backgroundColor = '#347890';
                }
                newPosition = temp;
            } else {
                newPosition = (positionColumn) + parseInt(positionRow);
                diagonalHighlight(index, positionRow, positionColumn, newPosition, king, false);
            }
        } else if(knight) {
            break;
        }
        if(positionRow <= 0 || positionRow > 8 || index < 0 || index > letter.length - 1){
            break;
        } 
        

        if(checkIfPieceIsInWay(newPosition)) {
            break;
        }

        count++;
        if(pawn && count > 2) {
            break;
        }

        // document.querySelector('#' + newPosition).style.backgroundColor = '#347890';           
        movePiece(newPosition, originalPosition, piece);
    }    
    while(positionRow <= 7 && positionRow > 0 && index < letter.length && index >= 0 && king != true && distance > count);
}


let positionRow;
function diagonalHighlight(index, positionRow, positionColumn, originalPosition, king, knight) {
    let counter = 1;
    newPosition = originalPosition;
    let originalRow = positionRow;
    let originalColumn = index;
    
    
    let rowChange = 1;
    let indexChange = 1;
    let second = false;

    do {
        let increment = false;
        if(knight){
            if(second) {
                rowChange = 1;
                indexChange = 2;
            } else {
                rowChange = 2;
                indexChange = 1;
            }   
        } 
        if(counter === 1) {

            positionRow += rowChange;
            index += indexChange;

            if(checkIfOutOfBounds(index, positionRow)) {
                increment = true;
                newPosition = originalPosition;
                positionRow = originalRow;
                index = findIndex(originalPosition.charAt(0));   
            }

            newPosition = (letter[index]) + positionRow;
        } else if(counter === 2) {
            positionRow -= rowChange;
            index -= indexChange;

            if(checkIfOutOfBounds(index, positionRow)) {
                increment = true;
                newPosition = originalPosition;
                positionRow = originalRow;
                index = findIndex(originalPosition.charAt(0));
            }
            newPosition = (letter[index]) + positionRow;
        } else if(counter === 3) {

            positionRow += rowChange;
            index -= indexChange;
            
            if(checkIfOutOfBounds(index, positionRow)) {
                increment = true; 
                newPosition = originalPosition;
                positionRow = originalRow;
                index = findIndex(originalPosition.charAt(0));
            }
            newPosition = (letter[index]) + positionRow;
        } else if(counter === 4) { 
            positionRow -= rowChange;
            index += indexChange;   
            
            if(checkIfOutOfBounds(index, positionRow)) {
                increment = true;
                newPosition = originalPosition;
                positionRow = originalRow;
                index = findIndex(originalPosition.charAt(0));
            }
            newPosition = (letter[index]) + positionRow;
        }
        if(knight && !checkIfChildNodes(newPosition)) {
            movePiece(newPosition, originalPosition, 'knight');
        } else if(king && !checkIfChildNodes(newPosition)) {
            movePiece(newPosition, originalPosition, 'king');
        } 

        if((king || knight) && !checkIfOutOfBounds(index, positionRow) ) {

            checkIfPieceIsInWay(newPosition)
            
            newPosition = originalPosition;
            positionRow = originalRow;
            index = originalColumn; 
            
            if(counter >= 4 && knight && !second) { 
                second = true;
                counter = 1;
                continue;
            }
            
            if(counter >= 4) {
                break;
            }
            counter++; 
            continue;
        } else {
            if(counter > 4){ 
                break;
            } 
            if(increment){
                counter++;
                continue;
            }
        }

        if(!knight && !king) {
            movePiece(newPosition, originalPosition, 'bishop');
        }
        
        if(checkIfPieceIsInWay(newPosition)) {
            newPosition = originalPosition;
            positionRow = originalRow;
            index = originalColumn; 
            counter++;
        }         
    } while(true);
}


function checkIfPieceIsInWay(newPosition, diagPawn) {
    if(checkIfChildNodes(newPosition)) {
        if(checkIfOppositeColors(newPosition)){
            document.querySelector('#' + newPosition).style.backgroundColor = '#347890';            
            removeClicksForPiece(findPiece(newPosition));
        }
        return true;
    } else {
        if(!diagPawn) {
            document.querySelector('#' + newPosition).style.backgroundColor = '#347890';
        }
        return false;
    }
}

function findPiece(newPosition) {
    let pieces = Object.keys(board);

    for(let i=0; i<pieces.length; i++) {
        let positionColumn = board[pieces[i]]['positionColumn'];
        let positionRow = board[pieces[i]]['positionRow'];

        if((positionColumn + positionRow) === newPosition) {
            board[pieces[i]]['inWay'] = true;
            return pieces[i];
        }
    }
}

function removeClicksForPiece(piece) {
    document.querySelector('#' + piece).replaceWith(document.querySelector('#' + piece).cloneNode(true));
}

function checkIfOppositeColors(pos) {
    let pieces = Object.keys(board);
    let piece = '';
    let color = '';

    for(let i=0; i<pieces.length; i++) {
        if((board[pieces[i]]['positionColumn'] + board[pieces[i]]['positionRow']) === pos) {
            piece = pieces[i];
            break;
        }
    }

    if(piece.charAt(0) === 'b' && piece.charAt(1) === 'l') {
        color = 'black';
    } else {
        color = 'white';
    }

    alert('TURN IS : ' + turn)
    alert('COLOR : ' + color)

    if(color === turn){
        return false;
    } else {
        return true;
    }

}

function checkIfChildNodes(pos) {
    if(document.querySelector('#' + pos).hasChildNodes()) {
        return true;
    } else {
        return false;
    }
}

function movePiece(newPosition, originalPosition, piece) {
    squaresToRemove.push(newPosition); 
    squaresToRemove.push(originalPosition);

    if(newPosition != originalPosition) {
        let clickPos = newPosition; 
        
        document.querySelector('#' + newPosition).addEventListener('click', () => {             
            if(checkIfChildNodes(newPosition)) {
                // alert("Pos: " + newPosition);
                killings(newPosition); 
            }

            if((piece.charAt(0) === 'p' || (piece.charAt(0) === 'b' && piece.charAt(5) === 'p')) && piece != 'bishop'){
                if(board[piece]['firstMove'] === true) {
                    board[piece]['distance'] = 1;
                    board[piece]['firstMove'] = false;      
                }
            }
            let colors = Object.keys(pieces);
            let piecesToCheck = Object.keys(board);
            
            let daPiece = "";
            let black = false;
            let pieceSrc = "";

            daPiece = findPiece(originalPosition);
            // alert('DA PIECE : ' + daPiece)

            if(daPiece.startsWith('b') && daPiece.charAt(1) === 'l') {
                black = true;
            }

            for(let i=0; i<colors.length; i++) {
                let breakLoop = false;
                let piecesInColor = Object.keys(pieces[colors[i]])

                for(let j=0; j<piecesInColor.length; j++){
                    if(black) {
                         if(i === 0) {
                             continue;
                         } else {
                             if((daPiece.charAt(5) === piecesInColor[j].charAt(0) && daPiece.charAt(6) === piecesInColor[j].charAt(1))) {
                                 pieceSrc = pieces[colors[i]][piecesInColor[j]];
                                 breakLoop = true;
                                 break;
                             }
                         }  
                        continue; 
                    } else {
                        if(daPiece.startsWith(piecesInColor[j].charAt(0)) && daPiece.charAt(1) === piecesInColor[j].charAt(1)) {
                            pieceSrc = pieces[colors[i]][piecesInColor[j]];
                            breakLoop = true;
                            break;
                        }
                    }
                }

                if(breakLoop) {
                    break;
                }
            }

            
            let divImg = document.createElement('img');
            divImg.src = pieceSrc;
            divImg.style.height = '117.5px';
            divImg.style.width = '117.5px';
            divImg.style.position = 'absolute';
            divImg.style.left = '-4%';          
            divImg.style.top = '0%'; 
            divImg.id = daPiece;

            document.querySelector('#' + originalPosition).removeChild(document.querySelector('#' + originalPosition).childNodes[0]);
            document.querySelector('#' + clickPos).appendChild(divImg);
            
            // does something (don't know what, once figured out will put here) (removes the piece, reason for substring is so that the hastag doesn't get sent and break the function me me big brain)
            for(let i=0; i<piecesArr.length; i++) {
                removeClicksForPiece(piecesArr[i].substring(1, piecesArr[i].length));
            }

            
            board[daPiece]['positionColumn'] = clickPos.charAt(0);
            board[daPiece]['positionRow'] = clickPos.charAt(1);
            
            for(let i=0; i<squaresToRemove.length; i++) {
                removeSquareClick(squaresToRemove[i]);
            }
            
            piecesRules();
            removeHighlights(true);
            
            if(turn === 'white') {
                turn = 'black';
            } else {
                turn = 'white';
                divImg.style.transform = 'rotate(180deg)';
            }
            
            flipBoard();
        });
    }
}

function removeSquareClick(pos) {
    document.querySelector('#' + pos).replaceWith(document.querySelector('#' + pos).cloneNode(true));
}


function killings(pos) { 
    stats(pos);
    removePiece(pos);
}   

function stats(pos) {
    let piece  = findPiece(pos);
    
    if(turn === 'white'){
        whitePoints += pieceStats[board[piece]['type']];
    } else {
        blackPoints += pieceStats[board[piece]['type']];
    }
}

function removePiece(pos) {
    document.querySelector('#' + pos).removeChild(document.querySelector('#' + pos).childNodes[0]);
    let piece = findPiece(pos);

    for(let i = 0; i < piecesArr.length; i++){
        if(piecesArr[i] === ('#' + piece)) {
            piecesArr.splice(i, 1);
        }
    }

    const keys = Object.keys(board);
    for(let i=0; i<keys.length; i++) {
        if(keys[i] === piece) {
            delete board[keys[i]];
        }
    }
}


//splice(start)
// NEW STUFF
function removeHighlights(second) {
    let left1 = 32.2;
    let top1 = 89.5;
    let black = true;
    
    for(let i=0; i<8; i++) {
        let j = 0;
        for(j=0 ; j<8; j++){
            square = document.querySelector("#" + letters[i] + boardArr[letters[i]][j]);  
            if(black) {
                square.style.backgroundColor = 'brown';
                black = false;
            } else {
                square.style.backgroundColor = 'white';
                black = true;   
            }
            square.style.top = top1 + "%";
            square.style.left = left1 + "%";
            top1 -= 12.65;
            if(j === 7) {
                if(black) {
                    black = false;
                } else {
                    black = true;
                }       
            } 
        }
    
        top1 = 89.5;
        left1 += 6;
    }
    if(second) {
        removePiecesHighlight();
    }
}

function removePiecesHighlight() {
    for(let i=0; i<piecesArr.length; i++) {
        document.querySelector(piecesArr[i]).style.backgroundColor = '';
    }
}


function checkIfOutOfBounds(index, positionRow) {    
    if((positionRow > 8) || (positionRow <= 0) ||(index > 7) || (index < 0)) {
        return true;
    }
    return false;
}   

function flipBoard() {
    // change the letters and numbers
    if(turn === 'white') {
        putThingsOnBoard('numbers', false);
        putThingsOnBoard('letters', false);
    } else {
        putThingsOnBoard('numbers', true);
        putThingsOnBoard('letters', true);
    }
    
    if(turn === 'white') {
        rotateEverything();    
    } else {
        rotateEverything();           
    }

}

function rotateEverything() {
    rotateBoard();
    rotateLetters();
    rotateNumbers();   
    rotateButtons(); 
    
    if(turn === 'black') {
        rotatePieces(false);
    } else {
        rotatePieces(true);
    }
}

function rotateButtons() {
    document.querySelector('#forfietButton').style.transform += 'rotate(180deg)';
    document.querySelector('#statsButton').style.transform += 'rotate(180deg)';
}

function rotatePieces(advanced) {
    for(let i=0; i<piecesArr.length; i++) {
        if(advanced) {             
            document.querySelector(piecesArr[i]).style.transform += 'rotate(180deg)';
        } else {
            document.querySelector(piecesArr[i]).style.transform = 'rotate(180deg)';
        }
    }
}

function rotateLetters() {
    let lettersToRotate = document.querySelector('#letterDiv');
    lettersToRotate.style.transform += 'rotate(180deg)';
    lettersToRotate.style.position = 'aboslute';
    if(turn === 'white') {
        lettersToRotate.style.top = '103%';  
        // lettersToRotate.style.left = '33%';                                
    } else{
        lettersToRotate.style.top = '-12%';
        lettersToRotate.style.left = '31%';
    }
}

function rotateNumbers(){ 
    let numbersToRotate = document.querySelector('#numberDiv');
    numbersToRotate.style.transform += 'rotate(180deg)';
    numbersToRotate.style.position = 'aboslute';

    if(turn === 'white') {
        numbersToRotate.style.top = '5%';
        numbersToRotate.style.left = '29%';
    } else {
        numbersToRotate.style.top = '90%';
        numbersToRotate.style.left = '25%';
    }
}

function rotateBoard() {
    document.querySelector('.board').style.transform += 'rotate(180deg)';
    document.querySelector('.board').style.width = '100%';
    document.querySelector('.board').style.height = '100%';
    document.querySelector('.board').style.position = 'absolute';
    document.querySelector('.board').style.marginLeft = 'auto';
    document.querySelector('.board').style.marginTop = '0px';

}
window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};


// function removeAllClicks() {
//     for(let i=0; i<piecesArr.length; i++) {
//         removeSquareClick(piecesArr[i].substring(1, piecesArr[i].length));
//     }
//     piecesRules();
// }
