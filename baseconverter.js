function strToBin(str, sep) {
    var output = ''; 
    sep = sep || '';
    
    for (var i = 0; i < str.length; i++) {
        output += str[i].charCodeAt(0).toString(2) + sep;
    }
    return output;
}

function strToHex(str, sep) {
    var output = ''; 
    sep = sep || '';
    
    for (var i = 0; i < str.length; i++) {
        output += str[i].charCodeAt(0).toString(16) + sep;
    }
    return output;
}

function strToOct(str, sep) {
    var output = ''; 
    sep = sep || '';
    
    for (var i = 0; i < str.length; i++) {
        output += str[i].charCodeAt(0).toString(8) + sep;
    }
    return output;
}

function hexToStr(str){
    var j, hexes = str.match(/.{1,4}/g) || [], back = '';
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
};

function binToStr(str) {
    var arr = str.split(" ");
    var finalStr;

    for (var i=0; i<arr.length; i++) {
        finalStr += String.fromCharCode((parseInt(arr[i], 2)));
    }

    return finalStr;
}
