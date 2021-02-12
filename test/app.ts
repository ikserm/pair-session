import { App } from "../src/app";

import { expect } from "chai"; 

describe('Value absolute sum function', () => {
    it('Should return +1 when introduce 2,-1', () => {
        let app = new App()
        expect(app.sumAbsoluteValue(2,-1)).equal(1)
    })   
    it('Should return +3 when introduce -2,-1', () => {
        let app = new App()
        expect(app.sumAbsoluteValue(-1,-2)).equal(5)
    })
});