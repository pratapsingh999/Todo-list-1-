// reducers.js

const initialState = {
    matrix: [],
    arrayofFeatures: ['customerRegisteration', 'order Payment'],
    arrayofarchi: ['scalablity', 'dataIntegrity'],
};
const matrixReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GENERATE_MATRIX':
            return {
                matrix: Array.from({ length: action.payload.rows }, (_, rowIndex) =>
                    Array.from({ length: action.payload.columns }, (_, columnIndex) => ({
                        value: Math.floor(Math.random() * 9), // Generate random numbers between 0 and 9
                    }))
                ),
                arrayofFeatures: state.arrayofFeatures,
                arrayofarchi: state.arrayofarchi,

            };
        case 'UPDATE_CELL_VALUE':
            return {
                matrix: state.matrix.map((row, rowIndex) =>
                    rowIndex === action.payload.rowIndex
                        ? row.map((cell, columnIndex) =>
                            columnIndex === action.payload.columnIndex
                                ? { ...cell, value: action.payload.value }
                                : cell
                        )
                        : row
                ),
            };
        default:
            return state;
    }
};

export default matrixReducer;
