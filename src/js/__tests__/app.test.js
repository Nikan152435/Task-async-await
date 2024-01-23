import json from './parser.js';
import read from './reader.js';

import GameSavingLoader from '../app';


  test('тест сборки промисов' , async () => {
      const sav = new GameSavingLoader();
      const result = await sav.load();
      const expected = {
         id: 9,
         created: 1546300800,
         userInfo: {
          id: 1, name: 'Hitman', level: 10, points: 2000,
         },
        };

      expect (result). toEqual(expected);
   });