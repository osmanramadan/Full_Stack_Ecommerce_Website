'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const user_1 = require('../../../model/services/user');
const userservices = new user_1.Userservices();
describe('#################### UserServices Model ##################', () => {
  describe(':::::::::: queries:', () => {
    it('user purchases:', async () => {
      const record = await userservices.userpurchases('12');
      expect(record).toBeDefined;
    });
  });
});
