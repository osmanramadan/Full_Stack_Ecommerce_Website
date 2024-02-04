##### Storefront Backend Project ########

- this project made by nodejs framework as backend for a frontend project

## Required Technologies

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

# Installation Instructions

# important Packages installation #

## all

`npm install`

## express

`npm i -S express`
``

## typescript

`npm i -D typescript`

## db-migrate

`npm install -g db-migrate`

## rimraf

`npm install --save rimraf`

## cors

`npm install --save cors`

## bcrypt

`npm -i bcrypt`
`npm -i -D @types/bcrypt`

## jsonwebtoken

`npm install jsonwebtoken --sav`
`npm -i -D @types/jsonwebtoken`

## jasmine

`npm install jasmine @types/jasmine  ts-node --save-dev`

## supertest

`npm i supertest`
`npm i --save-dev @types/supertest`

# set up database  


- create database and name it (storefront), create new user `CREATE USER storefront WITH PASSWORD 'storefront';`
- In psql run the following to create the dev and test database
  - `CREATE DATABASE storefront;`
  - `CREATE DATABASE test_storefront;`
- Connect to the databases and grant all privileges
  - Grant for dev database
    - `\c storefront`
    - `GRANT ALL PRIVILEGES ON DATABASE storefront TO storefront;`
  - Grant for test database
    - `\c test_storefront`
    - `GRANT ALL PRIVILEGES ON DATABASE test_storefront TO storefront;`

### Migrate Database


- db-migrate create users --sql-file
- db-migrate create products --sql-file
- db-migrate create orders --sql-file <br>

- db-migrate up   =>create tables <br>
- db-migrate down =>delete tables

# Set up Enviromental Variables Set

- bollow are the environmental variables that needs to be set in a <span style="color:red;">`.env`<span> file.

  - POSTGRES_HOST=localhost
  - DEV_POSTGRES_DB=storefront
  - TEST_POSTGRES_DB=test_storefront
  - POSTGRES_USER=storefront
  - POSTGRES_PASSWORD=storefront
  - NODE_ENV=dev
  - TOKEN_SECRET=osmkjijiuihjijy8y6t5565ijimklmlklkpanmamfohko3!
  - BCRYPT_PASSWORD=pmkmkmknjnjh87333ll
  - SALT_ROUNDS=10

# Start App

-`yarn watch` or `npm run watch`
-`yarn start_server` or `npm run start_server`

# Running Ports

- After start up, the server will start on port `4000` and the database on port `5432`

# Endpoint Access

- All endpoints and methods are described in the [REQUIREMENT.md] file.

# Token and authorization

- Tokens are passed along with the http header as Authorization   Bearer <token>

# Testing

- i used jasmine for testing endpoints
- for simple testing `npm run test1`
- for switch between databases (test_storefront,storefront) and the two environments (dev,test) use: `npm run test2` <br>

<h3>1)notice that</h3>:---> you should insert the same values in database to pass
successfully all specs(testing units) in my testing folder <br>
<h3>2)notice that</h3>:---> you should redefine or delete (abortsignal) from typescript definiations when convert from  typescript to javascript
