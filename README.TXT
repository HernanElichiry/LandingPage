

git clone <url_del_repositorio>: Clona un repositorio remoto en tu máquina local.
git checkout -b <nombre_de_la_rama>: Crea una nueva rama y cambia a ella.
git checkout <nombre_de_la_rama>: Cambia de una rama a otra.
git add <archivo(s)>: Agrega cambios al área de preparación (stage) para el próximo commit.
git commit -m "Mensaje del commit": Guarda los cambios confirmados en el repositorio con un mensaje descriptivo.
git push <nombre_del_repositorio_remoto> <nombre_de_la_rama>: Envía tus cambios locales a un repositorio remoto en una rama específica.
git pull <nombre_del_repositorio_remoto> <nombre_de_la_rama>: Obtiene los cambios más recientes del repositorio remoto y los fusiona automáticamente con tu rama local.
git status: Muestra el estado de los archivos y las ramas en el repositorio.
git log: Muestra un registro de los commits realizados en la rama actual, incluyendo detalles como el autor, la fecha y el mensaje del commit.


Crear un nuevo proyecto:

git init
git add <archivo(s)>
git commit -m "Mensaje del commit"
Guardar el proyecto en un repositorio existente:

git remote add <nombre_del_repositorio_remoto> <url_del_repositorio_remoto>
git push <nombre_del_repositorio_remoto> <nombre_de_la_rama>

git push --set-upstream origin Diego