export class Helpers {

  public static deleteFromArray(object , array) {
    array.splice( array.findIndex( obj => {
      return obj.id === object.id
    }) ,  1)
  }

  public static addToArray (object , array) {
    if (!array) array = [];
    array.push(object)
  }

  public static isExist (object , array) {
    for(let obj of array) {
      if(object.id === obj.id) {
        return true
      }
    }
    return false ;
  }

  public static updateFields(object , toUpadateObject) {
    for(const key in object ){
      toUpadateObject[key] = object[key]
    }
  }

  // function to convert base64 to file
  public static base64ToFile(data, filename) {
    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
}
