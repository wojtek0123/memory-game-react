import { render, screen } from '@testing-library/react';
import Timer from './Timer';

describe('Timer components', () => {
	test('renders Time text', () => {
		render(<Timer />);
		const outputElement = screen.getByText('Time:', {exact: false});
		expect(outputElement).toBeInTheDocument();
	});

	test('renders minutes and seconds text', () => {
		render(<Timer minutes={1} seconds={45} />);
		const outputElement = screen.getByText('01:45');
		expect(outputElement).toBeInTheDocument();
	});
});
