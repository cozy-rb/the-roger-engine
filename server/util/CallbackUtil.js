class CallbackUtil{
  constructor(fileName=""){
    this.fileName = fileName;
  }

  new(status, code, message, data, funcName){
    return {
      status: status,
      code: code,
      message: message,
      data: data,
      signature: "[" + this.fileName + "/" + funcName + "]"
    };
  }

  sign(signature, funcName){
    return signature.concat("::[" + this.fileName + "/" + funcName + "]");
  }
}

module.exports = CallbackUtil;
