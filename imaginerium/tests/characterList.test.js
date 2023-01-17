import characterList from "../pages/characterList.js";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";



  describe('Character List', () => {
    it('renders the Character List', () => {
      render(<characterList />)
  
      const characterCard = screen.getByRole('characterCard', {
        name: /cctest\.js!/i,}
        )
  
      expect(characterCard).toBeInTheDocument()
    })
  })




