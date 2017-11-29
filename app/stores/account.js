import { Connect, mix, scopes } from 'fronto-connect';

class Account extends Connect {
  namespace = 'v1';
  resources = 'accounts';
}

mix(Account, scopes.readable);

export default Account;
