export default {
  rows: [{
      label: '姓名',
      cols:[
        {
          span:11,
          model: 'name',
          domain: 'input',
          ifStatus:'showName'          
        },
        {
          span:10,
          offset:2,
          model: 'gender',
          domain: 'radios',
          options: [{
              label: '男',
              value: 'M'
            },
            {
              label: '女',
              value: 'F'
            }
          ]
        }
      ],
     
    }, 
    {
      label: '语言',
      model: 'language',
      domain: 'checkboxs',
      options: [{
          label: '中文',
          value: 'CN'
        },
        {
          label: '英语',
          value: 'EN'
        },
        {
          label: '日语',
          value: 'JP'
        },
        {
          label: '粤语',
          value: 'CAN'
        }
      ]
    }, {
      label: '生日',
      model: 'birtyday',
      domain: 'date'
    }, {
      label: '国籍',
      model: 'country',
      domain: 'select',
      options: [{
          label: '中国',
          value: 'china'
        },
        {
          label: '日本',
          value: 'japan'
        },
        {
          label: '韩国',
          value: 'korea'
        },
        {
          label: '泰国',
          value: 'tailan'
        }
      ]
    },
    {
      lable:'custom',
      domain:'custom',
      render:(h, option, bean)=>{
          return <div>{JSON.stringify(bean)}</div>
      }
    }
  ]
}
