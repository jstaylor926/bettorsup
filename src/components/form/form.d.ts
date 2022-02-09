import * as React from 'react';

export interface InputWithLabelProps {
    id?: any;
    value?: any;
    type?: any;
    onInputChange?: any;
    children?: React.ReactNode;
    isFocused?: any;
}