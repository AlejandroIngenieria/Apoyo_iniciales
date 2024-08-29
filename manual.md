# Actividad contenedores

Esta guia se estara trabajando en el sistema operativo Linux en su distribucion Ubuntu 24.04.

## Aplicacion servidor
### CRUD de usuarios

Al solicitar un CRUD de usuarios, se refiere a que incorporten la estructura basica en el manejo de datosm que equivaldria a:
**C**: Create   ->  Crear
**R**: Read     ->  Leer
**U**: Update   ->  Actualizar
**D**: Delete   ->  Borrar
Para el desarrollo de la aplicacion del servidor se le dan las opciones de implementar el uso de NodeJS (JavaScript) o Flask (Python).

### Instalacion de NodeJS en ubuntu

1. Actualizar programas y paquetes de Ubuntu
```bash
sudo apt-get update
sudo apt-get upgrade
```
2. Intalar Nodejs con curl
```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs
```
3. Verificar instalaciones
```bash
node -v
npm -v
```
### Configurando entorno con NodeJS

1. Configuración del entorno con npm
```bash
npm init -y
```

2. Configurar en el archivo **packege.json** con **“type”: “module”**
```json
{
"name": "mi-backend-esm",
"version": "1.0.0",
"description": "",
"main": "index.js",
"type": "module", // <- Añade esta línea
"scripts": {
"start": "node index.js"
},
"keywords": [],
"author": "",
"license": "ISC"
}
```

### Creacion de la aplicacion
Al aplicar el cambio en el **packege.json** podremos llamar a nuestros packetes de una forma mas sencilla usando los "imports".
#### 1. Instalacion del paquete [express].

Para instalar paquetes o herramientas usamos **npm**:
```bash
    npm i express
```
[express]:https://www.npmjs.com/package/express

#### 2. Desarrollo de la aplicacion con express
Para el desarrollo de la aplicacion es importante que conoscas conceptos como:

**Request -> Solicitud**: una solicitud HTTP es un mensaje que envía un cliente (normalmente un navegador web) a un servidor para recuperar o enviar datos, para facilitar los mensajes por parte del servidor se usan [estados]. Consta de un método (p. ej., GET, POST, PUT, DELETE), una URL solicitada y varios encabezados que proporcionan información adicional sobre la solicitud.

[estados]:https://http.dev/status

**Response -> Respuesta**: una respuesta HTTP es un mensaje que envía un servidor a un cliente en respuesta a una solicitud HTTP. Consta de un código de estado (p. ej., 200 OK, 404 Not Found), un tipo MIME que indica el formato del cuerpo de la respuesta y varios encabezados que proporcionan información adicional sobre la respuesta.

**API (interfaz de programación de aplicaciones)**: una API es un conjunto de reglas definidas que permite que diferentes aplicaciones, servicios o sistemas se comuniquen entre sí. En el contexto de HTTP, las API se pueden utilizar para acceder a recursos o funciones específicas en un servidor, como obtener datos o realizar acciones.

**Ports -> Puertos**: en el contexto de la comunicación de red, los puertos se refieren a canales lógicos dentro de una dirección IP. Cada puerto se asigna a un proceso o servicio específico, lo que permite que varios servicios se ejecuten simultáneamente en la misma dirección IP. En HTTP, el puerto predeterminado para comunicarse con un servidor web es 80 para HTTP y 443 para HTTPS.

Para ver el ejemplo da [click aqui]

[click aqui]:backend


## Aplicacion cliente

## Base de datos
