class HelloController {
    hello(name: string) {
        return `👋🏻 Hello, ${name}!`
    }

    hi(name: string) {
        return `👋🏻 Hi, ${name}!`
    }
}

export default new HelloController()