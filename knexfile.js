module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true, // needed for sqlite
      connection: {
        filename: './data/cook_book.db3',
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seed'
      },
      testing: {
        directory: './data/cook_book.test.db3'
      },
      pool: { // needed to enable foreign keys in sqlite
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
      },
    },
  };