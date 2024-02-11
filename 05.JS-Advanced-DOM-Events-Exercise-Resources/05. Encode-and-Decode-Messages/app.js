function encodeAndDecodeMessages() {
    const btns = Array.from(document.querySelectorAll('button'));
    const encode = btns[0];
    const decode = btns[1];
    const text2 = Array.from(document.querySelectorAll('textarea'))[1];

    encode.addEventListener('click', encodeHandler);
    decode.addEventListener('click', decodeHandler);

    function encodeHandler() {
        let text = document.querySelector('textarea').value;
        let result = '';
        text.split('').forEach((char) => {
            let charCode = char.charCodeAt(0);
            charCode = (charCode + 1);
            result += String.fromCharCode(charCode);
        })
        text2.value = result;
        document.querySelector('textarea').value = "";
    }

    function decodeHandler() {
        let message = text2.value; 
        let result = [];
        message.split('').forEach((char) => {
            let charCode = char.charCodeAt(0);
            charCode = (charCode - 1);
            result += String.fromCharCode(charCode);
        })
        text2.value = result;
    }
}