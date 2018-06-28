import {DatePicker} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <DatePicker  class={['form-widget', option.className]} type="datetime" placeholder={option.placeholder} value={this.getValue(option)} on-input={v=>this.onInput(option, v)}>
                    {option.label}
                </DatePicker>
    }
}