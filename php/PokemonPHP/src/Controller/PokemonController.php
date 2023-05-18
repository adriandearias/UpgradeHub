<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PokemonController extends AbstractController
{
    #[Route("/")]
    public function home()
    {
        return new Response("Esta es la home");
    }

    #[Route("/pokemon")]
    public function getPokemon()
    {
        $pokemon = [
            "name" => "Bergmite",
            "description" => "Vive en zonas montañosas extremadamente frías, pero en raras ocasiones migra cruzando el mar a lomos de un Avalugg. ",
            "image" => "https://assets.pokemon.com/assets/cms2/img/pokedex/full/712.png",
            "code" => "0712"
        ];

        return $this->render(
            "pokemon/getPokemon.html.twig",
            ["pokemon"=>$pokemon]
        );
    }

    #[Route("/pokemons")]
    public function listPokemons()
    {
        $pokemons = [
            [
                "name" => "Bergmite",
                "description" => "Vive en zonas montañosas extremadamente frías, pero en raras ocasiones migra cruzando el mar a lomos de un Avalugg. ",
                "image" => "https://assets.pokemon.com/assets/cms2/img/pokedex/full/712.png",
                "code" => "0712"
            ],
            [
                "name" => "Kabutops",
                "description" => "Vive en zonas montañosas extremadamente frías, pero en raras ocasiones migra cruzando el mar a lomos de un Avalugg. ",
                "image" => "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
                "code" => "0712"
            ],
            [
                "name" => "Zamazenta",
                "description" => "Este Pokémon se erigió en salvador de Galar, tras unir fuerzas con un rey de los hombres. Absorbe el metal para utilizarlo en combate. ",
                "image" => "https://assets.pokemon.com/assets/cms2/img/pokedex/full/889.png",
                "code" => "0712"
            ],
            [
                "name" => "Hakamo-o",
                "description" => "Como prueba de su fuerza, muestra orgulloso a quienes vence las cicatrices de su cuerpo donde ya no tiene escamas. ",
                "image" => "https://assets.pokemon.com/assets/cms2/img/pokedex/full/783.png",
                "code" => "0712"
            ]
        ];

        return $this->render(
            "pokemon/listPokemons.html.twig",
            ["pokemons" => $pokemons]
        );
    }
}
