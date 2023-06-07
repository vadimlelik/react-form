
// export const isRequired = (value) => Boolean(value.trim())
// export const isEmail = (value) => /^\S+@\S+\.\S+$/g.test(value)
// export const isContainDigit = (value) => /\d+/g.test(value)
// export const min = (value, param) => value.length >= param


export default {
    isRequired: (value) => Boolean(value.trim()),
    isEmail: (value) => /^\S+@\S+\.\S+$/g.test(value),
    isContainDigit: (value) => /\d+/g.test(value),
    min: (value, param) => value.length >= param,
}