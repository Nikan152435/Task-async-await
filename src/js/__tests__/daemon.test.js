import Daemon from '../Daemon';

test('Testing creating daemon', () => {
  const daemon = new Daemon('name', 100);
  expect(daemon.distance).toBe(NaN);
});

test('Testing daemon attack without stoned', () => {
  const daemon = new Daemon('name', 100);
  daemon.distance = 2;
  expect(daemon.attack).toBe(90);
});

test('Testing daemon attack with stoned', () => {
  const daemon = new Daemon('name', 100);
  daemon.distance = 2;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});

test('Testing daemon attack without distance setup', () => {
  const daemon = new Daemon('name', 100);
  daemon.stoned = true;
  expect(daemon.attack).toBe(NaN);
});