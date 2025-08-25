interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode:'ABC-123',
        city: 'New York',
    }
};


console.log(ironman);


// const spiderman = { ...ironman }; este funciona para las props sencillas ya para addres no, para clonarlas las props seria asi:
// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'San José';

// console.log(ironman, spiderman);


