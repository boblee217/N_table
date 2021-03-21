import { render, screen } from '@testing-library/react';
import App from './App';

test("Component renders", ()=>{
  const {getByTestId} = render(<App/>)
  expect(getByTestId('pre-page-content')).toBeDefined();
})