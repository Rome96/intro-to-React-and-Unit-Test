import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Testin in the component <CounterApp/>', () => {

  let wrapper = shallow(<CounterApp />);

  // se ejectuta antes de las evaluaciones - similar a un ciclo de vida
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  })

  test('Render <CounterApp/> succes', () => {
    // const value = 0;
    expect(wrapper).toMatchSnapshot()
  });
  
  test('<CounterApp/> return value for default 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value}/>);
    const valueText = wrapper.find('h2').text().trim( )
    expect(valueText).toBe('100');
  });

  test('Increase with button +1', () => {
    //buscar boton por indice y simular el event  Click
    wrapper.find('button').at(0).simulate('click')
    const valueText = wrapper.find("h2").text().trim();
    expect(valueText).toBe('11')
  });

  test("Reset with button Reset", () => {
    const wrapper = shallow(<CounterApp value={110} />);
    wrapper.find("button").at(0).simulate("click"); // aqui le suma 1 = 111
    wrapper.find("button").at(1).simulate("click"); // aqui resetea el valor = 110
    const valueText = wrapper.find("h2").text().trim();
    expect(valueText).toBe("110");
  });

  test("Decrease with button -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const valueText = wrapper.find("h2").text().trim();
    expect(valueText).toBe("9");
  });
});
