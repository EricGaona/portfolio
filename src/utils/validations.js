const validName = (name) => {
  if(name.trim.length > 3){
    return true
  } else {
    return false;
  }
};

const validEmail = (email) => {
  if(email.trim.length > 3){
    return true
  } else {
    return false;
  }
};

export { validName, validEmail };