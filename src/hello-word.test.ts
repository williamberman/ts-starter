import { Greeter } from './hello-world'

describe('Hello world', () => {
    let greeter: Greeter

    beforeEach(() => {
        greeter = new Greeter('William')
    })

    test('Greets William', () => {
        expect(greeter.greet()).toEqual('Hello world: William')
    })
})
