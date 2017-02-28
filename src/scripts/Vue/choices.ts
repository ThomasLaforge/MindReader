// import { GameLevel } from '../modules/Vendredi'

import {Card} from '../modules/Card'
import {card} from './components/card'

let template = `
    <div class="choices">
        <div class="choice" v-for="(card, index) in choices">
            <div class="choice-number">
                {{ index < 10 ? '&nbsp; ' + index : index }}
            </div>
            <div class="choice-separator">
                &nbsp; : &nbsp;
            </div>
            <div class="choice-card">
                <card :card="card" />
            </div>
        </div>
    </div>
`;

export const choices = {
    props : ['choices', 'prediction'],
    template: template,
    data : () => {
        return {
            
        }
    },
    components : {
        card
    },
    methods: {
    }
}