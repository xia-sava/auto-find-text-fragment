export enum MessageType {
    findText = 'findText',
    hashSelection = 'hashSelection',
    scrollTo = 'scrollTo',
}

export abstract class Message {
    type: MessageType;

    protected constructor(type: MessageType) {
        this.type = type;
    }
}

export class HashSelectionMessage extends Message {
    constructor() {
        super(MessageType.hashSelection);
    }
}

export class FindTextMessage extends Message {
    public text: string

    constructor(text: string) {
        super(MessageType.findText);
        this.text = text
    }
}

export class ScrollToMessage extends Message {
    public position: number

    constructor(pos: number) {
        super(MessageType.scrollTo);
        this.position = pos
    }
}
