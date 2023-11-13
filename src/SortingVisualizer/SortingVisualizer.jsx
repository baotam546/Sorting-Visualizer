import React, { useState, useEffect } from 'react';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);

    // Change this value for the speed of the animations.
    const ANIMATION_SPEED_MS = 1;

    // Change this value for the number of bars (value) in the array.
    const NUMBER_OF_ARRAY_BARS = 310;

    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';

    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            newArray.push(randomIntFromInterval(5, 1000));
        }
        setArray(newArray);
    };

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <>
            {array.map((value, idx) => (
                <div key={idx}>
                    {value}
                </div>
            ))}
        </>
    );
};

export default SortingVisualizer;
