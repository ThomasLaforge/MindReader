// Libraries
    import * as _ from 'lodash'

// Model
    import { Game } from './modules/Game';
    import { Card } from './modules/Card';
    import { Deck } from './modules/Deck';
    import { CardSuit } from './modules/MindReader';

// Game Config
    let newGame = new Game();

// Vue
    import { gameInfo }     from './Vue/gameInfo';
    import { choices }      from './Vue/choices';
    import { prediction }   from './Vue/prediction';
    import { settings }   from './Vue/settings';
    
// Main
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue',
//   warn: 'red',
//   background: 'black'
})

let app = new Vue({
    el: '#app',
    data: (): { game: Game, predictionCard:Card, predictionVisible: boolean, withJokers: boolean, settingsVisible: boolean, choices: Array<Card>, deck: Deck } => {
        return {
            game : newGame,
            predictionCard : newGame.prediction,
            predictionVisible : false,
            withJokers: false,
            settingsVisible: false,
            choices: [],
            deck: newGame.deck
        }
    },
    computed: {     
    },
    components:{
        gameInfo,
        prediction,
        choices,
        settings
    },
    mounted: function(){
        this.updateChoices()
    },
    methods: {
        showPrediction : function(){
            this.predictionVisible = true
        },
        updatePrediction : function(card: Card){
            console.log('update prediction')
            this.predictionCard = card
            this.updateChoices()
        },
        switchSettings : function(){
            this.settingsVisible = !this.settingsVisible
        },
        updateChoices : function() {
            let newChoices = [];
            for( let i=0; i < 99 + 1; i++){
                if(i %  9 == 0){
                    newChoices.push(this.predictionCard)
                }
                else {
                    newChoices.push(this.deck.getCopyOfRandomCard())
                }
            }
            console.log('update choices')
            this.choices = newChoices;
        }
    }
})

