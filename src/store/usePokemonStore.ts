import { create } from "zustand";
import { PokemonStoreType } from "./types";

export const usePokemonStore = create<PokemonStoreType>()((set) => ({
  pokemon: [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass"],
      sprite:
        "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
    },
    {
      id: 2,
      name: "Charmander",
      types: ["fire"],
      sprite:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif",
    },
    {
      id: 3,
      name: "Squirtle",
      types: ["water"],
      sprite:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/a/a3/Squirtle.gif",
    },
    {
      id: 4,
      name: "Weedle",
      types: ["bug", "poison"],
      sprite:
        "https://archives.bulbagarden.net/media/upload/3/36/0013Weedle.png",
    },
    {
      id: 5,
      name: "Exeggutor",
      types: ["grass", "psychic"],
      sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    },
  ],
  selectedType: null,
  setSelectedType: (type: string) =>
    set(() => ({
      selectedType: type,
    })),
}));
