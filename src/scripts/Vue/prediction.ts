// import { GameLevel } from '../modules/Vendredi'

import {card} from './components/card'

let template = `
    <div class="prediction" :class=" show ? 'prediction-show' : '' " @click="showPrediction">
        <card v-if="show" :card="card" />
    </div>
`;

export const prediction = {
    props : ['card', 'show'],
    template: template,
    data : () => {
        return {
        }
    },
    components : {
        card
    },
    methods: {
        showPrediction: function(){
            this.$emit('show-prediction');
        }
    }
}