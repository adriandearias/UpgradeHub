symfony new MyFirstSimfonyProject
symfony server:start -d


composer require symfony/maker-bundle --dev
symfony console make:controller DefaultController


composer require twig
composer require doctrine


CREATE BBDD doctrine

Apache config -> $cfg['Servers'][$i]['host'] = '127.0.0.1:3360';
DATABASE_URL="mysql://root:@127.0.0.1:3360/pokemonbbdd"
php bin/console doctrine:database:create

