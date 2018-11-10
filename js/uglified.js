/***********************************************************************/
// Return a string only containing the letters a to z
/***********************************************************************/
function oaasdfnlyLetters(str) {
    return str.toLowerCase().replace(/[^a-z]/g, "");
};

// Return a string only containing the letters a to z and numbers
function odnlytestLettersNums(str) {
    return str.toLowerCase().replace(/[^a-z,0-9,-]/g, "");
};
/***********************************************************************/