// import { isContainDigit, isEmail, isRequired, min } from "./validateRules";
import validateRules from './validateRules';
export const validate = (values, config) => {
    const errors = {}

    for (const name in values) {

        const validationResult = config[name]

        for (const rule in validationResult) {

            const { message, value } = validationResult[rule]
            const validator = validateRules[rule]

            const hasError = validator && !validator(values[name], value)
            if (hasError) {
                errors[name] = message
            }
        }

    }


    // function validator(ruleName, value, param) {
    //     switch (ruleName) {
    //         case "isRequired":
    //             return isRequired(value)
    //         case "isEmail":
    //             return isEmail(value)
    //         case "isContainDigit":
    //             return isContainDigit(value)
    //         case 'min':
    //             return min(value, param)

    //         default:
    //             break;
    //     }

    // }

    return errors

}


