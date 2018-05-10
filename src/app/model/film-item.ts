export class FilmItem {
    id: string;
    title: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    score: string;
    constructor(params: { id, title, description, director, producer, release_date, score }) {
        this.id = params.id;
        this.title = params.title;
        this.description = params.description;
        this.director = params.director;
        this.producer = params.producer;
        this.release_date = params.release_date;
        this.score = params.score;
    }
}
