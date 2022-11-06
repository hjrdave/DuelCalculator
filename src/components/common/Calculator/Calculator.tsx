import React from 'react';
import { Row, Col } from 'react-bootstrap'
import KeyBtn from '../KeyBtn';
import CalcSum from '../CalcScore/CalcScore';
import styles from './calculator.module.scss';

interface Props {
  lifePoints: number;
  operatorType?: 'minus' | 'add';
  onCancel: () => void;
  onEnter: (calcValue: number) => void;
}
export default function Calculator({ lifePoints, operatorType, onCancel, onEnter }: Props) {

  const [userInput, setUserInput] = React.useState(0);

  const onBackSpace = () => {
    const stringInput = String(userInput);
    if (stringInput.length > 1) {
      const newInput = Number(stringInput.slice(0, -1));
      setUserInput(newInput);
    } else {
      setUserInput(0);
    }
  }

  const onClear = () => {
    setUserInput(0);
  }

  const onInput = (value: number | string) => {
    const newValue = Number(`${userInput}${value}`);
    setUserInput(newValue);
  }

  return (
    <>

      <div className={`${styles.compContainer} row pt-4 pb-4 d-flex justify-content-around`}>
        <Col>
          <Row>
            <Col sm={12} className={'p-0'}>
              <CalcSum
                total={lifePoints}
                operatorType={operatorType || 'minus'}
                input={userInput}
              />
            </Col>
            <KeyBtn size={3} label={'1'} value={1} onClick={onInput} />
            <KeyBtn size={3} label={'2'} value={2} onClick={onInput} />
            <KeyBtn size={3} label={'3'} value={3} onClick={onInput} />
            <KeyBtn size={3} label={'4'} value={4} onClick={onInput} />
            <KeyBtn size={3} label={'5'} value={5} onClick={onInput} />
            <KeyBtn size={3} label={'6'} value={6} onClick={onInput} />
            <KeyBtn size={3} label={'7'} value={7} onClick={onInput} />
            <KeyBtn size={3} label={'8'} value={8} onClick={onInput} />
            <KeyBtn size={3} label={'9'} value={9} onClick={onInput} />
            <KeyBtn size={3} label={'0'} value={0} onClick={onInput} />
            <KeyBtn size={3} label={'00'} value={'00'} onClick={onInput} />
            <KeyBtn size={3} label={'000'} value={'000'} onClick={onInput} />
          </Row>
        </Col>
        <Col sm={4} className={'d-flex flex-column'}>
          <KeyBtn size={12} label={'Cancel'} value={'cancel'} alignLabel={'left'} icon={<i className="fa-solid fa-xmark"></i>} onClick={onCancel} />
          <KeyBtn size={12} label={'Clear'} value={'clear'} alignLabel={'left'} icon={<i className="fa-solid fa-rotate-left"></i>} onClick={onClear} />
          <KeyBtn size={12} label={'Backspace'} value={'backSpace'} alignLabel={'left'} icon={<i className="fa-solid fa-delete-left"></i>} onClick={onBackSpace} />
          <KeyBtn size={12} label={'Enter'} value={'enter'} alignLabel={'left'} icon={<i className="fa-solid fa-arrow-turn-down ps-2" style={{ transform: 'rotate(90deg)' }}></i>} onClick={() => onEnter(userInput)} className={'flex-grow-1'} />
        </Col>
      </div>
    </>
  );
}