import React from 'react';
import { Col, ColProps } from 'react-bootstrap';
import styles from './keyBtn.module.scss';

interface Props {
    value: string | number;
    label: string;
    onClick: (value: string | number) => void;
    size: ColProps["xs"];
    className?: string;
    icon?: JSX.Element;
};

export default function KeyBtn({ value, label, onClick, size, className, icon }: Props) {

    return (
        <>
            <Col xs={size} className={`${styles.compContainer} ${className} p-3 d-flex justify-content-center align-items-center`} onClick={() => onClick(value)}>
                <p className={'m-0'}>
                    {
                        (icon) ? <span className={`${styles.icon} pe-3`}>{icon}</span> : null
                    }
                    {label}
                </p>
            </Col>
        </>
    )
}