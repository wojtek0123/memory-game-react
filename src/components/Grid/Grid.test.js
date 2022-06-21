import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Grid from './Grid';

describe('Grid component', () => {
	test('render', () => {
		render(<Grid />);
		// const listElement = screen.getByTestId('card1');
    // expect(listElement).toBeInTheDocument()
	});
});
