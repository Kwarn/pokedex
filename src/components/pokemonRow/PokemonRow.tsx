import { PokemonRowProps } from "./types";
import styled from "styled-components";

const StyledRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  td {
    margin: 8px auto 8px auto;
    display: flex;
    flex-direction: row;
    border-bottom: 1px dotted grey;
    width: 200px;
    height: 50px;
    align-items: center;
    p {
      margin: 0;
      padding: 0;
    }
    img {
      width: 100%;
      height: 50px;
      object-fit: contain;
    }
  }
`;

const PokemonRow = ({ pokemon }: PokemonRowProps) => {
  const { id, name, types, sprite } = pokemon;
  return (
    <StyledRow>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <p>{types.join(", ")}</p>
      </td>
      <td>
        <img src={sprite} alt={`${name} pokemon`} />
      </td>
    </StyledRow>
  );
};

export default PokemonRow;
