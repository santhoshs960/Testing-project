export function caesarCipher(str, key) {
    if (typeof (str) !== "string")
        return "first paramter should be string";
    
    if (typeof (key) !== 'number') {
        return "Second Parameter should be Number";
    }

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'
        , 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let cipheredStr = "";

    for (let i = 0; i < str.length; i++){
        const index = alphabet.indexOf(str[i].toLowerCase());
        if (index === -1) {
            cipheredStr += str[i];
            continue;
        }

        const wrappedIndex = (index + key) % 26;
        
        const correctedCase = checkCase(str[i], alphabet[wrappedIndex]);
        cipheredStr += correctedCase;
    }

    return cipheredStr;
}

function checkCase(str, alp) {
    if (str.toLowerCase() === str) 
        return alp.toLowerCase();

    return alp.toUpperCase();
}
