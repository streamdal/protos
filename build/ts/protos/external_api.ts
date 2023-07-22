// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "external.proto" (package "protos", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * protolint:disable INDENT
 *
 * @generated from protobuf message protos.GetServicesRequest
 */
export interface GetServicesRequest {
}
/**
 * @generated from protobuf message protos.GetServicesResponse
 */
export interface GetServicesResponse {
}
/**
 * @generated from protobuf message protos.GetServiceRequest
 */
export interface GetServiceRequest {
}
/**
 * @generated from protobuf message protos.GetServiceResponse
 */
export interface GetServiceResponse {
}
/**
 * @generated from protobuf message protos.GetPipelinesRequest
 */
export interface GetPipelinesRequest {
}
/**
 * @generated from protobuf message protos.GetPipelinesResponse
 */
export interface GetPipelinesResponse {
}
/**
 * @generated from protobuf message protos.GetPipelineRequest
 */
export interface GetPipelineRequest {
}
/**
 * @generated from protobuf message protos.GetPipelineResponse
 */
export interface GetPipelineResponse {
}
/**
 * @generated from protobuf message protos.SetPipelineRequest
 */
export interface SetPipelineRequest {
}
/**
 * @generated from protobuf message protos.SetPipelineResponse
 */
export interface SetPipelineResponse {
}
/**
 * @generated from protobuf message protos.DeletePipelineRequest
 */
export interface DeletePipelineRequest {
}
/**
 * @generated from protobuf message protos.DeletePipelineResponse
 */
export interface DeletePipelineResponse {
}
/**
 * @generated from protobuf message protos.GetStepsRequest
 */
export interface GetStepsRequest {
}
/**
 * @generated from protobuf message protos.GetStepsResponse
 */
export interface GetStepsResponse {
}
/**
 * @generated from protobuf message protos.CreateStepRequest
 */
export interface CreateStepRequest {
}
/**
 * @generated from protobuf message protos.CreateStepResponse
 */
export interface CreateStepResponse {
}
/**
 * @generated from protobuf message protos.UpdateStepRequest
 */
export interface UpdateStepRequest {
}
/**
 * @generated from protobuf message protos.UpdateStepResponse
 */
export interface UpdateStepResponse {
}
/**
 * @generated from protobuf message protos.DeleteStepRequest
 */
export interface DeleteStepRequest {
}
/**
 * @generated from protobuf message protos.DeleteStepResponse
 */
export interface DeleteStepResponse {
}
/**
 * @generated from protobuf message protos.TestRequest
 */
export interface TestRequest {
    /**
     * @generated from protobuf field: string input = 1;
     */
    input: string;
}
/**
 * @generated from protobuf message protos.TestResponse
 */
