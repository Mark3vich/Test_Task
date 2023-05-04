export class CaptchaService {
    private allValue = ['1', '2', '3', '4', '5', '6','7', '8', '9', '0'];
    
    private cVal1 = this.allValue[Math.floor(Math.random() * this.allValue.length)];
    private cVal2 = this.allValue[Math.floor(Math.random() * this.allValue.length)];
    private cVal3 = this.allValue[Math.floor(Math.random() * this.allValue.length)];
    private cVal4 = this.allValue[Math.floor(Math.random() * this.allValue.length)];
    private cVal5 = this.allValue[Math.floor(Math.random() * this.allValue.length)];

    private cValue = this.cVal1 + this.cVal2 + this.cVal3 + this.cVal4 + this.cVal5;

    constructor() {}

    public getValue() { 
        return this.cValue;
    }
} 