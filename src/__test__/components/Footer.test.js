import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('Render <Footer>', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render title de <Footer>', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
