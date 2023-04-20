let cardData = {
    "card": {
        "espione": {
            "title": "Espione",
            "description": "emp",
            "niveau": 0,
            "nombre": 2
        },
        "garde": {
            "title": "Garde",
            "description": "Choisissez un joueur et essayez de deviner la carte qu'il a en main (excepté le Guard), si vous tombez juste, le joueur est éliminé de la manche.",
            "niveau": 1,
            "nombre": 6
        },
        "pretre": {
            "title": "Pretre",
            "description": "Regardez la main d'un autre joueur.",
            "niveau": 2,
            "nombre": 2
        },
        "baron": {
            "title": "Baron",
            "description": "Comparez votre carte avec celle d'un autre joueur, celui qui a la carte avec la plus faible valeur est éliminé de la manche.",
            "niveau": 3,
            "nombre": 2
        },
        "servante": {
            "title": "Servante",
            "description": "Jusqu'au prochain tour, vous êtes protégé des effets des cartes des autres joueurs.",
            "niveau": 4,
            "nombre": 2
        },
        "prince": {
            "title": "Prince",
            "description": " choisissez un joueur (y compris vous), celui-ci défausse la carte qu'il a en main pour en piocher une nouvelle.",
            "niveau": 5,
            "nombre": 2
        },
        "chancelier": {
            "title": "Chancelier",
            "description": "emp",
            "niveau": 6,
            "nombre": 2
        },
        "roi": {
            "title": "Roi",
            "description": "échangez votre main avec un autre joueur de votre choix.",
            "niveau": 7,
            "nombre": 1
        },
        "comtesse": {
            "title": "Comtesse",
            "description": "Si vous avez cette carte en main en même temps que le Roi ou le Prince, alors vous devez défausser la carte de la Countess",
            "niveau": 8,
            "nombre": 1
        },
        "princesse": {
            "title": "Princesse",
            "description": "si vous défaussez cette carte, vous êtes éliminé de la manche.",
            "niveau": 9,
            "nombre": 1
        }

    }
}

