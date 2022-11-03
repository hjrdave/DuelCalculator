import React from 'react';
import { Row, Col } from 'react-bootstrap'
import KeyBtn from '../KeyBtn';
import styles from './calculator.module.scss';

interface Props {
  inputs: any[];
  playerNumber: number;
  lifePoints: number[];
  operatorType: '-' | '+';
  playerName: string;
  handleView: (value?: any) => void;
}
export default function Calculator({ inputs, playerNumber, lifePoints, operatorType, playerName, handleView }: Props) {

  //accepts user input and adds to input array
  const userInputs = (value?: any, value2?: any, value3?: any) => {
    // let cleanArray = [value, value2, value3].filter(function (el) { return el != null; });
    // let inputArray = inputs.concat(cleanArray);
    // setState({
    //   inputs: inputArray
    // });
  }

  //deletes the last value in input array
  const backspace = () => {
    // inputs.pop(); 
    // setState({
    //   inputs: [...inputs]
    // });

  }

  //clears all values from input array
  const clear = () => {
    // inputs.splice(0,inputs.length);
    // setState({
    //   inputs: [...inputs]
    // });
  }

  //Handles UI Animations
  // componentDidMount(){
  //   Velocity(document.getElementById("CalculatorContainer"),{ opacity: [1,0], scale: [1, .9]},{duration:300,delay:100});
  // }

  return (
    <>

      <div className={`${styles.compContainer} row pt-4 pb-4 d-flex justify-content-around`}>
        <Col>
          <Row>
            <Col sm={12}>
              <div className={`${styles.calcScore} col-12 pl-4 d-flex justify-content-start align-items-center`}>
                <p>{playerName[playerNumber]} : {lifePoints[playerNumber]}
                  <span className={(operatorType === '-') ? "text-glow-red" : "text-glow-green"}> {operatorType} {inputs}</span>
                </p>
              </div>
            </Col>
            <KeyBtn size={3} label={'1'} value={1} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'2'} value={2} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'3'} value={3} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'4'} value={4} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'5'} value={5} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'6'} value={6} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'7'} value={7} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'8'} value={8} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'9'} value={9} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'0'} value={0} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'00'} value={'00'} onClick={(value) => alert(value)} />
            <KeyBtn size={3} label={'000'} value={'000'} onClick={(value) => alert(value)} />
          </Row>
        </Col>
        <Col sm={4} className={'d-flex flex-column'}>
          <KeyBtn size={12} label={'Cancel'} value={1} onClick={(value) => alert(value)} />
          <KeyBtn size={12} label={'Clear'} value={2} onClick={(value) => alert(value)} />
          <KeyBtn size={12} label={'Backspace'} value={3} onClick={(value) => alert(value)} />
          <KeyBtn size={12} label={'Enter'} value={4} onClick={(value) => alert(value)} className={'flex-grow-1'} />
        </Col>
      </div>
      {/* <div className={`${styles.compContainer} row pt-4 pb-4 d-flex justify-content-around`}>
      <div className="col-10 d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <div className={`${styles.calcNumbers} row d-flex justify-content-center`}>
              <div className={`${styles.calcScore} col-12 pl-4 d-flex justify-content-start align-items-center`}>
                <p>{playerName[playerNumber]} : {lifePoints[playerNumber]}
                  <span className={(operatorType === '-') ? "text-glow-red" : "text-glow-green"}> {operatorType} {inputs}</span>
                </p>
              </div>
              <div onClick={() => userInputs('1')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>1</p>
              </div>
              <div onClick={() => userInputs('2')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>2</p>
              </div>
              <div onClick={() => userInputs('3')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>3</p>
              </div>
              <div onClick={() => userInputs('4')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>4</p>
              </div>
              <div onClick={() => userInputs('5')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>5</p>
              </div>
              <div onClick={() => userInputs('6')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>6</p>
              </div>
              <div onClick={() => userInputs('7')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>7</p>
              </div>
              <div onClick={() => userInputs('8')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>8</p>
              </div>
              <div onClick={() => userInputs('9')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>9</p>
              </div>
              <div onClick={() => userInputs('0')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>0</p>
              </div>
              <div onClick={() => userInputs('0', '0')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>00</p>
              </div>
              <div onClick={() => userInputs('0', '0', '0')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                <p>000</p>
              </div>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <div className={`${styles.calcNumbers} row d-flex justify-content-center`}>
              <div onClick={() => { handleView('mainboard'); }} className={`${styles.calcClose} col-12 p-3 d-flex justify-content-center align-items-center`}>
                <p><i className="fas fa-times"></i></p>
              </div>
              <div onClick={() => clear()} className="col-12 p-3 d-flex justify-content-center align-items-center">
                <p>Clear</p>
              </div>
              <div onClick={() => backspace()} className="col-12 p-3 d-flex justify-content-center align-items-center">
                <p><i className="fas fa-backspace"></i></p>
              </div>

              <div onClick={() => { calc(operatorType, playerNumber, inputs); handleView('mainboard') }} className="col-12 p-3 d-flex justify-content-center align-items-center">
                <p>Enter</p>
              </div>

            </div>
          </div>
          <div className="col-2 d-flex justify-content-start">
          <div className="calc-numbers row d-flex justify-content-center">
            <div onClick = {() => {handleView('mainboard'); }} className="calc-close col-12 p-3 d-flex justify-content-center align-items-center">
              <p><i class="fas fa-times"></i></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div> */}
    </>
  );
}