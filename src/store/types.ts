export type PokemonStoreType = {
  pokemon: PokemonType[];
  selectedType: string | null;
  setSelectedType: (type: string) => void;
};

export type PokemonType = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
};
