export const sum = (a, b) => a + b;

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`${this.name}:${this.age}`);
  }
}

export default User;
