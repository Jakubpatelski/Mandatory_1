import fs from "fs";

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}


function renderPage(page, config={}){
    const template = fs.readFileSync("./public/components/template.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "NodeJs Mandatory")
    .replace("$CSS_LINK", `<link rel="stylesheet" href="${config.cssPath}">`)
    .replace("$CSS_LINK_Navbar", `<link rel="stylesheet" href="/components/navbar/navbar.css">`)


    const footer = fs.readFileSync("./public/components/templateEnd.html").toString()
    .replace("$HOME_SCRIPT", `<script src="/pages/main/main.js"></script>` || "")
    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}  /  Jakub Patelski`)


    return template + page + footer;

}

function renderHomePage(page, config={}){
    const template = fs.readFileSync("./public/components/template.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "NodeJs Mandatory")
    .replace("$CSS_LINK_Navbar", `<link rel="stylesheet" href="/components/navbar/navbar.css">`)
    .replace("$CSS_LINK", `<link rel="stylesheet" href="/pages/homepage/homepage.css">`)

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()

    const footer = fs.readFileSync("./public/components/templateEnd.html").toString()
    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}  /  Jakub Patelski`)
    .replace("$HOME_SCRIPT", `<script src="/components/navbar/navbar.js"></script>`);



return template + navbar + page + footer


}

function renderLessonPage(page, config={}) {

    const template = fs.readFileSync("./public/components/template.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "NodeJs Mandatory")
    .replace("$CSS_LINK_Navbar", `<link rel="stylesheet" href="/components/navbar/navbar.css">`)
    .replace("$CSS_LINK", `<link rel="stylesheet" href="/assets/css/main.css">`)

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
       

    const title = fs.readFileSync("./public/components/title/title.html").toString()
        .replace("$TOPIC_TITLE", config.topicTitle)

    const footer = fs.readFileSync("./public/components/templateEnd.html").toString()
        .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}   Jakub Patelski`)
        .replace("$HOME_SCRIPT", `<script src="/components/navbar/navbar.js"></script>`)

    return template + navbar + title +  page + footer;
}

export default {
    renderPage,
    readPage,
    renderLessonPage,
    renderHomePage
   
}