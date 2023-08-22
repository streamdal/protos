// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "steps/sp_steps_transform.proto" (package "protos.steps", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf enum protos.steps.TransformType
 */
export var TransformType;
(function (TransformType) {
    /**
     * @generated from protobuf enum value: TRANSFORM_TYPE_UNKNOWN = 0;
     */
    TransformType[TransformType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from protobuf enum value: TRANSFORM_TYPE_REPLACE_VALUE = 1;
     */
    TransformType[TransformType["REPLACE_VALUE"] = 1] = "REPLACE_VALUE";
    /**
     * @generated from protobuf enum value: TRANSFORM_TYPE_DELETE_FIELD = 2;
     */
    TransformType[TransformType["DELETE_FIELD"] = 2] = "DELETE_FIELD";
    /**
     * @generated from protobuf enum value: TRANSFORM_TYPE_OBFUSCATE_VALUE = 3;
     */
    TransformType[TransformType["OBFUSCATE_VALUE"] = 3] = "OBFUSCATE_VALUE";
    /**
     * @generated from protobuf enum value: TRANSFORM_TYPE_MASK_VALUE = 4;
     */
    TransformType[TransformType["MASK_VALUE"] = 4] = "MASK_VALUE";
})(TransformType || (TransformType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class TransformStep$Type extends MessageType {
    constructor() {
        super("protos.steps.TransformStep", [
            { no: 1, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "type", kind: "enum", T: () => ["protos.steps.TransformType", TransformType, "TRANSFORM_TYPE_"] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.steps.TransformStep
 */
export const TransformStep = new TransformStep$Type();
//# sourceMappingURL=sp_steps_transform.js.map