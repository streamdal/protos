// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "internal_api.proto" (package "protos", syntax proto3)
// tslint:disable
import { StandardResponse } from "./common.js";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { UnpausePipelineCommand } from "./pipeline.js";
import { PausePipelineCommand } from "./pipeline.js";
import { DeletePipelineCommand } from "./pipeline.js";
import { SetPipelineCommand } from "./pipeline.js";
/**
 * Types of commands that can be sent to the SDK
 *
 * @generated from protobuf enum protos.CommandType
 */
export var CommandType;
(function (CommandType) {
    /**
     * @generated from protobuf enum value: SNITCH_COMMAND_TYPE_UNSET = 0;
     */
    CommandType[CommandType["SNITCH_COMMAND_TYPE_UNSET"] = 0] = "SNITCH_COMMAND_TYPE_UNSET";
    /**
     * Use this to keep connection alive; SDK doesn't need to do anything with this - it's there just to keep things alive
     *
     * @generated from protobuf enum value: SNITCH_COMMAND_TYPE_KEEPALIVE = 1;
     */
    CommandType[CommandType["SNITCH_COMMAND_TYPE_KEEPALIVE"] = 1] = "SNITCH_COMMAND_TYPE_KEEPALIVE";
    /**
     * @generated from protobuf enum value: SNITCH_COMMAND_TYPE_SET_PIPELINE = 2;
     */
    CommandType[CommandType["SNITCH_COMMAND_TYPE_SET_PIPELINE"] = 2] = "SNITCH_COMMAND_TYPE_SET_PIPELINE";
    /**
     * @generated from protobuf enum value: SNITCH_COMMAND_TYPE_DELETE_PIPELINE = 3;
     */
    CommandType[CommandType["SNITCH_COMMAND_TYPE_DELETE_PIPELINE"] = 3] = "SNITCH_COMMAND_TYPE_DELETE_PIPELINE";
    /**
     * @generated from protobuf enum value: SNITCH_COMMAND_TYPE_PAUSE_PIPELINE = 4;
     */
    CommandType[CommandType["SNITCH_COMMAND_TYPE_PAUSE_PIPELINE"] = 4] = "SNITCH_COMMAND_TYPE_PAUSE_PIPELINE";
    /**
     * @generated from protobuf enum value: SNITCH_COMMAND_TYPE_UNPAUSE_PIPELINE = 5;
     */
    CommandType[CommandType["SNITCH_COMMAND_TYPE_UNPAUSE_PIPELINE"] = 5] = "SNITCH_COMMAND_TYPE_UNPAUSE_PIPELINE";
})(CommandType || (CommandType = {}));
/**
 * @generated from protobuf enum protos.OperationType
 */
export var OperationType;
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
})(OperationType || (OperationType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class HeartbeatRequest$Type extends MessageType {
    constructor() {
        super("protos.HeartbeatRequest", [
            { no: 1, name: "audience", kind: "message", T: () => Audience },
            { no: 2, name: "last_activity_unix_timestamp_utc", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.HeartbeatRequest
 */
export const HeartbeatRequest = new HeartbeatRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NotifyRequest$Type extends MessageType {
    constructor() {
        super("protos.NotifyRequest", [
            { no: 1, name: "rule_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "rule_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "audience", kind: "message", T: () => Audience },
            { no: 4, name: "occurred_at_unix_ts_utc", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.NotifyRequest
 */
export const NotifyRequest = new NotifyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MetricsRequest$Type extends MessageType {
    constructor() {
        super("protos.MetricsRequest", [
            { no: 1, name: "rule_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "rule_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "audience", kind: "message", T: () => Audience },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.MetricsRequest
 */
export const MetricsRequest = new MetricsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegisterRequest$Type extends MessageType {
    constructor() {
        super("protos.RegisterRequest", [
            { no: 1, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "dry_run", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.RegisterRequest
 */
export const RegisterRequest = new RegisterRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BusEvent$Type extends MessageType {
    constructor() {
        super("protos.BusEvent", [
            { no: 1, name: "request_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "source", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 100, name: "command_response", kind: "message", oneof: "event", T: () => CommandResponse },
            { no: 101, name: "register_request", kind: "message", oneof: "event", T: () => RegisterRequest },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.BusEvent
 */
export const BusEvent = new BusEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CommandResponse$Type extends MessageType {
    constructor() {
        super("protos.CommandResponse", [
            { no: 1, name: "audience", kind: "message", T: () => Audience },
            { no: 100, name: "set_pipeline", kind: "message", oneof: "command", T: () => SetPipelineCommand },
            { no: 101, name: "delete_pipeline", kind: "message", oneof: "command", T: () => DeletePipelineCommand },
            { no: 102, name: "pause_pipeline", kind: "message", oneof: "command", T: () => PausePipelineCommand },
            { no: 103, name: "unpause_pipeline", kind: "message", oneof: "command", T: () => UnpausePipelineCommand },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.CommandResponse
 */
export const CommandResponse = new CommandResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Audience$Type extends MessageType {
    constructor() {
        super("protos.Audience", [
            { no: 1, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "component_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "operation_type", kind: "enum", T: () => ["protos.OperationType", OperationType, "OPERATION_TYPE_"] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.Audience
 */
export const Audience = new Audience$Type();
/**
 * @generated ServiceType for protobuf service protos.Internal
 */
export const Internal = new ServiceType("protos.Internal", [
    { name: "Register", serverStreaming: true, options: {}, I: RegisterRequest, O: CommandResponse },
    { name: "Heartbeat", options: {}, I: HeartbeatRequest, O: StandardResponse },
    { name: "Notify", options: {}, I: NotifyRequest, O: StandardResponse },
    { name: "Metrics", options: {}, I: MetricsRequest, O: StandardResponse }
]);
//# sourceMappingURL=internal_api.js.map