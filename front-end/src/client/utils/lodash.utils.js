import { forEach, map } from 'lodash/fp';

export const forEachWithKey = forEach.convert({ cap: false });

export const mapWithKeys = map.convert({ cap: false })