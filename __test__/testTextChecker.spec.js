import { checkForText } from "../src/client/js/textChecker"


test('the input text is valid', () => {
    expect(checkForText("this is a valid text :) ")).toBeTruthy();
});

//i couldn't test the alert behavior 
// test('the input text is not valid', () => {
//     const jsdomAlert = window.alert;
//     expect(checkForText("     ")).toBe(jsdomAlert);
// });