export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles;
    const toString = (key) => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}

export function block(type) {
    return `
        <form class="form" name="${type}">
            <h5 class="form__title">${type}</h5>
            <div class="form-box">
                <input class="form-box__input" name="value" placeholder="value">
                <input class="form-box__input" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="form__btn">Добавить</button>
        </form>
        <hr />
    `;
}
