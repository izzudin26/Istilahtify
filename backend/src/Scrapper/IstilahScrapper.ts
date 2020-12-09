import axios from "axios";
import cheerio from "cheerio";

interface IKBBIResponse {
  title: string;
  arti: Array<string>;
}

interface IWikipediaResponse {
  title: string
  pageid: number
  size: number
  snippet: string
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
        $("ul.adjusted-par").each((idx, ol) => {
           $(ol).find("li").each((idx, li) => {
               let currentArti: string = $(li).text().substring(5).trim()
               arti.push(currentArti)
           })
        })
        if(arti.length == 0){
          $("ol").each((idx, ol) => {
            $(ol).find("li").each((idx, li) => {
                let currentArti: string = $(li).text().substring(5).trim()
                arti.push(currentArti)
            })
         })
        }

        resolve({arti: arti, title: title})
      })
      .catch(err => reject(err))
    })
  }

  async findWikipedia(word: string): Promise<IWikipediaResponse[]> {
    return new Promise( async (resolve, reject) => {
      try {
        let url = `https://id.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${word}`
        let getData = await axios.get(url)
        let response: [] = getData.data.query.search
        let responseItem: IWikipediaResponse[] = response.slice(0, 10)
        resolve(responseItem)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export const istilahScrap = new IstilahScrapper();