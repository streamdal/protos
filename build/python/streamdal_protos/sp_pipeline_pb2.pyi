from steps import sp_steps_custom_pb2 as _sp_steps_custom_pb2
from steps import sp_steps_decode_pb2 as _sp_steps_decode_pb2
from steps import sp_steps_detective_pb2 as _sp_steps_detective_pb2
from steps import sp_steps_encode_pb2 as _sp_steps_encode_pb2
from steps import sp_steps_httprequest_pb2 as _sp_steps_httprequest_pb2
from steps import sp_steps_inferschema_pb2 as _sp_steps_inferschema_pb2
from steps import sp_steps_kv_pb2 as _sp_steps_kv_pb2
from steps import sp_steps_transform_pb2 as _sp_steps_transform_pb2
from steps import sp_steps_valid_json_pb2 as _sp_steps_valid_json_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor
PIPELINE_STEP_CONDITION_ABORT_ALL: PipelineStepCondition
PIPELINE_STEP_CONDITION_ABORT_CURRENT: PipelineStepCondition
PIPELINE_STEP_CONDITION_NOTIFY: PipelineStepCondition
PIPELINE_STEP_CONDITION_UNSET: PipelineStepCondition

class Pipeline(_message.Message):
    __slots__ = ["created_at", "id", "name", "steps", "updated_at", "version"]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    STEPS_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    created_at: int
    id: str
    name: str
    steps: _containers.RepeatedCompositeFieldContainer[PipelineStep]
    updated_at: int
    version: int
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., steps: _Optional[_Iterable[_Union[PipelineStep, _Mapping]]] = ..., version: _Optional[int] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...

class PipelineStep(_message.Message):
    __slots__ = ["_wasm_bytes", "_wasm_function", "_wasm_id", "custom", "decode", "detective", "encode", "http_request", "infer_schema", "kv", "name", "on_failure", "on_success", "transform", "valid_json"]
    CUSTOM_FIELD_NUMBER: _ClassVar[int]
    DECODE_FIELD_NUMBER: _ClassVar[int]
    DETECTIVE_FIELD_NUMBER: _ClassVar[int]
    ENCODE_FIELD_NUMBER: _ClassVar[int]
    HTTP_REQUEST_FIELD_NUMBER: _ClassVar[int]
    INFER_SCHEMA_FIELD_NUMBER: _ClassVar[int]
    KV_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ON_FAILURE_FIELD_NUMBER: _ClassVar[int]
    ON_SUCCESS_FIELD_NUMBER: _ClassVar[int]
    TRANSFORM_FIELD_NUMBER: _ClassVar[int]
    VALID_JSON_FIELD_NUMBER: _ClassVar[int]
    _WASM_BYTES_FIELD_NUMBER: _ClassVar[int]
    _WASM_FUNCTION_FIELD_NUMBER: _ClassVar[int]
    _WASM_ID_FIELD_NUMBER: _ClassVar[int]
    _wasm_bytes: bytes
    _wasm_function: str
    _wasm_id: str
    custom: _sp_steps_custom_pb2.CustomStep
    decode: _sp_steps_decode_pb2.DecodeStep
    detective: _sp_steps_detective_pb2.DetectiveStep
    encode: _sp_steps_encode_pb2.EncodeStep
    http_request: _sp_steps_httprequest_pb2.HttpRequestStep
    infer_schema: _sp_steps_inferschema_pb2.InferSchemaStep
    kv: _sp_steps_kv_pb2.KVStep
    name: str
    on_failure: _containers.RepeatedScalarFieldContainer[PipelineStepCondition]
    on_success: _containers.RepeatedScalarFieldContainer[PipelineStepCondition]
    transform: _sp_steps_transform_pb2.TransformStep
    valid_json: _sp_steps_valid_json_pb2.ValidJSONStep
    def __init__(self, name: _Optional[str] = ..., on_success: _Optional[_Iterable[_Union[PipelineStepCondition, str]]] = ..., on_failure: _Optional[_Iterable[_Union[PipelineStepCondition, str]]] = ..., detective: _Optional[_Union[_sp_steps_detective_pb2.DetectiveStep, _Mapping]] = ..., transform: _Optional[_Union[_sp_steps_transform_pb2.TransformStep, _Mapping]] = ..., encode: _Optional[_Union[_sp_steps_encode_pb2.EncodeStep, _Mapping]] = ..., decode: _Optional[_Union[_sp_steps_decode_pb2.DecodeStep, _Mapping]] = ..., custom: _Optional[_Union[_sp_steps_custom_pb2.CustomStep, _Mapping]] = ..., http_request: _Optional[_Union[_sp_steps_httprequest_pb2.HttpRequestStep, _Mapping]] = ..., kv: _Optional[_Union[_sp_steps_kv_pb2.KVStep, _Mapping]] = ..., infer_schema: _Optional[_Union[_sp_steps_inferschema_pb2.InferSchemaStep, _Mapping]] = ..., valid_json: _Optional[_Union[_sp_steps_valid_json_pb2.ValidJSONStep, _Mapping]] = ..., _wasm_id: _Optional[str] = ..., _wasm_bytes: _Optional[bytes] = ..., _wasm_function: _Optional[str] = ...) -> None: ...

class PipelineStepCondition(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
