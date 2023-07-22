// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "pipeline.proto" (package "protos", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { CustomStep } from "./steps/custom.js";
import { DecodeStep } from "./steps/decode.js";
import { EncodeStep } from "./steps/encode.js";
import { TransformStep } from "./steps/transform.js";
import { DetectiveStep } from "./steps/detective.js";
/**
 * SDK generates a WASM request and passes this to the WASM func
 *
 * @generated from protobuf message protos.WASMRequest
 */
export interface WASMRequest {
    /**
     * @generated from protobuf field: protos.PipelineStep step = 1;
     */
    step?: PipelineStep;
    /**
     * @generated from protobuf field: bytes input = 2;
     */
    input: Uint8Array;
}
/**
 * Returned by all WASM functions
 *
 * @generated from protobuf message protos.WASMResponse
 */
export interface WASMResponse {
    /**
     * @generated from protobuf field: bytes output = 1;
     */
    output: Uint8Array;
    /**
     * @generated from protobuf field: protos.WASMExitCode exit_code = 2;
     */
    exitCode: WASMExitCode;
    /**
     * @generated from protobuf field: string exit_msg = 3;
     */
    exitMsg: string;
}
/**
 * A PipelineCommand consists of one or more pipeline steps. A pipeline step
 * is an immutable set of instructions on how to execute a step.
 * The SDK will use the pipeline step to generate a WASM request.
 *
 * @generated from protobuf message protos.PipelineStep
 */
export interface PipelineStep {
    /**
     * Unique ID for the step
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Friendly name for the step
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * Conditions that SDK should check before executing next step
     *
     * @generated from protobuf field: repeated protos.PipelineStepCondition conditions = 3;
     */
    conditions: PipelineStepCondition[];
    /**
     * @generated from protobuf oneof: step
     */
    step: {
        oneofKind: "detective";
        /**
         * @generated from protobuf field: protos.steps.DetectiveStep detective = 1000;
         */
        detective: DetectiveStep;
    } | {
        oneofKind: "transform";
        /**
         * @generated from protobuf field: protos.steps.TransformStep transform = 1001;
         */
        transform: TransformStep;
    } | {
        oneofKind: "encode";
        /**
         * @generated from protobuf field: protos.steps.EncodeStep encode = 1002;
         */
        encode: EncodeStep;
    } | {
        oneofKind: "decode";
        /**
         * @generated from protobuf field: protos.steps.DecodeStep decode = 1003;
         */
        decode: DecodeStep;
    } | {
        oneofKind: "custom";
        /**
         * @generated from protobuf field: protos.steps.CustomStep custom = 1004;
         */
        custom: CustomStep;
    } | {
        oneofKind: undefined;
    };
    /**
     * WASM module ID (set by backend)
     *
     * @generated from protobuf field: string _wasm_id = 10000;
     */
    WasmId: string;
    /**
     * WASM module bytes (set by backend)
     *
     * @generated from protobuf field: bytes _wasm_bytes = 10001;
     */
    WasmBytes: Uint8Array;
    /**
     * WASM function name to execute (set by backend)
     *
     * @generated from protobuf field: string _wasm_function = 10002;
     */
    WasmFunction: string;
}
/**
 * Used for both Add and Update
 *
 * @generated from protobuf message protos.SetPipelineCommand
 */
export interface SetPipelineCommand {
    /**
     * Unique ID for the pipeline
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Friendly name for the pipeline
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * One or more steps to execute
     *
     * @generated from protobuf field: repeated protos.PipelineStep steps = 3;
     */
    steps: PipelineStep[];
}
/**
 * @generated from protobuf message protos.DeletePipelineCommand
 */
