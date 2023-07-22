// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "external.proto" (package "protos", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { External } from "./external_api.js";
import type { TestResponse } from "./external_api.js";
import type { TestRequest } from "./external_api.js";
import type { DeleteStepResponse } from "./external_api.js";
import type { DeleteStepRequest } from "./external_api.js";
import type { UpdateStepResponse } from "./external_api.js";
import type { UpdateStepRequest } from "./external_api.js";
import type { CreateStepResponse } from "./external_api.js";
import type { CreateStepRequest } from "./external_api.js";
import type { GetStepsResponse } from "./external_api.js";
import type { GetStepsRequest } from "./external_api.js";
import type { DeletePipelineResponse } from "./external_api.js";
import type { DeletePipelineRequest } from "./external_api.js";
import type { SetPipelineResponse } from "./external_api.js";
import type { SetPipelineRequest } from "./external_api.js";
import type { GetPipelineResponse } from "./external_api.js";
import type { GetPipelineRequest } from "./external_api.js";
import type { GetPipelinesResponse } from "./external_api.js";
import type { GetPipelinesRequest } from "./external_api.js";
import type { GetServiceResponse } from "./external_api.js";
import type { GetServiceRequest } from "./external_api.js";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetServicesResponse } from "./external_api.js";
import type { GetServicesRequest } from "./external_api.js";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service protos.External
 */
export interface IExternalClient {
    /**
     * Build a service map
     *
     * @generated from protobuf rpc: GetServices(protos.GetServicesRequest) returns (protos.GetServicesResponse);
     */
    getServices(input: GetServicesRequest, options?: RpcOptions): UnaryCall<GetServicesRequest, GetServicesResponse>;
    /**
     * Figure out consumers/producers, pipelines and targets for a given service
     *
     * @generated from protobuf rpc: GetService(protos.GetServiceRequest) returns (protos.GetServiceResponse);
     */
    getService(input: GetServiceRequest, options?: RpcOptions): UnaryCall<GetServiceRequest, GetServiceResponse>;
    /**
     * Get all available pipelines
     *
     * @generated from protobuf rpc: GetPipelines(protos.GetPipelinesRequest) returns (protos.GetPipelinesResponse);
     */
    getPipelines(input: GetPipelinesRequest, options?: RpcOptions): UnaryCall<GetPipelinesRequest, GetPipelinesResponse>;
    /**
     * Get a pipeline (and its steps)
     *
     * @generated from protobuf rpc: GetPipeline(protos.GetPipelineRequest) returns (protos.GetPipelineResponse);
     */
    getPipeline(input: GetPipelineRequest, options?: RpcOptions): UnaryCall<GetPipelineRequest, GetPipelineResponse>;
    /**
     * Associate steps with a pipeline // Can also use this to set steps in one big push
     *
     * @generated from protobuf rpc: SetPipeline(protos.SetPipelineRequest) returns (protos.SetPipelineResponse);
     */
    setPipeline(input: SetPipelineRequest, options?: RpcOptions): UnaryCall<SetPipelineRequest, SetPipelineResponse>;
    /**
     * Delete a pipeline
     *
     * @generated from protobuf rpc: DeletePipeline(protos.DeletePipelineRequest) returns (protos.DeletePipelineResponse);
     */
    deletePipeline(input: DeletePipelineRequest, options?: RpcOptions): UnaryCall<DeletePipelineRequest, DeletePipelineResponse>;
    /**
     * Get steps associated with a pipeline
     *
     * @generated from protobuf rpc: GetSteps(protos.GetStepsRequest) returns (protos.GetStepsResponse);
     */
    getSteps(input: GetStepsRequest, options?: RpcOptions): UnaryCall<GetStepsRequest, GetStepsResponse>;
    /**
     * Create a step
     *
     * @generated from protobuf rpc: CreateStep(protos.CreateStepRequest) returns (protos.CreateStepResponse);
     */
    createStep(input: CreateStepRequest, options?: RpcOptions): UnaryCall<CreateStepRequest, CreateStepResponse>;
    /**
     * Update a step
     *
     * @generated from protobuf rpc: UpdateStep(protos.UpdateStepRequest) returns (protos.UpdateStepResponse);
     */
    updateStep(input: UpdateStepRequest, options?: RpcOptions): UnaryCall<UpdateStepRequest, UpdateStepResponse>;
    /**
     * Delete a step
     *
     * @generated from protobuf rpc: DeleteStep(protos.DeleteStepRequest) returns (protos.DeleteStepResponse);
     */
    deleteStep(input: DeleteStepRequest, options?: RpcOptions): UnaryCall<DeleteStepRequest, DeleteStepResponse>;
    /**
     * Test method
     *
     * @generated from protobuf rpc: Test(protos.TestRequest) returns (protos.TestResponse);
     */
    test(input: TestRequest, options?: RpcOptions): UnaryCall<TestRequest, TestResponse>;
}
/**
 * @generated from protobuf service protos.External
 */
