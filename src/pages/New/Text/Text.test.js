import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text components', () => {
  test('renders the Title input', () => {
    render(<Text />);
    expect(screen.queryByPlaceholderText('Title')).not.toBeNull();
  });
  test('renders the Text input', () => {
    render(<Text />);
    expect(screen.queryByPlaceholderText('Your text here')).not.toBeNull();
  });
  test('renders the tags input', () => {
    render(<Text />);
    expect(screen.queryByPlaceholderText('#tags')).not.toBeNull();
  });
  test('renders the Close button', () => {
    render(<Text />);
    expect(screen.queryByText('Close')).not.toBeNull();
  });
  test('renders the Post button', () => {
    render(<Text />);
    expect(screen.queryByText('Post')).not.toBeNull();
  });
});
