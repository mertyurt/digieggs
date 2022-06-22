import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import {mocks} from "./test/mocks"
import App from "./App";

test("renders header", () => {

  render(<MockedProvider mocks={mocks}><App /></MockedProvider>);
  
  const header = screen.getByText(/rick and morty/i);
  expect(header).toBeInTheDocument();
});

test.todo("renders loading while loading")

test.todo("renders cards with characters on mount")

