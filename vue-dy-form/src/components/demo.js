import Form from '@/components/form/form.component'
import layout from './form.option'

export default {
  data() {
    return {
      bean: {
        name: 'bowen',
        gender: 'M',
        birtyday: new Date(),
        country: 'china',
        language:['CN']
      },
      form: layout
    }
  },  
  render(h) {
    return <Form  style={{width:'500px'}} options={this.form} bean={this.bean}></Form>
  }
}
