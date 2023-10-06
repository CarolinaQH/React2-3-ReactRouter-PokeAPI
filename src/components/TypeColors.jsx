const TypeColor = (type) => {
    switch (type) {
        case 'normal':
            return { name: 'Normal', color: '#a0a3a0' };
        case 'fire':
            return { name: 'Fire', color: '#e72324' };
        case 'water':
            return { name: 'Water', color: '#2481ef' };
        case 'grass':
            return { name: 'Grass', color: '#3da324' };
        case 'poison':
            return { name: 'Poison', color: '#923fcc' };
        case 'flying':
            return { name: 'Flying', color: '#82baef' };
        case 'bug':
            return { name: 'Bug', color: '#92a312' };
        case 'fighting':
            return { name: 'Fighting', color: '#ff8100' };
        case 'psychic':
            return { name: 'Psychic', color: '#ef3f7a' };
        case 'electric':
            return { name: 'Electric', color: '#fac100' };
        case 'ground':
            return { name: 'Ground', color: '#92501b' };
        case 'fairy':
            return { name: 'Fairy', color: '#ef71ef' };
        case 'rock':
            return { name: 'Rock', color: '#b1ab82' };
        case 'steel':
            return { name: 'Steel', color: '#60a3b9' };
        case 'ice':
            return { name: 'Ice', color: '#3dd9ff' };
        case 'ghost':
            return { name: 'Ghost', color: '#713f71' };
        case 'dragon':
            return { name: 'Dragon', color: '#4f60e2' };
        default:
            return { name: 'Unknown', color: 'grey' };
    }
}

export default TypeColor;