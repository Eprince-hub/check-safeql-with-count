const foods = [
  { id: 1, name: 'Pizza', cuisine: 'Italian' },
  { id: 2, name: 'Sushi', cuisine: 'Japanese' },
  { id: 3, name: 'Tacos', cuisine: 'Mexican' },
];

export async function up(sql) {
  await sql`
    INSERT INTO foods ${sql(foods, 'name', 'cuisine')}
  `;
}

export async function down(sql) {
  for (const food of foods) {
    await sql`
      DELETE FROM
        foods
      WHERE
        id = ${food.id}
    `;
  }
}
