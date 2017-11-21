import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'Jose Maduro', email: 'maduro@gmail.com' },
    { id: 2, name: 'Pedro Perez', email: 'perez@gmail.com' },
    { id: 3, name: 'Maria Abreu', email: 'abreu@gmail.com' },
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }
}

export default new Contacts();
