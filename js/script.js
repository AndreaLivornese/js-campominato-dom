

const gridEl = document.querySelector("#grid");

const hard = 100;
const medium = 81;
const easy = 49;
let range = 0;

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



        for(let i=1; i<=range; i++){
            const newDivEl= document.createElement("div");

            newDivEl.innerText = i;
            newDivEl.classList.add("square");
            newDivEl.style.setProperty("--my-split", difficultyChoice);

            newDivEl.addEventListener("click",
                function(){
                    this.classList.toggle("active");
                    console.log(this.innerText);

                }


            );

            gridEl.append(newDivEl);

        }

    }

);



function randomArrayNumbers(){

    const array=[];

    // ciclo che va fin quando la lunghezza dell'arrray arriverà a 16
    while(array.length != 16){

        
        let num = Math.floor(Math.random() * 100 +1);

        // controlla se il numero generato non è presente nell'array
        if(!array.includes(num)){
            array.push(num);  
        }

    }

    // restituisce l'array di numeri
    return array;


}

console.log(randomArrayNumbers());