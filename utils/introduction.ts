import pc from "picocolors"
import gradient from 'gradient-string'

export const renderIntro = () => {
    let duck = gradient('orange', 'yellow').multiline([
        "____",
        
        "WELCOME",
        "FAST NODE",
        "____",
    ].join('\n'));
    console.log(duck);
}