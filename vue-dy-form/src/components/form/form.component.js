import widges from './widges'
import {Form, FormItem, Col} from 'element-ui'
import _ from 'lodash'

export default {
    props:['options','bean','checkStatus'],
    methods:{
        onInput(option, value){
            this.$emit(option.model, value);
            if(/\.|\[/.test(option.model)){
                _.set(this.bean, option.model, value);
            }else{
                this.bean[option.model] = value;                
            }
        },
        getValue(option){
            if(/\.|\[/.test(option.model)){
                return  _.get(this.bean, option.model);
            }else{
                return this.bean[option.model];                
            }
        },
        eval(exp){
            if(!exp){
                return true;
            }
            if(/bean\./.test(exp) && this.bean){
                return eval(exp);
            }else{
                return eval(exp);
            }
        }
    },
    render(h){
        return  <Form ref="form" style={{textAlign:'left'}} class={this.options.className} model={this.bean} label-width={this.options.labelWidth|| "80px"}>
                {
                    this._l(this.options.rows, row=>{
                        return  this.eval(row.ifShow) && 
                                (<FormItem label={row.label}>
                                    {
                                        row.cols && row.cols.length?
                                            this._l(row.cols,(col)=>{
                                                return (
                                                    <Col span={col.span} offset={col.offset}>
                                                        {widges[col.domain].renderElement.call(this._renderProxy, h, col, this.bean)}                    
                                                    </Col>
                                                )
                                            })
                                        :(
                                            widges[row.domain].renderElement.call(this._renderProxy, h, row, this.bean)
                                        )
                                    }
                                </FormItem>)
                    })
                }        
                </Form>
    }
}