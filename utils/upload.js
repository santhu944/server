import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
  url: `mongodb://santhoshn641:1234@blog-app-shard-00-00.v0er8.mongodb.net:27017,blog-app-shard-00-01.v0er8.mongodb.net:27017,blog-app-shard-00-02.v0er8.mongodb.net:27017/?ssl=true&replicaSet=atlas-wvud67-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({storage}); 
