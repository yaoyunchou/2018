export default {
  rows: [{
      label: '类型',
      cols: [{
          model: 'domain',
          domain: 'radios',
          span: 24,
          options: [{
              label: '文本',
              value: 'input'
            },
            {
              label: '日期',
              value: 'date'
            }, {
              label: '时间',
              value: 'datetime'
            },
            {
              label: '单选',
              value: 'radios'
            }
          ]
        },
        {
          model: 'domain',
          domain: 'radios',
          span: 24,
          options: [{
              label: '复选',
              value: 'checkbox'
            },
            {
              label: '下拉',
              value: 'select'
            },
            {
              label: '多复选',
              value: 'checkboxs'
            }
          ]
        }
      ],
      model: 'domain',
      domain: 'radios',
      options: [{
          label: '文本',
          value: 'input'
        },
        {
          label: '日期',
          value: 'date'
        }, {
          label: '时间',
          value: 'datetime'
        },
        {
          label: '单选',
          value: 'radios'
        },
        {
          label: '复选',
          value: 'checkbox'
        },
        {
          label: '多复选',
          value: 'checkboxs'
        },
        {
          label: '下拉',
          value: 'select'
        }
      ]
    },
    {
      label: 'label',
      model: 'label',
      domain: 'input'
    },
    {
      label: 'options',
      ifShow: 'this.bean.domain==="select"||this.bean.domain==="radio"||this.bean.domain==="radios"||this.bean.domain==="checkboxs"',
      cols: [{
          model: 'options[0].key',
          domain: 'input',
          placeholder: 'key',
          span: 10
        },
        {
          model: 'options[0].value',
          domain: 'input',
          placeholder: 'value',
          span: 10
        },
        {
          model: 'options[1].key',
          domain: 'input',
          placeholder: 'key',
          span: 10
        },
        {
          model: 'options[1].value',
          domain: 'input',
          placeholder: 'value',
          span: 10
        },
        {
          domain: 'button',
          event: 'addoption',
          span: 4,
          caption: "添加"
        }
      ]
    },
    {
      domain: 'button',
      event: 'saveoption',
      span: 24,
      caption: "保存"
    },
    {
      lable: 'custom',
      domain: 'custom',
      render: (h, option, bean) => {
        return (<div> {
          JSON.stringify(bean)
        } </div>)
      }
    }
  ]
}
