// const Inputs = () => (
//   <div>
//     <label>
//       Стоимость:
//       <InputNumberAntd min={100000} max={200000000} name="price" defaultValue={2000000}/> руб.
//     </label>
//     <br/>
//     <label>
//       На руках:
//       <InputNumberAntd min={100000} max={200000000} name="money" defaultValue={200000}/> руб.
//     </label>
//     <br/>
//     <label>
//       Срок кредита:
//       <InputNumberAntd min={1} max={25} name="duration" defaultValue={5}/> лет.
//     </label>
//   </div>
// );

const Inputs = ({getFieldDecorator, formItemLayout}) => (
  <div>
    <FormItemAntd {...formItemLayout} label="Стоимость">
      {getFieldDecorator('price', {
        initialValue : 2000000
      })(
        <InputNumberAntd min={100000} max={200000000} />
      )}
      руб.
    </FormItemAntd>

    <FormItemAntd {...formItemLayout} label="На руках">
      {getFieldDecorator('money', {
        initialValue : 200000
      })(
        <InputNumberAntd min={100000} max={200000000} />
      )}
      руб.
    </FormItemAntd>

     <FormItemAntd {...formItemLayout} label="Срок кредита">
      {getFieldDecorator('duration', {
        initialValue : 5
      })(
        <InputNumberAntd min={1} max={25} />
      )}
      лет.
    </FormItemAntd>
  </div>
);