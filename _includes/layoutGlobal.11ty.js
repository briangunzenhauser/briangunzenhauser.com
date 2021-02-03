exports.render = (data) => {
    let todaysDate = new Date();
    let currentYear = todaysDate.getFullYear();

    return `
    <!doctype html>
    <html lang="en">
        <head>
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-3668793-2"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
            
                gtag('config', 'UA-3668793-2');
            </script>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
            <meta name="description" content="${data.metaDesc}">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/assets/styles/main.css">
        </head>
        <body>
            <header class="site-header">
                <div class="header__logo"><a href="/" class="${this.page.url === '/' ? 'curr' : ''}" title="Home">Brian <span>Gunzenhauser</span></a></div>
                <nav>
                    <ul>
                        <li><a href="/about" class="${this.page.url === '/about/' ? 'curr' : ''}">About</a></li>
                        <li><a href="/posts/" class="${this.page.url === '/posts/' ? 'curr' : ''}">Posts</a></li>
                        <li><a href="/contact" class="${this.page.url === '/contact/' ? 'curr' : ''}">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main class="site-main">
                ${data.content}
            </main>
            <footer class="site-footer">
                <p>&copy; ${currentYear} Brian Gunzenhauser. Built with <a href="https://11ty.dev">Eleventy</a>.</p>
            </footer>
        </body >
    </html >
    `;
};