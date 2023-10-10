import { LightningElement } from "lwc";

export default class SimpleCalculatorChallenge extends LightningElement {
  firstNumber;
  secondNumber;
  result;
  resultText;
  allResults = [];
  showResult = false;

  firstNumberHandler(event) {
    this.firstNumber = event.target.value;
  }

  secondNumberHandler(event) {
    this.secondNumber = event.target.value;
  }

  addHandler() {
    if (this.firstNumber !== undefined && this.secondNumber !== undefined) {
      this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
      this.resultText = `Result of ${this.firstNumber} + ${this.secondNumber} = ${this.result}`;
      this.allResults.push(this.resultText);
    }

    this.resultText = "Please enter two valid numbers";
  }

  subtractHandler() {
    this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
    this.resultText = `Result of ${this.firstNumber} - ${this.secondNumber} = ${this.result}`;
    this.allResults.push(this.resultText);
  }

  multiplyHandler() {
    this.result = this.firstNumber * this.secondNumber;
    this.resultText = `Result of ${this.firstNumber} * ${this.secondNumber} = ${this.result}`;
    this.allResults.push(this.resultText);
  }

  divisionHandler() {
    this.result = this.firstNumber / this.secondNumber;
    this.resultText = `Result of ${this.firstNumber} / ${this.secondNumber} = ${this.result}`;
    this.allResults.push(this.resultText);
  }

  showResultHandler() {
    this.showResult = true;
  }
}
