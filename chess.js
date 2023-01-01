// GRAWWARLY CERTIFIED hellowkdk op wkljdoiasl,jnwadk snkjdwhajsh djwahdskj hlidkjawshdikjawshb dujqwaniokn dxwasjkdjkawn
//ajs 
// lmao wassupp bruh lmao 89ijoewdio where were we ee e e  e e e  eaself ej adsel  e e  e e ////////
 //the sky// SAIHAAN API CREATION (BEST DEV 1 (CHILD PREDATOR), BEST DEV 2 (REEEEEEEEEEEEEEEEEEEEEEEEHHHHHHHHHHHAAAAAN DA MIDGET)) 
let turn = 'white';
let kingInCheck = false
let whitePoints = 0;
let blackPoints = 0 ;
let pieceThatMightBeInWay;
let arrOfPredators = []
let goingFurther = false
let pieceTryingToKillKing 
const killSquares = []
const piecesThatCanMove = []

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

// // DA BOARD

const letters = Object.keys(boardArr);

// removeHighlights();

// // pieces
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

        img.style.height = "62px";
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
            let numberDiv 
            for(let i = 8; i >= 1; i--){
                numberDiv = document.querySelector('#numberDiv');
                numberDiv.style.height = '70px';
                numberDiv.style.width = '70px';
                numberDiv.innerHTML += i + " <br /><br />";
                numberDiv.style.fontSize = "30px";
                numberDiv.style.color = 'white';
                numberDiv.style.position = 'absolute';
                numberDiv.style.left = '28%'
                numberDiv.style.top = topCounter + "%";
                topCounter -= 10.5;
            }    

        } else { 
            for(let i = 1; i <= 8; i++){
                let numberDiv = document.querySelector('#numberDiv');
                numberDiv.style.height = '70px';
                numberDiv.style.width = '70px';
                numberDiv.innerHTML += i + " <br /><br />";
                numberDiv.style.fontSize = "30px";
                numberDiv.style.color = 'white';
                numberDiv.style.position = 'absolute';
                numberDiv.style.left = '28%'
                numberDiv.style.top = topCounter + "%";
                topCounter -= 20;
            }    
        }
    } else{
        letterDiv.innerHTML = '';
        let leftCounter = -38;
        if(!backwards) {
            for(let i = 0; i < 8; i++){
                let letterDiv = document.querySelector('#letterDiv');
                letterDiv.style.height = '70px';
                letterDiv.style.width = '910px';
                letterDiv.innerHTML += letter[i] + '⠀⠀⠀';
                letterDiv.style.fontSize = "28px";
                letterDiv.style.color = 'white';
                letterDiv.style.position = 'absolute';
                letterDiv.style.top = '85%'
                letterDiv.style.left = leftCounter + "%";
                leftCounter += 10;
            }
        } else {
            for(let i = 7; i >=0; i--){
                let letterDiv = document.querySelector('#letterDiv');
                letterDiv.style.height = '70px';
                letterDiv.style.width = '910px';
                letterDiv.innerHTML += letter[i] + '⠀⠀⠀';
                letterDiv.style.fontSize = "30px";
                letterDiv.style.color = 'white';
                letterDiv.style.position = 'absolute';
                letterDiv.style.top = '85%'
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
    stats.style.height = '40px';
    stats.style.width = '70px';
    stats.style.position = 'absolute';
    stats.style.top = '10%';
    stats.style.left = '10%';

    forfiet.style.backgroundColor = 'red';
    forfiet.style.height = '40px';
    forfiet.style.width = '70px';
    forfiet.style.position = 'absolute';
    forfiet.style.top = '20%';
    forfiet.style.left = '10%';
}
putButtons();

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
    'rook1': {'positionColumn': 'A', 'positionRow': '1', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right'], 'inWay': false, 'type': 'rook', 'hinderance': []},  
    'knight1': {'positionColumn': 'B', 'positionRow': '1', 'slope': {'rise': [2], 'run': [1]}, 'distance': '3', 'direction':['L'], 'inWay': false, 'type': 'knight', 'hinderance': []},   
    'bishop1': {'positionColumn': 'C', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal'], 'inWay': false, 'type': 'bishop', 'hinderance': []},
    'king': {'positionColumn': 'E', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '1', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal'], 'inWay': false, 'type': 'king','hinderance': []},
    'queen': {'positionColumn': 'D', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal'], 'inWay': false, 'type': 'queen', 'hinderance': []},
    'rook2': {'positionColumn': 'H', 'positionRow': '1', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right'], 'inWay': false, 'type': 'rook', 'hinderance': []},  
    'knight2': {'positionColumn': 'G', 'positionRow': '1', 'slope': {'rise': [2], 'run': [1]}, 'distance': '3', 'direction': ['L'], 'inWay': false, 'type': 'knight', 'hinderance': []},  
    'bishop2': {'positionColumn': 'F', 'positionRow': '1', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal'], 'inWay': false, 'type': 'bishop', 'hinderance': []},
    'pawn1': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'A', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'pawn2': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'B', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []}, 
    'pawn3': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'C', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'pawn4': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'D', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'pawn5': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'E', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'pawn6': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'F', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'pawn7': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'G', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'pawn8': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'H', 'positionRow': '2', 'firstMove': true, 'distance': 2, 'direction': ['forward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},

    
    'blackrook1': {'positionColumn': 'A', 'positionRow': '8', 'slope': {'rise': [0], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right'], 'inWay': false, 'type': 'rook', 'hinderance': []},  
    'blackknight1': {'positionColumn': 'B', 'positionRow': '8', 'slope': {'rise': [2], 'run': [1]}, 'distance': '4', 'direction': ['L'], 'inWay': false, 'type': 'knight', 'hinderance': []},  
    'blackbishop1': {'positionColumn': 'C', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal'], 'inWay': false, 'type': 'bishop', 'hinderance': []},
    'blackking': {'positionColumn': 'E', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '1', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal'], 'inWay': false, 'type': 'king','hinderance': []},
    'blackqueen': {'positionColumn': 'D', 'positionRow': '8', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward', 'backward', 'left', 'right', 'diagonal'], 'inWay': false, 'type': 'queen', 'hinderance': []},
    'blackrook2': {'positionColumn': 'H', 'positionRow': '8', 'slope': {'rise': [1], 'run': [0]}, 'distance': '8', 'direction': ['forward','backward','left','right'], 'inWay': false, 'type': 'rook', 'hinderance': []},  
    'blackknight2': {'positionColumn': 'G', 'positionRow': '8', 'slope': {'rise': [2], 'run': [1]}, 'distance': '4', 'direction': 'L', 'inWay': false, 'type': 'knight', 'hinderance': []},  
    'blackbishop2': {'positionColumn': 'F', 'positionRow': '8', 'slope': {'rise': [1], 'run': [1]}, 'distance': '8', 'direction': ['diagonal'], 'inWay': false, 'type': 'bishop', 'hinderance': []},
    'blackpawn1': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'A', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'blackpawn2': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'B', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []}, 
    'blackpawn3': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'C', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'blackpawn4': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'D', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'blackpawn5': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'E', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'blackpawn6': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'F', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'blackpawn7': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'G', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},
    'blackpawn8': {'slope': {'rise': [2], 'run': [0]}, 'positionColumn': 'H', 'positionRow': '7', 'firstMove': true, 'distance': 2, 'direction': ['backward', 'diagonal'], 'inWay': false, 'type': 'pawn', 'hinderance': []},  
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

        if(i === 0 && kingInCheck) {
            if(checkCheckmate()) {
                if(turn === 'white')
                    alert('SKILL ISSUE DETECTED: YOU HAVE BEEN UTTERLY DEMOLISHED BY BLACK 🙅🏾‍♂️👎🏾🙅🏾‍♂️👎🏾🙅🏾‍♂️👎🏾')
                else 
                    alert('SKILL ISSUE DETECTED: YOU HAVE BEEN UTTERLY DEMOLISHED BY WHITE 🙅🏾‍♂️👎🏾🙅🏾‍♂️👎🏾🙅🏾‍♂️👎🏾') 
                
                return
            }
        }

        if(kingInCheck &&  !piecesThatCanMove.includes(piecesArr[i])) {
            continue
        }

        document.querySelector(piecesArr[i]).addEventListener('mouseover', () => {
            if(!stopColor) {
                document.querySelector(piecesArr[i]).style.backgroundColor = 'yellow';
                document.querySelector(piecesArr[i]).style.left = '-0.2%';
                document.querySelector(piecesArr[i]).style.height = '70px';
                document.querySelector(piecesArr[i]).style.width = '70px'; 
            }
        });
        
        document.querySelector(piecesArr[i]).addEventListener('mouseout', () => {
            if(!stopColor) {
                document.querySelector(piecesArr[i]).style.backgroundColor = ''; 
            }
        });

        document.querySelector(piecesArr[i]).addEventListener('click', () => {
            if(kingInCheck) {
                kingInCheck = false
                killSquares.slice(0, killSquares.length)
                piecesThatCanMove.slice(0, piecesThatCanMove.length)
            }
            removeClicksFromEmptyPlaces();
            removeHighlights(true); 
            document.querySelector(piecesArr[i]).style.backgroundColor = 'lightGreen'; 
            stopColor = true;  
            findSlopePawns(boardPieces[piecesArr[i]]); 
        });
         
    } 
}

const removeClicksFromEmptyPlaces = () => {
    for(let i=0; i<letters.length; i++) {
        for(let j=1; j<=8; j++)
        {
            if(!document.querySelector('#' + (letters[i] + j)).hasChildNodes()) {
                removeClicksForPiece(letters[i] + j)
            }
        }
    }
}


const checkCheckmate = () => {
    /*
        In order to determine if the game is over and king is in checkmate, we will call this function after ever check to check.

        To actually check for checkmate we need to:
            (1) Check if the King has anwhere to move.
                (a) If king can move anywhere, then highilght those moves, if not dont do anything.
            (2) Check if there are any pieces that can move into the way of the piece causing the check=.
                (a) Loop through every single piece on the board that is on your side and call checkAllDirections(). Keep an array of the squares that the piece causing the check has towards the King in check. Then, using checkAllDirections(), if any of those squares match up with any of the squares in the array, we know that this piece can move in the way, and we allow clicks for that piece beacuse it can move into the way of the piece causing the check. DO THIS FOR ALL PIECES.
            (3) Check if any piece can kill the piece causing the check
                (a) Loop through every piece on the side of the King in check and check if any of their available moves can kill the piece causing the check. To do this, we simply loop through the pieces on your side, and then with each piece, we recall the highLightMoves function, and without highlighting anything, we check if the piece causing the check is in the way. If it is we allow the piece that can kill the checking piece with clicks. 


            The way we allow certain pieces with clicks during the King being in check is by keeping an array of the pieces that can move. 
            If all of these are false, then declare checkmate.
            If any of these are true, do it.
    */

    checkIfPieceCanGetInWay()
    checkIfKingCanMove()


    if(piecesThatCanMove.length === 0) {
        return true
    } 

    return false
}

const checkIfPieceCanGetInWay = () => {
    let start, end
    


    if(board[pieceTryingToKillKing]['type'] === 'knight' || board[pieceTryingToKillKing]['type'] === 'pawn') {
        return 
    } 
    
    const directions = board[pieceTryingToKillKing]['direction']
    let position = board[pieceTryingToKillKing]['positionColumn'] + board[pieceTryingToKillKing]['positionRow'] 


    for(let i=0; i<directions.length; i++) {
        checkMovesCausingKingCheck(directions[i], position, false)
        if(killSquares.length !== 0) {
            break
        }
    }

    killSquares.push(position)
    



    if(turn === 'white') {
        start = 0
        end = 15
    } else {
        start = 15 
        end = piecesArr.length
    }

    for(let i=start; i<end; i++) {
        // call the same 'checkMovesCausingKingCheck()' function and pass in a new para that will, instead of checking for the King, will simply move in all the directions that that piece can move, and if any of the moves is equal to 'killSquares', that would mean that this piece can move into the way of the piece causing check, and therefore we will add this piece to the array of pieces that can move

        const pieceDirection = (board[piecesArr[i].slice(1, piecesArr[i].length)]['direction']);
        let piecePosition = board[piecesArr[i].slice(1, piecesArr[i].length)]['positionColumn'] + board[piecesArr[i].slice(1, piecesArr[i].length)]['positionRow']


        for(let j=0; j<pieceDirection.length; j++) {
            if(board[piecesArr[i].slice(1, piecesArr[i].length)]['type'] === 'king')
                continue
            if(checkMovesCausingKingCheck(pieceDirection[j], piecePosition, true)) {
                piecesThatCanMove.push(piecesArr[i])
            } 
        }
    }

    pieceTryingToKillKing = ''
}

const checkMovesCausingKingCheck = (direction, pos, checkEveryPiece) => {
    let positionRow = pos.charAt(1)
    let positionColumnIndex = findIndex(pos.charAt(0))
    let newPosition = ''
    let counter = 1
    let second = false

    let piece = findPiece(pos)
    
    do {
        newPosition = ''
        if(direction === 'forward') {
            positionRow++
        } else if(direction === 'backward') {
            positionRow--
        } else if(direction === 'left') {
            positionColumnIndex--
        } else if(direction === 'right') {
            positionColumnIndex++
        } else if(direction === 'diagonal'){
            if(counter === 1) 
                newPosition = checkDiags('upRight', positionRow, positionColumnIndex)
            else if(counter === 2)
                newPosition = checkDiags('upLeft', positionRow, positionColumnIndex)
            else if(counter === 3)
                newPosition = checkDiags('downLeft', positionRow, positionColumnIndex)
            else if(counter === 4)
                newPosition = checkDiags('downRight', positionRow, positionColumnIndex)
            
            
            if(!Number.isNaN(newPosition)) {
                positionColumnIndex = findIndex(newPosition.charAt(0))
                positionRow = newPosition.charAt(1)
            }

            if(board[piece]['type'] === 'pawn') {
                if(counter > 2) break

                if(killSquares.includes(newPosition) && document.querySelector('#' + newPosition).hasChildNodes() && checkIfOppositeColors(newPosition)) {
                    piecesThatCanMove.push('#' + piece)
                    break
                } else {
                    newPosition = ''
                    positionRow = pos.charAt(1)
                    positionColumnIndex = findIndex(pos.charAt(0))
                    counter++
                    continue
                }
            }

        } else {
            let rowIncrement = 1
            let columnIncrement = 2
            if(second) {
                rowIncrement = 2
                columnIncrement = 1
            }

            if(counter === 1) {
                positionRow = parseInt(positionRow) + rowIncrement
                positionColumnIndex += columnIncrement 
            } else if(counter === 2) {
                positionRow = parseInt(positionRow) + rowIncrement
                positionColumnIndex -= columnIncrement
            } else if(counter === 3) {
                positionRow = parseInt(positionRow) - rowIncrement
                positionColumnIndex += columnIncrement
            } else if(counter === 4) {
                positionRow = parseInt(positionRow) - rowIncrement
                positionColumnIndex -= columnIncrement
            }
        }

        

        if(checkEveryPiece) {
            if(positionRow === '-' || Number.isNaN(newPosition) || checkIfOutOfBounds(positionColumnIndex, positionRow)) {
                if(direction === 'diagonal' || direction === 'L') {
                    counter++
                    if(counter > 4){
                        if(direction === 'L') {
                            if(!second) {
                                counter = 1
                                second = true
                            } else {
                                break
                            }
                        } else {
                            break
                        }
                    }

                    newPosition = ''
                    positionRow = pos.charAt(1)
                    positionColumnIndex = findIndex(pos.charAt(0))

                    continue
                } else {
                    break
                }
    
            }
        } else {
            if(positionRow === '-' || Number.isNaN(newPosition) || checkIfOutOfBounds(positionColumnIndex, positionRow)) {
                if(direction === 'diagonal') {
                    counter++

                    newPosition = ''
                    positionRow = pos.charAt(1)
                    positionColumnIndex = findIndex(pos.charAt(0))

                    if(counter >= 4) {
                        break
                    }

                    killSquares.splice(0, killSquares.length)
                    continue
                } else {
                    break
                }
            }
        }

        if(newPosition === '') {
            newPosition = letter[positionColumnIndex] + positionRow
        }

        

        if(!checkEveryPiece) {
            if(document.querySelector('#' + newPosition).hasChildNodes()) {
                break
             }  else {
                 killSquares.push(newPosition)
             }
        } else {
            if(killSquares.includes(newPosition)) {
                if((document.querySelector('#' + newPosition).hasChildNodes() && board[piece]['type'] === 'pawn')) {
                    if(direction === 'forward' || direction === 'backward') {
                        return false
                    }
                } 
                return true
            } else if(document.querySelector('#' + newPosition).hasChildNodes()) {
                if(direction === 'diagonal' || direction === 'L') {
                    counter++

                    if(counter >= 4) {
                        if(direction === 'l') {
                            if(!second) {
                                counter = 1;
                                newPosition = ''
                                positionRow = pos.charAt(1)
                                positionColumnIndex = findIndex(pos.charAt(0))
                                continue
                            } else {
                                break
                            }
                        }
                    }

                    newPosition = ''
                    positionRow = pos.charAt(1)
                    positionColumnIndex = findIndex(pos.charAt(0))
                } else {
                    break
                }
            } 
        }
       
        if(direction === 'L') {
            if(second) {
                if(counter >= 4) {
                    break
                }
                 
                counter++
                newPosition = ''
                positionRow = pos.charAt(1)
                positionColumnIndex = findIndex(pos.charAt(0))
            } else {
                if(counter >= 4) {
                    second = true
                    counter = 1
                } else {
                    counter++
                }
                newPosition = ''
                positionRow = pos.charAt(1)
                positionColumnIndex = findIndex(pos.charAt(0))
            }
        }

        if(newPosition !== '' && (direction === 'diagonal')) {
                counter++
                newPosition = ''
                positionRow = pos.charAt(1)
                positionColumnIndex = findIndex(pos.charAt(0))
        }
    
        if(board[piece]['type'] === 'pawn') {
            if(!board[piece]['firstMove']) {
                break
            }  else {
                if(counter === 2) {
                    break
                }
                counter++
            }
        }        
    } while(!checkIfKing(newPosition, false))

    if(!checkEveryPiece)
    {
        if(!checkIfKing(newPosition, false)) {
            killSquares.splice(0, killSquares.length)
        }
    } else {
        return false
    }
}
 
const checkDiags = (direction, positionRow, positionColumnIndex) => {
    if(direction === 'upRight') {
        positionRow++
        positionColumnIndex++
    } else if(direction === 'upLeft') {
        positionRow++
        positionColumnIndex--
    } else if(direction === 'downLeft') {
        positionRow--
        positionColumnIndex--
    } else if(direction === 'downRight') {
        positionRow--
        positionColumnIndex++
    }

    return (letter[positionColumnIndex] + parseInt(positionRow))

}

const checkIfKingCanMove = () => {
    let piece 
    if(turn === 'white') {
        piece = 'king'
    } else {
        piece = 'blackking'
    }

    let position = board[piece]['positionColumn'] + board[piece]['positionRow']

    for(let i=1; i<=8; i++) {
        if(checkTheMoves(i, position)) {
            piecesThatCanMove.push('#' + piece)
            break
        }
    }
}

const checkTheMoves = (direction, position) => {
    let positionRow = position.charAt(1) 
    let positionColumnIndex = findIndex(position.charAt(0))

    if(direction === 1) {
        // right
        positionColumnIndex++
    } else if(direction === 2) {
        // diagonal Right
        positionRow++
        positionColumnIndex++
    } else if(direction === 3) {
        // up
        positionRow++
    } else if(direction === 4) {
        // digonal Left
        positionRow++
        positionColumnIndex--
    } else if(direction === 5) {
        // left
        positionColumnIndex--
    } else if(direction === 6) {
        // diagonal Down Left
        positionRow--
        positionColumnIndex--
    } else if(direction === 7) {
        // down
        positionRow--
    } else if(direction === 8) {
        // diagonal down right
        positionRow--
        positionColumnIndex++
    }

    let newPosition = letter[positionColumnIndex] + positionRow


    if(checkIfOutOfBounds(positionColumnIndex, positionRow)) {
        return false
    } 
    
    if(document.querySelector('#' + newPosition).hasChildNodes()) {
        if(checkIfOppositeColors(newPosition)) {
            return true
        } else {
            return false
        }
    }


    if(killSquares.includes(newPosition))
        return false

    return true
 }

const kingDanger = (piece) => {
    document.querySelector(piece).style.backgroundColor = 'red';
        document.querySelector(piece).style.left = '-0.2%';
        document.querySelector(piece).style.height = '70px';
        document.querySelector(piece).style.width = '70px'; 
}

document.querySelector('#statsButton').addEventListener('click', () => {
    document.querySelector('#popup-1').classList.toggle('active');
    document.querySelector('#popup-1').style.color = 'black';
    const stats = document.querySelector('#stats')

    if (turn === 'black')
        stats.style.transform = 'rotate(180deg)';

    if(whitePoints > blackPoints) {
        stats.innerHTML = 'WHITE : ' + whitePoints + '🏆🥇 </br></br></br>';
        stats.innerHTML += 'BLACK : ' + blackPoints + '👎🏾🙅🏾‍♂️'; 
    } else if(whitePoints < blackPoints){
        stats.innerHTML = 'BLACK : ' + blackPoints + '🏆🥇 </br></br></br>';
        stats.innerHTML += 'WHITE : ' + whitePoints + '👎🏾🙅🏾‍♂️';
    } else {
        stats.innerHTML = 'BLACK : ' + blackPoints + '👎🏾🙅🏾‍♂️ </br></br></br>';
        stats.innerHTML += 'WHITE : ' + whitePoints + '👎🏾🙅🏾‍♂️';
    }

    setTimeout(closeStats, 2500);

});


function closeStats() {
    document.querySelector('#popup-1').classList.toggle('active');
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
    
    highlightMoves(rise, run, piece, false, false);
}

function highlightMoves(rise, run, currPiece, kingCheck) {
    let positionColumns = board[currPiece]['positionColumn'];
    let positionRow = board[currPiece]['positionRow'];
    const direction = board[currPiece]['direction'];    
    let distance = parseInt(board[currPiece]['distance']);
    let letterIndex = findIndex(positionColumns);
    for(let i=0; i<direction.length; i++) {
        if(direction[i] === 'forward') {
            findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece, kingCheck);
        } else if(direction[i] === 'backward'){
            findMovesDirection(direction[i], positionColumns, positionRow, distance,(letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece, kingCheck);
        } else if(direction[i] === 'left') {
            findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece, kingCheck);
        } else if(direction[i] === 'right') {
           findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece, kingCheck);
        } else if(direction[i] === 'diagonal') {
           findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), false, currPiece, kingCheck);
        } else if(direction[i] === 'L') {
            findMovesDirection(direction[i], positionColumns, positionRow, distance, (letter[letterIndex + parseInt(run)]) + '' + (parseInt(positionRow) + parseInt(rise)), true, currPiece, kingCheck);
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

function findMovesDirection(direction, positionColumn, positionRow, distance, position, knight, piece, kingCheck){
    let originalPosition = positionColumn + parseInt(positionRow);
    let newPosition = ''; 
    let count = 0;
    let index = findIndex(positionColumn);
    positionRow = parseInt(positionRow);
    let king = false;
    let pawn = false;
    let diagPawn = false;
    let safe = true;

    if(piece.charAt(0) === 'p' || (piece.charAt(0) === 'b' && piece.charAt(5) === 'p') && piece.charAt(1) != 'i'){
        pawn = true;
    }

    if(knight) {
        diagonalHighlight(index, positionRow, positionColumn, (letter[index] + '' + positionRow), false, true, kingCheck);
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
                diagPawn = true;
                let temp;
                
                temp = highlightPawnDiag(index,positionRow,-1, 1);
                if(kingCheck && !Number.isNaN(temp)) {
                    if(checkIfOutOfBounds(findIndex(temp.charAt(0)), temp.charAt(1))) {
                        break
                    }
                    if(document.querySelector('#' + temp).hasChildNodes()) {
                        if(checkIfKing(temp, true)) {
                            alert('KING IN CHECK!! DONT THROW')
                            pieceTryingToKillKing = piece
                        }
                        else 
                            break
                    } 
                }

                if(!kingCheck && !checkIfOutOfBounds(findIndex(temp[0]), temp[1]) && !Number.isNaN(temp)){

                    if(checkIfPieceIsInWay(temp, diagPawn)) {
                        movePiece(temp, originalPosition, piece);
                    }
                }

                temp = highlightPawnDiag(index,positionRow,1, -1);
                if(kingCheck && !Number.isNaN(temp)) {
                    if(checkIfOutOfBounds(findIndex(temp[0]), temp[1])) {
                        break
                    }
                    if(document.querySelector('#' + temp).hasChildNodes()) {
                        if(checkIfKing(temp, true)) {
                            alert('KING IN CHECK!! DONT THROW')
                            pieceTryingToKillKing = piece
                        }
                        else 
                            break
                    } 
                }
            
                if(!kingCheck && !checkIfOutOfBounds(findIndex(temp[0]), temp[1]) && !Number.isNaN(temp)) {
                    if(checkIfPieceIsInWay(temp, diagPawn)) {
                        movePiece(temp, originalPosition, piece);
                    }   
                }
            } else {
                newPosition = (positionColumn) + parseInt(positionRow);
                diagonalHighlight(index, positionRow, positionColumn, newPosition, king, false, kingCheck);
            }
        } else if(knight) {
            break;
        }
        if(positionRow <= 0 || positionRow > 8 || index < 0 || index > letter.length - 1){
            break;
        } 

        count++;

        // if pieec is a king, we need to check the directions. 
        /* 
            (1) before highlighting the 'new position', check in all directions for following pieces:
                Check forward, backwards, left, right for ROOK or QUEEN
                Check diagonal 1 for PAWN and infinite for QUEEN and BISHOP
                Check L shape for the KNIGHT
         */    

        if(king) {
            if(newPosition == originalPosition)
                continue

            if(checkAllDirections(newPosition)){
                safe = false;
            }
        }
        
        if(safe && !kingCheck && checkIfPieceIsInWay(newPosition, diagPawn, pawn)) {
            if(checkIfOppositeColors(newPosition)) { 
                movePiece(newPosition, originalPosition, piece);
            }            
            break;
        }
        
        if(kingCheck && !pawn){
            if(newPosition === originalPosition){
                continue;
            }          
            
            if(document.querySelector('#' + newPosition).hasChildNodes()){
                if(!goingFurther) {
                    if(checkIfKing(newPosition, true)) {
                        alert('KING IN CHECKK!! DONT LOOSE')
                        kingInCheck = true
                        pieceTryingToKillKing = piece
                    } else {
                        pieceThatMightBeInWay = findPiece(newPosition);
                        goingFurther = true
                    }
                } else {
                    if(document.querySelector('#' + newPosition).hasChildNodes()) {
                        if(checkIfKing(newPosition, true)) {
                            arrOfPredators.push(pieceThatMightBeInWay)
                            arrOfPredators.push(findPiece(originalPosition))
                        } else {
                            break
                        }
                    }
                }
            }
        }

        if(pawn && count > 2) {
            break;
        }
        if(safe && newPosition !== '' && !kingCheck) 
            movePiece(newPosition, originalPosition, piece);
    }    
    while(positionRow <= 7 && positionRow > 0 && index < letter.length && index >= 0 && king != true && distance > count);

    goingFurther = false
}

function checkAllDirections(pos, checkMurderer, specialCase)
{
    if(checkForward(pos, checkMurderer, specialCase) || checkBackward(pos, checkMurderer) || checkRight(pos) || checkLeft(pos) || checkDiagonal(pos) || checkL(pos))
        return true

    return false;
}

const checkL = (pos) => {
    if(checkDaL(pos, 'right', 1, 2) || checkDaL(pos, 'left', 1, 2) || checkDaL(pos, 'downLeft', 1, 2) || checkDaL(pos, 'downRight', 1, 2))
        return true
    if(checkDaL(pos, 'right', 2, 1) || checkDaL(pos, 'left', 2, 1) || checkDaL(pos, 'downLeft', 2, 1) || checkDaL(pos, 'downRight', 2, 1))
        return true

    return false
}

const checkDaL = (pos, direction, rChange, cChange) => {
    let placeNo = parseInt(pos.charAt(1))
    let index = findIndex(pos.charAt(0))

    let newPosition
    if(direction === 'right'){
        placeNo += rChange
        index += cChange
    } else if(direction === 'downRight') {
        placeNo -= rChange
        index += cChange
    } else if(direction === 'left') {
        placeNo += rChange
        index -= cChange
    } else {
        placeNo -= rChange
        index -= cChange
    }

    if(checkIfOutOfBounds(index, placeNo)) {
        return false
    }

    newPosition = letter[index] + placeNo

    if(document.querySelector('#' + newPosition).hasChildNodes()) {
        if(checkIfKnight(newPosition)) {
            return true
        }
    }

    return false
}


function checkDiagonal(pos) {
    // to check diagnoals, we need to 'go right one' and 'up one'     

    if(checkDaDiag(pos, 'right') || checkDaDiag(pos, 'left') || checkDaDiag(pos, 'downRight') || checkDaDiag(pos, 'downLeft')) 
        return true  

    return false

}

function checkDaDiag(pos, direction) {
    let placeNo = parseInt(pos.charAt(1))
    let index = findIndex(pos.charAt(0))
    
    let newPosition
    let count = 0
    
    do {
        if(direction === 'right'){
            placeNo++
            index++
        } else if(direction === 'left') {
            placeNo--
            index++
        } else if(direction === 'downRight') {
            placeNo++
            index--
        } else {
            placeNo--
            index--
        }


        if(checkIfOutOfBounds(index, placeNo)) {
            break
        }

        newPosition = letter[index] + placeNo


        if(document.querySelector('#' + newPosition).hasChildNodes()) {
            if(count === 0) {
                if(checkIfPawn(newPosition)) {
                    return true
                }
            }
            if(checkIfQueen(newPosition) || checkIfBishop(newPosition)) {
                return true
            }
        }
        count++
    } while(!document.querySelector('#' + newPosition).hasChildNodes())

    return false
}


function checkLeft(pos) {
    let placeNo = parseInt(pos.charAt(1))
    let placeLetter = pos.charAt(0)
    let index = findIndex(placeLetter)

    for(let i=index-1; i>= 0; i--) {
        let newPos = letter[i] + placeNo
        if(document.querySelector('#' + newPos).hasChildNodes()){
            if(checkIfQueen(newPos) || checkIfRook(newPos)) {
                return true;
            }
            return false
        }
    }

    return false
}

function checkRight(pos, checkMurderer) {
    let placeNo = parseInt(pos.charAt(1))
    let placeLetter = pos.charAt(0)
    let index = findIndex(placeLetter)

    for(let i=index+1; i<letter.length; i++){
        let newPos = letter[i] + placeNo
        
        if(document.querySelector('#' + newPos).hasChildNodes()){
            if(checkIfQueen(newPos) || checkIfRook(newPos)) {
                return true;
            }
            return false
        }
    }

    return false
}

function checkBackward(pos){
    let placeNo = parseInt(pos.charAt(1))
    let placeLetter = pos.charAt(0)

    if(placeNo === 0)
        return false

    for(let i=placeNo-1; i>= 1; i--){
        let newPos = (placeLetter) + (i)
        if(document.querySelector('#' + newPos).hasChildNodes()){
            if(checkIfQueen(newPos) || checkIfRook(newPos)) {
                return true;
            }
            break;
        
        }
    }
    return false
}

function checkForward(pos) {
    let placeNo = pos.charAt(1)
    let placeLetter = pos.charAt(0)

    if(placeNo === 8) {
        return false;
    }

    for(let i=1; i<=(8-placeNo); i++) {
        let newPos = (placeLetter) + (parseInt(placeNo) + i)
        
        if((findPiece(newPos) !== 'king' && findPiece(newPos) !== 'blackking') && document.querySelector('#' + newPos).hasChildNodes()){
            if(checkIfQueen(newPos) || checkIfRook(newPos)) {
                return true;
            }
            break;
        }
        
    }

    return false;
}

function checkIfKnight(pos){
    let piece = findPiece(pos, false)
    // alert('piece: ' + piece)
    if(turn === 'black') {
        if(piece === 'knight1' || piece === 'knight2')
            return true
    } else {
        if(piece === 'blackknight1' || piece === 'blackknight2')
            return true
    }
    return false;
}


function checkIfBishop(pos){
    let piece = findPiece(pos, false)
    // alert('piece: ' + piece)
    if(turn === 'black') {
        if(piece === 'bishop1' || piece === 'bishop2')
            return true
    } else {
        if(piece === 'blackbishop1' || piece === 'blackbishop2')
            return true
    }
    return false;
}
function checkIfPawn(pos){
    let piece = findPiece(pos, false)
    // alert('piece: ' + piece)
    if(piece === undefined){
        return false
    }
    if(turn === 'black') {
        if(piece.charAt(0) === 'p' && piece.charAt(1) === 'a')
            return true
    } else {
        if(piece.charAt(0) === 'b' && piece.charAt(5) === 'p' && piece.charAt(6) === 'a')
            return true
    }
    return false;
}
function checkIfRook(pos) {
    let piece = findPiece(pos, false)


    if(turn === 'black') {
        if(piece === 'rook1' || piece === 'rook2')
            return true
    } else {
        if(piece === 'blackrook1' || piece === 'blackrook2')
            return true
    }
    return false;
}

function checkIfQueen(pos) {
    let piece = findPiece(pos, false)
    // alert('piece: ' + piece)
    if(turn === 'black') {
        if(piece === 'queen')
            return true
    } else {
        if(piece === 'blackqueen')
            return true
    }
    return false;
}


function checkIfKing(pos, colorCare) {
    let piece = findPiece(pos, false)
    if(!colorCare) {
        if(turn === 'white') {
            if(piece === 'king')
                return true
        } else {
            if(piece === 'blackking') 
                return true
        }

        return false
    }

    if(turn === 'black') {
        if(piece === 'king')
            return true
    } else {
        if(piece === 'blackking')
            return true
    }
    return false;
}

function highlightPawnDiag(index, positionRow, num1, num2) {
    if(turn === 'black') {
        return (letter[index+num1]) + (positionRow-1);
    } else {
        return (letter[index+num2]) + (positionRow+1);
    }
}


let positionRow;
function diagonalHighlight(index, positionRow, positionColumn, originalPosition, king, knight, kingCheck) {
    let counter = 1;
    newPosition = originalPosition;
    let originalRow = positionRow;
    let originalColumn = index;
    let safe = true
    
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
    
        if(king) {
            if(checkAllDirections(newPosition)) {
                safe = false;
            }
        }

        if(!kingCheck && knight && !checkIfChildNodes(newPosition)) {
            movePiece(newPosition, originalPosition, 'knight');
        } else if(safe && !kingCheck && king && !checkIfChildNodes(newPosition)) {
            movePiece(newPosition, originalPosition, 'king');
        } else if(safe && !kingCheck && !checkIfChildNodes(newPosition)) {
            movePiece(newPosition, originalPosition, 'bishop')
        }

        if((king || knight) && !checkIfOutOfBounds(index, positionRow) ) {
            let piece = '';
            if(king) {
                piece = 'king';
            } else {
                piece = 'knight';
            }

            if(safe && !kingCheck && checkIfPieceIsInWay(newPosition, false)) {
                if(checkIfOppositeColors(newPosition)) {
                    movePiece(newPosition, originalPosition, piece);
                }
            }
            
            if(kingCheck){
                if(document.querySelector('#' + newPosition).hasChildNodes()){
                    if(checkIfKing(newPosition, true)) {
                        alert('KING IN CHECK!! DONT THROW')
                        piece = findPiece(originalPosition, false)
                        pieceTryingToKillKing = piece
                    }
                }
            }

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

        if(kingCheck){
            if(newPosition === originalPosition){
                continue;
            }          
            
            if(document.querySelector('#' + newPosition).hasChildNodes()) {
                if(checkIfKing(newPosition, true)) {
                    alert('KING IN CHECK!! DONT THROW')
                    kingInCheck = true
                    piece = findPiece(originalPosition, false)
                    pieceTryingToKillKing = piece
                }

                break
            }
        }


        
        if(safe && !kingCheck && checkIfPieceIsInWay(newPosition, false, false)) {
            if(checkIfOppositeColors(newPosition)) { 
                movePiece(newPosition, originalPosition, 'bishop');
            }            
        }
        
        if(!kingCheck && checkIfPieceIsInWay(newPosition, false, false)) {
            newPosition = originalPosition;
            positionRow = originalRow;
            index = originalColumn; 
            counter++;
        }         
    } while(true);
}


function checkIfPieceIsInWay(newPosition, diagPawn, pawn) {
    if(newPosition === '') {
        return;
    }
    if(checkIfChildNodes(newPosition)) {
        if(checkIfOppositeColors(newPosition)){
            if(!pawn || diagPawn) {
                document.querySelector('#' + newPosition).style.backgroundColor = '#347890';            
            }
            removeClicksForPiece(findPiece(newPosition, true));
        }
        return true;
    } else {
        if(!diagPawn) {
            document.querySelector('#' + newPosition).style.backgroundColor = '#347890';
        }
        return false;
    }
}

function findPiece(newPosition, inWay) {
    let pieces = Object.keys(board);

    for(let i=0; i<pieces.length; i++) {
        let positionColumn = board[pieces[i]]['positionColumn'];
        let positionRow = board[pieces[i]]['positionRow'];
        if((positionColumn + positionRow) === newPosition) {
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
                // alert('PIECE IS : ' + piece)
                if(board[piece]['firstMove']) {
                    board[piece]['distance'] = 1;
                    board[piece]['firstMove'] = false;      
                } 
            } 
            
            let colors = Object.keys(pieces);
            
            let daPiece = "";
            let black = false;
            let pieceSrc = "";

            daPiece = findPiece(originalPosition, true);
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
            divImg.style.height = '70px';
            divImg.style.width = '70px';
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

            removeHighlights(true);

            if(daPiece !== 'blackking' && daPiece !== 'king') {
                highlightMoves(2, 1, daPiece, true, false)            
            } 
            

            if(turn === 'white') {
                turn = 'black';
            } else {
                turn = 'white';
                document.querySelector('#' + daPiece).style.transform = 'rotate(180deg)'
            }


            piecesRules();

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
    let piece  = findPiece(pos, true);
    
    if(turn === 'white'){
        whitePoints += pieceStats[board[piece]['type']];
    } else {
        blackPoints += pieceStats[board[piece]['type']];
    }
}

function removePiece(pos) {
    document.querySelector('#' + pos).removeChild(document.querySelector('#' + pos).childNodes[0]);
    let piece = findPiece(pos, true);

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


// NEW STUFF
function removeHighlights(second) {
    let left1 = 30
    let top1 = 75

    let black = true;
    
    for(let i=0; i<8; i++) {
        let j = 0;
        for(j=0 ; j<8; j++){
            square = document.querySelector("#" + letters[i] + boardArr[letters[i]][j]);  
            if(black) {
                square.style.backgroundColor = 'green';
                black = false;
            } else {
                square.style.backgroundColor = 'white';
                black = true;   
            }
            square.style.height = '70px';
            square.style.width = '70px';
            square.style.top = top1 + "%";
            square.style.left = left1 + "%";
            top1 -= 10;
            // top1 -= 0;
            if(j === 7) {
                if(black) {
                    black = false;
                } else {
                    black = true;
                }       
            } 
        }
    
        top1 = 75
        // left1 += 6;
        left1 += 5
    }
    if(second) {
        removePiecesHighlight();
    }    
}
removeHighlights(false);


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
        lettersToRotate.style.top = '85%';  
        // lettersToRotate.style.left = '33%';                                
    } else{
        lettersToRotate.style.top = '-5%';
        lettersToRotate.style.left = '8%';
    }
}

function rotateNumbers(){ 
    let numbersToRotate = document.querySelector('#numberDiv');
    numbersToRotate.style.transform += 'rotate(180deg)';
    numbersToRotate.style.position = 'aboslute';

    if(turn === 'white') {
        numbersToRotate.style.top = '5%';
        numbersToRotate.style.left = '28%';
    } else {
        numbersToRotate.style.top = '75%';
        numbersToRotate.style.left = '25%';
    }
}

function rotateBoard() {
    document.querySelector('.board').style.transform += 'rotate(180deg)';

    document.querySelector('.board').style.width = '100%';
    document.querySelector('.board').style.height = '100%';
    document.querySelector('.board').style.position = 'absolute';
}

/*
    Tings Remaining:
        (1) When King is placed in check, for the next turn, only the King should be the only one able to move (DONE)
            To achieve this we can create a global variable called King in Check. When the King is in check we will make this var be true. Every turn, we will check for this variable. If this var is true, then we will disable all other pieces from being able to move. Can do this by 'undoing' the highlight thingy and leave just the King able to move with a danger eye appealing thing around it to show that this needs to be moved. 
            When this happens, and we highlight the possible moves for the King, if there isn't anything that the King can move to without placing it in check, we will declare Checkmate and the opposite color as the winner.  (DONEEEEEEEE)
        (3) Checkmates (DONE)
*/

// window.onbeforeunload = function() {
//     return "AAAAAAHHH";
// };




