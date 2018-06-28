import {Checkbox} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <Checkbox class={['form-widget', option.className]} value={this.getValue(option)} on-input={v=>this.onInput(option, v)}>
                    {option.label}
                </Checkbox>
    }
}