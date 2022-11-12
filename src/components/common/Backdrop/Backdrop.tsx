import React from 'react';
import styles from './backdrop.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
}
export default function Backdrop({ children }: Props) {

    return (
        <>
            <div className={`${styles.compContainer} d-flex justify-content-center`}>
                {children}
            </div>
        </>
    )
}