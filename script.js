function encriptarTxt() {
    let input = document.getElementById("entrada_texto").value;
    let output = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        
    mostrarResultado(output);
}

function desencriptarTxt() {
    let input = document.getElementById("entrada_texto").value;
    let output = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        
    mostrarResultado(output);
}

function mostrarResultado(text) {
    let outputArea = document.getElementById("salida_de_texto");
    outputArea.value = text;
    outputArea.style.display = "block";
    document.getElementById("imagen_salida").style.display = "none";
    document.getElementById("msj").style.display = "none";
    document.getElementById("copy").style.display = "block";
    
}

function copiarTxt() {
    let outputArea = document.getElementById("salida_de_texto");
    outputArea.select();
    navigator.clipboard.writeText(outputArea.value)
}
