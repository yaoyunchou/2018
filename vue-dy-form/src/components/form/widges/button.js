import {Button} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <Button class={['form-widget', option.className]} on-click={()=>this.$emit(option.event)}>
                    {option.caption}
                </Button>
    }
}