import { Confirm as ConfirmSU } from "semantic-ui-react"; 

export function Confirm(props) {
    const { ...rest } = props;

    return <ConfirmSU classname='confirm' size='mini' {...rest} />
}