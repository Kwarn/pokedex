import { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonRow from "../pokemonRow/PokemonRow";
import { PokeDexTableProps } from "./types";
import { PokemonType } from "../../store/types";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  margin: 10px 50px;

  thead tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    th {
      width: 200px;
      text-align: left;
    }
  }
`;

const PokeDexTable = ({ pokemon, selectedType }: PokeDexTableProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonType[] | null>(
    null
  );

  useEffect(() => {
    if (!selectedType || selectedType === "all") {
      return setSelectedPokemon(pokemon);
    }
    setSelectedPokemon(
      pokemon.filter((poke) => poke.types.includes(selectedType))
    );
  }, [selectedType, pokemon]);

  return (
    <StyledWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type/s</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {selectedPokemon?.map((poke) => (
            <PokemonRow key={poke.id} pokemon={poke} />
          ))}
        </tbody>
      </StyledTable>
    </StyledWrapper>
  );
};

export default PokeDexTable;
