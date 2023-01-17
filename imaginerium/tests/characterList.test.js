import CharacterCard from "../pages/characterList.js";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";

// will CharacterCard render correctly 
describe('CharacterCard', () => {
    it('renders a card', () => {
      render(<CharacterCard />)
  
      expect(CharacterCard).toBeInTheDocument()
    })
  })




//test for fetchData 
/*test("making sure fetchData brings back an array",  async () => {
    const response = await supertest(_app).fetch(`https://imaginerium-qpii.onrender.com/characters`);
    expect(response.json).toBe(JSON);
    expect(data.payload).toBe(Array)
});

// test to make sure searchByName works 
test("searchByName functions correctly", async () => {
    const response = await supertest(_app).get("/characters?char_name=");
    expect(response.json).toBe(JSON);
    expect(data.payload).toBe(Array);
});*/