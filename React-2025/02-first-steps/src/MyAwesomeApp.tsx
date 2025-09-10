const firstName = 'Victor';
const lastName = 'Vergara';

const favoriteGames = ['Elden ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá',
};

export const MyAwesomeApp = () => {
    return (
        <>
            <h1> {firstName} </h1>
            <h3> {lastName} </h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p>
                {JSON.stringify(address)}
            </p>
        </>
    );
};

// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>Victor</h1>
//             <h3>Vergara</h3>
//         </>
//     );
// }