

const gridEl = document.querySelector("#grid");

const hard = 100;
const medium = 81;
const easy = 49;
let range = 0;

count=0;

document.querySelector("#btn-play").addEventListener("click",
    function(){

        gridEl.innerHTML= "";

        
        const difficultyChoice = Number(document.querySelector("#difficulty").value);
        
        if(difficultyChoice == 10){
            range = hard;
        }else if(difficultyChoice == 9){
            range = medium;
        }else{
            range = easy;
        }
        
        const positionBombs = randomArrayNumbers(range);
        console.log(positionBombs);
        

        for(let i=1; i<=range; i++){
            const newDivEl= document.createElement("div");

            newDivEl.innerText = i;
            newDivEl.classList.add("square");
            newDivEl.style.setProperty("--my-split", difficultyChoice);

            newDivEl.addEventListener("click",
                function(){

                    // controlla se la calella cliccata è una bommba o meno
                    if( positionBombs.includes( Number(this.innerText) ) ){

                        // vero: aggiunge la classe della bomba
                        this.classList.add("bomb");
                        console.log("Bomb! Hai perso");
                    }else{
                        count++;
                        // altrimenti aggiungi la classe active
                        this.classList.add("active");
                        console.log(this.innerText);
                    }

                    this.style.pointerEvents="none";
                    if(count == range - 16){
                        console.log("hai vinto");
                    }
                }


            );

            gridEl.append(newDivEl);

        }

    }

);



function randomArrayNumbers(difficulty){

    const array=[];

    // ciclo che va fin quando la lunghezza dell'arrray arriverà a 16
    while(array.length != 16){

        // genera un numero da 1 a 100
        let num = Math.floor(Math.random() * difficulty +1);

        // controlla se il numero generato non è presente nell'array
        if(!array.includes(num)){
            array.push(num);  
        }

    }

    // restituisce l'array di numeri
    return array;


}
