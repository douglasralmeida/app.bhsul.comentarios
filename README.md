# app.bhsul.comentarios
App de manipulação do feedback dos vistantes do Portal da BH Sul

Bibliotecas utilizadas:
* Node JS - http://nodejs.org/

Para implantar:
```
docker run --name app.bhsul.comentarios -d -p 8080:8080 --restart unless-stopped douglasralmeida/app.bhsul.comentarios
```

Para atualizar:
```
docker pull douglasralmeida/app.bhsul.comentarios
docker stop app.bhsul.comentarios
docker rm app.bhsul.comentarios
docker run --name app.bhsul.comentarios -d -p 8080:8080 --restart unless-stopped douglasralmeida/app.bhsul.comentarios
```