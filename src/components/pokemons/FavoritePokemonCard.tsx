import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";


interface Props {
    pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {

    const [isVisible, setIsVisible] = createSignal(true);
    const BASE_URL_IMAGE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]") as FavoritePokemon[];
        const updatedFavorites = favorites.filter((fav) => fav.id !== pokemon.id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center mt-5">
                <a href={`/pokemon/${pokemon.id}`} class="capitalize shadow-lg rounded-lg p-4 bg-slate-800 hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center">
                    <img
                        src={BASE_URL_IMAGE}
                        alt={pokemon.name}
                        class="w-24 h-24 mb-2"
                        style={`view-transition-name: ${pokemon.name}-image`}
                    />
                    <p class="text-center font-light">#{pokemon.id} {pokemon.name}</p>
                </a>
                <button class="mt-2 p-2 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors duration-300" onclick={deleteFavorite}>Borrar</button>
            </div>
        </Show>
    );
}