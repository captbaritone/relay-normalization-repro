import {
  GetDataID,
  NormalizationOptions,
  normalize,
} from "relay-runtime/lib/store/RelayResponseNormalizer";
import Query from "./normalizationArtifact";
import { variables } from "./variables";
import { data } from "./data";
import { NormalizationSelector, RecordSource } from "relay-runtime";
import {
  ROOT_ID,
  RequestDescriptor,
  VIEWER_ID,
  VIEWER_TYPE,
} from "relay-runtime";

const defaultGetDataID: GetDataID = (fieldValue, typeName) => {
  if (typeName === VIEWER_TYPE) {
    return fieldValue.id == null ? VIEWER_ID : fieldValue.id;
  }
  return fieldValue.id;
};

const recordSource = new RecordSource({
  [ROOT_ID]: {},
});

const request: RequestDescriptor = {
  identifier: "SOME_STRING",
  node: Query,
  variables,
  cacheConfig: null,
};

const normalizationSelector: NormalizationSelector = {
  dataID: ROOT_ID,
  node: Query.operation,
  variables,
};

const normalizationOptions: NormalizationOptions = {
  getDataID: defaultGetDataID,
  request,
};

const start = performance.now();

normalize(recordSource, normalizationSelector, data, normalizationOptions);

const end = performance.now();
console.log(`Normalized into ${recordSource.size()} records.`);
console.log(`Execution time: ${end - start} ms`);
