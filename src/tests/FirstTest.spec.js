import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

describe('First test', () => {
  it('should render the Header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // eslint-disable-next-line no-unused-vars
    const aboutLink = screen.getByText('About');
    // screen.debug();
  });
});
