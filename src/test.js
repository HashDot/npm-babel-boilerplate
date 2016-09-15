import test from 'ava';
import fetch from './';

let data = {};

test.before(t =>
  fetch.then((item) => {
    data = item;
    t.pass();
  })
);

test('Get Number', (t) => {
  t.is(data.number, 42);
});
