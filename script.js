
const formularioLogin = document.getElementById("formularioLogin");
const formularioRegistro = document.getElementById("formularioRegistro");
const formularioEjercicio = document.getElementById("formularioEjercicio");

function mostrarNumero(numero) {
    return Number(numero.toFixed(8)).toLocaleString("es-CO", {
        maximumFractionDigits: 8
    });
}

function descomponerNumero(numero) {
    const cifras = String(numero).split("");
    const partes = [];

    for (let i = 0; i < cifras.length; i++) {
        const cifra = Number(cifras[i]);
        const posicion = cifras.length - i - 1;

        if (cifra !== 0) {
            partes.push(cifra * Math.pow(10, posicion));
        }
    }

    return partes;
}

function explicarSuma(a, b, resultado) {
    let texto = "PASO 1. Comprender la suma\n\n";
    texto += "Vamos a sumar " + mostrarNumero(a) + " y " + mostrarNumero(b) + ". ";
    texto += "Sumar significa reunir dos cantidades para conocer cuánto tenemos en total.\n\n";

    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        const partesA = descomponerNumero(a);
        const partesB = descomponerNumero(b);

        texto += "PASO 2. Descomponer los números\n\n";
        texto += mostrarNumero(a) + " se puede separar en: ";
        texto += partesA.length ? partesA.join(" + ") : "0";
        texto += ".\n";

        texto += mostrarNumero(b) + " se puede separar en: ";
        texto += partesB.length ? partesB.join(" + ") : "0";
        texto += ".\n\n";

        texto += "PASO 3. Sumar las cantidades\n\n";
        texto += "Al reunir ambas cantidades obtenemos:\n";
        texto += "(" + (partesA.length ? partesA.join(" + ") : "0") + ") + (";
        texto += (partesB.length ? partesB.join(" + ") : "0") + ") = ";
        texto += mostrarNumero(resultado) + ".\n\n";

        texto += "PASO 4. Interpretar el resultado\n\n";
        texto += "Después de juntar las dos cantidades, tenemos ";
        texto += mostrarNumero(resultado) + " en total.";

        if (a < 100 && b < 100) {
            texto += "\n\nTambién podemos comprobarlo sumando primero las unidades y luego las decenas.";
        }
    } else {
        texto += "PASO 2. Realizar la operación\n\n";
        texto += "Colocamos el primer número y le agregamos el segundo:\n";
        texto += mostrarNumero(a) + " + " + mostrarNumero(b) + " = ";
        texto += mostrarNumero(resultado) + ".\n\n";

        texto += "PASO 3. Interpretar el resultado\n\n";
        texto += "La cantidad total es " + mostrarNumero(resultado) + ".";
    }

    return texto;
}

function explicarResta(a, b, resultado) {
    let texto = "PASO 1. Comprender la resta\n\n";
    texto += "Tenemos " + mostrarNumero(a) + " y queremos restarle ";
    texto += mostrarNumero(b) + ". Restar permite calcular la diferencia entre dos cantidades.\n\n";

    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        texto += "PASO 2. Descomponer las cantidades\n\n";
        texto += mostrarNumero(a) + " es la cantidad inicial y ";
        texto += mostrarNumero(b) + " es la cantidad que quitamos.\n\n";

        texto += "PASO 3. Calcular la diferencia\n\n";

        if (b <= a) {
            texto += "Quitamos " + mostrarNumero(b) + " unidades de la cantidad inicial de ";
            texto += mostrarNumero(a) + ". Lo que queda se calcula así:\n";
        } else {
            texto += "Como " + mostrarNumero(b) + " es mayor que " + mostrarNumero(a);
            texto += ", el resultado será negativo. Esto indica que la segunda cantidad supera a la primera por ";
            texto += mostrarNumero(Math.abs(resultado)) + ".\n";
        }

        texto += mostrarNumero(a) + " − " + mostrarNumero(b) + " = ";
        texto += mostrarNumero(resultado) + ".\n\n";

        texto += "PASO 4. Interpretar el resultado\n\n";

        if (resultado > 0) {
            texto += "Quedan " + mostrarNumero(resultado) + " unidades después de quitar la segunda cantidad.";
        } else if (resultado === 0) {
            texto += "Las dos cantidades son iguales, por eso la diferencia es cero.";
        } else {
            texto += "El resultado es negativo porque estamos restando una cantidad mayor que la inicial.";
        }

        if (a < 100 && b < 100 && b <= a) {
            texto += "\n\nSi una cifra no alcanza para restar la correspondiente, podemos reagrupar una decena como diez unidades.";
        }
    } else {
        texto += "PASO 2. Realizar la operación\n\n";
        texto += "Restamos el segundo valor al primero:\n";
        texto += mostrarNumero(a) + " − " + mostrarNumero(b) + " = ";
        texto += mostrarNumero(resultado) + ".\n\n";

        texto += "PASO 3. Interpretar la diferencia\n\n";
        texto += "La diferencia entre las cantidades es " + mostrarNumero(resultado) + ".";
    }

    return texto;
}

