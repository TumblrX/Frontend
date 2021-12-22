import { render, screen } from '@testing-library/react';
// import Link from './Link';

describe.skip('Text components', () => {
  test('renders the Link input', () => {
    // render(<Link />);
    expect(screen.queryByPlaceholderText('Type or paste URL')).not.toBeNull();
  });
  test('renders the Close button', () => {
    // render(<Link />);
    expect(screen.queryByText('Close')).not.toBeNull();
  });
  test('renders the Post button', () => {
    // render(<Link />);
    expect(screen.queryByText('Post')).not.toBeNull();
  });
});
