import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as renderer from 'react-test-renderer' 

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test('snapshot test',()=>{
  const tree = renderer.create(<App/>).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
})