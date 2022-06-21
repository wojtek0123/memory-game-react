import { render, screen } from '@testing-library/react';
import Leaderboards from './Leaderboards';

describe('Leaderboards component', () => {
	test('renders leaderboards as a text', () => {
		render(<Leaderboards />);
		const leaderboardsElement = screen.getByText('Leaderboards');
		expect(leaderboardsElement).toBeInTheDocument();
	});
});
