# 概要

Google Chrome の `#:~:text=` に近い挙動を Firefox で実現します．

# 詳細

## Scroll to Text

フラグメント `#:~:text=foobar` を持つ URL に遷移すると，
自動的に `foobar` をページ内検索し，マッチ箇所のうち先頭の位置へスクロールします．

![Scroll to Text](https://raw.githubusercontent.com/xia-sava/auto-find-text-fragment/master/docs/scroll-to-text.jpg)

## Selection to Fragment

ページ内で文字列を選択してアドオンボタンを押すと，
`#:~:text=foobar` フラグメントを生成してその URL に遷移し，
さらに URL をクリップボードにコピーします． 

![Selection to Fragment](https://raw.githubusercontent.com/xia-sava/auto-find-text-fragment/master/docs/selection-to-fragment.jpg)

# リンク

github: https://github.com/xia-sava/auto-find-text-fragment  
add-ons: https://addons.mozilla.org/firefox/addon/auto-find-text-fragment/

# アイコンの出典

Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
