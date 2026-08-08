/*
    Script: Efecto Strobe / Flash (Luces Rítmicas)
    Descripción: Crea dos sólidos blancos con una expresión en la opacidad
    para simular un efecto de estroboscopio o fallo eléctrico rítmico.
*/

(function() {
    var project = app.project;
    if (!project) {
        alert("Por favor, abre After Effects y asegúrate de tener un proyecto activo.");
        return;
    }

    // 1. Configuración de la composición
    var compName = "Efecto Strobe / Flash";
    var compW = 1920;
    var compH = 1080;
    var compDuration = 10; // 10 segundos
    var compFrameRate = 30;

    var myComp = project.items.addComp(compName, compW, compH, 1, compDuration, compFrameRate);
    myComp.openInViewer();

    // 2. Crear los Sólidos Blancos
    var solidColor = [1, 1, 1]; // Blanco
    var solidW = 500;
    var solidH = 500;

    var solid1 = myComp.layers.addSolid(solidColor, "Luz Strobe Izquierda", solidW, solidH, 1);
    var solid2 = myComp.layers.addSolid(solidColor, "Luz Strobe Derecha", solidW, solidH, 1);

    // 3. Posicionamiento (Lado a Lado)
    solid1.property("Position").setValue([compW * 0.25, compH * 0.5]);
    solid2.property("Position").setValue([compW * 0.75, compH * 0.5]);

    // 4. Expresión de Strobe (Parpadeo Seco)
    /* 
       Explicación de la expresión:
       - freq: Cuántas veces por segundo parpadea (Hz).
       - Math.sin(...) > 0 : Crea una onda cuadrada perfecta (Encendido o Apagado).
    */
    var strobeExpr = 
        "var freq = 10; // Velocidad del parpadeo (Hz)\r" +
        "(Math.sin(time * freq * Math.PI * 2) > 0) ? 100 : 0;";

    // Aplicar a ambos sólidos
    solid1.property("Opacity").expression = strobeExpr;
    solid2.property("Opacity").expression = strobeExpr;

    alert("¡Efecto Strobe creado!\n\nSe ha generado la composición '" + compName + "'.\nLos cuadros parpadearán rítmicamente a 10Hz.");
})();
