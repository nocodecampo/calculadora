let operador1 = null, operador2 = null, operacion = null;

$(".btn").click(function(){
    let btnPulsado = $(this).html();
    let resultado;
    switch (btnPulsado) {
        case "C":
            operador1 = null;
            operador2 = null;
            operacion = null;
            $("#pantalla").val("");
            break;
        case "CE":
            $("#pantalla").val($("#pantalla").val().slice(0, -1));
            break;
        case "0": 
        case "1": 
        case "2": 
        case "3":
        case "4": 
        case "5": 
        case "6": 
        case "7": 
        case "8": 
        case "9":
            $("#pantalla").val($("#pantalla").val() + btnPulsado);
            break;
        case "*":
        case "/":
        case "+":
        case "-":
            operador1 = parseInt($("#pantalla").val());
            operacion = btnPulsado;
            $("#pantalla").val("");
            break;
            case "=":
                operador2 = parseInt($("#pantalla").val());
                switch (operacion) {
                    case "+":
                        resultado = operador1 + operador2;
                        break;
                    case "-":
                        resultado = operador1 - operador2;
                        break;
                    case "*":
                        resultado = operador1 * operador2;
                        break;
                    case "/":
                        resultado = operador1 / operador2;
                        break;
                    default:
                        break;
                }
                $("#pantalla").val(resultado);
                operacion = null;
                break

    
        default:
            break;
    }
    
});