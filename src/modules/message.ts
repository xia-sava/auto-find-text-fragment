
export enum MessageType {
    hashSelection = 'hashSelection',
}

export abstract class Message {
    type: MessageType;
    tabId: number;

    protected constructor(type: MessageType, tabId: number) {
        this.type = type;
        this.tabId = tabId;
    }
}

export class HashSelectionMessage extends Message {
    constructor(tabId: number) {
        super(MessageType.hashSelection, tabId);
    }
}
