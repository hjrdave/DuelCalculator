import React from 'react';
import Calculator from '../../common/Calculator';

function Scene() {
    return (
        <>
            <Calculator
                inputs={[]}
                playerName={'Foo'}
                lifePoints={[4000]}
                operatorType={'-'}
                handleView={() => null}
                playerNumber={1}
            />
        </>
    )
}

export default Scene;