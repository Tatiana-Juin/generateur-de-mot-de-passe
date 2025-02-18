// RECUPERE LES ELEMENTS DU DOM 
let textMdp = document.getElementById("text-mdp");
let btnCopy = document.getElementById("btn-copy");
let btnGenerate = document.getElementById("btn-generate");
let textLength = document.getElementById("text-length");
let textNb = document.querySelector(".nb");
let textChiffre = document.getElementById("chiffre");
let textSpeciaux = document.getElementById("text-speciaux");
let textCopy = document.querySelector(".text-copy");

// CONSTANTE POUR MINUSCULE ET MAJUSCULE PRESENT DANS TOUS LES MDP OBLIGATOIREMENT 
let textMin = "abcdefghijklmnopqrstuvwxyz";
let textMaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// FONCTION POUR GENERER UN MDP DES QUoN ARRIVE SUR LA PAGE
function funcDefaultMdp(){
    let taille = 12;
    return funcMinMaj(taille )
}

// LORSQUE LA PAGE SE CHARGE MDP
window.addEventListener("DOMContentLoaded", () =>{
    funcDefaultMdp()
})

// FONCTION POUR AFFICHER LE MOT DE PASSE DANS LE CHAMP 
function funcWatchMdp(mdp){
    // récupére l'element
    return textMdp.value=mdp
}

// FONCTION POUR AFFICHER LA TAILLE DU MDP 
function funcWatchLength(){
    textNb.textContent = textLength.value + " caractères";
    return parseInt(textLength.value);
}

// EVENEMENT POUR QUE LA VALEUR DE TYPE RANGE CHANGE A CHAQUE FOIS 
textLength.addEventListener("input",funcWatchLength)


// FONCTION POUR CREER UN MDP ALEATOIRE AVEC MINUSCULE ET MAJUSCULE 
function funcMinMaj(taille){
    let mdp ="";
    // Pour qu'il est des caractère minuscule et majuscule 
    mdp += textMin[Math.floor(Math.random() * textMin.length)]
    mdp += textMaj[Math.floor(Math.random() * textMaj.length)]
    let mdpMinMaj = textMin + textMaj; 
   

    // boucle pour afficher les caractère aleatoire par rapport a la taille du mot de passe demander dans le range 
    for( let i = 0; i<taille; i++){
        let rand = Math.floor(Math.random() * mdpMinMaj.length)
        mdp+= mdpMinMaj[rand]
    }
    mdp = mdp.split('').sort(() => Math.random()-0.5 ).join("")
    return funcWatchMdp(mdp)
     
}

// FONCTION POUR CREER UN MDP AVEC MINSUCULE , MAJUSCULE , NB 
function funcMinMajNb(taille){
    // Chiffre
    const textNb = "0123456789";
    let mdp ="";
    // Pour avoir un caractère majuscule, minuscule et nb au minimum
    mdp+=textMin[Math.floor(Math.random() * textMin.length)]
    mdp += textMaj[Math.floor(Math.random() * textMaj.length)]
    mdp+= textNb[Math.floor(Math.random() * textNb.length)]
    let mdpMinMajNb = textMin + textMaj + textNb

//    Boucle pour afficher les caractèrepar rapport au nb de caractère 
    for( let i = 0; i<taille; i++){
        let rand = Math.floor(Math.random() * mdpMinMajNb.length)
        mdp+= mdpMinMajNb[rand]
    }

    mdp = mdp.split('').sort( () => Math.random() - 0.5).join("")
    return funcWatchMdp(mdp)
}

// FONCTION POUR CREER UN MDP AVEC MINSUCULE , MAJUSCULE , CARACTERE SPECIAUX
function funcMinMajSpec(taille){
    const textSpeciaux = ".-_@!";
    let mdp = "";

    mdp += textMin[Math.floor(Math.random() * textMin.length)];
    mdp += textMaj = textMaj[Math.floor(Math.random() * textMaj.length)];
    mdp+=  textSpeciaux[Math.floor(Math.random() * textSpeciaux.length)]

    let mdpMinMajSpec = textMin + textMaj + textSpeciaux
    
    for( let i = 0; i<taille; i++){
        let rand = Math.floor(Math.random() * mdpMinMajSpec.length)
        mdp+= mdpMinMajSpec[rand]
    }
    mdp = mdp.split('').sort( () => Math.random() - 0.5).join("")
    return funcWatchMdp(mdp)
}

// FONCTION POUR CREER UN MDP AVEC MINSUCULE , MAJUSCULE , NB, CARACTERE SPECIAUX


function funcMinMajNbSpec(taille) {
    const textNb = "0123456789";
    const textSpeciaux = ".-_@!";

    let mdp = "";
    // génére un caractere aleatoire de chaque type 
    mdp += textMin[Math.floor(Math.random() * textMin.length)];
    mdp += textMaj[Math.floor(Math.random() * textMaj.length)];
    mdp += textNb[Math.floor(Math.random() * textNb.length)];
    mdp += textSpeciaux[Math.floor(Math.random() * textSpeciaux.length)];

    // Compléter avec des caractères aléatoires pour atteindre la taille désirée
    let mdpMinMajNbSpec = textMin + textMaj + textNb + textSpeciaux;

    for (let i = mdp.length; i < taille; i++) {
        let rand = Math.floor(Math.random() * mdpMinMajNbSpec.length);
        mdp += mdpMinMajNbSpec[rand];
    }

   /*   Mélanger les caractères du mot de passe pour éviter qu'il se suivent 
     Cette ligne transforme le mot de passe en tableau, mélange aléatoirement ses éléments, puis le reconvertit en chaîne. */
    mdp = mdp.split('').sort(() => Math.random() - 0.5).join('');

    return funcWatchMdp(mdp); 
}

// QUAND ON ARRIVE UNE PREMIERE FOIS SUR LA PAGE ET QUE L'ON A PAS TOUCHER AU INPUT RANGE 
textNb.textContent="12 caractères"
// EVENEMENT AU CLIQUE POUR GENERER LE MOT DE PASSE 
btnGenerate.addEventListener("click", (e) =>{
    e.preventDefault();
    // Pour que le texte disparait quand on genere un nouveau mot de passe 
    textCopy.innerText="";
    // recupere la taille du mdp par rapport au range 
    let taille  = funcWatchLength()
    
    if(textChiffre.checked && textSpeciaux.checked){
        funcMinMajNbSpec(taille)
    }else{  // tecxtChiffre ou textSpeciaux ou les deux ne sont pas cocher 

        if(textChiffre.checked){
            funcMinMajNb(taille)
        }else{ // textChiffre n'est pas cocher 
            if(textSpeciaux.checked){
                funcMinMajSpec(taille)
            }
            else{ // aucun n'est cocher 
                funcMinMaj(taille)
            }
        }
    }

})
// Pour copier le texte 
btnCopy.addEventListener("click", ()=>{

    let valueMdp = textMdp.value; 

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(valueMdp)
                    .then(() => {
                        // alert('Mot de passe copier !');
                        textCopy.innerText="Mot de passe copier";
                    })
                    .catch(err => {
                        console.error('Erreur lors de la copie :', err);
                        alert('Erreur lors de la copie du texte.');
                    });
            } else {
                alert('La copie dans le presse-papier n\'est pas supportée par votre navigateur.');
            }
})