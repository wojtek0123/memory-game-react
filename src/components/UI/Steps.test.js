import {render, screen} from '@testing-library/react';
import Steps from './Steps';

describe('Steps component', () => {
  test('renders step as a text', () => {
    render(<Steps />)
    const outputElement = screen.getByText('Steps', {exact: false})
    expect(outputElement).toBeInTheDocument();
  })

  test('renders number of steps', () => {
    render(<Steps steps={25} />)
    const outputElement = screen.getByText('25')
    expect(outputElement).toBeInTheDocument();
  })
})