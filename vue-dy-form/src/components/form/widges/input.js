import {Input} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <Input  class={['form-widget', option.className]} type="datetime" placeholder={option.placeholder} value={this.getValue(option)} on-input={v=>this.onInput(option, v)}>
                    {option.label}
                </Input>
    }
}