import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />)
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const button5 = container.getByTestId('number5');
    const button6 = container.getByTestId('number6');
    const button7 = container.getByTestId('number7');
    const button8 = container.getByTestId('number8');
    const button9 = container.getByTestId('number9');
    const button0 = container.getByTestId('number0');
    const buttonPlus = container.getByTestId('operator_add');
    const buttonMinus = container.getByTestId('operator-subtract');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should give 5 for 1 + 4', () => {
    const button1 = container.getByTestId('number1');
    const buttonPlus = container.getByTestId('operator_add');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');

  })

  it('should give 3 for 7 - 4', () => {
    const button7 = container.getByTestId('number7');
    const buttonMinus = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonMinus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');

  })

  it('should give 15 for 3 * 5', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should give 3 for 21 / 7', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');

  })

  it('can we use multiple operators', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button8 = container.getByTestId('number8');
    const buttonDivide = container.getByTestId('operator-divide');
    const button6 = container.getByTestId('number6');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button8);
    fireEvent.click(buttonDivide);
    fireEvent.click(button6);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('4');

  })

  it('can we enter multiple numbers in sequence', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const button5 = container.getByTestId('number5');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual('12345');

  })

  it('clear entry doesnt affect runningTotal', () => {
    const button1 = container.getByTestId('number1');
    const buttonPlus = container.getByTestId('operator_add');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    const clearEntry = container.getByTestId('clear');
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button1);
    fireEvent.click(clearEntry);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');

  })

})
