const axios = require("axios");

exports.proxy = async (req, res) => {
  const proxyDomain = process.env.PROXY_DOMAIN
  const externalDomain = req.headers.host.replace(proxyDomain, '')

  try {

    const uri = `https://${externalDomain}${req.url}`
    console.log(uri, req.body)
    const options = {
      responseType: 'stream',
      headers: {
        ...req.headers,
        'accept-encoding': 'gzip',
        host: externalDomain,
        referer: `https://${externalDomain}/`,
      }
    }

    let response

    if (req.method === 'POST') {
      response = await axios.post(uri, req.body, options)
    } else if (req.method === 'GET') {
      response = await axios.get(uri, options)
    } else {
      res.status(404).send('Method not support')
    }

    if(response) {
      res.setHeader('Content-Type', response.headers['content-type'])

      if (response.headers['cookie']) {
        res.setHeader('Cookie', response.headers['cookie'])
      }

      res.status(response.status);

      response.data.pipe(res)
    }
  } catch (error) {
    res.status(500).send('Error fetching the content: ' + error.message)
  }
}