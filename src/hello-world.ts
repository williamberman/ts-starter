export class Greeter {
    constructor(private readonly name: string) {
    }

    greet() {
        return 'Hello world: ' + this.name
    }
}
