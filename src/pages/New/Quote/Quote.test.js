import { render, screen } from '@testing-library/react';
// import Quote from './Quote';

describe.skip('Quote components', () => {
  test('renders the Quote input', () => {
    // render(<Quote />);
    // expect(screen.queryByPlaceholderText('Quote')).not.toBeNull();
  });
  test('renders the Source input', () => {
    // render(<Quote />);
    // expect(screen.queryByPlaceholderText('-- Source')).not.toBeNull();
  });
  test('renders the tags input', () => {
    // render(<Quote />);
    // expect(screen.queryByPlaceholderText('#tags')).not.toBeNull();
  });
  test.skip('renders the Close button', () => {
    render(<Quote />);
    expect(screen.queryByText('Close')).not.toBeNull();
  });
  test.skip('renders the Post button', () => {
    render(<Quote />);
    expect(screen.queryByText('Post')).not.toBeNull();
  });
});
