import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavBar />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
