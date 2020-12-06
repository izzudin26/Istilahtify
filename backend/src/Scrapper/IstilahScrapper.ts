import axios from "axios";
import cheerio from "cheerio";

interface IKBBIResponse {
  title: string;
  arti: Array<string>;
}

class IstilahScrapper {
   async findKbbi(word: string): Promise<IKBBIResponse> {      
    return new Promise( async (resolve, reject) => {
       axios.get(
        `https://kbbi.kemdikbud.go.id/entri/${word}`
      ).then(res => {
        let $ = cheerio.load(res.data)
        let title: string = $("h2").text()
        let arti: Array<string> = []
        $("ol").each((idx, ol) => {
           $(ol).find("li").each((idx, li) => {
               let currentArti: string = $(li).text().substring(6).trim()
               arti.push(currentArti)
           })
        })
        resolve({arti: arti, title: title})
      })
      .catch(err => reject(err))
    })
  }
}

export const istilahScrap = new IstilahScrapper();
istilahScrap.findKbbi("kerja")
.then(word => console.log(word)).catch(err => console.log(err))