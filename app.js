// ===== DATOS DEL QUIZ (100 PREGUNTAS) =====
const quizData = [
    // Historia y Fundación
    { question: "¿En qué año fue fundado el Club Nacional de Football?", options: ["1899", "1891", "1902", "1905"], correct: 0 },
    { question: "¿Qué clubes se fusionaron para formar Nacional?", options: ["Uruguay Athletic y Montevideo FC", "Peñarol y Defensor", "River Plate y Cerro", "Wanderers y Racing"], correct: 0 },
    { question: "¿Qué héroe nacional inspiró los colores del club?", options: ["José Batlle y Ordóñez", "José Gervasio Artigas", "Juan Antonio Lavalleja", "Fructuoso Rivera"], correct: 1 },
    { question: "¿En qué barrio de Montevideo se encuentra el Gran Parque Central?", options: ["Pocitos", "La Blanqueada", "Carrasco", "Punta Carretas"], correct: 1 },
    { question: "¿En qué año se inauguró el Gran Parque Central?", options: ["1890", "1900", "1910", "1920"], correct: 1 },

    // Estadio
    { question: "¿Cuál es la capacidad actual del Gran Parque Central?", options: ["28,000", "34,000", "40,000", "45,000"], correct: 1 },
    { question: "¿En qué año el Gran Parque Central fue sede del primer partido del Mundial?", options: ["1928", "1930", "1932", "1934"], correct: 1 },
    { question: "¿Qué selecciones jugaron el primer partido del Mundial en el Gran Parque Central?", options: ["Uruguay vs Argentina", "Estados Unidos vs Bélgica", "Brasil vs Bolivia", "Francia vs México"], correct: 1 },
    { question: "¿Cuántos partidos del Mundial 1930 se jugaron en el Gran Parque Central?", options: ["3", "5", "7", "9"], correct: 2 },
    { question: "¿Qué evento histórico ocurrió en el terreno del Gran Parque Central en 1811?", options: ["Batalla de Las Piedras", "Artigas fue nombrado Jefe de los Orientales", "Declaración de Independencia", "Fundación de Montevideo"], correct: 1 },

    // Títulos Nacionales
    { question: "¿Cuántos campeonatos uruguayos ha ganado Nacional?", options: ["45", "48", "50", "52"], correct: 2 },
    { question: "¿En qué año ganó Nacional su primer campeonato uruguayo?", options: ["1899", "1902", "1905", "1910"], correct: 1 },
    { question: "¿Cuál fue el período conocido como 'Quinquenio de Oro' de Nacional?", options: ["1934-1938", "1939-1943", "1944-1948", "1949-1953"], correct: 1 },
    { question: "¿Cuántos títulos ganó Nacional en el Quinquenio de Oro?", options: ["3", "4", "5", "6"], correct: 2 },
    { question: "¿En qué año Nacional ganó su título número 50?", options: ["2020", "2022", "2023", "2024"], correct: 3 },

    // Copa Libertadores
    { question: "¿Cuántas Copas Libertadores ha ganado Nacional?", options: ["2", "3", "4", "5"], correct: 1 },
    { question: "¿En qué años ganó Nacional la Copa Libertadores?", options: ["1971, 1980, 1988", "1970, 1979, 1987", "1972, 1981, 1989", "1971, 1981, 1988"], correct: 0 },
    { question: "¿A quién venció Nacional en la final de la Libertadores 1971?", options: ["Boca Juniors", "Estudiantes de La Plata", "River Plate", "Independiente"], correct: 1 },
    { question: "¿Quién fue el entrenador de Nacional en la Libertadores 1971?", options: ["Washington Etchamendi", "Roque Máspoli", "Juan Carlos Corazzo", "Óscar Tabárez"], correct: 1 },
    { question: "¿En qué año Nacional llegó a la final de la Libertadores pero no ganó?", options: ["1964", "1969", "1995", "2000"], correct: 0 },

    // Copa Intercontinental
    { question: "¿Cuántas Copas Intercontinentales ha ganado Nacional?", options: ["1", "2", "3", "4"], correct: 2 },
    { question: "¿En qué años ganó Nacional la Copa Intercontinental?", options: ["1971, 1980, 1988", "1970, 1979, 1987", "1972, 1981, 1989", "1971, 1981, 1988"], correct: 0 },
    { question: "¿A qué equipo venció Nacional en la Intercontinental 1971?", options: ["Ajax", "Panathinaikos", "Bayern Munich", "Celtic"], correct: 1 },
    { question: "¿A qué equipo venció Nacional en la Intercontinental 1980?", options: ["Liverpool", "Nottingham Forest", "Hamburg", "Aston Villa"], correct: 1 },
    { question: "¿A qué equipo venció Nacional en la Intercontinental 1988?", options: ["AC Milan", "PSV Eindhoven", "Real Madrid", "Porto"], correct: 1 },

    // Apodos y Símbolos
    { question: "¿Qué apodo tiene el Club Nacional?", options: ["El Bolso", "El Tricolor", "El Decano", "Todas las anteriores"], correct: 3 },
    { question: "¿Por qué se le llama 'El Tricolor' a Nacional?", options: ["Por sus tres títulos mundiales", "Por sus tres colores: azul, blanco y rojo", "Por tres fundadores", "Por tres estadios"], correct: 1 },
    { question: "¿Por qué se le llama 'El Bolso' a Nacional?", options: ["Por la forma del estadio", "Por un bolso que usaban los jugadores", "Por el escudo", "Nadie sabe con certeza"], correct: 3 },
    { question: "¿Cuándo se creó el escudo actual de Nacional?", options: ["1899", "1925", "1950", "1971"], correct: 1 },
    { question: "¿Cuándo se creó la bandera social de Nacional?", options: ["1899", "1902", "1910", "1925"], correct: 1 },

    // Máximos Goleadores
    { question: "¿Quién es el máximo goleador histórico de Nacional?", options: ["Héctor Scarone", "Atilio García", "Julio César Morales", "Álvaro Recoba"], correct: 1 },
    { question: "¿Cuántos goles marcó Atilio García en su carrera en Nacional?", options: ["180", "195", "208", "220"], correct: 2 },
    { question: "¿Quién es el segundo máximo goleador de Nacional?", options: ["Héctor Scarone", "Julio César Morales", "Pedro Petrone", "Álvaro Recoba"], correct: 1 },
    { question: "¿Cuántos goles marcó Julio César Morales con Nacional?", options: ["159", "169", "179", "189"], correct: 2 },
    { question: "¿Cuántos goles marcó Álvaro Recoba en sus dos etapas en Nacional?", options: ["51", "61", "71", "81"], correct: 1 },

    // Leyendas - Atilio García
    { question: "¿En qué período jugó Atilio García en Nacional?", options: ["1928-1940", "1938-1950", "1948-1960", "1958-1970"], correct: 1 },
    { question: "¿Cuántos partidos jugó Atilio García con Nacional?", options: ["190", "200", "210", "220"], correct: 2 },
    { question: "¿En qué posición jugaba Atilio García?", options: ["Portero", "Defensa", "Centrocampista", "Delantero"], correct: 3 },

    // Leyendas - Héctor Scarone
    { question: "¿Qué apodo tenía Héctor Scarone?", options: ["El Mago", "El Divino", "El Maestro", "El Crack"], correct: 0 },
    { question: "¿En qué Mundial fue campeón Héctor Scarone?", options: ["1924", "1928", "1930", "1934"], correct: 2 },
    { question: "¿Cuántas medallas olímpicas ganó Héctor Scarone?", options: ["1", "2", "3", "4"], correct: 1 },

    // Leyendas - José Nasazzi
    { question: "¿Qué apodo tenía José Nasazzi?", options: ["El Capitán", "El Gran Mariscal", "El Líder", "El Jefe"], correct: 1 },
    { question: "¿En qué posición jugaba José Nasazzi?", options: ["Portero", "Defensa", "Centrocampista", "Delantero"], correct: 1 },
    { question: "¿Cuántos campeonatos uruguayos ganó José Nasazzi con Nacional?", options: ["6", "8", "10", "12"], correct: 1 },

    // Leyendas - Álvaro Recoba
    { question: "¿Qué apodo tenía Álvaro Recoba?", options: ["El Chino", "El Mago", "El Zurdo", "El Crack"], correct: 0 },
    { question: "¿Cuántos partidos jugó Álvaro Recoba en sus dos etapas en Nacional?", options: ["156", "166", "176", "186"], correct: 2 },
    { question: "¿En qué años jugó Álvaro Recoba en Nacional?", options: ["1993-1998 y 2010-2013", "1995-2000 y 2012-2015", "1997-2002 y 2014-2017", "1999-2004 y 2016-2019"], correct: 1 },

    // Otros Jugadores Históricos
    { question: "¿Quién es el jugador con más partidos en la historia de Nacional?", options: ["Atilio García", "Emilio Álvarez", "Julio César Morales", "Gustavo Munúa"], correct: 1 },
    { question: "¿Cuántos partidos jugó Emilio Álvarez con Nacional?", options: ["491", "501", "511", "521"], correct: 2 },
    { question: "¿Quién fue el portero legendario de Nacional en los años 20?", options: ["Andrés Mazali", "Gustavo Munúa", "Salvador Ichazo", "Luis Mejía"], correct: 0 },
    { question: "¿Cuántos títulos ganó Andrés Mazali con Nacional?", options: ["10", "12", "15", "18"], correct: 2 },
    { question: "¿Quién fue conocido como 'El Primer Mariscal' del fútbol uruguayo?", options: ["José Nasazzi", "Alfredo Foglino", "José Andrade", "Pedro Petrone"], correct: 1 },

    // Jugadores Actuales
    { question: "¿Quién es el actual entrenador de Nacional (2024)?", options: ["Martín Lasarte", "Álvaro Recoba", "Gustavo Munúa", "Pablo Repetto"], correct: 1 },
    { question: "¿Qué jugador uruguayo volvió a Nacional en 2024 tras jugar en Europa?", options: ["Luis Suárez", "Edinson Cavani", "Sebastián Coates", "Diego Godín"], correct: 2 },
    { question: "¿De qué país es el delantero Diego Herazo?", options: ["Argentina", "Brasil", "Colombia", "Paraguay"], correct: 2 },

    // Clásicos y Rivalidades
    { question: "¿Cómo se llama el clásico entre Nacional y Peñarol?", options: ["Superclásico", "Clásico del Río de la Plata", "Clásico Uruguayo", "Derby de Montevideo"], correct: 2 },
    { question: "¿Cuántos clásicos ha ganado Nacional aproximadamente?", options: ["450", "500", "550", "600"], correct: 1 },
    { question: "¿Cuál fue el resultado del primer clásico de la historia?", options: ["Nacional 2-0", "Peñarol 3-1", "Empate 2-2", "Nacional 1-0"], correct: 2 },

    // Récords y Estadísticas
    { question: "¿Cuál es la mayor goleada de Nacional en un clásico?", options: ["6-0", "7-0", "8-0", "9-0"], correct: 0 },
    { question: "¿Cuántos títulos internacionales oficiales ha ganado Nacional?", options: ["15", "17", "19", "21"], correct: 2 },
    { question: "¿En qué año Nacional ganó el Campeonato Uruguayo invicto?", options: ["1971", "1980", "1988", "2000"], correct: 0 },

    // Mundiales y Selección
    { question: "¿Cuántos jugadores de Nacional fueron campeones del mundo en 1930?", options: ["5", "7", "9", "11"], correct: 2 },
    { question: "¿Qué jugador de Nacional fue el capitán de Uruguay en el Mundial 1930?", options: ["Héctor Scarone", "José Nasazzi", "José Andrade", "Pedro Petrone"], correct: 1 },
    { question: "¿En qué año Nacional representó a Uruguay en su primer partido internacional?", options: ["1901", "1903", "1905", "1907"], correct: 1 },

    // Copas y Torneos Internacionales
    { question: "¿Cuántas Copas Interamericanas ha ganado Nacional?", options: ["1", "2", "3", "4"], correct: 1 },
    { question: "¿En qué años ganó Nacional la Copa Interamericana?", options: ["1971 y 1980", "1972 y 1981", "1973 y 1982", "1974 y 1983"], correct: 1 },
    { question: "¿Cuántas Recopas Sudamericanas ha ganado Nacional?", options: ["0", "1", "2", "3"], correct: 1 },
    { question: "¿En qué año ganó Nacional la Recopa Sudamericana?", options: ["1988", "1989", "1990", "1991"], correct: 1 },

    // Entrenadores Históricos
    { question: "¿Quién fue el entrenador de Nacional en las tres Copas Intercontinentales?", options: ["Roque Máspoli en todas", "Diferentes entrenadores", "Juan Carlos Corazzo", "Washington Etchamendi"], correct: 1 },
    { question: "¿Quién entrenó a Nacional en la Libertadores 1988?", options: ["Roque Máspoli", "Juan Martín Mujica", "Óscar Tabárez", "Jorge Fossati"], correct: 1 },

    // Datos Curiosos
    { question: "¿Por qué Nacional es llamado 'El Decano'?", options: ["Por ser el club más antiguo", "Por su historia y tradición", "Por su estadio antiguo", "Por sus jugadores veteranos"], correct: 1 },
    { question: "¿Cuál es el himno oficial de Nacional?", options: ["Himno Tricolor", "Canto a Nacional", "Marcha Tricolor", "No tiene himno oficial"], correct: 0 },
    { question: "¿En qué año Nacional inauguró su museo?", options: ["1999", "2000", "2005", "2010"], correct: 1 },

    // Presidentes y Dirigentes
    { question: "¿Quién es el presidente actual de Nacional (2024)?", options: ["José Decurnex", "José Fuentes", "Ricardo Vairo", "Alejandro Balbi"], correct: 2 },
    { question: "¿Quién fue uno de los fundadores más importantes de Nacional?", options: ["Prudencio Miguel Reyes", "José Batlle", "Juan Antonio Lavalleja", "Artigas"], correct: 0 },

    // Infraestructura
    { question: "¿Cómo se llama el complejo deportivo de Nacional?", options: ["Los Céspedes", "Parque Nacional", "Centro Tricolor", "Complejo Bolso"], correct: 0 },
    { question: "¿En qué año se inauguró Los Céspedes?", options: ["1998", "2000", "2002", "2004"], correct: 1 },

    // Divisiones Inferiores
    { question: "¿Cuántas veces Nacional ganó el Campeonato de Divisiones Formativas?", options: ["Más de 20", "Más de 30", "Más de 40", "Más de 50"], correct: 2 },
    { question: "¿Qué jugador surgido de las divisiones inferiores de Nacional ganó el Balón de Oro?", options: ["Álvaro Recoba", "Enzo Francescoli", "Ninguno", "Diego Forlán"], correct: 2 },

    // Fútbol Femenino
    { question: "¿En qué año Nacional creó su equipo de fútbol femenino?", options: ["2015", "2017", "2019", "2021"], correct: 1 },
    { question: "¿Cuántos campeonatos femeninos ha ganado Nacional?", options: ["0", "1", "2", "3"], correct: 3 },

    // Otros Deportes
    { question: "¿En qué otros deportes compite Nacional además del fútbol?", options: ["Basketball", "Atletismo", "Ciclismo", "Todos los anteriores"], correct: 3 },
    { question: "¿Cuántas secciones deportivas tiene Nacional?", options: ["10", "15", "20", "25"], correct: 1 },

    // Hinchas y Socios
    { question: "¿Aproximadamente cuántos socios tiene Nacional?", options: ["30,000", "40,000", "50,000", "60,000"], correct: 1 },
    { question: "¿Cómo se llama la barra brava de Nacional?", options: ["La Banda del Parque", "La Blanqueada", "La Banda Tricolor", "Los del Bolso"], correct: 0 },

    // Récords Mundiales
    { question: "¿Qué récord mundial tiene el Gran Parque Central?", options: ["Estadio más antiguo de América", "Más títulos en un estadio", "Mayor asistencia", "Más partidos jugados"], correct: 0 },
    { question: "¿En qué posición está Nacional en el ranking mundial de clubes del siglo XX de la FIFA?", options: ["Top 50", "Top 30", "Top 20", "Top 10"], correct: 2 },

    // Actualidad 2024
    { question: "¿Qué título ganó Nacional en 2024?", options: ["Apertura", "Clausura", "Liga AUF Uruguaya", "Copa Uruguay"], correct: 2 },
    { question: "¿Contra quién ganó Nacional la final de 2024?", options: ["Peñarol", "Defensor Sporting", "Liverpool", "Cerro"], correct: 0 },
    { question: "¿Qué fichaje importante hizo Nacional en 2024?", options: ["Luis Suárez", "Rafael Haller", "Edinson Cavani", "Diego Godín"], correct: 1 },

    // Finales
    { question: "¿Cuántas finales de Copa Libertadores ha jugado Nacional?", options: ["3", "4", "5", "6"], correct: 1 },
    { question: "¿Cuál es el lema de Nacional?", options: ["Gloria y Tradición", "Siempre Tricolor", "El Decano", "Nacional es Nacional"], correct: 0 },
    { question: "¿Qué significa ser 'tricolor' para los hinchas de Nacional?", options: ["Solo los colores", "Una forma de vida", "Un equipo de fútbol", "Una tradición familiar"], correct: 1 },

    // Preguntas Adicionales
    { question: "¿Cuál es el color predominante en la camiseta de Nacional?", options: ["Azul", "Blanco", "Rojo", "Todos por igual"], correct: 1 },
    { question: "¿En qué continente está ubicado el Club Nacional?", options: ["Europa", "Asia", "América del Sur", "América del Norte"], correct: 2 },
    { question: "¿Qué jugador de Nacional jugó en el Inter de Milán?", options: ["Álvaro Recoba", "Sebastián Coates", "Diego Godín", "Todos los anteriores"], correct: 3 },
    { question: "¿Cuántas estrellas tiene el escudo de Nacional?", options: ["1", "2", "3", "4"], correct: 2 },
    { question: "¿Qué significa 'Vamos Nacional'?", options: ["Grito de guerra", "Himno del club", "Saludo entre hinchas", "Todas las anteriores"], correct: 3 },
    { question: "¿En qué año Nacional ganó su última Copa Libertadores?", options: ["1971", "1980", "1988", "2000"], correct: 2 },
    { question: "¿Cuál es el rival histórico de Nacional?", options: ["Defensor Sporting", "Peñarol", "Danubio", "Liverpool"], correct: 1 }
];

