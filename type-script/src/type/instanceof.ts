interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor (private unmSpace: number) {}
    getPaddingString() {
        return Array(this.unmSpace + 1).join(' ')
    }
}

class StringPadder implements Padder {
    constructor (private value: string) {}
    getPaddingString() {
        return this.value
    }
}

let padder: Padder = new SpaceRepeatingPadder(6)
let p: Padder = new StringPadder('p')

if(padder instanceof SpaceRepeatingPadder) {
    console.log(padder.getPaddingString().length)
    console.log(p.getPaddingString())
}