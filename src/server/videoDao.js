const {GRAPHQL_ENDPOINT} =require('./properties')
const { createWriteStream, readdirSync, unlink } = require('fs')
const LOCAL_STORE =  __dirname + '/videoStore/';

const data = {
  showVideos() {
    const videos = readdirSync(LOCAL_STORE)
    console.log(LOCAL_STORE+"--> storage name")
    return videos.map(videoFile => ({
      filename: videoFile,
      path: `${GRAPHQL_ENDPOINT}/videoStore/${videoFile}`,
    }))
  },
  async saveVideo({ file}) {
    const { createReadStream, filename } = await file
    
    const stream = createReadStream()
    const path = `${LOCAL_STORE}/${filename}`

    return await new Promise((resolve, reject) => { 
      const writeStream = createWriteStream(path) 
      stream
      .pipe(writeStream)
      .on('error', error => reject(error))
      .on('finish', () => resolve({ path, filename }))
      
    })
  },
}

module.exports = data
