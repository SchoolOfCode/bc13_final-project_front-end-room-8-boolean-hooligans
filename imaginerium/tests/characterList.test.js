import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom' 
import CharacterList from "../pages/characterList.js";


describe ('characterList', () => {
it('check the h1 element is on the page', () => {
  render(<CharacterList/>)

    const heading = screen.getByRole('heading', {
      name: "List of characters",
    })
    
    expect(heading).toBeInTheDocument()
  })
})