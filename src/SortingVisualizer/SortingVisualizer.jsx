import React, { useState, useEffect } from 'react';
import { getMergeSortAnimations } from '../SortingAlgorithms/SortingAlgorithms.js';
const SortingVisualizer = () => {
    const [array, setArray] = useState([]);

    // Change this value for the speed of the animations.
    const ANIMATION_SPEED_MS = 1*50;

    // Change this value for the number of bars (value) in the array.
    const NUMBER_OF_ARRAY_BARS = 310;

    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';

    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';

    useEffect(() => {
        resetArray();
    }, []);

    const mergeSort = () => {
        // const jsSortedArray = array.slice().sort((a, b) => a - b);
        // const sortedArray = MergeSort(array);
        // console.log(arraysAreEqual(jsSortedArray, sortedArray));
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
          }
    }



    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            newArray.push(randomIntFromInterval(5, 700));
        }
        setArray(newArray);
    };

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function arraysAreEqual(arrayOne, arrayTwo) {
        if (arrayOne.length !== arrayTwo.length) return false;
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) {
                return false;
            }
        }
        return true;
    }
    return (
        <>
            <div className='flex justify-center'>
                <button className='p-1 text-sm border-2 m-1'
                    onClick={resetArray}>
                    Generate New Array
                </button>
                <button className='p-1 text-sm border-2 m-1'
                onClick={mergeSort}>
                    Merge Sort
                </button>
                <button className='p-1 text-sm border-2 m-1'>
                    Quick Sort
                </button>
                <button className='p-1 text-sm border-2 m-1'>
                    Heap Sort
                </button>
                <button className='p-1 text-sm border-2 m-1'>
                    Bubble Sort
                </button>
            </div>

            <div className='absolute left-[150px]'>
                {array.map((value, idx) => (
                    <div
                        className='array-bar'
                        key={idx}
                        style={{ height: `${value}px`, width: '2px', display: 'inline-block', margin: '0 1px', backgroundColor: `${PRIMARY_COLOR}` }}
                    />


                ))}

            </div>



        </>
    );
};

export default SortingVisualizer;
