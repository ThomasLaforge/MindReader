import { Card } from '../modules/Card';

let template = `
    <div class="settings" v-if="visible">
        <h2>Settings</h2>
        <!-- <switch v-model="jokers">Jokers</switch>
        <switch v-model="fixed-prediction">
            Fixed prediction
        </switch> -->
        <div class="prediction-form">
            <label>Value :</label>
            <input v-model="form_value" />

            <label>Color :</label>
            <input v-model="form_color" />

            <div>{{ form_value }} {{ form_color }}</div>
            
            <button @click="updatePrediction">Update Prediction</button>
        </div>
    </div>
`;

export const settings = {
    template: template,
    props: ['visible', 'jokers'],
    data : () => {
        return {
            form_value : 1,
            form_color : 0,
        }
    },
    components : {
    },
    methods: {
        updatePrediction : function(){
            console.log('emit updatePrediction')
            this.$emit('change-prediction', new Card(this.form_value, this.form_color))
        }
    }
}