// ===== DATOS DE JUGADORES ACTIVOS =====
const activePlayers = [
    { number: 1, name: "Luis Mejía", position: "Portero", nationality: "Panamá/Uruguay", age: 31, marketValue: "€800K", photo: "⚽" },
    { number: 23, name: "Salvador Ichazo", position: "Portero", nationality: "Uruguay", age: 32, marketValue: "€500K", photo: "⚽" },
    { number: 2, name: "Sebastián Coates", position: "Defensa", nationality: "Uruguay", age: 33, marketValue: "€2.5M", photo: "⚽" },
    { number: 3, name: "Emiliano Velázquez", position: "Defensa", nationality: "Uruguay", age: 30, marketValue: "€1.2M", photo: "⚽" },
    { number: 4, name: "Mateo Rivero", position: "Defensa", nationality: "Uruguay", age: 22, marketValue: "€600K", photo: "⚽" },
    { number: 6, name: "Gabriel Báez", position: "Defensa", nationality: "Argentina", age: 28, marketValue: "€900K", photo: "⚽" },
    { number: 5, name: "Christian Oliva", position: "Centrocampista", nationality: "Uruguay", age: 28, marketValue: "€1.5M", photo: "⚽" },
    { number: 8, name: "Marcos Montiel", position: "Centrocampista", nationality: "Uruguay", age: 26, marketValue: "€700K", photo: "⚽" },
    { number: 10, name: "Diego Zabala", position: "Centrocampista", nationality: "Uruguay", age: 35, marketValue: "€400K", photo: "⚽" },
    { number: 16, name: "Gonzalo Petit", position: "Centrocampista", nationality: "Uruguay", age: 29, marketValue: "€800K", photo: "⚽" },
    { number: 7, name: "Yonatan Rodríguez", position: "Centrocampista", nationality: "Uruguay", age: 25, marketValue: "€650K", photo: "⚽" },
    { number: 9, name: "Diego Herazo", position: "Delantero", nationality: "Colombia", age: 29, marketValue: "€1.8M", photo: "⚽" },
    { number: 11, name: "Nicolás López", position: "Delantero", nationality: "Uruguay", age: 30, marketValue: "€1.2M", photo: "⚽" }
];

