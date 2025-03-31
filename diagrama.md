
//generar un numero aleatorio entre 0 y 3
    CREAR función getRandomNumber para obtener un numero al azar entre 0 y 3, con un parametro llamado numberMax
        SET variable RandomNumber
        ASIGNAR a la variable RandomNumber la función Match.floor la cual va a contener la funcion Match.random() multiplicada por el parametro numberMax
        RETORNAR el resultado de la variable RandomNumber

//creando la lógica para la elección de la computadora
    CREAR función getComputerChoice con un parámetro llamado choiceComputer
        SET array de datos llamado choices con los valores "rock", "paper", "scissors"
        SET variable getChoice la cual tendrá asignado como valor el poder acceder a un elemento del array choice y de indice se pasara el parametro choiceComputer
        RETORNAR el valor de la variable getChoice

//Lógica para la elección del humano
    CREAR función getHumanChoice con un parámetro humanElección que me devolverá la elección del usuario
        RETORNAR el array CHOICE y pasar como indice el valor del parámetro humanElección

//Función para jugar una ronda
    CREAR función playRound la cual tendrá dos parámetros llamados humanChoicey computerChoice.
        IF Elección humano es igual a piedra Y elección Computer es igual a tijera O Eleccion humano es igual a papel Y eleccion computer es igual a piedra O Eleccion humano es Tijera y elección computer es igual a papel 
            OBTAIN variable humanScore y aumentar puntaje en 1
            mostrar mensaje "gana humano"
        ELSE IF Elección humano es igual a elecciónComputer 
            mostrar mensaje "empate, vuelve a jugar"
        ELSE
            OBTAIN variable computerScore y aumentan puntaje en 1
            mostrar mensaje "gana computador"
//Funcion para jugar 5 rondas