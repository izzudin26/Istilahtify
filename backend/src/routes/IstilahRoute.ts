import { Router } from "express"
import {istilahController} from "../controller/IstilahController"

class IstilahRoute {
    constructor(public router: Router = Router()) {
        this.routes()
     }

    public routes(): void {
        this.router.post("/kbbi", istilahController.getKbbi)
        this.router.post("/wikipedia", istilahController.getWiki)
    }
}

export const istilahRoute = new IstilahRoute().router