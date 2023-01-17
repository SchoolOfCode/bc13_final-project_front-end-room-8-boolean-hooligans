import characterList from "../pages/characterList.js";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom' 
import CharacterCard from "../Components/CharacterCard.js";



  describe('Character Card', () => {
    it('renders the Character card', () => {
      render(<CharacterCard character_alive={false}/>)
  
      const cardsContainer = screen.getByText('Dead')
  
      expect(cardsContainer).toBeInTheDocument()
    })
  })