// ===== DATOS DE FIGURAS HISTÓRICAS =====
const figuraPlayers = [
    { number: 9, name: "Atilio García", position: "Delantero", nationality: "Uruguay", achievement: "Máximo goleador histórico: 208 goles", era: "1938-1950", photo: "🏆" },
    { number: 10, name: "Héctor Scarone", position: "Delantero", nationality: "Uruguay", achievement: "Campeón del Mundo 1930", era: "1917-1932", photo: "🏆" },
    { number: 5, name: "José Nasazzi", position: "Defensa", nationality: "Uruguay", achievement: "Capitán campeón del mundo 1930", era: "1923-1937", photo: "🏆" },
    { number: 8, name: "José Leandro Andrade", position: "Centrocampista", nationality: "Uruguay", achievement: "Bicampeón Olímpico 1924-1928", era: "1923-1930", photo: "🏆" },
    { number: 20, name: "Álvaro Recoba", position: "Centrocampista", nationality: "Uruguay", achievement: "61 goles en 176 partidos", era: "1995-2000, 2012-2015", photo: "🏆" },
    { number: 9, name: "Julio César Morales", position: "Delantero", nationality: "Uruguay", achievement: "179 goles - Bicampeón del Mundo", era: "1969-1984", photo: "🏆" },
    { number: 6, name: "Hugo de León", position: "Defensa", nationality: "Uruguay", achievement: "Libertadores 1980 y 1988", era: "1974-1989", photo: "🏆" },
    { number: 1, name: "Andrés Mazali", position: "Portero", nationality: "Uruguay", achievement: "15 títulos - Campeón 1924 y 1928", era: "1919-1935", photo: "🏆" },
    { number: 3, name: "Alfredo Foglino", position: "Defensa", nationality: "Uruguay", achievement: "409 partidos - 9 campeonatos", era: "1911-1927", photo: "🏆" },
    { number: 7, name: "Pedro Petrone", position: "Delantero", nationality: "Uruguay", achievement: "Leyenda de los años 20-30", era: "1923-1931", photo: "🏆" }
];

