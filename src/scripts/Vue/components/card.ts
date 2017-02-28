import { CardSuit } from '../../modules/MindReader'
import { Card } from '../../modules/Card'

let template = `
<div class="card">
    <div class="card-value">
        {{ card.getStringifyValue() }}
    </div>
    <div class="card-color" :class=" 'card-color-' + card.getColorName() ">
        {{ card.getStringifyColor() }}
    </div>
</div>
`

export const card = {
    props: { 
        card: Card,
    },
    template : template,
    data: function(){
        return {
        }
    },
    computed : {
    },
    components : {
    },
    methods: {
    }
};