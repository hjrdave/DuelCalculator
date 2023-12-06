import React from 'react';
import styles from './animate.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
    type: 'fadeIn'
};

export default function Animate({ children, type }: Props) {

    const [fadeIn, setFadeIn] = React.useState(false);

    React.useEffect(() => {
        if (type === 'fadeIn') {
            setFadeIn(true);
        }
    }, []);

    return (
        <>
            <div className={`${styles.compContainer} ${(type === 'fadeIn') ? styles.fadeInDefault : ''} ${(fadeIn) ? styles.fadeIn : ''}`}>
                {children}
            </div>
        </>
    )
}