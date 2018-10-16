const Autocomplete = () => (
  <SelectAntd
    showSearch
    style={{ width: 200 }}
    placeholder="Тип квартиры"
    optionFilterProp="children"
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="Квартира в новостройке">Квартира в новостройке</Option>
    <Option value="Готовая квартира">Готовая квартира</Option>
    <Option value="Загородный дом">Загородный дом</Option>
  </SelectAntd>
);