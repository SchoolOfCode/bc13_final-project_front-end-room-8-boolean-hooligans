import WorldmapGenerator from 'worldmap-generator/controllers/WorldMap';
import Image from 'next/image';
import Navigation from '../Components/Navigation.js';
import Button from '../Components/Button.js'

export default function createNewWorld() {
// create world with some params
const world = new WorldmapGenerator({
    size: {
        width:300, // map width
        height: 300 // map height
    },

    tileTypes: [
    {
        name: 'grass',// tile name
        connections: {'grass': 500, 'forest': 1, 'mountain': 1, 'sand': 1}
        // connections to surrounding tiles with its frequencies
        // frequency is used for calculating probabillity of appearence next to this tile
    },
    {
        name: 'forest',
        connections: {'grass': 1, 'forest': 300}
    },
    {
        name: 'mountain',
        connections: {'grass': 1, 'mountain': 150}
    },
    {
        name: 'water',
        connections: {'water': 500, 'sand': 1}
    },
    {
        name: 'sand',
        connections: {'grass': 1, 'water': 1, 'sand': 50}
    }
    ]},
);

// world.generate()

return (
    <>
    <Navigation />
    <button onClick={console.log("the button works")}>Generate World Map</button>
    {/* {world.map} */}
    </>

)
}