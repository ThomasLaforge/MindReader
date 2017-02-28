import { Card } from '../modules/Card';

let template = `
    <md-layout md-gutter md-flex="100" class="settings" v-if="visible">
        <h2>Settings</h2>
        
        <div>
            <md-switch v-model="jokers">
                Jokers
            </md-switch>
        </div>

        <div>
            <md-switch v-model="fixedPrediction" class="md-primary">
                Fixed prediction
            </md-switch> 
        </div>

        <div class="prediction-form" v-if="fixedPrediction">
            <label>Value :</label>
            <input v-model="form_value" />

            <label>Color :</label>
            <input v-model="form_color" type="number"/>
            
            <md-button class="md-primary md-raised" @click.native="updatePrediction">Update Prediction</md-button>
        </div>
    </md-layout>
`;

export const settings = {
    template: template,
    props: ['visible', 'jokers'],
    data : () : { form_value : number, form_color : number, fixedPrediction: boolean } => {
        return {
            form_value : 1,
            form_color : 0,
            fixedPrediction : false,
        }
    },
    components : {
    },
    methods: {
        updatePrediction : function(){
            console.log('emit updatePrediction', this.form_value, this.form_color)
            this.$emit('change-prediction', new Card(this.form_value, parseInt(this.form_color)))
        }
    }
}