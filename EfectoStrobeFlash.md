Progreso: He leído `EfectoStrobeFlash.jsx` y ahora explico qué hace.

- Resumen: crea en After Effects una composición llamada "Efecto Strobe / Flash" con dos sólidos blancos que parpadean rítmicamente.
- Comprobación inicial: verifica que haya un proyecto AE abierto; si no, muestra un alert y sale.
- Composición: crea una composición de 1920x1080, 10 segundos, 30 fps y la abre en el visor.
- Capas: agrega dos sólidos blancos (500x500) nombrados "Luz Strobe Izquierda" y "Luz Strobe Derecha".
- Posicionamiento: coloca un sólido al 25% ancho (izquierda) y otro al 75% ancho (derecha), centrados verticalmente.
- Efecto de parpadeo: asigna una expresión a la propiedad `Opacity` de ambos sólidos:
  - La expresión define `freq = 10` (10 Hz).
  - Usa `Math.sin(time * freq * Math.PI * 2) > 0` para producir una onda cuadrada (encendido = 100%, apagado = 0%).
  - Resultado: parpadeo a 10 veces por segundo.
- Fin: muestra un alert confirmando la creación y la frecuencia del parpadeo.

¿Quieres que ajuste la frecuencia, el tamaño o que exporte un preset/versión que puedas reusar?
