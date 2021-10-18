import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';


const mockedSetTodo = jest.fn()
describe("AddInput", () =>{
  it('should render input element', () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it('should be able to type in input element', () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {target:{value:"Go Grocery Shopping"}})
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });
})