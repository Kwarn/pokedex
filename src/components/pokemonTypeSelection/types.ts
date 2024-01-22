import { PokemonType } from "../../store/types";

export interface PokemonTypeSelectionProps {
  pokemon: PokemonType[];
  selectedType: string | null;
  selectType: (type: string) => void;
}
