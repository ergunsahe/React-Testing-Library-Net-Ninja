import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';


const MockTodo = () =>{
    return(
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

describe("Todo", () =>{
  it('should render same text passed in to title prop', () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", {name:/Add/i})
    fireEvent.change(inputElement, {target:{value:"Go grocery shopping"}})
    fireEvent.click(buttonElement)
    const divElement = screen.getByText(/Go grocery shopping/i)
    expect(divElement).toBeInTheDocument()
   
    // expect(headingElement).toBeInTheDocument();
  });
})
