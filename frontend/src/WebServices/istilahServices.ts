import axios from "axios";

interface InterfaceResponseKbbi {
  status: number;
  message: string;
  data: InterfaceData;
}

interface InterfaceData {
  title: string;
  arti: string[];
}

export interface InterfaceResponseWikipedia {
  status: number;
  message: string;
  data: Wikidata[];
}

interface Wikidata {
  ns: number;
  pageid: number;
  size: number;
  snippet: string;
  timestamps: string;
  title: string;
  wordcount: number;
}

class IstilahService {
  url = "https://istilahtify-backend-lreuyw8md.vercel.app/api/istilah";

  getKBBI(word: string): Promise<InterfaceResponseKbbi> {
    const data = {
      keyword: word
    };
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.url}/kbbi`, data)
        .then((result: any) => {
          resolve(result.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  getwiki(word: string): Promise<InterfaceResponseWikipedia> {
    const data = {
      keyword: word
    };
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.url}/wikipedia`, data)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
}

export const istilahService = new IstilahService();
