function CharacterCard({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species} - {character.status}</p>
    </div>
  );
}

export default CharacterCard;