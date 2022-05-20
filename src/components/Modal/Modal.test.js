import Modal from './Modal';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Modal component', () => {
  test('reders Memory Game as a text', () => {
    render(<Modal />)
    const memoryGameElement = screen.getByText('Memory Game!')
    expect(memoryGameElement).toBeInTheDocument();
  })

  test('reders "Play!" if the button was not clicked', () => {
    const onClick = jest.fn()
    render(<Modal onClick={onClick} firstGame={true} />)
    const outputElement = screen.getByRole('button')
    expect(outputElement.textContent).toBe('Play!');
  })

  test('redners "Play Again!" if the button was clicked', () => {
    render(<Modal />)
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // const outputElement = screen.getByText('Play Again!');
    expect(buttonElement.textContent).toBe('Play Again!');
  })
})
