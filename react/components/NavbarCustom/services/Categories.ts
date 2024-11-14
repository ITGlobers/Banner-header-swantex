const basePath = '/api/catalog_system/pub/category/tree/3'

export const getCategories = async (): Promise<any> => {
  const data = await fetch(basePath, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': 'vtexappkey-swantex-OBRJPN',
      'X-VTEX-API-AppToken':
        'SMESLDVQQWDYVNFCROTPYIXXCVUIIXDPZSKZXQRCOYSSAGPMEFZAEJGLQBFORSYUYKACLZMUHUAILPGCDGGYGCWHAHLEXVATRMNIBMWAWICBKJCEEQYPPTIUFPFZBVCP',
    },
  })

  return data.json()
}
