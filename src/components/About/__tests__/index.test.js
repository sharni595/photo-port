import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../About';
afterEach(cleanup);

describe('About component', () => {
    //First test
    it('renders', () => {
        render(<About />);
    });

    //Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})