# kasprzakCMS API
Backend for kasprzakCMS

## Requirements
 * PHP 7+
 * MySQL 5.5+
 * [DEV] [Docker](https://docs.docker.com/compose/install/)

## Installation
 * `composer install` to install required dependencies
 * `php artisan optimize` to compile classes
 * `php artisan key:generate` to generate encryption keys
 * `php artisan migrate` to create database tables
 * `php artisan db:seed` (optional) to seed database with demo data
 
## Environment
Server environment should be configured in `.env` (look to `.env.example` for inspiration)

## Development

Make sure to have Docker installed.  

 * `./api up` to start server
 * `./api art migrate:refresh --seed` to migrate database and seed demo data  
 * `./api stop` to stop server after development session
 
Raw commands

 * `docker-compose up -d` to start api servers
 * `docker-compose stop` to stop servers
 * `docker-compose down` to destroy servers
 * `docker exec -it cms-php bash` to login to php container
 * `docker exec -it cms-php php artisan migrate:refresh --seed` to refresh migration
 
### Services exposed outside your environment 
 
 Service|Address outside containers
 ------|---------
 Webserver|[localhost:8080](http://localhost:8080)
 phpMyAdmin|[localhost:8081](http://localhost:8081)
 
### Hosts within your environment
 
 Service|Hostname|Port number
 ------|---------|-----------
 php-fpm|cms-php-fpm|9000
 MySQL|cms-mysql|3306 (default)
 Memcached|cms-memcached|11211 (default)
 Redis|cms-redis|6379 (default)