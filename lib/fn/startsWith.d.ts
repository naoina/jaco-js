/**
 * 引数に指定された文字列が先頭と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 先頭の位置
 */
export default function (str: string, search: {
    toString(): string;
}, position?: number): boolean;
