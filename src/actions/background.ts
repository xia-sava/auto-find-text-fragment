import {HashSelectionMessage} from "../modules/message";

/**
 * ツールボタンが押された時の処理
 *
 */
browser.browserAction.onClicked.addListener(async (tab) => {
    if (tab.id) {
        await browser.tabs.sendMessage(tab.id, new HashSelectionMessage(tab.id))
    }
});
