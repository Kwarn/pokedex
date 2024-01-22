import PokemonTypeSelection from "../pokemonTypeSelection/PokemonTypeSelection";
import PokeDexTable from "../pokeDexTable/PokeDexTable";
import { usePokemonStore } from "../../store/usePokemonStore";

const FilterablePokedexTable = () => {
  const [pokemon, selectedType, setSelectedType] = usePokemonStore((state) => [
    state.pokemon,
    state.selectedType,
    state.setSelectedType,
  ]);

  return (
    <>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
        pokemon={pokemon}
      />
      <PokeDexTable pokemon={pokemon} selectedType={selectedType} />
    </>
  );
};

export default FilterablePokedexTable;
