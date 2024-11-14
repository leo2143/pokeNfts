export class PokemonModel {
    constructor(id,name, description, image, pokemonTypes = [], price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.pokemonTypes = pokemonTypes;
        this.price = price;
    }
}

