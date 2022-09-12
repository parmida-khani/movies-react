import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const slice = _(items).slice(startIndex).value();
    return _.take(slice,pageSize);
}