import { classNames } from './classNames';

describe('classNames', () => {
    test(('without arguments'), () => {
        expect(classNames()).toBe('');
    });

    test(('with only first argument'), () => {
        expect(classNames('first')).toBe('first');
    });

    test(('with mods'), () => {
        expect(classNames('', { hovered: true, active: false })).toBe('hovered');
    });

    test(('with mods undefined'), () => {
        expect(classNames('', { hovered: true, active: undefined })).toBe('hovered');
    });

    test(('with additional'), () => {
        expect(classNames('', {}, ['class1', 'class2'])).toBe('class1 class2');
    });

    test(('with all arguments'), () => {
        expect(classNames('first', { hovered: true }, ['class1', 'class2'])).toBe('first hovered class1 class2');
    });
});
