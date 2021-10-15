import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed in to title prop', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed in to title prop 1', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByRole("heading", {name:"My Header"});
//   expect(headingElement).toBeInTheDocument();
// });

//comment 1
// it('should render same text passed in to title prop 2', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByRole("heading", {name:"Cats"});
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed in to title prop 3', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed in to title prop 4', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });


// FIND BY

// it('should render same text passed in to title prop 5', async() => {
//     render(<Header title="My Header"/>);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
//   });


// QUERY BY

// it('should render same text passed in to title prop 6', async() => {
//     render(<Header title="My Header"/>);
//     const headingElement =  screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
//   });


//   it('should render same text passed in to title prop 7', async() => {
//     render(<Header title="My Header"/>);
//     const headingElements =  screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
//   });