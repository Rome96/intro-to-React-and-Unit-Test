import React from 'react'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import FirstApp from '../FirstApp';

describe('Testing in component <FirstApp/>', () => {

  // test('FirstApp return Hola, soy Turiano', () => {
  //   const greeting = 'Hola, soy Turiano';
  //   const { getByText } = render(<FirstApp greeting={greeting} />);

  //   expect(getByText(greeting)).toBeInTheDocument()
  // });

  test('FirstApp return Hola, soy Turiano', () => {
    const greeting = "Hola, soy Turiano";
    const wrapper = shallow(<FirstApp greeting ={greeting}/>);
    expect(wrapper).toMatchSnapshot()
  });
  

});