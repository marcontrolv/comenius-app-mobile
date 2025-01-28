import { View, TextInput, Pressable } from "react-native"

export default function LoginPage () {
    return (
        <View className="container">
            <View className="form-box login">
                <form>
                    <View class="text-cabecera-login">
                        <p>Bienvenido!</p>
                        <h2>Inicia sesion</h2>
                        <p>Usando tu cuenta de estudiante.</p>
                    </View>
                    <View className="input-box">
                    <label for="correo">Correo Electrónico</label>
                    <TextInput id="correo" name="correo" placeholder="Ingresa tu correo electronico"></TextInput>
                    </View>
                    <View className="input-box">
                    <label for="contrasena">Contraseña</label>
                    <TextInput id="contrasena" name="contrasena" placeholder="Ingresa tu contraseña"></TextInput>
                    </View>
                    <View className="btn btn-style btn-aceptar">
                        <Pressable>Iniciar</Pressable>
                    </View>
                </form>
            </View>
        </View>
    )
}

// <!DOCTYPE html>
// <html lang="es">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Iniciar Sesión</title>
//     <link rel="shortcut icon" href="./recursos/img/mini-logo.svg">
//     <link rel="stylesheet" href="recursos/css/index.css">
//     <link rel="stylesheet" href="recursos/css/alerta.css">
// </head>
// <body>
//     <!-- TODO: Ordenar los comentarios -->
//     <main>
//         <div class="container">
//             <!-- Login -->
//             <div class="form-box login">
//                 <form action="/login" method="post">
//                     <div class="text-cabecera-login">
//                         <p>¡Bienvenido!</p>
//                         <h2>Inicia sesión</h2> 
//                         <p>Usando tu cuenta de estudiante.</p>
//                     </div>
//                     <div class="input-box">
//                         <label for="correo">Correo Electrónico</label>
//                         <input type="email" id="correo" name="correo" placeholder="Ingresa tu correo electronico">
//                     </div>
//                     <div class="input-box">
//                         <label for="contrasena">Contraseña</label>
//                         <input type="password" id="contrasena" name="contrasena" placeholder="Ingresa tu contraseña">
//                     </div>
//                     <div>
//                         <button class="btn btn-style btn-aceptar" type="submit">Iniciar</button>
//                     </div>
//                 </form>
//             </div>
//             <!-- Credenciales -->
//             <div class="form-box register">
//                 <form>
//                     <div class="contenido-credenciales">
//                         <div>
//                             <div>
//                                 <h3>Correo de Alumno</h3>
//                                 <div>
//                                     <p id="correo1">h1yhzo1z5w@ibolinva.com</p>
//                                     <input type="button" class="btn btn-active btn-style btn-credenciales" data-original-text="Copiar Correo" onclick="copyText('correo1', this)" value="Copiar Correo">

//                                 </div>
//                             </div>
//                             <div>
//                                 <h3>Correo de Instructor</h3>
//                                 <div>
//                                     <p id="correo2">ev1v4y5v7x@vvatxiy.com</p>
//                                     <input type="button" class="btn btn-active btn-style btn-credenciales" data-original-text="Copiar Correo" onclick="copyText('correo2', this)" value="Copiar Correo">
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <h3>Contraseña Genérica</h3>
//                             <p id="clave1">54321</p>
//                             <input type="button" class="btn btn-active btn-style btn-credenciales" data-original-text="Copiar Contraseña" onclick="copyText('clave1', this)" value="Copiar Contraseña">
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <!-- Tooggle-box -->
//             <div class="toggle-box">
//                 <div class="toggle-panel toggle-left">
//                     <img src="./recursos/img/pre-logo.svg" alt="" class="imagen-form-login">
//                     <h2>Credenciales de Ingreso</h2>
//                     <p>¿Olvidaste tus credenciales?</p>
//                     <button class="btn register-btn" onclick="clearMessages()">Visualizar</button>
//                 </div>
//                 <div class="toggle-panel toggle-right">
//                     <img src="./recursos/img/pre-logo.svg" alt="" class="imagen-form-login">
//                     <h2>¿Estás listo para ingresar a CVS?
//                     </h2>
//                     <p>No olvides copiar las credenciales.</p>
//                     <button class="btn login-btn">Ingresar</button>
//                 </div>
//             </div>
//         </div>
//     </main>
//     <!-- Etiquetas cuando se activa una alerta -->
//     <div id="contenido" class="contenido"></div>
//     <div id="alerta-personalizada" class="alerta-personalizada">
//         <div class="contenido-alerta-personalizada">
//         <h2 id="titulo-alerta-personalizada"></h2>
//         <p id="mensaje-alerta-personalizada"></p>
//         <button id="boton-alerta-personalizada" onclick="redirigir()">Aceptar</button>
//     </div>
//     <script>
//         const container = document.querySelector('.container');
//         const registrationBtn = document.querySelector('.register-btn');
//         const loginBtn = document.querySelector('.login-btn');

