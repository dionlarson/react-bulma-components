import React from 'react';
import renderer from 'react-test-renderer';
import Select from '../select';

describe('Select component', () => {
  it('Should exist', () => {
    expect(Select).toMatchSnapshot();
  });
  it('Should have select classname', () => {
    const component = renderer.create(
      <Select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Select className="other-class this-is-a-test">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Select style={{ width: '100%' }}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be normal', () => {
    const component = renderer.create(
      <Select color="danger" size="normal" multiple disabled>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be large, red, disabled and multioption', () => {
    const component = renderer.create(
      <Select color="danger" size="large" multiple disabled>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be loading', () => {
    const component = renderer.create(
      <Select loading>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be focused', () => {
    const component = renderer.create(
      <Select status="focus">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be hovered', () => {
    const component = renderer.create(
      <Select status="hover">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be rounded', () => {
    const component = renderer.create(
      <Select rounded>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
