FROM phpdockerio/php71-fpm:latest

# Install selected extensions and other stuff
RUN apt-get update \
    && apt-get -y --no-install-recommends install  php-memcached php7.1-mysql php-redis php7.1-sqlite3 php7.1-mbstring php-xdebug \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

WORKDIR "/var/www/cms"
ONBUILD RUN php artisan clear-compiled
ONBUILD RUN php artisan optimize
ONBUILD RUN php artisan config:cache