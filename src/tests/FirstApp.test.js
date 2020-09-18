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
    const wrapper = shallow(<FirstApp greeting ={greeting}/>); // simula render
    console.warn(wrapper)
    expect(wrapper).toMatchSnapshot()
  });
  
  test('FirstApp return subtitle send for props', () => {
    const greeting = "Hola, soy Turiano";
    const subTitle = "Esto es un subTitle mandado por props, Testing";
    const wrapper = shallow(
      <FirstApp
        greeting={greeting}
        subTitle={subTitle}
      />
    ); 
    const textParagraph = wrapper.find('p').text()
    expect(textParagraph).toBe(subTitle)
    // expect(wrapper).toMatchSnapshot();
  });

});