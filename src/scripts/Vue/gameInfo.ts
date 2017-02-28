let template = `
<div class="game-info">
    <h2>Règles</h2>

    <p>
        Vous devez penser à un nombre composé de deux chiffres, entre 10 et 99.
        Maintenant vous allez soustraire les deux chiffres qui composent votre nombre à votre nombre.
        Par exemple si vous pensez au nombre 98, celui-ci est composé d'un 9 et d'un 8.
        Le calcul à faire sera  98 – 9 – 8 ce qui donne le résultat de 81.
        Si vous choisissez 27 il faut effectuer l'opération  27 – 2 – 7
    </p>
    
    <p>
        Voici une liste de cartes qui composent un jeu de 52 cartes, il n'y a pas de Joker.
    </p>
    
    <p>
        Examinez la carte qui se trouve dessous le résultat de votre soustraction et …  gardez-la secrète.
    </p>
</div>
`

const gameInfo = {
    template : template
};

export { gameInfo }