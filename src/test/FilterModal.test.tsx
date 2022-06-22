import { MockedProvider } from "@apollo/client/testing";
import {  render, screen } from "@testing-library/react";
import FilterModal from "../components/FilterModal";
import userEvent from '@testing-library/user-event';

describe("FilterModal.tsx", ()=>{
  describe('renders elements', () => { 
    const toggleVisible = jest.fn(() => {})
    const setFilter = jest.fn((value: boolean) => !value)
    const mockOptions = ["Rick", "Morty"];

    beforeEach(()=>{
      render(<FilterModal show={true} options={mockOptions}/>);
    })
    
    it('renders Filter text"', () => {
      expect(screen.getByText(/filter/i)).toBeInTheDocument();
    });

    it('renders close button"', () => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it('renders radio buttons"', () => {
      expect(screen.getAllByTestId("radio-button")).toHaveLength(mockOptions.length)
    });
   })

   describe('closes', () => { 
    const toggleVisible = jest.fn(() => {})
    const setFilter = jest.fn((value: boolean) => !value)
    const mockOptions = ["Rick", "Morty"];
    const handleClose = jest.fn()
    jest.fn().mockImplementation(() => ({handleClose}));

    beforeEach(()=>{
      render(<FilterModal show={true} handleClose={toggleVisible} setFilter={setFilter} options={mockOptions}/>);
    })
    
    it('check option',async () => {
      
      const radioBtns = screen.getAllByTestId("radio-button");
      userEvent.click(radioBtns[0])
      
      expect(await screen.findByRole("button")).toBeInTheDocument()
    });

    it('closes on radio checked', () => {
      expect(screen.getAllByTestId("radio-button")).toHaveLength(mockOptions.length)
    });
   })
})