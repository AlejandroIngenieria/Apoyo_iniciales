# Guia para proyecto final - Fase 1

1. [**Servidor de virtualizacion**](#1-servidor-de-virtualizacion-10-puntos)
2. [**Servidor de usuarios**](#2-servidor-de-usuarios-40-puntos)
3. [**Recursos compartidos**](#3-recursos-compartidos-10-puntos)
4. [**Servidor de correo electronico**](#4-servidor-de-correo-electrónico-10-puntos)
5. [**Servidor web**](#6-servidor-web-20-puntos)
6. [**Servidor FTP**](#8-servidor-ftp-6-puntos)

## 1. Servidor de virtualizacion (10 puntos)
Les recomiendo usar [Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads), es el mas estable y el mas popular por lo que encontraran mas documentacion en dado caso les de algun problema al instalarlo o al correr alguna imagen.

>Servidor virtual
* ISO: [Windows server 2012 ISO](https://www.microsoft.com/es-es/evalcenter/download-windows-server-2012-r2). Video de apoyo: [Ver video](https://www.youtube.com/watch?v=_pW4Zr2ju8M)

>Cliente
* [Windows varias versiones ISO](https://www.microsoft.com/es-es/software-download), descarguen la imagen que mas les convenga de windows.


**Comprobar conexion entre cliente-servidor**
Realizar ping para demostrar la interacccion entre ambos.

## 2. Servidor de Usuarios (40 puntos)

>a. Configurar DNS (8 puntos)
   - Configura un DNS para el dominio **servidor1.com**.
   - Usa el servicio DNS que se instala con **Active Directory Domain Services (AD DS)**.

>b. Configurar Active Directory (8 puntos)
   - Instala **Active Directory Domain Services (AD DS)** en Windows Server 2012.
   - Crea un dominio llamado **servidor1.com** y promueve el servidor a **controlador de dominio**.

>c. Crear dos cuentas de usuario en Active Directory (8 puntos)
   - Crea las siguientes cuentas de usuario en **AD**:
     - **usuario1**: `usuario1@servidor1.com`
     - **usuario2**: `usuario2@servidor1.com`
   - Asigna contraseñas a ambos usuarios.

>d. Crear una política de grupo global (8 puntos)
   - Crea una **Política de Grupo (GPO)**:
     - Configura el fondo de pantalla con el logo de la universidad.
     - Configura el navegador **Internet Explorer** con un título en la barra que diga "Política de Grupo".

>e. Configurar el servidor DHCP (8 puntos)
   - Instala y configura el **servidor DHCP**:
     - Asigna direcciones IP dinámicas en el rango `192.168.0.26 - 192.168.0.100`.
     - Reserva las direcciones `192.168.0.1 - 192.168.0.25` para uso estático.

## 3. Recursos Compartidos (10 puntos)

>a. Carpeta privada (5 puntos)
   - Crea una carpeta privada accesible solo para **usuario1**.
   - Asigna permisos de lectura/escritura para **usuario1** y deniega acceso a otros usuarios.

>b. Carpeta pública (5 puntos)
   - Crea una carpeta pública accesible y modificable por todos los usuarios.
   - Asigna permisos de lectura, escritura y modificación a todos los usuarios.

## 4. Servidor de Correo Electrónico (10 puntos)

>a. Configurar servicio de correo (POP3/SMTP) en Windows Server
   - Instala y configura los servicios de correo electrónico compatibles con **Windows Server 2012**.
   - Nombre del dominio **servidor1.com**
   - Crea las cuentas de correo para los usuarios:
     - **correo1**: `correo1@servidor1.com`
     - **correo2**: `correo2@servidor1.com` 
>b. Integrar las cuentas con Active Directory
   - Integra las cuentas de correo con las cuentas de usuario de **Active Directory**.
   - Configura un cliente de correo como **Thunderbird** para acceder a estas cuentas.

## 6. Servidor Web (20 puntos)

>a. Configurar sitio público (10 puntos)
   - Instala **IIS (Internet Information Services)** en Windows Server.
   - Crea un sitio web con la dirección:
     - **http://192.168.0.20/publicweb**.
   - El contenido de la página debe mostrar el mensaje "Carpeta Pública".

>b. Configurar sitio privado (10 puntos)
   - Crea otro sitio web en IIS, protegido por autenticación, en el puerto **1080**:
     - **http://192.168.0.20/privadaweb**.
   - Configura autenticación básica para que solo **usuario1** pueda acceder con su contraseña.
   - El contenido debe mostrar el mensaje "Carpeta Privada".

>c. Configurar el sitio web de reenvio
   - Crea un sitio web de reenvío en IIS.
   - Asegúrate de que Redirigir con un código de estado HTTP.

## 8. Servidor FTP (6 puntos)

>a. Configurar FTP
   - Instala el servicio **FTP** en IIS.
   - Configura el servidor FTP para permitir acceso a **usuario1** y **usuario2**.
   - Permite acceso de lectura y escritura a la carpeta pública para ambos usuarios.
