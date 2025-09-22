import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Root } from './root';

describe('behaviour', () => {
    test('should set the title', () => {
        render(<Root />);

        expect(document.title).toBe('Daniëlle Huisman');
    });
});
