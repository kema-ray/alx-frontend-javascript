export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const dataView = new DataView(buffer);
    if (position >= length) throw new RangeError('Position outside range');
    dataView.setUint8(position, value);
    return dataView;
}
