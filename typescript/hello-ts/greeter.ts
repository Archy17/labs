class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
}

interface Person { // Interfaces
  firstName: string;
  lastName: string;
}

function greeter(person: Person) { // Type Annotation
  return `Hello, ${person.firstName} ${person.lastName}`
}

const user = new Student('Jane', 'M.', 'User')

document.body.innerHTML = greeter(user)
