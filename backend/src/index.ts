import express, {Application} from "express"
import {istilahRoute} from "./routes/IstilahRoute"
import bodyParser from "body-parser"
const port = process.env.PORT || 8080

class ServerApp {
    constructor(public app: Application = express()){
        this.plugins()
        this.routes()
    }

    plugins(): void {
        this.app.use(bodyParser.json())
    }

    routes(): void {
        this.app.use("/api/istilah", istilahRoute)
    }
}

const app = new ServerApp().app
app.listen(port, () => {
    console.log(`Running on Port ${port}`)
})