import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SiLinkedin } from './linkedin';

describe('props', () => {
    test('should render the current color when no color is provided', () => {
        render(<SiLinkedin />);

        expect(screen.getByTitle('LinkedIn').parentElement).toHaveAttribute('fill', 'currentColor');
    });

    test('should render the brand color when default is provided as color', () => {
        render(<SiLinkedin color="default" />);

        expect(screen.getByTitle('LinkedIn').parentElement).toHaveAttribute('fill', '#0A66C2');
    });
});
