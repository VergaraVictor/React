import { heroes, type Hero, Owner } from '../data/heroes.data'

const getHeroById = (id: number): Hero|undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if ( !hero ) {
    //     throw new Error(`No existe un héroe con el id ${ id }`)
    // }

    return hero;
};

// console.log(getHeroById(7));

export const getHeroesByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter((hero) => hero.owner === owner)
    return heroesByOwner;
};

// export const getHeroesByOwner = (owner: Owner) =>
//     heroes.filter((hero) => hero.owner === owner);
