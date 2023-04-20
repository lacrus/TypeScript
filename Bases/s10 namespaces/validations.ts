namespace validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date) => {
    return isNaN(myDate.valueOf()) ? true : false;
  };
}

console.log(validations.validateDate(new Date("1988-09-18")));
