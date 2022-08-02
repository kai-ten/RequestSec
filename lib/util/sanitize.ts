import validator from 'validator';

export const sanitize = async (data: Object | undefined): Promise<string> => {
  try {
    let stringifiedRequest = '';

    if (data instanceof Object) {
      stringifiedRequest = validator.escape(JSON.stringify(data));
    } else {
      stringifiedRequest = validator.escape(data || '');
    }

    return stringifiedRequest;
  } catch (err) {
    console.error(err);
    return '';
  }
};
