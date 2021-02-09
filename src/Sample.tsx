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
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log('useEffect');

        return () => console.log('will Unmount');
    }, []);

    React.useEffect(() => {
        console.log('useEffect for count');

        return () => console.log('done for count');
    }, [count]);

    React.useEffect(() => {
        console.log('useEffect for everything1');
    });

    React.useEffect(() => {
        console.log('useEffect for everything2');
    });

    React.useEffect(() => {
        console.log('useEffect for everything3');
    });


    const increment = () => {
        setCount(count + 1);
    }

    const changeName = () => {
        setPerson({ ...person })
    }

    console.log('Sample renders')
    return (
        <>
            <h4>Sample Component! {person.name} {count}</h4>

            <button onClick={increment}>Increment</button>
            <button onClick={changeName}>Change Person</button>
        </>
    );
};

export default Sample;
