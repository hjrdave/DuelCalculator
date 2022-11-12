import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './confirmBtns.module.scss';

interface Props {
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export default function ConfirmBtns({ onCancel: _onCancel, onConfirm, confirmLabel, cancelLabel }: Props) {

    const navigate = useNavigate();

    const onCancel = () => {
        if (_onCancel) {
            _onCancel();
        } else {
            navigate('/');
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center pt-4'>
                <div className='mt-4'>
                    {
                        (onConfirm) ?
                            <Button className={`me-2 px-4 ${styles.button}`} onClick={onConfirm}>{confirmLabel || 'Confirm'}</Button> : null
                    }
                    <Button className={`${(onConfirm) ? 'ms-2' : ''} px-4 ${styles.button}`} onClick={onCancel}>{cancelLabel || 'Close'}</Button>
                </div>
            </div>
        </>
    )
}