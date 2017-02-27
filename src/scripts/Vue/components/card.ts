import { CardSuit } from '../../modules/MindReader'
import { Card } from '../../modules/Card'

let template = `
<div class="card">
    {{ card.getStringifyValue() }} {{ card.getStringifyColor() }}
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