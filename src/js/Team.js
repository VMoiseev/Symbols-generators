export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...members) {
    members.forEach((member) => this.members.add(member));
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}
