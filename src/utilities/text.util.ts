export function upperCaseFirstLetter(text: string, { onlyFirstWord } = { onlyFirstWord: false }): string {
    if (onlyFirstWord) return text.charAt(0).toUpperCase() + text.slice(1);

    return text.replace(/\b\w/g, (char) => char.toUpperCase());
}
