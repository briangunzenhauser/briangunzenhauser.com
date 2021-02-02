exports.data = {
    layout: 'layoutGlobal',
}

exports.render = (data) => {
    return `
        <article class="post">
            ${data.content}
        </article>

    `;
};