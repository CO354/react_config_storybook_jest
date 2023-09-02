import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Dummy from '.';
describe('<Dummy />', () => {
  it('should render', () => {
    renderTheme(<Dummy>Childer</Dummy>);
    expect(screen.getByRole('Heading')).toBeInTheDocument();
  });
});
