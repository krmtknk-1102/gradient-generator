// ============================================================
// サムネ描画オプション
// ============================================================

// フォント
export const fonts = [
  // ゴシック
  { id: 'Noto Sans JP',           label: 'Noto Sans JP',        tag: 'ゴシック' },
  { id: 'Zen Kaku Gothic New',    label: 'Zen Kaku Gothic',     tag: '角ゴシック' },
  { id: 'WDXL Lubrifont JP N',    label: 'WDXL ルブリフォント',  tag: 'ゴシック' },
  { id: 'BIZ UDPGothic',         label: 'BIZ UDPGothic',      tag: 'UDゴシック' },
  { id: 'Zen Kaku Gothic Antique',label: 'Zen Kaku Antique',    tag: 'レトロゴシック' },
  { id: 'M PLUS 2',               label: 'M PLUS 2',            tag: 'ゴシック' },
  { id: 'Murecho',                label: 'Murecho',             tag: 'ゴシック' },

  // 丸ゴシック
  { id: 'M PLUS Rounded 1c',      label: 'M PLUS Rounded 1c',  tag: '丸ゴシック' },
  { id: 'Kiwi Maru',              label: 'Kiwi Maru',          tag: '丸ゴシック' },
  { id: 'Zen Maru Gothic',        label: 'Zen Maru Gothic',    tag: '丸ゴシック' },
  { id: 'M PLUS 1',               label: 'M PLUS 1',           tag: '丸ゴシック' },
  { id: 'Kosugi Maru',            label: 'Kosugi Maru',        tag: '丸ゴシック' },

  // 明朝
  { id: 'Noto Serif JP',          label: 'Noto Serif JP',       tag: '明朝' },
  { id: 'Shippori Mincho',        label: 'Shippori Mincho',     tag: '明朝' },

  // デザイン明朝
  { id: 'Kaisei Decol',           label: 'Kaisei Decol',        tag: 'デザイン明朝' },
  { id: 'Kaisei HarunoUmi',       label: '春乃海海星',           tag: 'デザイン明朝' },

  // 毛筆
  { id: 'Yuji Boku',              label: '朴裕二',              tag: '毛筆' },
  { id: 'Yuji Mai',               label: 'Yuji Mai',            tag: '毛筆' },

  // 手書き
  { id: 'Yusei Magic',            label: 'Yusei Magic',         tag: '手書き' },
  { id: 'Zen Kurenaido',          label: 'Zen Kurenaido',       tag: '手書き' },

  // ポップ
  { id: 'Hachi Maru Pop',         label: 'Hachi Maru Pop',      tag: 'ポップ' },
  { id: 'RocknRoll One',          label: 'RocknRoll One',       tag: 'ポップゴシック' },
  { id: 'Dela Gothic One',        label: 'デラ・ゴシック',       tag: 'インパクト' },

  // ドット
  { id: 'DotGothic16',            label: 'DotGothic16',         tag: 'ドット' },

  // 欧文
  { id: 'Oswald',                 label: 'Oswald',              tag: '欧文' },
  { id: 'Playfair Display',       label: 'Playfair Display',    tag: '欧文セリフ' },
  { id: 'Bebas Neue',             label: 'Bebas Neue',          tag: '欧文' },
]

// グラデーション
export const gradTypes = [
  { id: 'linear',        label: 'リニア' },
  { id: 'radial',        label: '放射状（中心）' },
  { id: 'radial-corner', label: '放射状（コーナー）' },
  { id: 'conic',         label: 'コニック' },
  { id: 'wave',          label: 'ウェーブ' },
  { id: 'diagonal-wave', label: '斜めウェーブ' },
  { id: 'soft-blob',     label: 'ソフトブロブ' },
]

// パターン
export const patternDefs = [
  { id: 'solid',      label: '単色' },
  { id: 'grid',       label: '方眼' },
  { id: 'grid-fine',  label: '細方眼' },
  { id: 'dot',        label: 'ドット' },
  { id: 'dot-large',  label: '大ドット' },
  { id: 'h-border',   label: '横ボーダー' },
  { id: 'v-border',   label: '縦ボーダー' },
  { id: 'diagonal',   label: '斜線' },
  { id: 'cross-dot',  label: 'クロスドット' },
]