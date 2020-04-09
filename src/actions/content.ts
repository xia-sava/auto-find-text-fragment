
import {Message, MessageType} from "../modules/message";

browser.runtime.onMessage.addListener((message: Message) => {
    switch (message.type) {
        case MessageType.hashSelection:
            console.log(message);
            break;
    }
});
