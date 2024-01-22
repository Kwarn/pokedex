import { PokemonType } from "../../store/types";

export interface PokeDexTableProps {
  pokemon: PokemonType[];
  selectedType: string | null;
}