//         registrationBtn.addEventListener('click',()=>{
//             container.classList.add('active');
//         })

//         loginBtn.addEventListener('click',()=>{
//             container.classList.remove('active');
//         })
//     </script>
//     <!-- Fin de Etiquetas cuando se activa una alerta -->
//     <!-- Activación del Script si el velor 'arlert' esta activo -->
//     <% if (typeof alert != 'undefined') { %>
//         <script>
//             // Activo el estilo bloqueado, '#contenido' por 'alertas.css'
//             document.getElementById('contenido').style.display = 'block';
//             // Activo el estilo bloqueado, '#alerta-personalizada' por 'alertas.css'
//             document.getElementById('alerta-personalizada').style.display = 'block';
//             // Agrego texto a la etiqueta con la ID '#titulo-alerta-personalizada'
//             document.getElementById('titulo-alerta-personalizada').innerText = '<%= alert.alertTitle %>';
//             // Agrego texto a la etiqueta con la ID '#mensaje-alerta-personalizada'
//             document.getElementById('mensaje-alerta-personalizada').innerText = '<%= alert.alertMessage %>';
//             // Agrego una clase a la etiqueca con la ID '#alerta-personalizada' para cambiar el color de la alerta
//             document.getElementById('alerta-personalizada').classList.add('<%= alert.type %>');
//             if ('<%= alert.type %>' === 'error' || '<%= alert.type %>' === 'aviso' || '<%= alert.type %>' === 'obligatorio') {
//                 // Mostrar el botón en caso de error o advertencia
//                 document.getElementById('boton-alerta-personalizada').style.display = 'block';
//             }
//             if ('<%= alert.type %>' === 'exito') {
//                 setTimeout(function(){
//                     // Redireccionar a la página principal después de 1500 milisegundos en caso de éxito
//                     window.location.href = '/';
//                 }, 1500);
//             }
//             // Función para redirigir a la ruta '/'
//             function redirigir() {
//                 // Carga la ventana en la ruta '/'
//                 window.location.href = '/';
//             }
//         </script>
//     <% } %>
//     <!-- Fin de Activación del Script si el velor 'arlert' esta activo -->
//     <script>
//         function copyText(id, button) {
//             // Obtén el elemento del párrafo con el ID proporcionado
//             var element = document.getElementById(id);

//             // Crea un elemento de texto temporal
//             var tempInput = document.createElement("input");
//             tempInput.value = element.textContent;
//             document.body.appendChild(tempInput);

//             // Selecciona el texto del elemento temporal
//             tempInput.select();
//             document.execCommand("copy");

//             // Elimina el elemento temporal
//             document.body.removeChild(tempInput);

//             if (id === 'correo1' || id === 'correo2') {
//                 button.value = "¡Correo copiado!";
//             } else if (id === 'clave1') {
//                 button.value = "¡Contraseña copiada!";
//             }
//         }   

//         function clearMessages() {
//             // Limpiar los mensajes de los botones
//             const buttons = document.querySelectorAll('.btn-credenciales');
//             buttons.forEach(button => {
//                 button.value = button.getAttribute('data-original-text'); // Restablecer al valor original
//             });
//         }
//     </script>
// </body>
// </html>