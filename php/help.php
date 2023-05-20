symfony new MyFirstSimfonyProject
symfony server:start -d

composer i 

composer require symfony/maker-bundle --dev
symfony console make:controller DefaultController


composer require twig
composer require doctrine


CREATE BBDD doctrine

Apache config -> $cfg['Servers'][$i]['host'] = '127.0.0.1:3360';
DATABASE_URL="mysql://root:@127.0.0.1:3360/pokemonbbdd"

php bin/console doctrine:database:create
php bin/console doctrine:database:migrations:migrate
php bin/console doctrine:fixtures:load

composer require symfony/maker-bundle --dev
php bin/console make:entity
php bin/console make:migration


composer require symfony/http-client