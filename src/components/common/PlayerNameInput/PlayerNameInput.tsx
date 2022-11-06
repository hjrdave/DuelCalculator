import React from 'react';
import Form from 'react-bootstrap/Form';
import useInput from '../../hooks/use-input';
import styles from './playerNameInput.module.scss';

interface Props {
    name: string;
    onChange: (value: string) => void;
}

export default function PlayerNameInput({ name, onChange }: Props) {

    const { bind, value } = useInput(name);

    React.useEffect(() => {
        if (value !== undefined) {
            onChange(value?.toString());
        }
    }, [value]);

    return (
        <>
            <div className={styles.compContainer}>
                <Form.Control
                    minLength={1}
                    maxLength={10}
                    className={`glow ${styles.control}`}
                    {...bind}
                />
            </div>
        </>
    )
}