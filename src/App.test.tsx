import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from "@apollo/client/testing";
import './test/jest/__mocks__/intersectionObserverMock'
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from "@testing-library/react";
import {logRoles} from '@testing-library/dom'
import {errMock, mocks} from "./test/mocks"
import App from "./App";
import { wait } from "@testing-library/user-event/dist/utils";

describe("App.tsx", ()=>{
  describe("initial render", () => {
    beforeEach(()=>{
      render(<MockedProvider mocks={mocks}><App /></MockedProvider>);
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

    it.todo("infinite scroll")

  })
  
  
