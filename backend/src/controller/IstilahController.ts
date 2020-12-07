import {istilahScrap} from "../Scrapper/IstilahScrapper"
import {Request, Response} from "express"

interface IResponseApi {
    status: number
    message: string
    data: any
}

class IstilahController {
    public getKbbi(req: Request, res: Response): Response {
        try {
            let kbbiData = istilahScrap.findKbbi(req.body.keyword)
            let response: IResponseApi = {status: 200, message: "Success", data: kbbiData}
            return res.send(response).status(200)
        } catch (error) {
            let response: IResponseApi = {status: 500,message: error, data: null}
            return res.send(response).status(500)
        }
    }

    public getWiki(req: Request, res: Response): Response {
        try {
            let wikiData = istilahScrap.findWikipedia(req.body.keyword)
            let response: IResponseApi = {status: 200, message: "Success", data: wikiData}
            return res.send(response).status(200)
        } catch (error) {
            let response: IResponseApi = {status: 500, message: error, data: null}
            return res.send(response).status(500)
        }
    }
}

export const istilahController = new IstilahController();