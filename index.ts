import {
  getAnimals,
  getAnimalsCount,
  getAnimalsCountReturnNumber,
} from './database/animals';

console.log(
  'Animals: ',
  getAnimals()
    .then((data) => {
      console.log(data);
    })
    .catch(() => {}),
);
console.log(
  'Animal Count: ',
  getAnimalsCount()
    .then((data) => {
      console.log(data);
    })
    .catch(() => {}),
);
const animalCounting = await getAnimalsCount();
const animalCounting2 = await getAnimalsCountReturnNumber();

console.log(
  'Animal Counting is: ',
  animalCounting[0]!.animalCount,
  'And the type is: ',
  typeof animalCounting[0]!.animalCount,
);
console.log(
  'Animal Counting is2: ',
  animalCounting2[0]!.animalCount,
  'And the type is: ',
  typeof animalCounting2[0]!.animalCount,
);