export class ExternalClient implements IExternalClient, ServiceInfo {
    typeName = External.typeName;
    methods = External.methods;
    options = External.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Build a service map
     *
     * @generated from protobuf rpc: GetServices(protos.GetServicesRequest) returns (protos.GetServicesResponse);
     */
    getServices(input: GetServicesRequest, options?: RpcOptions): UnaryCall<GetServicesRequest, GetServicesResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetServicesRequest, GetServicesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Figure out consumers/producers, pipelines and targets for a given service
     *
     * @generated from protobuf rpc: GetService(protos.GetServiceRequest) returns (protos.GetServiceResponse);
     */
    getService(input: GetServiceRequest, options?: RpcOptions): UnaryCall<GetServiceRequest, GetServiceResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetServiceRequest, GetServiceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Get all available pipelines
     *
     * @generated from protobuf rpc: GetPipelines(protos.GetPipelinesRequest) returns (protos.GetPipelinesResponse);
     */
    getPipelines(input: GetPipelinesRequest, options?: RpcOptions): UnaryCall<GetPipelinesRequest, GetPipelinesResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPipelinesRequest, GetPipelinesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Get a pipeline (and its steps)
     *
     * @generated from protobuf rpc: GetPipeline(protos.GetPipelineRequest) returns (protos.GetPipelineResponse);
     */
    getPipeline(input: GetPipelineRequest, options?: RpcOptions): UnaryCall<GetPipelineRequest, GetPipelineResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPipelineRequest, GetPipelineResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Associate steps with a pipeline // Can also use this to set steps in one big push
     *
     * @generated from protobuf rpc: SetPipeline(protos.SetPipelineRequest) returns (protos.SetPipelineResponse);
     */
    setPipeline(input: SetPipelineRequest, options?: RpcOptions): UnaryCall<SetPipelineRequest, SetPipelineResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetPipelineRequest, SetPipelineResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Delete a pipeline
     *
     * @generated from protobuf rpc: DeletePipeline(protos.DeletePipelineRequest) returns (protos.DeletePipelineResponse);
     */
    deletePipeline(input: DeletePipelineRequest, options?: RpcOptions): UnaryCall<DeletePipelineRequest, DeletePipelineResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeletePipelineRequest, DeletePipelineResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Get steps associated with a pipeline
     *
     * @generated from protobuf rpc: GetSteps(protos.GetStepsRequest) returns (protos.GetStepsResponse);
     */
    getSteps(input: GetStepsRequest, options?: RpcOptions): UnaryCall<GetStepsRequest, GetStepsResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetStepsRequest, GetStepsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Create a step
     *
     * @generated from protobuf rpc: CreateStep(protos.CreateStepRequest) returns (protos.CreateStepResponse);
     */
    createStep(input: CreateStepRequest, options?: RpcOptions): UnaryCall<CreateStepRequest, CreateStepResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateStepRequest, CreateStepResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Update a step
     *
     * @generated from protobuf rpc: UpdateStep(protos.UpdateStepRequest) returns (protos.UpdateStepResponse);
     */
    updateStep(input: UpdateStepRequest, options?: RpcOptions): UnaryCall<UpdateStepRequest, UpdateStepResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateStepRequest, UpdateStepResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Delete a step
     *
     * @generated from protobuf rpc: DeleteStep(protos.DeleteStepRequest) returns (protos.DeleteStepResponse);
     */
    deleteStep(input: DeleteStepRequest, options?: RpcOptions): UnaryCall<DeleteStepRequest, DeleteStepResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteStepRequest, DeleteStepResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Test method
     *
     * @generated from protobuf rpc: Test(protos.TestRequest) returns (protos.TestResponse);
     */
    test(input: TestRequest, options?: RpcOptions): UnaryCall<TestRequest, TestResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<TestRequest, TestResponse>("unary", this._transport, method, opt, input);
    }
}
