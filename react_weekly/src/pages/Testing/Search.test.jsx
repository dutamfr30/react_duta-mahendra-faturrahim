import { fireEvent, render, screen } from "@testing-library/react";
import Search from './Search';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

jest.mock('axios');

describe('Search', () => {
    test('Render Test', () => {
        render(<Search/>);
    });

    test('onChange Event Test', () => {
        const onChange = jest.fn();
        render(<Search value="" onChange={onChange}>
            Cari Cerita:
        </Search>
        );
        fireEvent.change(screen.getByRole('textbox'), {target: {value: 'computer'}});
        expect(onChange).toHaveBeenCalledTimes(0);
    });

    test('Fetching berhasil', async () => {
        const cerita =[
            {objectID: '1', title:'React'},
            {objectID: '2', title:'HTML'}
        ];
        axios.get.mockImplementationOnce(() => 
            Promise.resolve({data: {hits: cerita}})
        );
        render(<Search/>);
        await userEvent.type(screen.getByRole('button'));
        const items = await screen.findAllByRole('listitem');
        expect(items).toHaveLength(2);
    });

    test('Fetching gagal', async () => {
        axios.get.mockImplementationOnce(() => 
            Promise.reject({message: 'error'})
        );
        render(<Search/>);
        await userEvent.type(screen.getByRole('button'));
        const error = await screen.findByText(/error/i);
        expect(error).toBeInTheDocument();
    })
})