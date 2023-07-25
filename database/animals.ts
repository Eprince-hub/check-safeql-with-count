import { sql } from './connect';

type Animal = {
  id: number;
  firstName: string;
  type: string;
  accessory: string;
};

type AnimalCount = {
  animalCount: number;
};

export async function getAnimals() {
  return await sql<Animal[]>`
    SELECT * FROM animals
  `;
}

export async function getAnimalsCount() {
  return await sql<AnimalCount[]>`
    SELECT
      count(*) as animal_count
    FROM
      animals
  `;
}

export async function getAnimalsCountReturnNumber() {
  return await sql<AnimalCount[]>`
    SELECT
      count(*)::Int as animal_count
    FROM
      animals
  `;
}

// const a = [{ id: 1, firstName: 'b', type: 'c', accessory: 'd' }] as const;

// type A = (typeof a)[number];

// export async function query1() {
//   return await sql<Writable<Benefit>>`
//     SELECT * FROM animals
//   `;
// }

// type DeepMutable<T> = { -readonly [P in keyof T]: DeepMutable<T[P]> };

// type B = {
//   readonly id: number;
//   readonly firstName: string;
//   readonly type: string;
//   readonly accessory: string;
// };
// export async function query() {
//   return await sql<B[]>`
//     SELECT * FROM animals
//   `;
// }

// export async function query0() {
//   return await sql`
//     SELECT * FROM animals
//   `;
// }

// export type Animal = {
//   id: number;
//   firstName: string;
//   type: string;
//   accessory: string;
// };

// export type AnimalWithLintError = typeof animals[number];

// export type AnimalFirstName = Pick<Animal, 'id' | 'firstName'>;

// export type AnimalType = Omit<Animal, 'id' | 'firstName' | 'accessory'>;

// export type AnimalId = Pick<Animal, 'id'>;

// export async function getAnimalsLintNoError() {
//   return await sql`
//     SELECT * FROM animals
//   `;
// }

// export async function getAnimalsWithLintNoError() {
//   return await sql<AnimalWithLintError[]>`
//     SELECT * FROM animals
//   `;
// }

// Get animals id and name

// export async function getAnimalFirstNameById(id: number) {
//   return (
//     await sql<AnimalFirstName[]>`
//     SELECT
//       id,
//       first_name
//     FROM
//       animals
//     WHERE
//       id = ${id}
//   `
//   )[0];
// }

// export async function getAnimalTypeById(id: number) {
//   return (
//     await sql<AnimalType[]>`
//     SELECT
//       type
//     FROM
//       animals
//     WHERE
//       id = ${id}
//   `
//   )[0];
// }

// export async function getAnimalsIdByType(type: string) {
//   return await sql<AnimalId[]>`
//     SELECT
//       id
//     FROM
//       animals
//     WHERE
//       type = ${type}
//   `;
// }
