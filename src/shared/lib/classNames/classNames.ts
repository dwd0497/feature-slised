export function classNames(
    cls: string = '',
    mods: Record<string, boolean | string> = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([key]) => key),
        ...additional,
    ].join(' ').trim();
}
