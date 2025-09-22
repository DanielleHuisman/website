import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Main } from './main';

describe('props', () => {
    test('should render a profile image, headers and buttons', () => {
        render(<Main />);

        expect(screen.getByRole('main')).toMatchSnapshot();
    });
});
