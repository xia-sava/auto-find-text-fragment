import {FindTextMessage, Message, MessageType, ScrollToMessage} from "../modules/message";
import {FindText} from "../modules/findtext";

/**
 * 検索を起動する
 */
async function findText() {
    const matches = location.hash.match(/^#:~:text=(.+)$/)
    if (matches) {
        await browser.runtime.sendMessage(new FindTextMessage(decodeURI(matches[1])))
    }
}

/**
 * BGからのメッセージ受信処理
 */
browser.runtime.onMessage.addListener(async (message: Message) => {
    switch (message.type) {
        // ボタンから選択領域をハッシュ化
        case MessageType.hashSelection:
            // 未選択状態の場合は既存ハッシュを再選択
            if (!FindText.hashSelection(document)) {
                await findText()
            }
            break
        // 画面内の所定位置にスクロール
        case MessageType.scrollTo:
            const pos = (message as ScrollToMessage).position
            FindText.scrollTo(document, pos)
            break
    }
})

/**
 * タブのロード時に検索を起動
 */
findText().then()
