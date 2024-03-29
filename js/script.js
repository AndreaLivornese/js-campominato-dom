

const gridEl = document.querySelector("#grid");

const hard = 100;
const medium = 81;
const easy = 49;

count=0;

document.querySelector("#btn-play").addEventListener("click",
    function(){
        let range = 0;
        
        gridEl.innerHTML= "";
        const resultScreen = document.querySelector("#result-screen");

        resultScreen.style.setProperty("display", "none");

        
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
                        disabledAll(".square");
                        showBombs(positionBombs, ".square");

                        // stampa del messaggio a schermo
                        resultScreen.innerHTML = "Hai perso! <br> click play e riprova"
                        resultScreen.style.setProperty("display", "flex");
                        
                    }else{
                        count++;
                        // altrimenti aggiungi la classe active
                        this.classList.add("active");
                        console.log(this.innerText);
                    }

                    this.style.pointerEvents="none";
                    if(count == range - 16){
                        console.log("hai vinto");
                        
                        // stampa del messaggio a schermo
                        resultScreen.innerHTML = "Hai vinto!"
                        resultScreen.style.setProperty("display", "flex");
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



function disabledAll(elements){

    const array = document.querySelectorAll(elements);

    // cicla per tutto l'array deglie elementi
    for(let i=0; i<array.length; i++){

        // disabilita qualsiasi tipo di interazione con il puntatore
        array[i].style.pointerEvents="none";
    }

}


function showBombs(array, elements){

    const arrayEl = document.querySelectorAll(elements);

    // cicla per tutta la grandezza dell'array degli elementi
    for(let i=0; i<arrayEl.length; i++){
        
        // controlla se il contenuto dell'elemento è contenuto nell'array delle bombe
        if(array.includes( Number( arrayEl[i].innerText ) )){

            // aggiunge la classe bomb all'elemento
            arrayEl[i].classList.add("bomb");
        }

    }
}