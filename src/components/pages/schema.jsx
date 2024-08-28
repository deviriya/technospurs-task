import * as yup from 'yup';

export const schema = yup.object({
    name: yup.string()
        .matches(/^\s*([0-9a-zA-Z ]*)\s*$/, "Name should be alphnumeric only")
        .required("Name is required"),
    email: yup.string()
        .required("Email i required")
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Enter a valid Email"),
    linkedin: yup.string()
        .required("Linkedin URL is required")
        .matches(/(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}/g, "Enter a valid URL"),
    gender: yup.string()
        .required("Select your gender"),
    address1: yup.string()
        .required("Address1 is required")
        .min(6, "Address too short"),
    address2: yup.string()
        .required("Address2 is required")
        .min(6, "Address too short"),
    state: yup.string()
        .required("State is required"),
    city: yup.string()
        .required("City is required"),
    pincode: yup.string()
        .required("Pin is required")
        .min(6,"Enter a valid pincode")
        .max(6,"Enter a valid pincode"),
});

export const defaultValues = {
    name: "",
    email: "",
    linkedin: "",
    gender: null,
    address1: "",
    address2: "",
    state: "",
    city: "",
    pincode: "",
}