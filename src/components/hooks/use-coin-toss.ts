import React from 'react';

const useCoinToss = () => {

    const [tossCoin, setTossCoin] = React.useState(false);
    const [rotateCoin, setRotateCoin] = React.useState(false);
    const [coinFace, setCoinFace] = React.useState<'heads' | 'tails'>('heads');
    const flipCoin = (time: number) => {
        const faces: ('heads' | 'tails')[] = ['heads', 'tails'];
        setTimeout(() => { setCoinFace(faces[0]) }, time);
        setTimeout(() => { setCoinFace(faces[1]) }, time * 2);
        setTimeout(() => { setCoinFace(faces[0]) }, time * 3);
        setTimeout(() => { setCoinFace(faces[1]) }, time * 4);
        setTimeout(() => { setCoinFace(faces[0]) }, time * 5);
    }
    const onCoinToss = () => {
        const randomNum = Math.random();
        const result = (randomNum > .5) ? 'heads' : 'tails';
        setTossCoin(true);
        setRotateCoin(true);
        flipCoin(100);
        setTimeout(() => {
            setCoinFace(result);
        }, 500);
        setTimeout(() => {
            setTossCoin(false);
            setRotateCoin(false);
        }, 1000);
    };

    return {
        onCoinToss,
        tossCoin,
        coinFace,
        rotateCoin
    }
};

export default useCoinToss;