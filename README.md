# Para crear los modelos usar el cli de Sequelize

### https://sequelize.org/master/manual/migrations.html

## De esta manera se puede crear un modelo junto con su migración

`npx sequelize-cli model:generate --name StatusTable --attributes name:string,description:string`

> Esto creara el modelo StatusTable con los atributos

- id como PK Y AI
- createdAt
- updatedAt
- name: string
- description: string

> Esto tambien creara su migracion

`npx sequelize-cli db:migrate`

### Esto migrara aquellos cambios que no se hayan migrado aun de esta manera se mantedra el diseño de base de datos
