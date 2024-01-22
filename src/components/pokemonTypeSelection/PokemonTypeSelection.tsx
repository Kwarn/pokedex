import { ChangeEvent } from "react";
import { PokemonTypeSelectionProps } from "./types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  h3 {
    margin-right: 8px;
  }
`;

const StyledSelect = styled.select`
  display: flex;
  width: px;
  height: 40px;
  align-self: center;
  align-items: center;
  padding: auto 4px;
  margin: 10px 0;
`;

const PokemonTypeSelection = ({
  pokemon,
  selectedType,
  selectType,
}: PokemonTypeSelectionProps) => {

  // this could be moved to a computed prop in the store using 'zustand-store-addons
  const uniqueTypes = Array.from(
    new Set(pokemon.map((poke) => poke.types).flat())
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    selectType(event.target?.value);
  };

  return (
    <StyledWrapper>
      <h3>Select pokemon by type</h3>
      <StyledSelect
        value={selectedType || undefined}
        onChange={handleChange}
        defaultValue={"all"}
      >
        <option value={"all"}>all</option>
        {uniqueTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </StyledSelect>
    </StyledWrapper>
  );
};

export default PokemonTypeSelection;