function player(nbPlayer, card) {
    this.nbPlayer = nbPlayer;
    this.card = card;
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        statuDeLaPage: 'home',
        nbJoueurs: 6,
        cardDataBase: cardData.card,
        cardDataPlay: [],
        playerArrayGarde: [],
        playerArrayBaron: [],
        activePlayer: 1,
        previousActivePlayer: 1,
        start: 0,
        selected: 'A',
        options: [
            { text: 'Jou une carte', value: 'A' },
            { text: 'a été garde', value: 'B' },
            { text: 'a baron quelqun', value: 'C' }
        ],
        playerArray: [],
        activeplayerCards: [],
        activeplayerBaron: [],
        activeplayerGarde: [],
        moi: 0,
        garde: 0,
        baron: 0
    },
    methods: {
        changePage: function (page) {
            this.statuDeLaPage = page;
        },
        baronSet: function (baronParam) {
            this.baron = baronParam; 
        },
        gardeSet: function (gardeParam) {
            this.garde = gardeParam; 
        },
        getColor(cardDataPlay) {
            
            switch (cardDataPlay) {
                case 0:
                    return 'fuchsia';
                case 1:
                    return 'aqua';
                case 2:
                    return 'lightblue';
                case 3:
                    return 'green';
                case 4:
                    return 'yellow';
                case 5:
                    return 'orange';
                case 6:
                    return 'purple';
                case 7:
                    return 'pink';
                case 8:
                    return 'brown';
                case 9:
                    return 'red';
                default:
                    
                    break;
                
            }

        },
        cestMoi: function () {
            this.moi = this.activePlayer;
            

        },
        setupCard: function (bigOrSmallDeck) {

            //pour chaque carte dans cardDataBase on print le nombre de carte
            for (const key in this.cardDataBase) {
                if (this.cardDataBase.hasOwnProperty(key)) {
                    const element = this.cardDataBase[key];
                    for (let i = 0; i < element.nombre; i++) {
                        if (bigOrSmallDeck == 1) {

                            if (element.niveau == 0 || element.niveau == 6) {
                            } else {
                                this.cardDataPlay.push(element.niveau);
                            }
                        } else {

                            this.cardDataPlay.push(element.niveau);
                        }

                    }

                }
            }

        },
        changeNbJoueurs: function (nb) {
            if (nb < 4) {
                this.setupCard(1)
            } else {
                this.setupCard(2)
            }
            this.nbJoueurs = nb;
            for (let i = 1; i <= this.nbJoueurs; i++) {
                this.playerArray.push(new player(i, []));
            }
            
            this.start = 1;
            this.statuDeLaPage = "pageJoueur1";
        },
        goToPageNav: function (page) {
            this.previousActivePlayer = this.activePlayer;
            switch (page) {
                case 1:
                    this.activePlayer = 1;
                    break;
                case 2:
                    this.activePlayer = 2;
                    break;
                case 3:
                    this.activePlayer = 3;
                    break;
                case 4:
                    this.activePlayer = 4;
                    break;
                case 5:
                    this.activePlayer = 5;
                    break;
                case 6:
                    this.activePlayer = 6;
                    break;
                default:
                    break;
            }
            this.statuDeLaPage = "pageJoueur" + page;
            this.activeplayerCards = this.playerArray[this.activePlayer - 1].card;
            this.activeplayerBaron = this.playerArrayBaron[this.activePlayer - 1].card;
            this.activeplayerGarde = this.playerArrayGarde[this.activePlayer - 1].card;
        },
        goToPageNavNEXT: function (page) {
            this.previousActivePlayer = this.activePlayer;
            page++;
            if (page > this.nbJoueurs) {
                page = 1;
            }
            switch (page) {
                case 1:
                    this.activePlayer = 1;
                    break;
                case 2:
                    this.activePlayer = 2;
                    break;
                case 3:
                    this.activePlayer = 3;
                    break;
                case 4:
                    this.activePlayer = 4;
                    break;
                case 5:
                    this.activePlayer = 5;
                    break;
                case 6:
                    this.activePlayer = 6;
                    break;
                default:
                    break;
            }
            this.statuDeLaPage = "pageJoueur" + page;
            this.activeplayerCards = this.playerArray[this.activePlayer - 1].card;
            this.activeplayerBaron = this.playerArrayBaron[this.activePlayer - 1].card;
            this.activeplayerGarde = this.playerArrayGarde[this.activePlayer - 1].card; 
        },
        jouerJouCarte: function (carte) {
            
            if(this.baron == 1 || this.garde == 1){
                console.log('this.baron: ', this.baron);
                //on ajoute la carte au tableau baron ou garde
                if(this.baron == 1){
                    this.playerArrayBaron[this.activePlayer - 1].card.push(carte);
                }else{
                    this.playerArrayGarde[this.activePlayer - 1].card.push(carte);
                }
                this.baronSet(0);
                this.goToPageNav(this.previousActivePlayer);
                return;
            }else{
                //on cherche dans le tableau cardDataPlay la carte qui a le meme niveau que la carte jouer
                for (let i = 0; i < this.cardDataPlay.length; i++) {
                    if (this.cardDataPlay[i] == carte) {
                        this.cardDataPlay.splice(i, 1);
                        //on enleve la carte du tableau cardDataPlay
                        this.activeplayerCards = this.playerArray[this.activePlayer - 1].card;
                        break;
                    }
                }
                //on ajoute la carte au tableau du joueur
                this.playerArray[this.activePlayer - 1].card.push(carte);
            }
            

        },
        getName: function (niveau) {
            for (const key in this.cardDataBase) {
                if (this.cardDataBase.hasOwnProperty(key)) {
                    const element = this.cardDataBase[key];
                    if (element.niveau == niveau) {
                        return element.title;
                    }
                }
            }
        }

    }

})



