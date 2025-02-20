import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../input';

describe('Input component', () => {
  it('Should exist', () => {
    expect(Input).toMatchSnapshot();
  });
  it('Should have input classname', () => {
    const component = renderer.create(<Input />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Input className="other-class this-is-a-test" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(<Input style={{ height: 250 }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be type email and a with success colors', () => {
    const component = renderer.create(<Input color="success" type="email" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be normal', () => {
    const component = renderer.create(<Input readOnly size="normal" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be large and readOnly', () => {
    const component = renderer.create(<Input readOnly size="large" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be disabled with placeholder and value', () => {
    const component = renderer.create(
      <Input value="TEST" disabled placeholder="hello tests" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should support hovered state', () => {
    const component = renderer.create(<Input status="hover" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should support focus state', () => {
    const component = renderer.create(<Input status="focus" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be rounded', () => {
    const component = renderer.create(<Input rounded />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
