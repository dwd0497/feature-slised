export function classNames(cls: string, mods: Record<string, boolean | string>, additional: string[]): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key),
        ...additional
    ].join(' ');
}