import type {ComponentPropsWithoutRef} from 'react';

type InputProps = ComponentPropsWithoutRef<'input'>

export const Input = ({...props}: InputProps
) => {
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={props.className} autoFocus={props.autoFocus} onKeyDown={props.onKeyDown}/>
    );
};
