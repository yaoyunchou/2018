import {DatePicker} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <div  class={['form-widget', option.className]}>
                    {option.render.call(this._renderProxy, h, option, bean)}
                </div>
    }
}