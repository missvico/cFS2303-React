

function CharacterCard({character}) {   
  
    return (
      <div class="col m-3">
        <div class="card" style={{width: "18rem"}}>
          <div class="card-header">{character.name}</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Birth Year: {character.birth_year || "unknown"}</li>
            <li class="list-group-item">Height: {character.height || "unknown"}</li>
            <li class="list-group-item">Mass: {character.mass || "unknown"}</li>
          </ul>
        </div>
      </div>
  );
}

export default CharacterCard;

