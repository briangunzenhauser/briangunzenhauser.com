exports.data = {
    layout: 'layoutGlobal',
}

exports.render = (data) => {
    return `
        <div class="posts">
        ${data.content}
        </div>
    `;
};