﻿///<reference path="../_references.ts"/>
///<reference path="../tsUnit/tsUnit.ts"/>
module jThreeTest {
    
    export class TestMain extends tsUnit.TestClass {
        constructor() { super(); }

        test1() {
            this.areIdentical(10, 10);
        }

        test2() {
            this.areIdentical(10, 11);
        }
    }
}

window.onload = (e) => {
    var test = new tsUnit.Test(jThreeTest);
    test.showResults(document.getElementById("test-display"), test.run());
};