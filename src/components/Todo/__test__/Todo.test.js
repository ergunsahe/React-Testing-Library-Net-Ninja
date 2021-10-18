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

const addTask = (tasks) =>{
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", {name:/Add/i})

    tasks.forEach(task =>{
        fireEvent.change(inputElement, {target:{value:task}})
        fireEvent.click(buttonElement)
    })

}

describe("Todo", () =>{
  it('should render interaction two component', () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"])
    const divElement = screen.getByText(/Go grocery shopping/i)
    expect(divElement).toBeInTheDocument()
  });

  it('should render multiple tasks with interaction two component', () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping", "Do your homework", "Clean your mind"])
    const divElements = screen.getAllByTestId("task-container")
    expect(divElements.length).toBe(3)
  });

  it('should render task with initially style class', () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"])
    const divElement = screen.getByText(/Go grocery shopping/i)
    expect(divElement).not.toHaveClass("todo-item-active")
  });
  
  it('should render task with completed task style class', () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"])
    const divElement = screen.getByText(/Go grocery shopping/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
  });
})
