import { User } from '../../model/user';

const user = new User();

describe('#################### User Model ##################', () => {
  beforeAll(() => {
    user.create({
      firstname: 'osman',
      lastname: 'ramadan',
      upassword: '123'
    });
  });

  describe(':::::::::: queries:', () => {
    it('select:', async () => {
      const users = await user.index();
      expect(users).toBeDefined;
    });
    it('select by user id:', async () => {
      const users = await user.show('1');
      expect(users).toBeDefined;
    });

    it('delete by user id:', async () => {
      const userrecord = await user.deleteuser('1');
      expect(userrecord).toBeDefined;
    });

    it('update by user id:', async () => {
      const updaterecord = await user.updateuser('osman', 'so', '11', '1');
      expect(updaterecord).toBeDefined;
    });

    it('user credentials:', async () => {
      const record = await user.getuserbycredentials('osman', '123');
      expect(record).toBeDefined;
    });
    it('create user:', async () => {
      const record = await user.create({
        firstname: 'osman',
        lastname: 'ramadan',
        upassword: '123'
      });
      expect(record).toBeDefined;
    });
  });
});
