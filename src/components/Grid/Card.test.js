import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Card from './Card';

describe('Card component', () => {
	test('renders card with starting classes', () => {
		const onClick = jest.fn();
		render(<Card className={'yellow card hide'} onClick={onClick} />);
		const cardElement = screen.getByTestId('cardTest');
		expect(cardElement).toHaveClass('yellow card hide');
	});
});
