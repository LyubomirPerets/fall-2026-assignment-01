export function formatName(firstName, lastName, middleName) {
    let output = lastName + ', ' + firstName;
    if (middleName) {
        output += middleName[0] + '. ';
    }
    return output;
}
