import { Userservices } from '../../../model/services/user';

const userservices = new Userservices();

describe('#################### UserServices Model ##################', () => {
  describe(':::::::::: queries:', () => {
    it('user purchases:', async () => {
      const record = await userservices.userpurchases('12');
      expect(record).toBeDefined;
    });
  });
});
