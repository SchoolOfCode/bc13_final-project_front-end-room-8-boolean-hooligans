import WorldmapGenerator from 'worldmap-generator/controllers/WorldMap';
import Image from 'next/image';
import Navigation from '../Components/Navigation.js';
import Button from '../Components/Button.js';
// import co from 'co';
// import helper from '../Components/maphelper.js';
import fs from 'fs-extra';
import chalk from 'chalk';
import { Generator } from 'random-map-generator';

export default async function createNewWorld() {
    const seed = null;

    const mapGenerator = new Generator(100, 100, seed);
    mapGenerator.setLandmassStepperCount(100);
    mapGenerator.setLandmassStepperStep(150);
    mapGenerator.setRivers(1, 2);
    await mapGenerator.generate();

    mapGenerator.outputToConsole();

    // eslint-disable-next-line
    console.log(chalk.green(`Seed: ${mapGenerator.seed}`));

    fs.writeFileSync(
        'example-map.json',
        JSON.stringify(mapGenerator.matrix),
    );

return (
    <>
    <Navigation />
    <Button onClick={createNewWorld()}>{text="Generate World Map"}</Button>
    <Image src={{filename}}/> 
    </>
)

}


/*export default function* createNewWorld() {

const filename = __dirname + '/result.png';
// create world with some params
console.time("Generator initiated")
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
console.timeEnd("Generation initiation complete")

// generate world
console.time("World generated");
world.generate();
console.timeEnd("World generated");

// create image
console.time(`World saved to ${filename}`);
const image = yield helper.createImageFromArray(world.map, WIDTH, HEIGHT);
yield helper.writeImage(filename, image);
console.timeEnd(`World saved to ${filename}`);

return (
    <>
    <Navigation />
    <Button onClick={createNewWorld()}>{text="Generate World Map"}</Button>
    <Image src={{filename}}/>
    </>

)
}*/