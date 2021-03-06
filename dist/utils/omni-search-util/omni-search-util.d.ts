import { KeyValue } from "../../types/common";
import { OmniSearchDef, OmniSearchValues, SearchOption } from "../../types/api";
/** Parse a map of field label to field value, using OMNI_KEY if no label is present. */
export declare const parseValuesFromOmniText: (omniText: string) => Map<string, string[]>;
export declare const getKeysForSearchDef: (searchDef: OmniSearchDef) => string[];
/** Go through searchDefs extract values from omniText */
export declare const getSearchValuesFromOmniText: (searchDefs: OmniSearchDef[] | null, omniText: string) => OmniSearchValues;
export declare const getOmniTextFromSearchValues: (searchDefs: OmniSearchDef[], searchValues: OmniSearchValues) => string;
export declare const getOmniTextFromKeyValues: (keyValues: KeyValue[]) => string;
export declare const getItemsFromOmniValue: (omniValue?: string) => string[];
export declare const getSearchOptions: (searchDefs: OmniSearchDef[], searchValues: OmniSearchValues) => SearchOption[];
export declare const getValueItemsFromSearchValues: (searchDefs: OmniSearchDef[], searchValues: OmniSearchValues, key: string) => string[];
