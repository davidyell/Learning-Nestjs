module.exports = {
    name: 'default',
    type: 'better-sqlite3',
    fileMustExist: true,
    database: 'database.sqlite3',
    entities: ['dist/**/entities/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    cli: {
      migrationsDir: 'src/db/migrations',
    },
}