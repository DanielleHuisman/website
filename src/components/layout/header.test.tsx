import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Header } from './header';

describe('props', () => {
    test('should render an empty header', () => {
        render(<Header />);

        expect(screen.getByRole('banner')).toMatchSnapshot();
    });
});
