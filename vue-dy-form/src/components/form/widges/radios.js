import {Radio} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  this._l(option.options, item=>{
           return   <Radio class={['form-widget', item.className]} label={item.value} class={option.className} value={this.getValue(option)} on-input={v=>this.onInput(option, v)}>
                        {item.label}
                    </Radio>
        })
       
    }
}