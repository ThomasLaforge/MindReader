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
    // import { main }   from './Vue/main';
    
// Main
Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'blue',
//   warn: 'red',
//   background: 'black'
})

// const routes = [
//   { path: '/', component: main },
//   { path: '/settings', component: settings }
// ]

// const router = new VueRouter({
//   routes
// })

let app = new Vue({
    el: '#app',
    // router,
    data: (): { game: Game, predictionVisible: boolean, withJokers: boolean, settingsVisible: boolean} => {
        return {
            game : newGame,
            predictionVisible : false,
            withJokers: false,
            settingsVisible: false
        }
    },
    computed: {
        predictionCard : function(){ return this.game.prediction },
        choices : function(){ return  this.game.choices }
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
        updatePrediction : function(card?: Card){
            this.game.updatePrediction(card)
            this.updateChoices()
            this.predictionVisible = false            
        },
        switchSettings : function(){
            this.settingsVisible = !this.settingsVisible
        },
        updateChoices : function() {
            this.game.updateChoices();
        },
        refresh : function(){
            console.log('refresh')
            this.updatePrediction()
            this.updateChoices()
            this.predictionVisible = false
        }
    }
})

