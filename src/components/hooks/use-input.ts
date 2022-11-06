import React from "react";

const useInput = (initialValue?: string | number) => {
    const [value, setValue] = React.useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: (event: any) => {
                setValue(event.target.value);
            },
        },
    };
};

export default useInput;
