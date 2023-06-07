import { isRequired } from "./validateRules";

export const validate = (values, config) => {
    const errors = {}

    for (const name in values) {

        const validationResult = config[name]

        for (const rule in validationResult) {

            const { message } = validationResult[rule]

            const hasError = !validator(rule, values[name])
            if (hasError) {
                errors[name] = message
            }
        }

    }

    return errors

}


const validator = (ruleName, value) => {
    switch (ruleName) {
        case "isRequired":
            return isRequired(value)

        default:
            break;
    }

}