// ===== DATOS DE PUZZLES MEJORADOS =====
const puzzles = [
    { id: 1, title: "Estadio Gran Parque Central", icon: "🏟️", sizes: [25, 50, 100, 150] },
    { id: 2, title: "Hinchada Tricolor", icon: "👥", sizes: [25, 50, 100, 150] },
    { id: 3, title: "Bandera de Nacional", icon: "🚩", sizes: [25, 50, 100, 150] },
    { id: 4, title: "Jugadores Celebrando", icon: "⚽", sizes: [25, 50, 100, 150] }
];

// ===== DATOS DE PINTAR POR NÚMEROS =====
const paintImages = [
    { id: 1, title: "Escudo de Nacional", difficulty: "Fácil", icon: "🛡️", gridSize: 10 },
    { id: 2, title: "Gran Parque Central", difficulty: "Medio", icon: "🏟️", gridSize: 15 },
    { id: 3, title: "Bandera Tricolor", difficulty: "Fácil", icon: "🚩", gridSize: 12 }
];

const paintColors = [
    { number: 1, name: "Azul Nacional", hex: "#0033A0" },
    { number: 2, name: "Rojo Nacional", hex: "#DC143C" },
    { number: 3, name: "Blanco", hex: "#FFFFFF" },
    { number: 4, name: "Azul Claro", hex: "#4A90E2" },
    { number: 5, name: "Gris Oscuro", hex: "#333333" },
    { number: 6, name: "Dorado", hex: "#FFD700" }
];

