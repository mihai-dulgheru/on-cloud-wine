const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    const emailParts = email.split('@');
    const provider = emailParts[1];

    if (
      provider === 'gmail' ||
      provider === 'yahoo' ||
      provider === 'hotmail'
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default isEmail;
