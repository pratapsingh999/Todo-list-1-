const initialState = {
    inputCount: 0,
    featureInputCount: 0,
    featureInputValues: [],
    inputValues: [],

};
const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INPUT_COUNT':
            const { count, values } = action.payload;
            console.log("datainReducers", count, values);
            const newData = [...state.inputValues];
            console.log("newData", newData);
            return {
                ...state,
                inputCount: count,
                inputValues: Array(count).fill().map((_, index) => (index < newData.length ? newData[index] : ''))

            };
        case 'SET_FEATURE_INPUT_COUNT':
            return {
                ...state,
                featureInputCount: action.payload,
                featureInputValues: Array(action.payload).fill(''),
            };
        case 'SET_INPUT_VALUE':
            const newInputValues = [...state.inputValues];
            newInputValues[action.payload.index] = action.payload.value;
            return {
                ...state,
                inputValues: newInputValues,
            };
        case 'SET_FEATURE_INPUT_VALUE':
            const newFeatureInputValues = [...state.featureInputValues];
            newFeatureInputValues[action.payload.index] = action.payload.value;
            return {
                ...state,
                featureInputValues: newFeatureInputValues,
            };
        default:
            return state;
    }
};

export default inputReducer;
