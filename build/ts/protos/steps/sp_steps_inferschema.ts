// @generated by protobuf-ts 2.9.0 with parameter long_type_string
// @generated from protobuf file "steps/sp_steps_inferschema.proto" (package "protos.steps", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * InferSchemaStep is a step that infers the schema of a payload.
 * It is designed to be used directly by the SDK rather than in a pipeline, so that
 * we can support schema inference without the need for pipelines to be created
 *
 * @generated from protobuf message protos.steps.InferSchemaStep
 */
export interface InferSchemaStep {
    /**
     * @generated from protobuf field: bytes current_schema = 1;
     */
    currentSchema: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class InferSchemaStep$Type extends MessageType<InferSchemaStep> {
    constructor() {
        super("protos.steps.InferSchemaStep", [
            { no: 1, name: "current_schema", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<InferSchemaStep>): InferSchemaStep {
        const message = { currentSchema: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InferSchemaStep>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InferSchemaStep): InferSchemaStep {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes current_schema */ 1:
                    message.currentSchema = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: InferSchemaStep, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes current_schema = 1; */
        if (message.currentSchema.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.currentSchema);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message protos.steps.InferSchemaStep
 */
export const InferSchemaStep = new InferSchemaStep$Type();
