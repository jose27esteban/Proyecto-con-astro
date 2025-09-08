import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritesPokemons = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    )

    return favoritesPokemons;
};

export const FavoriteList = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <For each={pokemons()}>
                {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
            </For>
        </div>
    )
}
