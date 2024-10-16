import { useState } from "react";
export function useInput(defaultValue, fn) {
    const [enteredValues, setEnteredValues] = useState(defaultValue);

    const [isEdit, setIsEdit] = useState(false);

    const valueisValid = fn(enteredValues);
    const handleUserInput = (event) => {
        setEnteredValues(event.target.value);

        // validation on lost focus and reseting focus state again whenever the user start's typing again is now good pattern for validating user input..
        setIsEdit(false);
    };

    const handleInputBlur = () => {
        setIsEdit(true);
    }

    return {
        value: enteredValues,
        handleInputBlur,
        handleUserInput,
        hasError: isEdit && !valueisValid,
    }
}