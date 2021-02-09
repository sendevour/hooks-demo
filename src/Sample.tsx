import * as React from 'react';

export interface SampleProps { }

const Sample: React.SFC<SampleProps> = (props) => {
    const initialPerson = () => {
        return {
            name: 'Rajat',
            city: 'Gurugram'
        }
    }

    const [person, setPerson] = React.useState(initialPerson);

    const increment = () => {
        setPerson(prev => {
            console.log('setPerson', prev)
            return prev;
        });
    }

    console.log('Sample renders')
    return (
        <>
            <h4>Sample Component! {person.name}</h4>

            <button onClick={increment}>Increment</button>
        </>
    );
};

export default Sample;
