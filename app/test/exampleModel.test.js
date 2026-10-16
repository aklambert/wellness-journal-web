// This is an example file for writing tests that was used for getting testing with Jest set up; It has no other purpose in this project right now 

import { exampleSum, exampleSubtract } from '../models/example';

// Test exampleSum function from example.js
test('adds 1 + 2 to equal 3', () => {
  expect(exampleSum(1, 2)).toBe(3);
});

// Test exampleSubtract function from example.js
test('subract 10 - 5 to equal 5', () => {
    expect(exampleSubtract(10, 5)).toBe(5);
  });