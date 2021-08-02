function checkForText(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if (/^\s*$/g.test(inputText) || inputText.indexOf('\n') != -1) {
        alert('Wrong content!');
        return false;
    }
    return true;

}

export { checkForText }
