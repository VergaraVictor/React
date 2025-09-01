
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

const {   key, name:ironmanNAme, age  } = person;

console.log( {ironmanNAme, age, key} );

interface Hero {
    name: string;
    age: number; 
    key: string;
    rank?: string;
}

const useContext = ({key, name, age, rank = 'sin rango' }: Hero ) => {

    return {
        keyname: key,
        user: {
            name,
            age,
        },
        rank: rank
    };
};

const { 
    rank, 
    keyname,
    user, 
    // user: { name } 
} = useContext(person);
const { name } = user;

console.log({ rank, keyname, name });

