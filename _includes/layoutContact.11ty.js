exports.data = {
    layout: 'layoutGlobal',
}

exports.render = (data) => {
    return `
        <div class="contact">
            ${data.content}
        </div>
    `;
};