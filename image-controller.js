import file from "../Models/model.js";
import File from "../Models/model.js";



export const uploadImage=async(request,response)=>{
    const fileObj={
        path:request.file.path,
        name:request.file.originalname
    }
  try {
   const file= await File.create(fileObj);
   console.log(file);
   response.status(200).json({path:`http://localhost:8000/file/${file._id}`});

  } catch (error) {
    console.error(error.message);
    response.status(500).json({error:error.message})
  }
}

export const downloadimage=async(request,response)=>{
try {
   const file= await File.findById(request.params.fileid);
    file.downloadContent++;
    await file.save();
    response.download(file.path,file.name)
} catch (error) {
    console.error(error.message);
return response.status(500).json({error:error.message});
}
}