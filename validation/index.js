const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const isValid = errors => {
    return [!Object.keys(errors).length, errors];
}


exports.signUpValidator = (user) => {
    const name = user.name ? user.name : '';
    const email = user.email ? user.email : '';
    const password = user.password ? user.password : '';

    const errors = {};

    if (name.trim().length < 5) errors.name = 'Name must contains atleast 5 letters';
    if (!name) errors.name = 'Name is required';

    if (!re.test(email)) errors.email = 'Email is Invalid';
    if (!email) errors.email = 'Email is required';

    if (!password) errors.password = 'Password is required';

    return isValid(errors);
}

exports.signInValidator = (user) => {
    const email = user.email ? user.email : '';
    const password = user.password ? user.password : '';

    const errors = {};

    if (!re.test(email)) errors.email = 'Email is Invalid';
    if (!email) errors.email = 'Email is required';

    if (!password) errors.password = 'Password is required';

    return isValid(errors);
}


exports.createBrandValidator = brand => {
    const name = brand.name ? brand.name : '';
    const errors = {};
    
    if (!name) errors.name = 'Brand name is required';
    return isValid(errors);
}