class Category {
    #name;
    #description;

    constructor (name, description){
    this.name = name;
    this.description = description;
    }
}
class Coordinate {
    #latitude;
    #longitude;

    constructor (latitude, longitude){
    this.latitude = latitude;
    this.longitude = longitude;
    }
}
class Movie {
    #resource;
    #locations;

    constructor (resource, locations){
    this.resource = resource;
    this.locations = locations;
    }
}
class Person {
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    constructor (name, lastname1, lastname2, born,picture){
    this.name = name;
    this.lastname1 = lastname1;
    this.lastname2 = lastname2;
    this.born= born;
    this.picture = picture;
    }
}
class Production {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;

    constructor (title, nationality, publication, synopsis,image){
    this.title = title;
    this.nationality = nationality;
    this.publication = publication;
    this.synopsis= synopsis;
    this.image = image;
    }
}
class Resource {
    #duration;
    #link;

    constructor (duration, link){
    this.duration = duration;
    this.link = link;
    }
}
class Movie {
    #resource;
    #locations;
    #seasons;

    constructor (resource, locations,seasons){
    this.resource = resource;
    this.locations = locations;
    this.seasons = seasons;
    }
}
class User {
    #username;
    #email;
    #password;

    constructor (username, email,password){
    this.username = username;
    this.email = email;
    this.password = password;
    }
}
