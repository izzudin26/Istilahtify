import { Router } from "express"
import {istilahController} from "../controller/IstilahController"

class IstilahRoute {
    constructor(public router: Router = Router()) {
        this.routes()
     }

    public routes(): void {
        this.router.get("/kbbi", istilahController.getKbbi)
        this.router.get("/wikipedia", istilahController.getWiki)
    }
}

export const istilahRoute = new IstilahRoute()