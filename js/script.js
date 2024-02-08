

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