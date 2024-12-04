export class PokemonModel {
    constructor(id,name, description, image, pokemonTypes = [], price,artist,rarity,collection,limitEdition) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.pokemonTypes = pokemonTypes;
        this.price = price;
        this.artist=artist;
        this.rarity=rarity;
        this.collection=collection;
        this.limitEdition=limitEdition;

    }
}

