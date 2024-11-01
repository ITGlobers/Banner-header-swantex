
const basePath: string = '/api/catalog_system/pub/category/tree/3';

export const getCategories = async () : Promise<any> => {
  const data = await fetch(basePath, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-VTEX-API-AppKey": "vtexappkey-gabrica-KPQIRJ",
      "X-VTEX-API-AppToken": "JZHVGMBSISVPBEMJSIPLREFIDIBXJDRHLCYIKPLMGPRNCVBWUNGWUNQJURBBPEJRWWIYOKJUNTJNWIQELWLSDDOVZZYQQEKLAPDHIJYZRSKCLDMBNOUKRFOFPBIYBHJY"
    }
  });
  return await data.json();
}
