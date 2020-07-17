import Sparrow from './src/Sparrow'
import PlasticToyDuck  from './src/PlasticToyDuck'
import BirdAdapter from './src/BirdAdapter'
import IBird from './src/IBird'
import IToyDuck from './src/IToyDuck'


const sparrow: IBird = new Sparrow()
const plasticToyDuck: IToyDuck = new PlasticToyDuck()

const birdAdapter: IToyDuck = new BirdAdapter(sparrow)

console.log('Sparrow...')
sparrow.fly()
sparrow.makeSound()

console.log('ToyDuck...')
plasticToyDuck.squeak()

console.log('BirdAdapter...')
birdAdapter.squeak()