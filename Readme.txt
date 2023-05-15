-Para poder hacer uso correcto de la pagina realmente no hay que instalar nada, pues el proyecto 
ya viene incluido con Boostrap dentro de sus carpetas, asi que realmente no hay problema con eso, aun
asi, en este archivo daremos un instructivo para como subirlo a un hosting (github).

-Primero se requiere de crear una cuenta de github e instalar GitBash y crear un repositorio
en github, una vez hecho esto se debe de ir a la carpeta del proyecto y dar click izquierdo y darle a 
la opcion "gitbash here"

-Una vez hecho se debe de escribir los siguientes comandos:
git init (esto para inicializar el github)
git status (para revisar que no se hayan realizado commits aun)
git add. (para agregar todas las carpetas y cosas incluidas en el proyecto)

-Luego de esto hacemos uso del comando git commit -m "comentario" (entre comillas
va el comentario que desee)

-En caso de que no este logeado en su cuenta de Github, tendra que usar los siguientes
comandos:
git config --global user.mail ejemplo@gmail.com (Cuenta con la cual se registro)
git config --global user.name "Su nombre de usuario"

-Una vez hecho esto debe de agregar el comando git commit otra vez

-Lo siguiente a realizar es usar el comando:
git branch -M main

-Y luego de esto de git remote add origin que de el repositorio creado, por ejemplo:
git remote add origin https://github.com/user/Ejemplo.git

-Luego de esto debe de escribir el siguiente comando:
git push -u origin main

Y ya con esto habra subido el proyecto a una carpeta de github, lo siguiente
es hacer uso de la herramienta de Git para obtener hosting por medio del sitio

-Tendra que ir a la carpeta donde esta su repositorio con su proyecto, una vez ahi ira a opciones y
en opciones buscara la pestaña de pages, en esa opcion podra ver que hay una seccion llamada
"Branch", lo que usted debe de hacer es activar esta y ponerla en la opcion main (es el desplegable
que hay), luego de eso tendra que guardar y recargar la pagina, con esto la misma seccion de
page le dira el link con el cual puede acceder a su sitio

-El link del sitio subido a un hosting (en este caso github) es el siguiente:
https://juandiegorodriguezr.github.io/ReestructuracionSavillaJuanDiegoRodriguezR.github.io/


Grupo conformado por:
Daniel Gonzales Casilimas
Jonathan David Guerrero Gomez
Juan Diego Rodriguez Riaño
