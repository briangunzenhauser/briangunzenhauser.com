exports.data = {
    layout: 'layoutGlobal',
}

exports.render = (data) => {
    return `
        <div class="about">
        ${data.content}
        </div>
    `;
};