function explicarMultiplicacion(a, b, resultado) {
    let texto = "PASO 1. Comprender la multiplicación\n\n";
    texto += "Multiplicar permite calcular el resultado de reunir una misma cantidad varias veces.\n";
    texto += "En este ejercicio multiplicamos " + mostrarNumero(a) + " por ";
    texto += mostrarNumero(b) + ".\n\n";

    texto += "PASO 2. Interpretar los factores\n\n";
    texto += "El primer factor es " + mostrarNumero(a) + " y el segundo es ";
    texto += mostrarNumero(b) + ". Si ambos son números enteros positivos, podemos entender ";
    texto += "la operación como grupos de igual tamaño.\n\n";

    texto += "PASO 3. Calcular el producto\n\n";

    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0 && b <= 10) {
        texto += "Sumamos " + mostrarNumero(a) + " un total de " + mostrarNumero(b) + " veces:\n";

        if (b === 0) {
            texto += "No hay grupos, por lo tanto el resultado es cero.\n";
        } else if (b > 0) {
            let suma = "";

            for (let i = 0; i < b; i++) {
                if (i > 0) {
                    suma += " + ";
                }

                suma += mostrarNumero(a);
            }

            texto += suma + " = " + mostrarNumero(resultado) + ".\n";
        }
    } else {
        texto += mostrarNumero(a) + " × " + mostrarNumero(b) + " = ";
        texto += mostrarNumero(resultado) + ".\n";
        texto += "Podemos comprobar el cálculo separando los factores o usando una calculadora para verificar el producto.\n";
    }

    texto += "\nPASO 4. Interpretar el resultado\n\n";
    texto += "El producto es " + mostrarNumero(resultado) + ". ";

    if (a === 0 || b === 0) {
        texto += "Todo número multiplicado por cero da cero.";
    } else if (a === 1 || b === 1) {
        texto += "Multiplicar por uno conserva el otro número.";
    } else {
        texto += "Este resultado representa el total que obtenemos al multiplicar ambos factores.";
    }

    return texto;
}

function explicarDivision(a, b, resultado) {
    let texto = "PASO 1. Comprender la división\n\n";
    texto += "Vamos a dividir " + mostrarNumero(a) + " entre ";
    texto += mostrarNumero(b) + ". Dividir consiste en repartir una cantidad en partes iguales o averiguar cuántas veces cabe una cantidad en otra.\n\n";

    texto += "PASO 2. Identificar los números\n\n";
    texto += "El dividendo es " + mostrarNumero(a) + ", que es la cantidad que vamos a repartir. ";
    texto += "El divisor es " + mostrarNumero(b) + ", que indica entre cuánto dividimos.\n\n";

    texto += "PASO 3. Calcular el cociente\n\n";
    texto += mostrarNumero(a) + " ÷ " + mostrarNumero(b) + " = ";
    texto += mostrarNumero(resultado) + ".\n\n";

    texto += "El cociente es el resultado de la división. ";

    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b > 0) {
        const cocienteEntero = Math.floor(a / b);
        const residuo = a % b;

        texto += "\n\nPASO 4. Revisar el residuo\n\n";

        texto += "Si repartimos objetos enteros, podemos dar ";
        texto += cocienteEntero + " a cada grupo";

        if (residuo === 0) {
            texto += " y no sobra nada.";
        } else {
            texto += " y sobran " + residuo + ".";
        }

        texto += "\n\nComprobación: divisor × cociente entero + residuo = dividendo.\n";
        texto += mostrarNumero(b) + " × " + cocienteEntero + " + " + residuo + " = ";
        texto += mostrarNumero(a) + ".";
    } else {
        texto += "\n\nPASO 4. Comprobar la división\n\n";
        texto += "Multiplicamos el cociente por el divisor para comprobar el resultado:\n";
        texto += mostrarNumero(resultado) + " × " + mostrarNumero(b) + " ≈ ";
        texto += mostrarNumero(resultado * b) + ".";
    }

    return texto;
}

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function(evento) {
        evento.preventDefault();

        window.location.hash = "ejercicio";
    });
}

