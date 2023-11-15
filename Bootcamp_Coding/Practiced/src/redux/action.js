// actions.js
export const generateMatrix = (rows, columns) => ({
    type: 'GENERATE_MATRIX',
    payload: { rows, columns },
});

export const updateCellValue = (rowIndex, columnIndex, value) => ({
    type: 'UPDATE_CELL_VALUE',
    payload: { rowIndex, columnIndex, value },
});

export const setInputCount = (count, values) => ({
    type: 'SET_INPUT_COUNT',
    payload: { count, values }
});

export const setFeatureInputCount = (count) => ({
    type: 'SET_FEATURE_INPUT_COUNT',
    payload: count,
});

export const setInputValue = (index, value) => ({
    type: 'SET_INPUT_VALUE',
    payload: { index, value },
});

export const setFeatureInputValue = (index, value) => ({
    type: 'SET_FEATURE_INPUT_VALUE',
    payload: { index, value },
});

