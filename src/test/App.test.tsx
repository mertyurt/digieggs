
import { MockedProvider } from "@apollo/client/testing";
import './jest/__mocks__/intersectionObserverMock'
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {errMock, mock, rickMock} from "./mocks"
import App from "../App";

describe("App.tsx", ()=>{
  describe("initial render", () => {
    beforeEach(()=>{
      render(<MockedProvider mocks={mock}><App /></MockedProvider>);
    })
    
    it('renders header as "Rick"', () => {
      expect(screen.getByText(/rick and morty/i)).toBeInTheDocument();
    });
    
    it("renders filter button", () => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders loading", ()=>{
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    })

    it("renders 0 cards", async ()=>{
      expect(screen.queryByText(/id/i)).not.toBeInTheDocument()
    })

    it("renders 20 cards", async ()=>{
      expect(await screen.findAllByText(/id/i)).toHaveLength(20)
    })
  })

  describe("error", ()=>{
    beforeEach(()=>{
      render(
        <MockedProvider mocks={errMock} addTypename={false}>
          <App />
        </MockedProvider>
      );
    })

      it('gets error', async ()=>{
        expect(await screen.findByText(/error/i)).toBeInTheDocument();
      })
    })

    describe("render filter modal", ()=>{
      beforeEach(()=>{
        render(
          <MockedProvider mocks={rickMock} addTypename={false}>
            <App />
          </MockedProvider>
        );

        const filterBtn = screen.getByRole("button")
        userEvent.click(filterBtn)
      })
  
        it('click filter button', async ()=>{
          
          expect(await screen.findByText(/filter/i)).toBeInTheDocument();
        })

        it("checks radio button", async()=> {
          const radioBtns = screen.getAllByTestId("radio-button");
          userEvent.click(radioBtns[0])

         
          expect(screen.getByText(/rick/i)).toBeInTheDocument();
        })        

       
      })

  })
  
  
