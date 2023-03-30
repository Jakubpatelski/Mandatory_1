import express from "express"
import bodyParser from "body-parser"
import templateEngine from './util/templateEngine.js'
import notes from './util/notes.js'

const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let userIdCounter = 1;
const users = []
const admin = {
    id: 1,
    username: "a",
    password: "a"
}
users.push(admin)

const loginpage = templateEngine.readPage("./public/pages/login/login.html");
const logingpagePage = templateEngine.renderPage(loginpage, {
    tabTitle: "Login ",
    cssPath: "/pages/login/login.css"
});

const signuppage = templateEngine.readPage("./public/pages/signup/signup.html");
const signuppagePage = templateEngine.renderPage(signuppage, {
    tabTitle: "Sign up",
    cssPath: "/pages/signup/signup.css"
});



const homepage = templateEngine.readPage("./public/pages/homepage/homepage.html");
const homepagePage = templateEngine.renderHomePage(homepage, {
    tabTitle: "Home",
});

const nodepage = templateEngine.readPage("./public/pages/node/node.html");
const nodepagePage = templateEngine.renderLessonPage(nodepage, {
    tabTitle: "Node JS",
    topicTitle: "Node JS",
});

const serverJSpage = templateEngine.readPage("./public/pages/serverJS/serverJS.html");
const serverJSpagePage = templateEngine.renderLessonPage(serverJSpage, {
    tabTitle: "Server JS",
    topicTitle: "Server JS",
});


const server2page = templateEngine.readPage("./public/pages/server2/server2.html");
const server2pagePage = templateEngine.renderLessonPage(server2page, {
    tabTitle: "Server 2",
    topicTitle: "Server 2",
});

const ssrpage = templateEngine.readPage("./public/pages/ssr/ssr.html");
const ssrpagePage = templateEngine.renderLessonPage(ssrpage, {
    tabTitle: "SSR",
    topicTitle: "SSR",
});

// const adminpage = templateEngine.readPage("./public/pages/admin/admin.html");
// const adminpagePage = templateEngine.renderLessonPage(adminpage, {
//     tabTitle: "Admin",
//     topicTitle: "SSR",
// });

const adminpage = templateEngine.readPage("./public/pages/admin/admin.html");
const adminpagePage = templateEngine.renderHomePage(adminpage, {
    tabTitle: "Home",
});


// Pages
app.get("/", (req, res) => {
    res.send(logingpagePage);

})



app.post("/", (req, res) => {
    const user = users.find(user => user.username === req.body.username && user.password === req.body.password)
    console.log(req.body.username);

    if(user) return  res.send(homepagePage)

})

app.get("/signup", (req, res) => {
    res.send(signuppagePage);

})

app.post("/signup", (req, res) => {
 
    const newUser = {
        id: userIdCounter,
        username: req.body.username,
        password: req.body.password
    }

    users.push(newUser);
    userIdCounter++

    console.log(users)
    res.send(logingpagePage);

})

app.get("/home", (req, res) => {
    res.send(homepagePage);
})

app.get("/admin", (req, res) => {
    res.send(adminpagePage);
})

app.get("/node", (req, res) => {
    res.send(nodepagePage);
})

app.get("/server", (req, res) => {
    res.send(serverJSpagePage);
})

app.get("/server2", (req, res) => {
    res.send(server2pagePage)
})

app.get("/ssr", (req, res) => {
    res.send(ssrpagePage)
})
// API
app.get("/api/notes", (req, res) => {
    res.send({ data: notes})
})


const PORT = 8080;

app.listen(PORT, (error) => {
    if(error){
        console.log(error);
        return
    }
    console.log("Server is running on port", PORT)
})