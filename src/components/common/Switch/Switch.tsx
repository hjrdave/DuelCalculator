import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from './switch.module.scss';

interface Props {
    onChange: (value: boolean) => void;
    checked?: boolean;
    label?: string;
}
export default function Switch({ onChange, checked, label }: Props) {

    return (
        <>
            <Form.Switch className={styles.compContainer} label={label} checked={checked} onChange={(e) => onChange(e.currentTarget.checked)} />
        </>
    )
}