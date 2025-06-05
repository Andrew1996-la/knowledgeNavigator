import { render, screen } from '@testing-library/react'

import { Button, ButtonTheme } from './Button'

describe('Button test', () => {
    test('Render test', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument();
    })

    test('Button with class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('bg-transparent  hover:underline');
    })
})