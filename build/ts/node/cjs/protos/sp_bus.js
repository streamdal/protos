"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusEvent = void 0;
// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "sp_bus.proto" (package "protos", syntax proto3)
// tslint:disable
const runtime_1 = require("@protobuf-ts/runtime");
const sp_common_1 = require("./sp_common");
const sp_common_2 = require("./sp_common");
const sp_internal_1 = require("./sp_internal");
const sp_external_1 = require("./sp_external");
const sp_kv_1 = require("./sp_kv");
const sp_internal_2 = require("./sp_internal");
const sp_external_2 = require("./sp_external");
const sp_external_3 = require("./sp_external");
const sp_external_4 = require("./sp_external");
const sp_external_5 = require("./sp_external");
const sp_external_6 = require("./sp_external");
const sp_external_7 = require("./sp_external");
const sp_external_8 = require("./sp_external");
const sp_internal_3 = require("./sp_internal");
const sp_internal_4 = require("./sp_internal");
// @generated message type with reflection information, may provide speed optimized methods
class BusEvent$Type extends runtime_1.MessageType {
    constructor() {
        super("protos.BusEvent", [
            { no: 1, name: "source", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 100, name: "register_request", kind: "message", oneof: "event", T: () => sp_internal_4.RegisterRequest },
            { no: 101, name: "deregister_request", kind: "message", oneof: "event", T: () => sp_internal_3.DeregisterRequest },
            { no: 102, name: "create_pipeline_request", kind: "message", oneof: "event", T: () => sp_external_8.CreatePipelineRequest },
            { no: 103, name: "delete_pipeline_request", kind: "message", oneof: "event", T: () => sp_external_7.DeletePipelineRequest },
            { no: 104, name: "update_pipeline_request", kind: "message", oneof: "event", T: () => sp_external_6.UpdatePipelineRequest },
            { no: 105, name: "attach_pipeline_request", kind: "message", oneof: "event", T: () => sp_external_5.AttachPipelineRequest },
            { no: 106, name: "detach_pipeline_request", kind: "message", oneof: "event", T: () => sp_external_4.DetachPipelineRequest },
            { no: 107, name: "pause_pipeline_request", kind: "message", oneof: "event", T: () => sp_external_3.PausePipelineRequest },
            { no: 108, name: "resume_pipeline_request", kind: "message", oneof: "event", T: () => sp_external_2.ResumePipelineRequest },
            { no: 109, name: "metrics_request", kind: "message", oneof: "event", T: () => sp_internal_2.MetricsRequest },
            { no: 110, name: "kv_request", kind: "message", oneof: "event", T: () => sp_kv_1.KVRequest },
            { no: 111, name: "delete_audience_request", kind: "message", oneof: "event", T: () => sp_external_1.DeleteAudienceRequest },
            { no: 112, name: "new_audience_request", kind: "message", oneof: "event", T: () => sp_internal_1.NewAudienceRequest },
            { no: 113, name: "tail_request", kind: "message", oneof: "event", T: () => sp_common_2.TailRequest },
            { no: 114, name: "tail_response", kind: "message", oneof: "event", T: () => sp_common_1.TailResponse },
            { no: 1000, name: "_metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.BusEvent
 */
exports.BusEvent = new BusEvent$Type();