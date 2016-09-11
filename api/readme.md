# kasprzakCMS API
Backend for kasprzakCMS

## Installation
 * `composer install` to install required dependencies
 * `php key:generate` to generate encryption keys
 * `php artisan passport:install`
 * `php artisan migrate` to create database tables
 * `php artisan db:seed` (optional) to seed database with demo data
 
## Environment
Server environment should be configured in `.env` (look to `.env.example` for inspiration)