// ===== DATOS DE NOTICIAS =====
const newsData = [
    {
        title: "Nacional campeón de la Liga AUF Uruguaya",
        date: "2 de diciembre, 2024",
        summary: "El Tricolor se consagró campeón tras vencer a Peñarol en la final.",
        category: "Campeonato"
    },
    {
        title: "Ricardo Vairo elegido nuevo presidente",
        date: "1 de diciembre, 2024",
        summary: "La asamblea eligió a Vairo como nuevo presidente de la institución.",
        category: "Institucional"
    },
    {
        title: "Nacional se prepara para la Copa Libertadores 2025",
        date: "28 de noviembre, 2024",
        summary: "El equipo dirigido por Álvaro Recoba busca superar la fase de grupos.",
        category: "Copa Libertadores"
    },
    {
        title: "Fichaje confirmado: Rafael Haller llega a Nacional",
        date: "25 de noviembre, 2024",
        summary: "El lateral derecho firmó por tres temporadas con el club.",
        category: "Fichajes"
    },
    {
        title: "Gran Parque Central: 124 años de historia",
        date: "20 de noviembre, 2024",
        summary: "El estadio más antiguo de América celebra su aniversario.",
        category: "Historia"
    }
];

// ===== DATOS DE REDES SOCIALES =====
const socialPosts = [
    {
        platform: 'Twitter',
        date: 'Hace 2 horas',
        content: '¡Gran victoria del Tricolor en el Gran Parque Central! 🔵⚪🔴 #VamosNacional',
        likes: 1523,
        shares: 342
    },
    {
        platform: 'Instagram',
        date: 'Hace 5 horas',
        content: 'El plantel se prepara para el próximo desafío. ¡Vamos Nacional! 💪⚽',
        likes: 2847,
        shares: 156
    },
    {
        platform: 'Facebook',
        date: 'Hace 1 día',
        content: 'Recordamos aquel histórico 1971 cuando Nacional conquistó su primera Copa Libertadores 🏆',
        likes: 3421,
        shares: 892
    },
    {
        platform: 'Twitter',
        date: 'Hace 1 día',
        content: 'El Gran Parque Central, cuna del fútbol mundial. Aquí comenzó todo en 1930 🏟️ #Historia',
        likes: 1876,
        shares: 445
    },
    {
        platform: 'Instagram',
        date: 'Hace 2 días',
        content: 'La hinchada tricolor siempre presente. ¡Gracias por el apoyo incondicional! 💙❤️',
        likes: 4532,
        shares: 234
    }
];

// ===== ESTADO DE LA APLICACIÓN =====
let currentQuizQuestion = 0;
let quizAnswers = [];
let currentPlayerTab = 'activos';
let currentPuzzle = null;
let currentPuzzleSize = 25;
let puzzleState = [];
let puzzleMoves = 0;
let puzzleStartTime = null;
let currentPaintImage = null;
let paintState = [];
let selectedColor = 1;

