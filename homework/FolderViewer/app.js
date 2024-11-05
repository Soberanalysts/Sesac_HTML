const fs = require('fs');
const { chdir, cwd } = require('node:process');

let viewer= fs.readdirSync('../');

const filepath = '../Calculator';

files = fs.readdirSync(__dirname);  // 모든 파일 조회
console.log(fs);
// files.forEach(file => { 
//     console.log(file);
//     statsObj = fs.statSync(file); 
//     console.log("Path is file:", statsObj.isFile()); // 파일이면 true
//     console.log("Path is directory:", statsObj.isDirectory());  // 폴더면 true 
// })
// console.log(`Starting directory: ${cwd()}`);
// try {
//   chdir('/tmp');
//   console.log(`New directory: ${cwd()}`);
// } catch (err) {
//   console.error(`chdir: ${err}`);
// }
// fs.readdir(filepath,(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     for(let i =0; i<files.length;i++){
//         console.log(files[i]);
//         console.log(cwd(files[i]));
//     }
    
    
    
//     // console.log(files);
//     // files.forEach((file)=>{
//     //         fs.readFile(file, 'utf8', (err,data)=>{
//     //             if(err){
//     //                 console.log("파일 내용 읽기 실패", err.message);
//     //                 return;
//     //             }
//     //         })
//     //     })
// });    
// const { chdir, cwd } = require('node:process');


// fs.readFile('./','utf-8', (err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(files);
// });


// const directoryPath = '../../4.nodejs';

// fs.readdir(directoryPath, (err,files) =>{
//     if(err){
//         console.log("읽기 실패!!");
//         return;
//     }else{
//         console.log(files);
//         console.log(files[0]);
//         files.forEach((file)=>{
//             fs.readFile(file, 'utf8', (err,data)=>{
//                 if(err){
//                     console.log("파일 내용 읽기 실패", err.message);
//                     return;
//                 }
//             })
//         })
//         // console.log(files[0],'utf8',(err,data)=>{
//         //     if(err){
//         //         console.log("파일 내용 읽기 실패");
//         //         return;
//         //     }
//         //     console.log(data);
//         // });
//     }
// });
// class Tree {
//     constructor(file){
//         this.filename = file;
//     }
//     printPath(file){
//         files = fs.readdirSync(__dirname);  // 모든 파일 조회
//         console.log(files);
//         console.log('---------------------')
//         fs.readdir(file, (err, files)=>{
//             if (err) {
//                 console.error('Error reading directory:', err);
//                 return;
//             }
//             console.log('Files in relative path:', files);
//         });
//     };

//     //파일 경로 출력
 
    
// }
const items = fs.readdirSync(dir);

items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const isDirectory = fs.statSync(fullPath).isDirectory();

    // Indent based on depth to show tree structure
    console.log(`${' '.repeat(depth * 2)}${isDirectory ? '📂' : '📄'} ${item}`);
});

    // const filetree=new Tree()
// filetree.printPath('./');
// console.log(items);