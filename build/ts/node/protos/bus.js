// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "bus.proto" (package "protos", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { ResumePipelineRequest } from "./external.js";
import { PausePipelineRequest } from "./external.js";
import { DetachPipelineRequest } from "./external.js";
import { AttachPipelineRequest } from "./external.js";
import { UpdatePipelineRequest } from "./external.js";
import { DeletePipelineRequest } from "./external.js";
import { CreatePipelineRequest } from "./external.js";
import { DeregisterRequest } from "./internal.js";
import { RegisterRequest } from "./internal.js";
// @generated message type with reflection information, may provide speed optimized methods
class BusEvent$Type extends MessageType {
    constructor() {
        super("protos.BusEvent", [
            { no: 1, name: "source", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 100, name: "register_request", kind: "message", oneof: "event", T: () => RegisterRequest },
            { no: 101, name: "deregister_request", kind: "message", oneof: "event", T: () => DeregisterRequest },
            { no: 102, name: "create_pipeline_request", kind: "message", oneof: "event", T: () => CreatePipelineRequest },
            { no: 103, name: "delete_pipeline_request", kind: "message", oneof: "event", T: () => DeletePipelineRequest },
            { no: 104, name: "update_pipeline_request", kind: "message", oneof: "event", T: () => UpdatePipelineRequest },
            { no: 105, name: "attach_pipeline_request", kind: "message", oneof: "event", T: () => AttachPipelineRequest },
            { no: 106, name: "detach_pipeline_request", kind: "message", oneof: "event", T: () => DetachPipelineRequest },
            { no: 107, name: "pause_pipeline_request", kind: "message", oneof: "event", T: () => PausePipelineRequest },
            { no: 108, name: "resume_pipeline_request", kind: "message", oneof: "event", T: () => ResumePipelineRequest },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.BusEvent
 */
export const BusEvent = new BusEvent$Type();
//# sourceMappingURL=bus.js.map