# GENERATEUR DE MOT DE PASSE 

# ETAPE - NOTES 
-  selectionner les elements 
- verifier que l'on arrive a récupérer la valeur 
- création de deux constante LOWERCASE et UPPERCASE 

- Creaction de **plusieurs fonctions** au **moins 4**\
    - 1 pour les **majuscules + minuscule** 
    - 1 pour les **majuscule + minuscule + chiffres**
    - 1 pour les **majuscule + minuscule + caractère speciaux**
    - 1 pour les **majuscule + minuscule + chiffre + caractère speciaux**

- faudra aussi gerer la taille du mot de passe 
    - quand on va faire le **random** il va falloir faire : 
    ````
        function minMaj(length){
            let textMin = "abcdefghijklmnopqrstuvwxyz"
            let textMaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            let mdpMinMaj = textMin + textMaj
            let taille = 12;
            let rand = Math.floor(Math.random() * mdpMinMaj.taille)
        }
    ````
    - J'ai commis une erreur j'ai oublier la boucle for + **mdp+= mdpMinMaj[rand]**

# VERIFICATION DE L'EVENEMENT SUR LA CASE CHIFFRE 

````
textChiffre.addEventListener("click", () =>{
    let validiterChiffre = textChiffre.checked;
    if(validiterChiffre){
        console.log(validiterChiffre)   
    }
    else{
        console.log(validiterChiffre)
    }
})


````

# PB RENCONTRER + SOLUTION
## Je n'arrive pas a afficher un text dans l'input textMdp 
### CAUSE
- on ne peut pas utiliser **innerText, textContent** avec un **input** 
### SOLUTION
- on utilise **.value**

## PB - Avoir au minimum un caractere du type demander 
## Cause 
- J'arrive pas a obliger d'avoir un caractere au minimum pour chaque type demander

### Solution - aide chat gpt 
- creer une constante pour chaque type . Dans cette constante on fait un random 
- A la fin on créer un trableau qu'on trie avec sort de manière aleatoire et on assemble les caractere avec join 

# ETAPE FAITE 
- récupérer les éléments du DOM 
- créaion d'une fonction pour afficher le mdp dans l'input 
- creation de la fonction funcMinMaj pour générer un mdp aleatoire avec des caractere minuscule et majuscule 
- Création d'un événement au click pour générer un mdp aleatoire 
- Récuperer la taille du mdp 
- Fonction pour créer un mdp avec min , maj et nb 
- fonction pour créer un mdp min , maj, speciaux 
- fonction pour créer un mdp avec min , maj, nb et speciaux 
