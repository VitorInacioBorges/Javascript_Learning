const toFahrenheitRadio = document.getElementById("c_f");
const toCelsiusRadio = document.getElementById("f_c");
const ParagraphConversion = document.getElementById("conversion_result");
let temp;

function convert(){
    const TextBoxResult = document.getElementById("text_box4").value;
    if ((toFahrenheitRadio.checked) && (toCelsiusRadio.checked)) {
        ParagraphConversion.textContent = (`Select only one option...`);
    } else if (toCelsiusRadio.checked){
        temp = Number(TextBoxResult);
        temp = (temp - 32) * (5/9);
        ParagraphConversion.textContent = (temp);
    } else if (toFahrenheitRadio.checked){
        temp = Number(TextBoxResult);
        temp = (temp * (9/5)) + 32;
        ParagraphConversion.textContent = (temp);
    } else {
        ParagraphConversion.textContent = (`Select an option...`);
    }
}