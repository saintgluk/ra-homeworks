const MortgateCalculator = (props) =>  {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const { getFieldDecorator } = props.form;
    return (
      <div>
        <FormAntd>
          <FormItemAntd {...formItemLayout} label="Тип квартиры">
            {getFieldDecorator('TypeAportment', {
            })(<Autocomplete />)}
          </FormItemAntd>
          <Inputs getFieldDecorator={getFieldDecorator} formItemLayout={formItemLayout}/>
          <Button/>
        </FormAntd>
      </div>
    );
}