import {Select, Option} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <Select class={['form-widget', option.className]} placeholder={option.placeholder} value={this.getValue(option)} on-input={v=>this.onInput(option,v)}>
                    {
                        this._l(option.options, item=>{
                            return <Option key={item.value} label={item.label} value={item.value}></Option>
                        })
                    }
                </Select>
    }
}