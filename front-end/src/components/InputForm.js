import React from 'react';
import { InputLabel, TextareaAutosize } from '@material-ui/core';

const InputForm = () => {
    const [value, setValue] = React.useState('');
    
    return (
        <div>
            <InputLabel text="Job posting">
                <TextareaAutosize
                    rowsMin={10} 
                    value={value}
                    placeholder="Paste in the job posting you'd like to analyze"
                    onChange={v => setValue(v)}
                />
            </InputLabel>
        </div>
    );

}

export default InputForm;