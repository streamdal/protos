import sp_common_pb2 as _sp_common_pb2
import sp_info_pb2 as _sp_info_pb2
import sp_notify_pb2 as _sp_notify_pb2
import sp_pipeline_pb2 as _sp_pipeline_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AttachNotificationRequest(_message.Message):
    __slots__ = ["notification_id", "pipeline_id"]
    NOTIFICATION_ID_FIELD_NUMBER: _ClassVar[int]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    notification_id: str
    pipeline_id: str
    def __init__(self, notification_id: _Optional[str] = ..., pipeline_id: _Optional[str] = ...) -> None: ...

class AttachPipelineRequest(_message.Message):
    __slots__ = ["audience", "pipeline_id"]
    AUDIENCE_FIELD_NUMBER: _ClassVar[int]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    audience: _sp_common_pb2.Audience
    pipeline_id: str
    def __init__(self, pipeline_id: _Optional[str] = ..., audience: _Optional[_Union[_sp_common_pb2.Audience, _Mapping]] = ...) -> None: ...

class CreateNotificationRequest(_message.Message):
    __slots__ = ["notification"]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    notification: _sp_notify_pb2.NotificationConfig
    def __init__(self, notification: _Optional[_Union[_sp_notify_pb2.NotificationConfig, _Mapping]] = ...) -> None: ...

class CreatePipelineRequest(_message.Message):
    __slots__ = ["pipeline"]
    PIPELINE_FIELD_NUMBER: _ClassVar[int]
    pipeline: _sp_pipeline_pb2.Pipeline
    def __init__(self, pipeline: _Optional[_Union[_sp_pipeline_pb2.Pipeline, _Mapping]] = ...) -> None: ...

class CreatePipelineResponse(_message.Message):
    __slots__ = ["message", "pipeline_id"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    message: str
    pipeline_id: str
    def __init__(self, message: _Optional[str] = ..., pipeline_id: _Optional[str] = ...) -> None: ...

class DeleteNotificationRequest(_message.Message):
    __slots__ = ["notification_id"]
    NOTIFICATION_ID_FIELD_NUMBER: _ClassVar[int]
    notification_id: str
    def __init__(self, notification_id: _Optional[str] = ...) -> None: ...

class DeletePipelineRequest(_message.Message):
    __slots__ = ["pipeline_id"]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    pipeline_id: str
    def __init__(self, pipeline_id: _Optional[str] = ...) -> None: ...

class DetachNotificationRequest(_message.Message):
    __slots__ = ["notification_id", "pipeline_id"]
    NOTIFICATION_ID_FIELD_NUMBER: _ClassVar[int]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    notification_id: str
    pipeline_id: str
    def __init__(self, notification_id: _Optional[str] = ..., pipeline_id: _Optional[str] = ...) -> None: ...

class DetachPipelineRequest(_message.Message):
    __slots__ = ["audience", "pipeline_id"]
    AUDIENCE_FIELD_NUMBER: _ClassVar[int]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    audience: _sp_common_pb2.Audience
    pipeline_id: str
    def __init__(self, pipeline_id: _Optional[str] = ..., audience: _Optional[_Union[_sp_common_pb2.Audience, _Mapping]] = ...) -> None: ...

class GetAllRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetAllResponse(_message.Message):
    __slots__ = ["audiences", "config", "live", "pipelines"]
    class ConfigEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    class PipelinesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _sp_info_pb2.PipelineInfo
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_sp_info_pb2.PipelineInfo, _Mapping]] = ...) -> None: ...
    AUDIENCES_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    LIVE_FIELD_NUMBER: _ClassVar[int]
    PIPELINES_FIELD_NUMBER: _ClassVar[int]
    audiences: _containers.RepeatedCompositeFieldContainer[_sp_common_pb2.Audience]
    config: _containers.ScalarMap[str, str]
    live: _containers.RepeatedCompositeFieldContainer[_sp_info_pb2.LiveInfo]
    pipelines: _containers.MessageMap[str, _sp_info_pb2.PipelineInfo]
    def __init__(self, live: _Optional[_Iterable[_Union[_sp_info_pb2.LiveInfo, _Mapping]]] = ..., audiences: _Optional[_Iterable[_Union[_sp_common_pb2.Audience, _Mapping]]] = ..., pipelines: _Optional[_Mapping[str, _sp_info_pb2.PipelineInfo]] = ..., config: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetNotificationRequest(_message.Message):
    __slots__ = ["notification_id"]
    NOTIFICATION_ID_FIELD_NUMBER: _ClassVar[int]
    notification_id: str
    def __init__(self, notification_id: _Optional[str] = ...) -> None: ...

class GetNotificationResponse(_message.Message):
    __slots__ = ["notification"]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    notification: _sp_notify_pb2.NotificationConfig
    def __init__(self, notification: _Optional[_Union[_sp_notify_pb2.NotificationConfig, _Mapping]] = ...) -> None: ...

class GetNotificationsRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetNotificationsResponse(_message.Message):
    __slots__ = ["notifications"]
    class NotificationsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _sp_notify_pb2.NotificationConfig
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_sp_notify_pb2.NotificationConfig, _Mapping]] = ...) -> None: ...
    NOTIFICATIONS_FIELD_NUMBER: _ClassVar[int]
    notifications: _containers.MessageMap[str, _sp_notify_pb2.NotificationConfig]
    def __init__(self, notifications: _Optional[_Mapping[str, _sp_notify_pb2.NotificationConfig]] = ...) -> None: ...

