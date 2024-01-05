import Magician from '../Magician';

test('Testing creating magician', () => {
  const magician = new Magician('name', 100);
  expect(magician.distance).toBe(NaN);
});

test('Testing magician attack without stoned', () => {
  const magician = new Magician('name', 100);
  magician.distance = 2;
  expect(magician.attack).toBe(90);
});

test('Testing magician attack with stoned', () => {
  const magician = new Magician('name', 100);
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('Testing magician attack without distance setup', () => {
  const magician = new Magician('name', 100);
  magician.stoned = true;
  expect(magician.attack).toBe(NaN);
});