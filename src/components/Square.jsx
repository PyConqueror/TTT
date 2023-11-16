import { useState } from "react";

function Square({changePlayer, currentPlayer, reset}) {
    
    const [value, setValue] = useState('')

    function changeValue() {
        if (reset) {
            setValue('');
          } else if (value === '') {
            setValue(currentPlayer);
            changePlayer();
          }
        }
    return (
        <button className="square" onClick={changeValue}>
        {value}
        </button>
    );
};

export default Square;