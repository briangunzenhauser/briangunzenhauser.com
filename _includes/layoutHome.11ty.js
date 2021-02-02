exports.data = {
    layout: 'layoutGlobal',
}

exports.render = (data) => {
    return `
        <div class="home">
        ${data.content}
        </div>
    `;
};