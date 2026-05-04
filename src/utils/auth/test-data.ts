export const users = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  invalidUser_wrongPassword: {
    username: 'standard_user',
    password: 'wrong_pass'
  },
  invalidUser_wrongUsername: {
    username: 'standard_user_',
    password: 'secret_sauce'
  },
  invalidUser_lockedAccount: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  }
};