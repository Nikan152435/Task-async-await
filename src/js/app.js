import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

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