let d = document;
//keys
// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
function encriptar (str){
    let a = Array.from(str)
    
    let b = a.map(x=>{
        switch (x) {
            case "a":
                return "ai"
            case "e":
                return "enter"
            case "i":
                return "imes"
            case "o":
                return "ober"
            case "u":
                return "ufat"
            default:
                return x;
        }
    })
    let c = b.toString().replace(/,/g,'')
    return c;
}

function desencrypt (str){
    let txt = str.replaceAll(/ai/g      ,"a")
                 .replaceAll(/enter/g   ,"e")
                 .replaceAll(/imes/g    ,"i")
                 .replaceAll(/ober/g    ,"o")
                 .replaceAll(/ufat/g    ,"u");
  
    return txt;

}

function validation (str){
    var regExpStr = /[A-ZÀ-ÖØ-öø-ÿ`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(str);
    return regExpStr;
}

window.addEventListener("load",()=>{
    let $inputText = d.getElementById("input__text");

    let $boxtext = d.getElementById("box-text");
    let $responseText = d.getElementById("response_text");
    let $btnEncriptar = d .getElementById("encrypt")
    let $btnDesencriptar = d .getElementById("desencrypt")
    let $wrapperAside = d .getElementById("wrapper")
    let $noMsg = d.querySelector(".no_msg")
    let $btnCopy = d.getElementById("btn_copy")


    $inputText.addEventListener("keyup",(e)=>{
        if(e.target.value.length===0){
            $responseText.textContent="";
            $boxtext.style.display="none";
            $noMsg.style.display="block"
        }
    })

    $btnEncriptar.addEventListener("click",()=>{
        
        if(validation($inputText.value)) return alert("Texto tiene Mayusculas, acentos o caracteres especiales")
        if($inputText.value.length===0) return ""

        let val = encriptar($inputText.value)
        $responseText.textContent=val;
        $boxtext.style.display="flex";
        $noMsg.style.display="none"

        
        
    })

    $btnDesencriptar.addEventListener("click", ()=>{
        if(validation($inputText.value)) return alert("Texto tiene Mayusculas o acentos o caracteres especiales")
        if($inputText.value.length===0) return ""

        let val = desencrypt($inputText.value)
        $responseText.textContent=val;
        $boxtext.style.display="flex";
        $noMsg.style.display="none"
    })

    $btnCopy.addEventListener("click",()=>{
       navigator.clipboard.writeText($responseText.textContent)
       alert("Copiado")

    })
    
})