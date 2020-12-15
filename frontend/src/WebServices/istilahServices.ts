import axios from "axios";

interface IResponse {
  status: number;
  message: string;
  title: string;
  data: IData;
}

interface IData {
  arti: string[];
}

class IstilahService {
  url = "https://istilahtify.vercel.app/api/istilah";

  getKBBI(word: string): Promise<IResponse> {
    const data = {
      keyword: word
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${this.url}/kbbi`, data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  getwiki(word: string): Promise<IResponse> {
    const data = {
      keyword: word
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${this.url}/wikipedia`, data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export const istilahService = new IstilahService();
