import { istilahScrap } from "../Scrapper/IstilahScrapper";
import { Request, Response } from "express";

interface IResponseApi {
  status: number;
  message: string;
  data: any;
}

class IstilahController {
  public async getKbbi(req: Request, res: Response): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      try {
        let kbbiData = await istilahScrap.findKbbi(req.body.keyword);
        let response: IResponseApi = {
          status: 200,
          message: "Success",
          data: kbbiData,
        };
        return resolve(res.send(response).status(200));
      } catch (error) {
        let response: IResponseApi = {
          status: 500,
          message: error,
          data: null,
        };
        return reject(res.send(response).status(500));
      }
    });
  }

  public async getWiki(req: Request, res: Response): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      try {
        let wikiData = await istilahScrap.findWikipedia(req.body.keyword);
        let response: IResponseApi = {
          status: 200,
          message: "Success",
          data: wikiData,
        };
        return resolve(res.send(response).status(200));
      } catch (error) {
        let response: IResponseApi = {
          status: 500,
          message: error,
          data: null,
        };
        return reject(res.send(response).status(500));
      }
    });
  }
}

export const istilahController = new IstilahController();