// ===== NAVEGACIÓN =====
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}-page`).classList.add('active');

    if (page === 'quiz') {
        initQuiz();
    } else if (page === 'players') {
        showPlayerTab('activos');
    } else if (page === 'puzzles') {
        showPuzzleSelector();
    } else if (page === 'paint') {
        showPaintSelector();
    } else if (page === 'news') {
        showNews();
    } else if (page === 'results') {
        showResults();
    } else if (page === 'social') {
        showSocialFeed();
    } else if (page === 'home') {
        initHomePreviews();
    }
}

// ===== INICIALIZACIÓN DE PREVIEWS EN PORTADA =====
function initHomePreviews() {
    // Preview de noticias
    const newsPreview = document.getElementById('news-preview');
    if (newsPreview) {
        newsPreview.innerHTML = newsData.slice(0, 3).map(news => `
            <div class="preview-item" onclick="navigateTo('news')">
                <div class="preview-title">${news.title}</div>
                <div class="preview-meta">${news.date}</div>
            </div>
        `).join('');
    }

    // Preview de redes sociales
    const socialPreview = document.getElementById('social-preview');
    if (socialPreview) {
        socialPreview.innerHTML = socialPosts.slice(0, 3).map(post => `
            <div class="preview-item" onclick="navigateTo('social')">
                <div class="preview-title">${post.content}</div>
                <div class="preview-meta">${post.platform} · ${post.date}</div>
            </div>
        `).join('');
    }
}

// ===== FUNCIONES DE QUIZ =====
function initQuiz() {
    currentQuizQuestion = 0;
    quizAnswers = [];
    showQuestion();
}

function showQuestion() {
    const container = document.getElementById('quiz-content');
    const question = quizData[currentQuizQuestion];

    container.innerHTML = `
        <div class="question-card">
            <div class="question-number">Pregunta ${currentQuizQuestion + 1} de ${quizData.length}</div>
            <h2 class="question-text">${question.question}</h2>
            <div class="options-grid">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="selectAnswer(${index})" id="option-${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div class="quiz-nav">
                <button class="quiz-btn" onclick="previousQuestion()" ${currentQuizQuestion === 0 ? 'disabled' : ''}>
                    ← Anterior
                </button>
                <button class="quiz-btn" id="next-btn" onclick="nextQuestion()" disabled>
                    ${currentQuizQuestion === quizData.length - 1 ? 'Finalizar' : 'Siguiente →'}
                </button>
            </div>
        </div>
    `;

    if (quizAnswers[currentQuizQuestion] !== undefined) {
        selectAnswer(quizAnswers[currentQuizQuestion], true);
    }
}

function selectAnswer(index, skipSave = false) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById(`option-${index}`).classList.add('selected');

    if (!skipSave) {
        quizAnswers[currentQuizQuestion] = index;
    }

    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (currentQuizQuestion < quizData.length - 1) {
        currentQuizQuestion++;
        showQuestion();
    } else {
        navigateTo('results');
    }
}

function previousQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        showQuestion();
    }
}

// ===== FUNCIONES DE JUGADORES =====
function showPlayerTab(tab) {
    currentPlayerTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const players = tab === 'activos' ? activePlayers : figuraPlayers;
    const container = document.getElementById('players-content');

    container.innerHTML = `
        <div class="players-grid">
            ${players.map(player => `
                <div class="player-card">
                    <div class="player-photo">${player.photo}</div>
                    <div class="player-content">
                        <div class="player-header">
                            <div class="player-number">#${player.number}</div>
                            <h3 class="player-name">${player.name}</h3>
                            <div class="player-position">${player.position}</div>
                        </div>
                        <div class="player-info">
                            <div class="info-row">
                                <span class="info-label">Nacionalidad</span>
                                <span class="info-value">${player.nationality}</span>
                            </div>
                            ${player.age ? `
                                <div class="info-row">
                                    <span class="info-label">Edad</span>
                                    <span class="info-value">${player.age} años</span>
                                </div>
                            ` : ''}
                            ${player.marketValue ? `
                                <div class="info-row">
                                    <span class="info-label">Valor de Mercado</span>
                                    <span class="info-value">${player.marketValue}</span>
                                </div>
                            ` : ''}
                            ${player.achievement ? `
                                <div class="info-row">
                                    <span class="info-label">Logro</span>
                                    <span class="info-value">${player.achievement}</span>
                                </div>
                            ` : ''}
                            ${player.era ? `
                                <div class="info-row">
                                    <span class="info-label">Época</span>
                                    <span class="info-value">${player.era}</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Continúa en el siguiente bloque...
// Continúa en el siguiente bloque...

// ===== FUNCIONES DE PUZZLES AVANZADOS =====
function showPuzzleSelector() {
    const container = document.getElementById('puzzles-content');
    container.innerHTML = `
        <div class="puzzle-selector">
            ${puzzles.map(puzzle => `
                <div class="puzzle-option" onclick="selectPuzzle(${puzzle.id})">
                    <div class="puzzle-preview">${puzzle.icon}</div>
                    <h3 class="puzzle-title">${puzzle.title}</h3>
                    <p class="puzzle-difficulty">Elige tu dificultad</p>
                </div>
            `).join('')}
        </div>
    `;
}

function selectPuzzle(puzzleId) {
    currentPuzzle = puzzles.find(p => p.id === puzzleId);
    showDifficultySelector();
}

function showDifficultySelector() {
    const container = document.getElementById('puzzles-content');
    container.innerHTML = `
        <div class="puzzle-game">
            <h2 style="text-align: center; margin-bottom: 2rem;">${currentPuzzle.title}</h2>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 2rem;">
                Selecciona la dificultad del puzzle
            </p>
            <div class="difficulty-selector" style="justify-content: center; margin-bottom: 2rem;">
                ${currentPuzzle.sizes.map(size => `
                    <button class="difficulty-btn" onclick="startPuzzle(${size})">
                        ${size} piezas
                    </button>
                `).join('')}
            </div>
            <div class="puzzle-controls">
                <button class="quiz-btn" onclick="showPuzzleSelector()">← Volver</button>
            </div>
        </div>
    `;
}

function startPuzzle(size) {
    currentPuzzleSize = size;
    puzzleMoves = 0;
    puzzleStartTime = Date.now();
    initPuzzleState();
    renderPuzzle();
}

function initPuzzleState() {
    const gridSize = Math.sqrt(currentPuzzleSize);
    puzzleState = Array.from({ length: currentPuzzleSize }, (_, i) => i);

    // Mezclar el puzzle
    const shuffleIterations = currentPuzzleSize * 10;
    for (let i = 0; i < shuffleIterations; i++) {
        const emptyIndex = puzzleState.indexOf(currentPuzzleSize - 1);
        const possibleMoves = getPossibleMoves(emptyIndex, gridSize);
        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        [puzzleState[emptyIndex], puzzleState[randomMove]] = [puzzleState[randomMove], puzzleState[emptyIndex]];
    }
}

function getPossibleMoves(emptyIndex, gridSize) {
    const row = Math.floor(emptyIndex / gridSize);
    const col = emptyIndex % gridSize;
    const moves = [];

    if (row > 0) moves.push(emptyIndex - gridSize);
    if (row < gridSize - 1) moves.push(emptyIndex + gridSize);
    if (col > 0) moves.push(emptyIndex - 1);
    if (col < gridSize - 1) moves.push(emptyIndex + 1);

    return moves;
}

function renderPuzzle() {
    const container = document.getElementById('puzzles-content');
    const gridSize = Math.sqrt(currentPuzzleSize);
    const elapsedTime = puzzleStartTime ? Math.floor((Date.now() - puzzleStartTime) / 1000) : 0;
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;

    container.innerHTML = `
        <div class="puzzle-game">
            <h2 style="text-align: center; margin-bottom: 1rem;">${currentPuzzle.title}</h2>
            <div class="puzzle-controls-top">
                <div class="puzzle-info">
                    <div class="puzzle-stat">
                        <div class="puzzle-stat-value">${puzzleMoves}</div>
                        <div class="puzzle-stat-label">Movimientos</div>
                    </div>
                    <div class="puzzle-stat">
                        <div class="puzzle-stat-value">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                        <div class="puzzle-stat-label">Tiempo</div>
                    </div>
                    <div class="puzzle-stat">
                        <div class="puzzle-stat-value">${currentPuzzleSize}</div>
                        <div class="puzzle-stat-label">Piezas</div>
                    </div>
                </div>
            </div>
            <div class="puzzle-board" style="grid-template-columns: repeat(${gridSize}, 1fr);">
                ${puzzleState.map((value, index) => `
                    <div class="puzzle-piece ${value === currentPuzzleSize - 1 ? 'empty' : ''}" 
                         onclick="movePiece(${index})"
                         style="font-size: ${gridSize > 10 ? '0.7rem' : '1rem'};">
                        ${value === currentPuzzleSize - 1 ? '' : value + 1}
                    </div>
                `).join('')}
            </div>
            <div class="puzzle-controls">
                <button class="quiz-btn" onclick="showDifficultySelector()">← Cambiar Dificultad</button>
                <button class="quiz-btn" onclick="startPuzzle(${currentPuzzleSize})">Reiniciar</button>
            </div>
        </div>
    `;
}

function movePiece(index) {
    const gridSize = Math.sqrt(currentPuzzleSize);
    const emptyIndex = puzzleState.indexOf(currentPuzzleSize - 1);
    const possibleMoves = getPossibleMoves(emptyIndex, gridSize);

    if (possibleMoves.includes(index)) {
        [puzzleState[emptyIndex], puzzleState[index]] = [puzzleState[index], puzzleState[emptyIndex]];
        puzzleMoves++;
        renderPuzzle();

        if (isPuzzleSolved()) {
            const elapsedTime = Math.floor((Date.now() - puzzleStartTime) / 1000);
            const minutes = Math.floor(elapsedTime / 60);
            const seconds = elapsedTime % 60;
            setTimeout(() => {
                alert(`¡Felicitaciones! Completaste el puzzle de ${currentPuzzleSize} piezas en ${puzzleMoves} movimientos y ${minutes}:${seconds.toString().padStart(2, '0')}`);
            }, 300);
        }
    }
}

function isPuzzleSolved() {
    return puzzleState.every((value, index) => value === index);
}

// ===== FUNCIONES DE PINTAR POR NÚMEROS =====
function showPaintSelector() {
    const container = document.getElementById('paint-content');
    container.innerHTML = `
        <div class="paint-selector">
            ${paintImages.map(image => `
                <div class="paint-option" onclick="startPaint(${image.id})">
                    <div class="puzzle-preview">${image.icon}</div>
                    <h3 class="puzzle-title">${image.title}</h3>
                    <p class="puzzle-difficulty">Dificultad: ${image.difficulty}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function startPaint(imageId) {
    currentPaintImage = paintImages.find(img => img.id === imageId);
    selectedColor = 1;
    initPaintState();
    renderPaint();
}

function initPaintState() {
    const size = currentPaintImage.gridSize;
    paintState = [];

    // Generar patrón de pintar por números
    for (let i = 0; i < size; i++) {
        paintState[i] = [];
        for (let j = 0; j < size; j++) {
            // Patrón basado en la posición para crear diseños
            let colorNum;
            if (currentPaintImage.id === 1) { // Escudo
                const distFromCenter = Math.sqrt(Math.pow(i - size / 2, 2) + Math.pow(j - size / 2, 2));
                if (distFromCenter < size / 4) colorNum = 1; // Azul
                else if (distFromCenter < size / 3) colorNum = 3; // Blanco
                else colorNum = 2; // Rojo
            } else if (currentPaintImage.id === 2) { // Estadio
                if (i < size / 3) colorNum = 4; // Azul claro (cielo)
                else if (i < size * 2 / 3) colorNum = 5; // Gris (estructura)
                else colorNum = 6; // Verde (campo)
            } else { // Bandera
                if (i < size / 3) colorNum = 1; // Azul
                else if (i < size * 2 / 3) colorNum = 3; // Blanco
                else colorNum = 2; // Rojo
            }

            paintState[i][j] = {
                colorNumber: colorNum,
                painted: false
            };
        }
    }
}

function renderPaint() {
    const container = document.getElementById('paint-content');
    const size = currentPaintImage.gridSize;
    const totalCells = size * size;
    const paintedCells = paintState.flat().filter(cell => cell.painted).length;
    const progress = Math.round((paintedCells / totalCells) * 100);

    container.innerHTML = `
        <div class="paint-game">
            <h2 style="text-align: center; margin-bottom: 2rem;">${currentPaintImage.title}</h2>
            <div class="paint-container">
                <div class="paint-canvas-wrapper">
                    <div class="paint-canvas" style="grid-template-columns: repeat(${size}, 1fr);">
                        ${paintState.map((row, i) =>
        row.map((cell, j) => `
                                <div class="paint-cell ${cell.painted ? 'painted' : ''}" 
                                     onclick="paintCell(${i}, ${j})"
                                     style="background-color: ${cell.painted ? paintColors[cell.colorNumber - 1].hex : 'white'};">
                                    ${cell.painted ? '' : cell.colorNumber}
                                </div>
                            `).join('')
    ).join('')}
                    </div>
                </div>
                <div class="paint-sidebar">
                    <h3 style="margin-bottom: 1rem;">Paleta de Colores</h3>
                    <div class="color-palette">
                        ${paintColors.map(color => `
                            <div class="color-item ${selectedColor === color.number ? 'active' : ''}" 
                                 onclick="selectPaintColor(${color.number})">
                                <div class="color-swatch" style="background-color: ${color.hex}; ${color.hex === '#FFFFFF' ? 'border-color: #ccc;' : ''}"></div>
                                <div class="color-info">
                                    <div class="color-number">${color.number}</div>
                                    <div class="color-name">${color.name}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="paint-progress">
                        <h4 style="margin-bottom: 0.5rem;">Progreso</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%;">
                                ${progress}%
                            </div>
                        </div>
                    </div>
                    <button class="quiz-btn" onclick="showPaintSelector()" style="width: 100%; margin-top: 1rem;">
                        ← Volver
                    </button>
                </div>
            </div>
        </div>
    `;
}

function selectPaintColor(colorNum) {
    selectedColor = colorNum;
    renderPaint();
}

function paintCell(i, j) {
    const cell = paintState[i][j];
    if (!cell.painted && cell.colorNumber === selectedColor) {
        cell.painted = true;
        renderPaint();

        // Verificar si está completo
        const allPainted = paintState.flat().every(c => c.painted);
        if (allPainted) {
            setTimeout(() => {
                alert('¡Felicitaciones! Completaste el dibujo. 🎨');
            }, 300);
        }
    }
}

// ===== FUNCIONES DE NOTICIAS =====
function showNews() {
    const container = document.getElementById('news-content');
    container.innerHTML = `
        <div class="social-container">
            <h2 style="text-align: center; margin-bottom: 2rem;">Últimas Noticias de Nacional</h2>
            ${newsData.map(news => `
                <div class="feed-item">
                    <div class="feed-header">
                        <span class="feed-platform">${news.category}</span>
                        <span class="feed-date">${news.date}</span>
                    </div>
                    <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-primary);">${news.title}</h3>
                    <div class="feed-content">${news.summary}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// ===== FUNCIONES DE RESULTADOS =====
function showResults() {
    const container = document.getElementById('results-content');
    const correctAnswers = quizAnswers.filter((answer, index) => answer === quizData[index].correct).length;
    const percentage = Math.round((correctAnswers / quizData.length) * 100);

    let message = '';
    if (percentage >= 90) {
        message = '¡Sos un verdadero hincha tricolor! 🏆';
    } else if (percentage >= 70) {
        message = '¡Muy bien! Conocés bastante de Nacional 👏';
    } else if (percentage >= 50) {
        message = 'Bien, pero podés mejorar 📚';
    } else {
        message = 'Tenés que estudiar más la historia del club 📖';
    }

    container.innerHTML = `
        <div class="results-container">
            <div class="results-summary">
                <div class="results-score">${percentage}%</div>
                <div class="results-message">${message}</div>
                <p style="color: var(--text-secondary);">
                    Respondiste correctamente ${correctAnswers} de ${quizData.length} preguntas
                </p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-card-value">${correctAnswers}</div>
                    <div class="stat-card-label">Correctas</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value">${quizData.length - correctAnswers}</div>
                    <div class="stat-card-label">Incorrectas</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value">${quizData.length}</div>
                    <div class="stat-card-label">Total</div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 3rem;">
                <button class="quiz-btn" onclick="navigateTo('quiz')" style="margin-right: 1rem;">
                    Reintentar Quiz
                </button>
                <button class="quiz-btn" onclick="navigateTo('home')">
                    Volver al Inicio
                </button>
            </div>
        </div>
    `;
}

// ===== FUNCIONES DE REDES SOCIALES =====
function showSocialFeed() {
    const container = document.getElementById('social-content');

    container.innerHTML = `
        <div class="social-container">
            <div class="social-links">
                <a href="https://twitter.com/Nacional" target="_blank" class="social-link">
                    🐦 Twitter
                </a>
                <a href="https://www.instagram.com/nacional/" target="_blank" class="social-link">
                    📷 Instagram
                </a>
                <a href="https://www.facebook.com/nacionaloficial" target="_blank" class="social-link">
                    📘 Facebook
                </a>
                <a href="https://www.nacional.uy" target="_blank" class="social-link">
                    🌐 Sitio Oficial
                </a>
            </div>
            
            <h2 style="text-align: center; margin-bottom: 2rem;">Últimas Menciones</h2>
            
            ${socialPosts.map(post => `
                <div class="feed-item">
                    <div class="feed-header">
                        <span class="feed-platform">${post.platform}</span>
                        <span class="feed-date">${post.date}</span>
                    </div>
                    <div class="feed-content">${post.content}</div>
                    <div class="feed-engagement">
                        <span>❤️ ${post.likes}</span>
                        <span>🔄 ${post.shares}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('App de Nacional cargada correctamente');
    initHomePreviews();
});
