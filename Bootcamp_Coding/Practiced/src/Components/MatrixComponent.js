// MatrixComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateMatrix, updateCellValue } from '../redux/action';

const MatrixComponent = () => {
    const dispatch = useDispatch();
    const matrix = useSelector((state) => state.matrix.matrix);
    const nameX = useSelector((state) => state.matrix.arrayofarchi);
    const nameY = useSelector((state) => state.matrix.arrayofFeatures);

    const calculateRowTotal = (row) => {
        return row.reduce((sum, cell) => sum + cell.value, 0);
    };

    const calculateColumnTotal = (matrix, columnIndex) => {
        return matrix.reduce((sum, row) => sum + row[columnIndex].value, 0);
    };

    useEffect(() => {
        console.log("matrix", matrix, "x-axis", nameX);
        dispatch(generateMatrix(2, 2)); // Adjust the number of rows and columns as needed
    }, []);

    const handleCellChange = (rowIndex, columnIndex, e) => {
        const value = parseInt(e.target.value, 10) || 0;
        dispatch(updateCellValue(rowIndex, columnIndex, value));
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {nameX.map((data, columnIndex, index) => (
                            <th key={columnIndex}>{data}</th>
                        ))}
                        <th>Total Risk</th>
                    </tr>

                </thead>
                <tbody>

                    {matrix.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <th>{nameY[rowIndex]}</th>
                            {row.map((cell, columnIndex) => (
                                <td key={columnIndex}>
                                    <input
                                        type="number"
                                        value={cell.value}
                                        onChange={(e) => handleCellChange(rowIndex, columnIndex, e)}
                                    // Add any additional logic for handling input changes if needed
                                    />
                                </td>
                            ))}
                            <td>
                                {/* Display row total */}
                                {calculateRowTotal(row)}
                            </td>
                        </tr>
                    ))}

                    {/* Add a row for column totals */}
                    <tr>
                        <th>Total Risk</th>
                        {matrix[0]?.map((_, columnIndex) => (
                            <td key={columnIndex}>
                                {/* Display column total */}
                                {calculateColumnTotal(matrix, columnIndex)}
                            </td>
                        ))}

                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default MatrixComponent;
