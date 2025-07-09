-- por conta do volume em docker-compose essa pasta vai rodar setup.sql vai ser jogado dentro de um container do pgvector
--Isso vai fazer com que o setup.sql seja rodado assim que o conteiner subir

CREATE EXTENSION IF NOT EXIST vector; --vai ativar a extensão de vetores dentro do postgres