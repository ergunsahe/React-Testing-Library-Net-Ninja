import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () =>{
    return(
    <BrowserRouter>
        <FollowersList/>
    </BrowserRouter>
    )
}
describe("FollowersList", () =>{
  beforeEach(() =>{
    console.log("RUNNING BEFORE EACH TESTS")
  })

  beforeAll(() =>{
    console.log("RUNNING ONCE BEFORE ALL TEST")
  })

  afterEach(() =>{
    console.log("RUNNING AFTER EACH TESTS")
  })

  afterAll(() =>{
    console.log("RUNNING ONCE AFTER ALL TESTS");
  })
  it('should render followerslist', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0")
   
    expect(followerDivElement).toBeInTheDocument();
  });

  // it('should render followerslist all items', async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i)
   
  //   expect(followerDivElements.length).toBe(5);
  // });
})