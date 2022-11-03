import React from 'react';
import { Col, ColProps } from 'react-bootstrap';
import styles from './keyBtn.module.scss';

interface Props {
    value: string | number;
    label: string;
    onClick: (value: string | number) => void;
    size: ColProps["xs"];
    className?: string;
};

export default function KeyBtn({ value, label, onClick, size, className }: Props) {

    return (
        <>
            <Col xs={size} className={`${styles.compContainer} ${className} p-3 d-flex justify-content-center align-items-center`} onClick={() => onClick(value)}>
                <p className={'m-0'}>{label}</p>
            </Col>
        </>
    )
}