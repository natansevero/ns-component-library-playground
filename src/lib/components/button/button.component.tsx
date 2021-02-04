import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

type Props = {
    name: string;
}

const Button: React.FC<Props> = ({
    name
}) => {
    return (
        <BootstrapButton variant='success'>
            {name}    
        </BootstrapButton>
    )
}


export default Button;