import { row, col, css } from '../utils';

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHMTL должен быть реализован');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { tag = 'h1', styles } = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const html = this.value.map(col);
        return row(html.join(''), css(this.options.styles));
    }
}

export class ImgBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { styles, imgStyles, alt = '' } = this.options;
        return row(
            `<img src="${this.value}" alt="${alt}" style="${css(
                imgStyles
            )}" />`,
            css(styles)
        );
    }
}
