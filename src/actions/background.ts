import {FindTextMessage, HashSelectionMessage, Message, MessageType, ScrollToMessage} from "../modules/message";
import {FindText} from "../modules/findtext";
import MessageSender = browser.runtime.MessageSender;

/**
 * ツールボタンが押された時の処理
 */
browser.browserAction.onClicked.addListener(async (tab) => {
    if (tab.id) {
        await browser.tabs.sendMessage(tab.id, new HashSelectionMessage())
    }
})

/**
 * タブ側からのメッセージ受信処理
 */
browser.runtime.onMessage.addListener(async (message: Message, sender: MessageSender) => {
    switch (message.type) {
        // ブラウザ検索機能を実行
        case MessageType.findText:
            const tabId = sender.tab?.id
            if (tabId) {
                const pos = await FindText.findText(tabId, (message as FindTextMessage).text)
                if (pos) {
                    await browser.tabs.sendMessage(tabId, new ScrollToMessage(pos))
                }
            }
            break
    }
})
