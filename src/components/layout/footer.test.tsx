import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Footer } from './footer';

describe('props', () => {
    test('should render an empty footer', () => {
        render(<Footer />);

        expect(screen.getByRole('contentinfo')).toMatchSnapshot();
    });
});
