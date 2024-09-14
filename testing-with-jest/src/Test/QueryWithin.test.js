import { fireEvent, render, screen, within } from '@testing-library/react';
import QueryWithin from '../TestingComponent/QueryWithin';

test("Query within test case",()=>{
    render(<QueryWithin/>)
    const el = screen.getByText("Hello World");
    const subEl = within(el).getByText("Hi");   //To find sub element in document
    expect(subEl).toBeInTheDocument()
    expect(el).toBeInTheDocument()
})