export default function appendToEachArrayValue(array, appendString) {
    const stringValue = []
    for (const idx of array) {
        stringValue.push(appendString + idx);
    }
    return stringValue;
}
