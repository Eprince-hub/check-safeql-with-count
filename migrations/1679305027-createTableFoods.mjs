export async function up(sql) {
  await sql`
    CREATE TABLE foods (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(30) NOT NULL,
      cuisine varchar(40)
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE foods
  `;
}
