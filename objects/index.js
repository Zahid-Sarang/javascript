// we used to do this before ES6
/**
 * function contructor
 */

// function Person(firstName, lastName, email, mobileNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.mobileNumber = mobileNumber;
//   this.getInfo = function () {
//     return [this.firstName, this.lastName];
//   };
// }

// const detailsOne = new Person("Zahid", "Sarang", "zahid@gmail.com", "97865");

// console.log(detailsOne.getInfo());

// const info = {
//   name: "Zahid",
//   email: "zahid@gmail.com",
//   contact: "987654",
// };

// console.log(info);

// After ES6

/**
 * we use class keyword for contructing
 */

class Infomation {
  constructor(name, address, contacts, age) {
    this.name = name;
    this.address = address;
    this.contacts = contacts;
    this.age = age;
  }

  getName() {
    console.log(this.name);
  }

  getContact() {
    console.log(this.contacts, this.address);
  }
}

const personDetails = new Infomation("zahid", "taloja", "zahid@gmail.com", "22");
console.log(personDetails);
