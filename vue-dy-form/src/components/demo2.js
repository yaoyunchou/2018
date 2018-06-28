import Form from '@/components/form/form.component'
import layout1 from './form.option'
import layout2 from './from.option2'
import _ from 'lodash'

export default {
  data() {
      return {
          bean1: {
            name: 'bowen',
            gender: 'M',
            birtyday: new Date(),
            country: 'china',
            language:['CN']
          },
          bean2: {
              domain: 'radios',
              label: '性别',
              options: [
                  { key: '男', value: 'M' },
                  { key: '女', value: 'F' }
              ]
          },
          form1: layout1,
          form2: layout2
      };
  }, 
  methods: {
      addOption() {
          var cols = _.find(layout.rows, { label: 'options' }).cols;
          var addButton = _.last(cols);
          cols.length--;
            var index = cols.length/2;
          cols.push({
                  model: 'options['+index+'].key', domain: 'input', placeholder: 'key', span: 10
              });

          cols.push({
                  model: 'options['+index+'].value', domain: 'input', placeholder: 'key', span: 10
              });

          cols.push(addButton);

      },
      saveOption(){
          console.log(this.bean);
      }
  },
  render(h) {
    return (
        <div>
            <h2>表单DEMO1</h2>
            <Form style={{width:'500px'}} options={this.form1} bean={this.bean1}></Form>
            <h2>表单DEMO2</h2>
            <Form on-addoption={()=>this.addOption()} on-saveoption={()=>this.saveOption()} style={{width:'500px'}} options={this.form2} bean={this.bean2}></Form>
        </div>
    )
  }
}