class GetPipelineRequest(_message.Message):
    __slots__ = ["pipeline_id"]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    pipeline_id: str
    def __init__(self, pipeline_id: _Optional[str] = ...) -> None: ...

class GetPipelineResponse(_message.Message):
    __slots__ = ["pipeline"]
    PIPELINE_FIELD_NUMBER: _ClassVar[int]
    pipeline: _sp_pipeline_pb2.Pipeline
    def __init__(self, pipeline: _Optional[_Union[_sp_pipeline_pb2.Pipeline, _Mapping]] = ...) -> None: ...

class GetPipelinesRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetPipelinesResponse(_message.Message):
    __slots__ = ["pipelines"]
    PIPELINES_FIELD_NUMBER: _ClassVar[int]
    pipelines: _containers.RepeatedCompositeFieldContainer[_sp_pipeline_pb2.Pipeline]
    def __init__(self, pipelines: _Optional[_Iterable[_Union[_sp_pipeline_pb2.Pipeline, _Mapping]]] = ...) -> None: ...

class PausePipelineRequest(_message.Message):
    __slots__ = ["audience", "pipeline_id"]
    AUDIENCE_FIELD_NUMBER: _ClassVar[int]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    audience: _sp_common_pb2.Audience
    pipeline_id: str
    def __init__(self, pipeline_id: _Optional[str] = ..., audience: _Optional[_Union[_sp_common_pb2.Audience, _Mapping]] = ...) -> None: ...

class ResumePipelineRequest(_message.Message):
    __slots__ = ["audience", "pipeline_id"]
    AUDIENCE_FIELD_NUMBER: _ClassVar[int]
    PIPELINE_ID_FIELD_NUMBER: _ClassVar[int]
    audience: _sp_common_pb2.Audience
    pipeline_id: str
    def __init__(self, pipeline_id: _Optional[str] = ..., audience: _Optional[_Union[_sp_common_pb2.Audience, _Mapping]] = ...) -> None: ...

class TestRequest(_message.Message):
    __slots__ = ["input"]
    INPUT_FIELD_NUMBER: _ClassVar[int]
    input: str
    def __init__(self, input: _Optional[str] = ...) -> None: ...

class TestResponse(_message.Message):
    __slots__ = ["output"]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    output: str
    def __init__(self, output: _Optional[str] = ...) -> None: ...

class UpdateNotificationRequest(_message.Message):
    __slots__ = ["notification"]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    notification: _sp_notify_pb2.NotificationConfig
    def __init__(self, notification: _Optional[_Union[_sp_notify_pb2.NotificationConfig, _Mapping]] = ...) -> None: ...

class UpdatePipelineRequest(_message.Message):
    __slots__ = ["pipeline"]
    PIPELINE_FIELD_NUMBER: _ClassVar[int]
    pipeline: _sp_pipeline_pb2.Pipeline
    def __init__(self, pipeline: _Optional[_Union[_sp_pipeline_pb2.Pipeline, _Mapping]] = ...) -> None: ...