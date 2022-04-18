import { fireEvent, render, screen } from "@testing-library/react";
import FormCoding from './FormCoding';


describe('FormCoding', () => {
    test('render first', () => {
        render(<FormCoding/>);
    });

    test('Testing judul program', () => {
        render(<FormCoding/>);
        const judul = screen.getByText(/Pendaftaran Peserta Coding Bootcamp/i);
        expect(judul).toBeInTheDocument();
    });

    test('Check Value', () => {
        render(<FormCoding/>);
        fireEvent.input(screen.getByRole('textbox', {name:/nama/i}), {target:{value: 'Andi'}});
        expect(screen.getByRole('textbox', {name:/nama/i}).value).toBe('Andi')
    })

})