export interface TestResponse {
    /**
     * @generated from protobuf field: string output = 2;
     */
    output: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetServicesRequest$Type extends MessageType<GetServicesRequest> {
    constructor() {
        super("protos.GetServicesRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetServicesRequest
 */
export const GetServicesRequest = new GetServicesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetServicesResponse$Type extends MessageType<GetServicesResponse> {
    constructor() {
        super("protos.GetServicesResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetServicesResponse
 */
export const GetServicesResponse = new GetServicesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetServiceRequest$Type extends MessageType<GetServiceRequest> {
    constructor() {
        super("protos.GetServiceRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetServiceRequest
 */
export const GetServiceRequest = new GetServiceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetServiceResponse$Type extends MessageType<GetServiceResponse> {
    constructor() {
        super("protos.GetServiceResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetServiceResponse
 */
export const GetServiceResponse = new GetServiceResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPipelinesRequest$Type extends MessageType<GetPipelinesRequest> {
    constructor() {
        super("protos.GetPipelinesRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetPipelinesRequest
 */
export const GetPipelinesRequest = new GetPipelinesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPipelinesResponse$Type extends MessageType<GetPipelinesResponse> {
    constructor() {
        super("protos.GetPipelinesResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetPipelinesResponse
 */
export const GetPipelinesResponse = new GetPipelinesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPipelineRequest$Type extends MessageType<GetPipelineRequest> {
    constructor() {
        super("protos.GetPipelineRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetPipelineRequest
 */
export const GetPipelineRequest = new GetPipelineRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPipelineResponse$Type extends MessageType<GetPipelineResponse> {
    constructor() {
        super("protos.GetPipelineResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetPipelineResponse
 */
export const GetPipelineResponse = new GetPipelineResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPipelineRequest$Type extends MessageType<SetPipelineRequest> {
    constructor() {
        super("protos.SetPipelineRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.SetPipelineRequest
 */
export const SetPipelineRequest = new SetPipelineRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPipelineResponse$Type extends MessageType<SetPipelineResponse> {
    constructor() {
        super("protos.SetPipelineResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.SetPipelineResponse
 */
export const SetPipelineResponse = new SetPipelineResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeletePipelineRequest$Type extends MessageType<DeletePipelineRequest> {
    constructor() {
        super("protos.DeletePipelineRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.DeletePipelineRequest
 */
export const DeletePipelineRequest = new DeletePipelineRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeletePipelineResponse$Type extends MessageType<DeletePipelineResponse> {
    constructor() {
        super("protos.DeletePipelineResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.DeletePipelineResponse
 */
export const DeletePipelineResponse = new DeletePipelineResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetStepsRequest$Type extends MessageType<GetStepsRequest> {
    constructor() {
        super("protos.GetStepsRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetStepsRequest
 */
export const GetStepsRequest = new GetStepsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetStepsResponse$Type extends MessageType<GetStepsResponse> {
    constructor() {
        super("protos.GetStepsResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.GetStepsResponse
 */
export const GetStepsResponse = new GetStepsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateStepRequest$Type extends MessageType<CreateStepRequest> {
    constructor() {
        super("protos.CreateStepRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.CreateStepRequest
 */
export const CreateStepRequest = new CreateStepRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateStepResponse$Type extends MessageType<CreateStepResponse> {
    constructor() {
        super("protos.CreateStepResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.CreateStepResponse
 */
export const CreateStepResponse = new CreateStepResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateStepRequest$Type extends MessageType<UpdateStepRequest> {
    constructor() {
        super("protos.UpdateStepRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.UpdateStepRequest
 */
export const UpdateStepRequest = new UpdateStepRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateStepResponse$Type extends MessageType<UpdateStepResponse> {
    constructor() {
        super("protos.UpdateStepResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.UpdateStepResponse
 */
export const UpdateStepResponse = new UpdateStepResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteStepRequest$Type extends MessageType<DeleteStepRequest> {
    constructor() {
        super("protos.DeleteStepRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.DeleteStepRequest
 */
export const DeleteStepRequest = new DeleteStepRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteStepResponse$Type extends MessageType<DeleteStepResponse> {
    constructor() {
        super("protos.DeleteStepResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.DeleteStepResponse
 */
export const DeleteStepResponse = new DeleteStepResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TestRequest$Type extends MessageType<TestRequest> {
    constructor() {
        super("protos.TestRequest", [
            { no: 1, name: "input", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.TestRequest
 */
export const TestRequest = new TestRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TestResponse$Type extends MessageType<TestResponse> {
    constructor() {
        super("protos.TestResponse", [
            { no: 2, name: "output", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.TestResponse
 */
export const TestResponse = new TestResponse$Type();
/**
 * @generated ServiceType for protobuf service protos.External
 */
export const External = new ServiceType("protos.External", [
    { name: "GetServices", options: {}, I: GetServicesRequest, O: GetServicesResponse },
    { name: "GetService", options: {}, I: GetServiceRequest, O: GetServiceResponse },
    { name: "GetPipelines", options: {}, I: GetPipelinesRequest, O: GetPipelinesResponse },
    { name: "GetPipeline", options: {}, I: GetPipelineRequest, O: GetPipelineResponse },
    { name: "SetPipeline", options: {}, I: SetPipelineRequest, O: SetPipelineResponse },
    { name: "DeletePipeline", options: {}, I: DeletePipelineRequest, O: DeletePipelineResponse },
    { name: "GetSteps", options: {}, I: GetStepsRequest, O: GetStepsResponse },
    { name: "CreateStep", options: {}, I: CreateStepRequest, O: CreateStepResponse },
    { name: "UpdateStep", options: {}, I: UpdateStepRequest, O: UpdateStepResponse },
    { name: "DeleteStep", options: {}, I: DeleteStepRequest, O: DeleteStepResponse },
    { name: "Test", options: {}, I: TestRequest, O: TestResponse }
]);