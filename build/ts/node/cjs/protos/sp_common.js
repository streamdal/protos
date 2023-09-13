"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailResponse = exports.TailRequest = exports.Metric = exports.Audience = exports.StandardResponse = exports.TailRequestType = exports.TailResponseType = exports.OperationType = exports.ResponseCode = void 0;
// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "sp_common.proto" (package "protos", syntax proto3)
// tslint:disable
const runtime_1 = require("@protobuf-ts/runtime");
/**
 * Common status codes used in gRPC method responses
 *
 * @generated from protobuf enum protos.ResponseCode
 */
var ResponseCode;
(function (ResponseCode) {
    /**
     * @generated from protobuf enum value: RESPONSE_CODE_UNSET = 0;
     */
    ResponseCode[ResponseCode["UNSET"] = 0] = "UNSET";
    /**
     * @generated from protobuf enum value: RESPONSE_CODE_OK = 1;
     */
    ResponseCode[ResponseCode["OK"] = 1] = "OK";
    /**
     * @generated from protobuf enum value: RESPONSE_CODE_BAD_REQUEST = 2;
     */
    ResponseCode[ResponseCode["BAD_REQUEST"] = 2] = "BAD_REQUEST";
    /**
     * @generated from protobuf enum value: RESPONSE_CODE_NOT_FOUND = 3;
     */
    ResponseCode[ResponseCode["NOT_FOUND"] = 3] = "NOT_FOUND";
    /**
     * @generated from protobuf enum value: RESPONSE_CODE_INTERNAL_SERVER_ERROR = 4;
     */
    ResponseCode[ResponseCode["INTERNAL_SERVER_ERROR"] = 4] = "INTERNAL_SERVER_ERROR";
    /**
     * @generated from protobuf enum value: RESPONSE_CODE_GENERIC_ERROR = 5;
     */
    ResponseCode[ResponseCode["GENERIC_ERROR"] = 5] = "GENERIC_ERROR";
})(ResponseCode || (exports.ResponseCode = ResponseCode = {}));
/**
 * Each SDK client is a $service + $component + $operation_type
 *
 * @generated from protobuf enum protos.OperationType
 */
var OperationType;
(function (OperationType) {
    /**
     * @generated from protobuf enum value: OPERATION_TYPE_UNSET = 0;
     */
    OperationType[OperationType["UNSET"] = 0] = "UNSET";
    /**
     * @generated from protobuf enum value: OPERATION_TYPE_CONSUMER = 1;
     */
    OperationType[OperationType["CONSUMER"] = 1] = "CONSUMER";
    /**
     * @generated from protobuf enum value: OPERATION_TYPE_PRODUCER = 2;
     */
    OperationType[OperationType["PRODUCER"] = 2] = "PRODUCER";
})(OperationType || (exports.OperationType = OperationType = {}));
/**
 * @generated from protobuf enum protos.TailResponseType
 */
var TailResponseType;
(function (TailResponseType) {
    /**
     * @generated from protobuf enum value: TAIL_RESPONSE_TYPE_UNSET = 0;
     */
    TailResponseType[TailResponseType["UNSET"] = 0] = "UNSET";
    /**
     * @generated from protobuf enum value: TAIL_RESPONSE_TYPE_PAYLOAD = 1;
     */
    TailResponseType[TailResponseType["PAYLOAD"] = 1] = "PAYLOAD";
    /**
     * @generated from protobuf enum value: TAIL_RESPONSE_TYPE_ERROR = 2;
     */
    TailResponseType[TailResponseType["ERROR"] = 2] = "ERROR";
})(TailResponseType || (exports.TailResponseType = TailResponseType = {}));
/**
 * @generated from protobuf enum protos.TailRequestType
 */
var TailRequestType;
(function (TailRequestType) {
    /**
     * @generated from protobuf enum value: TAIL_REQUEST_TYPE_UNSET = 0;
     */
    TailRequestType[TailRequestType["UNSET"] = 0] = "UNSET";
    /**
     * @generated from protobuf enum value: TAIL_REQUEST_TYPE_START = 1;
     */
    TailRequestType[TailRequestType["START"] = 1] = "START";
    /**
     * @generated from protobuf enum value: TAIL_REQUEST_TYPE_STOP = 2;
     */
    TailRequestType[TailRequestType["STOP"] = 2] = "STOP";
})(TailRequestType || (exports.TailRequestType = TailRequestType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class StandardResponse$Type extends runtime_1.MessageType {
    constructor() {
        super("protos.StandardResponse", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "code", kind: "enum", T: () => ["protos.ResponseCode", ResponseCode, "RESPONSE_CODE_"] },
            { no: 3, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.StandardResponse
 */
exports.StandardResponse = new StandardResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Audience$Type extends runtime_1.MessageType {
    constructor() {
        super("protos.Audience", [
            { no: 1, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "component_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "operation_type", kind: "enum", T: () => ["protos.OperationType", OperationType, "OPERATION_TYPE_"] },
            { no: 4, name: "operation_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.Audience
 */
exports.Audience = new Audience$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Metric$Type extends runtime_1.MessageType {
    constructor() {
        super("protos.Metric", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "labels", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 3, name: "value", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.Metric
 */
exports.Metric = new Metric$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TailRequest$Type extends runtime_1.MessageType {
    constructor() {
        super("protos.TailRequest", [
            { no: 1, name: "type", kind: "enum", T: () => ["protos.TailRequestType", TailRequestType, "TAIL_REQUEST_TYPE_"] },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "audience", kind: "message", T: () => exports.Audience },
            { no: 4, name: "pipeline_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.TailRequest
 */
exports.TailRequest = new TailRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TailResponse$Type extends runtime_1.MessageType {
    constructor() {
        super("protos.TailResponse", [
            { no: 1, name: "type", kind: "enum", T: () => ["protos.TailResponseType", TailResponseType, "TAIL_RESPONSE_TYPE_"] },
            { no: 2, name: "tail_request_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "audience", kind: "message", T: () => exports.Audience },
            { no: 4, name: "pipeline_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "session_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "timestamp_ns", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "original_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 8, name: "new_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.TailResponse
 */
exports.TailResponse = new TailResponse$Type();