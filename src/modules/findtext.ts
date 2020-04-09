export class FindText {
    /**
     * 検索処理を実行
     * @param tabId 対象タブ
     * @param text 検索ワード
     * @return テキストノードポジション | undefined
     */
    static async findText(tabId: number, text: string): Promise<number | undefined> {
        const found = await browser.find.find(text, {tabId: tabId, includeRangeData: true, includeRectData: true})
        if (found.count > 0) {
            browser.find.highlightResults({tabId: tabId, noScroll: false})
            const range = found.rangeData?.shift()
            if (range) {
                return range.startTextNodePos
            }
        }
    }

    /**
     * ブラウザを所定位置にスクロールする
     * @param document
     * @param pos
     */
    static scrollTo(document: Document, pos: number) {
        const walker = document.createTreeWalker(document, window.NodeFilter.SHOW_TEXT);
        let found: Node | null = null
        for (let i = 0; i <= pos; ++i) {
            found = walker.nextNode()
        }
        if (found?.parentElement != null) {
            found.parentElement.scrollIntoView()
        }
    }

    /**
     * ブラウザが文字列選択中であればそれを検索ハッシュ化してリロードする
     * @param document
     * @return ハッシュ化したか否か
     */
    static hashSelection(document: Document): boolean {
        const encoded = document.getSelection()?.toString() ?? ''
        if (encoded != '') {
            const text = encodeURI(encoded)
            document.location.hash = `#:~:text=${text}`
            document.location.reload()
            return true
        } else {
            return false
        }
    }
}
