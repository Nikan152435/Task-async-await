import json from './parser.js';
import read from './reader.js';
import GameSaving from './gameSaving.js';

jest.setTimeout(15000);
export default class GameSavingLoader {
  async load() {
    try {
      const result = await read();
      const jsonString = await json(result);
      const saving = JSON.parse(jsonString);
      return new GameSaving(saving.id, saving.created, saving.userInfo);
    } catch (error) {
      throw new Error('Error loading game saving');
    }
  }
}
    