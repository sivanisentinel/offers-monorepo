# OffersMonorepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `npx nx run offers-ui:serve --proxy-config proxy.conf.json` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



gen angular app:
@nrwl/angular:application



----
### Design decision-making
1. why relational DB / postgres ? cause the data is stuctured (known strict model)
   and sensitive so requires robust data integrity constraints and triggers, which help ensure data consistency and prevent data corruption.
2. In real world use case I would put a cache layer before hitting the DB in order to get quicker fetches and reduce load on my DB (ask chatgpt)
3. In real world I may choose a managed db instance 

###Postgres dev container

To have postgresql pull the image:

docker run --name postgres -e POSTGRES_PASSWORD=12345 -p 5432:5432 -d postgres

Interactively run:

docker exec -it postgres psql -U postgres

Create the DB:

CREATE DATABASE storedb;

➜  task npx node-pg-migrate create storedb  
➜  task export DATABASE_URL="postgres://postgres:12345@localhost:5432/storedb"

➜  task npx node-pg-migrate up

