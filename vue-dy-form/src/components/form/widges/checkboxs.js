import {Checkbox, CheckboxGroup} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <CheckboxGroup class={['form-widget', option.className]} value={this.getValue(option)} on-input={v=>this.onInput(option, v)}>        
                {
                    this._l(option.options, item=>{                       
                        return <Checkbox name={option.model} label={item.value} class={['form-widget', item.className]}>{item.label}</Checkbox>                    
                    })
                }
                </CheckboxGroup>
       
    }
}