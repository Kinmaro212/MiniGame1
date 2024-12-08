// Nous allons selectionner les boutons HTML

let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

    btn.onclick = function(){
        let score = 0;
        let time = 10;
        container.innerHTML = "";
        //ici nous allons crée les cibles
        // Tableau d'images pour les cibles
        const targetImages = ["gift.png", "target1.png", "target2.png", "target3.png", "target4.png"];
    
        let interval = setInterval(function () {
            let target = document.createElement('img');
            target.id = "target";
    
        // ici pour gerer l'endroit de l'appartiton de la cible j'ai corriger une majuscule par une minuscule
            let randomImage = targetImages[Math.floor(Math.random() * targetImages.length)];
            target.src = randomImage;
    
            container.appendChild(target);
    
        // Forcer le re-calcul des dimensions de l'image après son ajout au DOM 
        // Par défaut, utilisez 60px si offsetHeight n'est pas encore disponible
            target.style.top = Math.random() * (500 - target.offsetHeight || 60) + 'px';
            target.style.left = Math.random() * (600 - target.offsetWidth || 60) + 'px';
        // fonction pr faire disparaite la cible 
        //lorsque on clique sur le target
        //on souhaite que le score soit incrementer de 1 point et que le target disparaissent
            setTimeout(function(){
                target.remove();
            }, 2000);
    
            target.onclick = function(){
                score += 1;
                target.style.display = 'none';
            };
            time -= 1;
        //Nous allons afficher toutes les informations
            scoreContainer.innerHTML = `Score : ${score}`;
            timeContainer.innerHTML = `Temps : ${time}`;
    //Dans cette fonction nous allons initialiser la variable score et la variable Time
            if (time == 0) {
                clearInterval(interval);
                //on déclare la fin du jeux quand le temps est écoulé
                container.innerHTML = "Le jeu est terminé";
            }
        }, 1000);
    };
    
