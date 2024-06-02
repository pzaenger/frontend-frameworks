/* Add ID to movies */

const { join } = require('path');
const { writeFileSync } = require('fs');
const { genres, movies } = require('./db.json');

const result = {
  genres,
  movies: movies.map((movie, id) =>  ({ ...movie, id: id + 1 })),
};

writeFileSync(join(__dirname, 'db.json'), JSON.stringify(result), { encoding: 'utf8' });