if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", function(evento) {
        evento.preventDefault();

        alert("Registro completado. Ahora puedes iniciar sesión.");

        window.location.hash = "inicioSesion";
    });
}

if (formularioEjercicio) {
    formularioEjercicio.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const campoNumero1 = document.getElementById("numero1");
        const campoNumero2 = document.getElementById("numero2");
        const mensajeError = document.getElementById("mensajeError");

        const numero1Texto = campoNumero1.value.trim();
        const numero2Texto = campoNumero2.value.trim();

        mensajeError.textContent = "";

        if (numero1Texto === "" || numero2Texto === "") {
            mensajeError.textContent = "Escribe los dos números para continuar.";
            return;
        }

        const numero1 = Number(numero1Texto);
        const numero2 = Number(numero2Texto);

        if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
            mensajeError.textContent = "Ingresa números válidos.";
            return;
        }

        const operacionSeleccionada = document.querySelector(
            'input[name="operacion"]:checked'
        );

        if (!operacionSeleccionada) {
            mensajeError.textContent = "Selecciona una operación.";
            return;
        }

        const operacion = operacionSeleccionada.value;

        if (operacion === "division" && numero2 === 0) {
            mensajeError.textContent = "No se puede dividir entre cero. Ingresa otro número.";
            return;
        }

        let resultado;
        let simbolo;
        let explicacion;
        let formula;
        let pantalla;

        if (operacion === "suma") {
            resultado = numero1 + numero2;
            simbolo = "+";
            pantalla = "solucionSuma";
            explicacion = explicarSuma(numero1, numero2, resultado);
        } else if (operacion === "resta") {
            resultado = numero1 - numero2;
            simbolo = "−";
            pantalla = "solucionResta";
            explicacion = explicarResta(numero1, numero2, resultado);
        } else if (operacion === "multiplicacion") {
            resultado = numero1 * numero2;
            simbolo = "×";
            pantalla = "solucionMultiplicacion";
            explicacion = explicarMultiplicacion(numero1, numero2, resultado);
        } else if (operacion === "division") {
            resultado = numero1 / numero2;
            simbolo = "÷";
            pantalla = "solucionDivision";
            explicacion = explicarDivision(numero1, numero2, resultado);
        } else {
            mensajeError.textContent = "Selecciona una operación válida.";
            return;
        }

        if (!Number.isFinite(resultado)) {
            mensajeError.textContent = "El resultado es demasiado grande para mostrarlo.";
            return;
        }

        const resultadoTexto = mostrarNumero(resultado);
        const operacionTexto = mostrarNumero(numero1) + " " + simbolo + " ";
        const operacionCompleta = operacionTexto + mostrarNumero(numero2) + " = " + resultadoTexto;

        if (operacion === "suma") {
            document.getElementById("operacionSuma").textContent = operacionCompleta;
            document.getElementById("explicacionSuma").textContent = explicacion;
            document.getElementById("formulaSuma").textContent =
                "Operación: " + mostrarNumero(numero1) + " + " + mostrarNumero(numero2) +
                "\nResultado: " + resultadoTexto;
        } else if (operacion === "resta") {
            document.getElementById("operacionResta").textContent = operacionCompleta;
            document.getElementById("explicacionResta").textContent = explicacion;
            document.getElementById("formulaResta").textContent =
                "Operación: " + mostrarNumero(numero1) + " − " + mostrarNumero(numero2) +
                "\nResultado: " + resultadoTexto;
        } else if (operacion === "multiplicacion") {
            document.getElementById("operacionMultiplicacion").textContent = operacionCompleta;
            document.getElementById("explicacionMultiplicacion").textContent = explicacion;
            document.getElementById("formulaMultiplicacion").textContent =
                "Operación: " + mostrarNumero(numero1) + " × " + mostrarNumero(numero2) +
                "\nResultado: " + resultadoTexto;
        } else if (operacion === "division") {
            document.getElementById("operacionDivision").textContent = operacionCompleta;
            document.getElementById("explicacionDivision").textContent = explicacion;
            document.getElementById("formulaDivision").textContent =
                "Operación: " + mostrarNumero(numero1) + " ÷ " + mostrarNumero(numero2) +
                "\nResultado: " + resultadoTexto;
        }

        window.location.hash = pantalla;
    });
}
