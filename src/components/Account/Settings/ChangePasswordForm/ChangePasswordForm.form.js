import * as Yup from 'yup';

export function initialValues(password, repeatPassword) {
    return {
        password,
        repeatPassword
    };
}

export function validationSchema() {
    return Yup.object({
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true),
    })
}