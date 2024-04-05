const IPFS = require('ipfs-http-client');

async function createIPFSInstance() {
    //secret - Yk/cS+hAXFEdD/yT2uJK6JuHeEW4GQzEgPZi3fdv8BGFXbjAIP3ITg
    const projectId = '1f856c65880d48d4a172e126376f04f8';
    const projectSecret = 'Yk/cS+hAXFEdD/yT2uJK6JuHeEW4GQzEgPZi3fdv8BGFXbjAIP3ITg';
    const auth ='Basic ' + btoa(projectId + ':' + projectSecret);


    const ipfs = await IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' , 
    apiPath: "/api/v0",
    headers: {
        authorization: auth
      }});
    return ipfs;
}

module.exports = {
    createIPFSInstance
};