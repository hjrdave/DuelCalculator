import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './content.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
    className?: string;
};

export default function Content({ children, className }: Props) {

    return (
        <>
            <Container fluid className={`${styles.compContainer} ${className}`}>
                {children}
            </Container>
        </>
    )
}