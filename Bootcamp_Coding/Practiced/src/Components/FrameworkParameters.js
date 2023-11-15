import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputCount, setInputValue, setFeatureInputCount, setFeatureInputValue } from '../redux/action';

const FrameWorkParameters = () => {
    const dispatch = useDispatch();
    const { inputCount, inputValues, featureInputCount, featureInputValues } = useSelector((state) => state.input);
    const [localInputCount, setLocalInputCount] = useState('');
    const [featureLocalInputCount, setFeatureLocalInputCount] = useState('');
    const [storeValues, setStoreValues] = useState([]);
    const [storeFeatureValues, setStoreFeatureValues] = useState([]);

    const handleInputChange = (index, value) => {
        dispatch(setInputValue(index, value));

    };
    const handleFeatureInputChange = (index, value) => {
        dispatch(setFeatureInputValue(index, value));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setStoreValues(inputValues);
        console.log("inputting", localInputCount, inputValues);
        dispatch(setInputCount(Number(localInputCount), inputValues));
        dispatch(setFeatureInputCount(Number(featureLocalInputCount)));
    };

    const handleOnChange = (value) => {
        setLocalInputCount(value);
        setStoreValues((prevStoreValues) => {
            const newStoreValues = [...prevStoreValues, inputValues];
            return newStoreValues;
        });
        // dispatch(setInputCount(Number(value), inputValues));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter the number of input fields:
                    <input

                        type="number"
                        value={localInputCount}
                        placeholder='Enter Criteria'
                        onChange={(e) => handleOnChange(e.target.value)}
                    />
                    <input
                        type="number"
                        value={featureLocalInputCount}
                        placeholder='Enter Features'
                        onChange={(e) => setFeatureLocalInputCount(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

            {inputCount > 0 && featureInputCount > 0 && (
                <>
                    <div>
                        <h3>Enter values for each input field:</h3>
                        {inputValues.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                        ))}
                        {/* <button onClick={handleInputDataSubmit}>submit</button> */}
                    </div>
                    <div>
                        <h3>Enter Feature values for each input field:</h3>
                        {featureInputValues.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                value={value}
                                onChange={(e) => handleFeatureInputChange(index, e.target.value)}
                            />
                        ))}
                        {/* <button onClick={handleFeatureDataSubmit}>submit</button> */}
                    </div>
                    {storeValues.map((value) => (
                        <div>{value}</div>
                    ))}
                </>
            )}
        </div>
    );
};

export default FrameWorkParameters;