export interface DeletePipelineCommand {
    /**
     * Unique ID for the pipeline
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message protos.PausePipelineCommand
 */
export interface PausePipelineCommand {
    /**
     * Unique ID for the pipeline
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message protos.UnpausePipelineCommand
 */
export interface UnpausePipelineCommand {
    /**
     * Unique ID for the pipeline
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * Included in WASM response; SDK is responsible for interpreting the response
 * status and how it relates to the step condition.
 * ie. WASM func returns WASM_EXIT_CODE_INTERNAL_ERROR lookup ON_ERROR
 * conditions to determine what to do next.
 * ie. WASM func returns WASM_EXIT_CODE_SUCCESS lookup ON_MATCH conditions
 * to determine what to do next;
 *
 * @generated from protobuf enum protos.WASMExitCode
 */
export enum WASMExitCode {
    /**
     * @generated from protobuf enum value: WASM_EXIT_CODE_UNSET = 0;
     */
    WASM_EXIT_CODE_UNSET = 0,
    /**
     * @generated from protobuf enum value: WASM_EXIT_CODE_SUCCESS = 1;
     */
    WASM_EXIT_CODE_SUCCESS = 1,
    /**
     * Probably need better names for these as FAILURE is too harsh
     *
     * @generated from protobuf enum value: WASM_EXIT_CODE_FAILURE = 2;
     */
    WASM_EXIT_CODE_FAILURE = 2,
    /**
     * @generated from protobuf enum value: WASM_EXIT_CODE_INTERNAL_ERROR = 3;
     */
    WASM_EXIT_CODE_INTERNAL_ERROR = 3
}
/**
 * A condition defines how the SDK should handle a step response -- should it
 * continue executing the pipeline, should it abort, should it notify the server?
 * Each step can have multiple conditions.
 *
 * @generated from protobuf enum protos.PipelineStepCondition
 */
export enum PipelineStepCondition {
    /**
     * @generated from protobuf enum value: CONDITION_UNSET = 0;
     */
    CONDITION_UNSET = 0,
    /**
     * @generated from protobuf enum value: CONDITION_CONTINUE = 1;
     */
    CONDITION_CONTINUE = 1,
    /**
     * @generated from protobuf enum value: CONDITION_ABORT = 2;
     */
    CONDITION_ABORT = 2,
    /**
     * @generated from protobuf enum value: CONDITION_NOTIFY = 3;
     */
    CONDITION_NOTIFY = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class WASMRequest$Type extends MessageType<WASMRequest> {
    constructor() {
        super("protos.WASMRequest", [
            { no: 1, name: "step", kind: "message", T: () => PipelineStep },
            { no: 2, name: "input", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.WASMRequest
 */
export const WASMRequest = new WASMRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WASMResponse$Type extends MessageType<WASMResponse> {
    constructor() {
        super("protos.WASMResponse", [
            { no: 1, name: "output", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "exit_code", kind: "enum", T: () => ["protos.WASMExitCode", WASMExitCode] },
            { no: 3, name: "exit_msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.WASMResponse
 */
export const WASMResponse = new WASMResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PipelineStep$Type extends MessageType<PipelineStep> {
    constructor() {
        super("protos.PipelineStep", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "conditions", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["protos.PipelineStepCondition", PipelineStepCondition] },
            { no: 1000, name: "detective", kind: "message", oneof: "step", T: () => DetectiveStep },
            { no: 1001, name: "transform", kind: "message", oneof: "step", T: () => TransformStep },
            { no: 1002, name: "encode", kind: "message", oneof: "step", T: () => EncodeStep },
            { no: 1003, name: "decode", kind: "message", oneof: "step", T: () => DecodeStep },
            { no: 1004, name: "custom", kind: "message", oneof: "step", T: () => CustomStep },
            { no: 10000, name: "_wasm_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10001, name: "_wasm_bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 10002, name: "_wasm_function", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.PipelineStep
 */
export const PipelineStep = new PipelineStep$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPipelineCommand$Type extends MessageType<SetPipelineCommand> {
    constructor() {
        super("protos.SetPipelineCommand", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "steps", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PipelineStep }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.SetPipelineCommand
 */
export const SetPipelineCommand = new SetPipelineCommand$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeletePipelineCommand$Type extends MessageType<DeletePipelineCommand> {
    constructor() {
        super("protos.DeletePipelineCommand", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.DeletePipelineCommand
 */
export const DeletePipelineCommand = new DeletePipelineCommand$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PausePipelineCommand$Type extends MessageType<PausePipelineCommand> {
    constructor() {
        super("protos.PausePipelineCommand", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.PausePipelineCommand
 */
export const PausePipelineCommand = new PausePipelineCommand$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnpausePipelineCommand$Type extends MessageType<UnpausePipelineCommand> {
    constructor() {
        super("protos.UnpausePipelineCommand", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.UnpausePipelineCommand
 */
export const UnpausePipelineCommand = new UnpausePipelineCommand$Type();