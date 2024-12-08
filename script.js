// Nous allons selectionner les boutons HTML

let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

//Dans cette fonction nous allons initialiser la variable score et la variable Time
btn.onclick = function(){
    let score = 0;
    let time = 10;
    container.innerHTML = "";

    let interval = setInterval(function showTarget(){
        //ici nous allons crée les cibles
        let target = document.createElement('img');
        target.id="target";
        target.src="gift.png";
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';
    
    //ici pour gerer l'endroit de l'appartiton de la cible j'ai corriger une majuscule par une minuscule

    // fonction pr faire disparaite la cible 
    setTimeout(function(){
        target.remove();

    },2000)

    //lorsque on clique sur le target
    //on souhaite que le score soit incrementer de 1 point et que le target disparaissent
    target.onclick = function(){
        score +=1;
        target.style.display = 'none';
    }
    time-=1;

    //Nous allons afficher toutes les informations
    scoreContainer.innerHTML = `score: ${score}`
    timeContainer.innerHTML= `temps: ${time}`

    //on déclare la fin du jeuxw quand le temps est écoulé
    if(time == 0){
        clearInterval(interval);
        container.innerHTML = "Le jeu est terminé"
    }

    },1000);
}




