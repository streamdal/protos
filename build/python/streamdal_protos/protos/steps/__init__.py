# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: steps/sp_steps_custom.proto, steps/sp_steps_decode.proto, steps/sp_steps_detective.proto, steps/sp_steps_encode.proto, steps/sp_steps_httprequest.proto, steps/sp_steps_inferschema.proto, steps/sp_steps_kv.proto, steps/sp_steps_transform.proto, steps/sp_steps_valid_json.proto
# plugin: python-betterproto
# This file has been @generated

from dataclasses import dataclass
from typing import (
    Dict,
    List,
    Optional,
)

import betterproto

from .. import shared as _shared__


class DetectiveType(betterproto.Enum):
    DETECTIVE_TYPE_UNKNOWN = 0
    DETECTIVE_TYPE_IS_EMPTY = 1000
    DETECTIVE_TYPE_HAS_FIELD = 1001
    DETECTIVE_TYPE_IS_TYPE = 1002
    DETECTIVE_TYPE_STRING_CONTAINS_ANY = 1003
    DETECTIVE_TYPE_STRING_CONTAINS_ALL = 1004
    DETECTIVE_TYPE_STRING_EQUAL = 1005
    DETECTIVE_TYPE_IPV4_ADDRESS = 1006
    DETECTIVE_TYPE_IPV6_ADDRESS = 1007
    DETECTIVE_TYPE_MAC_ADDRESS = 1008
    DETECTIVE_TYPE_REGEX = 1009
    DETECTIVE_TYPE_TIMESTAMP_RFC3339 = 1010
    DETECTIVE_TYPE_TIMESTAMP_UNIX_NANO = 1011
    DETECTIVE_TYPE_TIMESTAMP_UNIX = 1012
    DETECTIVE_TYPE_BOOLEAN_TRUE = 1013
    DETECTIVE_TYPE_BOOLEAN_FALSE = 1014
    DETECTIVE_TYPE_UUID = 1015
    DETECTIVE_TYPE_URL = 1016
    DETECTIVE_TYPE_HOSTNAME = 1017
    DETECTIVE_TYPE_STRING_LENGTH_MIN = 1018
    DETECTIVE_TYPE_STRING_LENGTH_MAX = 1019
    DETECTIVE_TYPE_STRING_LENGTH_RANGE = 1020
    DETECTIVE_TYPE_SEMVER = 1021
    DETECTIVE_TYPE_PII_ANY = 2000
    """/ Payloads containing values with any PII - runs all PII matchers"""

    DETECTIVE_TYPE_PII_CREDIT_CARD = 2001
    """Payloads containing values with a credit card number"""

    DETECTIVE_TYPE_PII_SSN = 2002
    """Payloads containing values with a social security number"""

    DETECTIVE_TYPE_PII_EMAIL = 2003
    """Payloads containing values with an email address"""

    DETECTIVE_TYPE_PII_PHONE = 2004
    """Payloads containing values with a phone number"""

    DETECTIVE_TYPE_PII_DRIVER_LICENSE = 2005
    """Payloads containing values with a driver's license"""

    DETECTIVE_TYPE_PII_PASSPORT_ID = 2006
    """Payloads containing values with a passport ID"""

    DETECTIVE_TYPE_PII_VIN_NUMBER = 2007
    """Payloads containing values with a VIN number"""

    DETECTIVE_TYPE_PII_SERIAL_NUMBER = 2008
    """Payloads containing values with various serial number formats"""

    DETECTIVE_TYPE_PII_LOGIN = 2009
    """
    Payloads containing fields named "login", "username", "user", "userid",
    "user_id", "user", "password", "pass", "passwd", "pwd"
    """

    DETECTIVE_TYPE_PII_TAXPAYER_ID = 2010
    """
    Payloads containing fields named "taxpayer_id", "tax_id", "taxpayerid",
    "taxid"
    """

    DETECTIVE_TYPE_PII_ADDRESS = 2011
    """
    Payloads containing fields named "address", "street", "city", "state",
    "zip", "zipcode", "zip_code", "country"
    """

    DETECTIVE_TYPE_PII_SIGNATURE = 2012
    """
    Payloads containing fields named "signature", "signature_image",
    "signature_image_url", "signature_image_uri"
    """

    DETECTIVE_TYPE_PII_GEOLOCATION = 2013
    """
    Payloads containing values that contain GPS data or coordinates like "lat",
    "lon", "latitude", "longitude"
    """

    DETECTIVE_TYPE_PII_EDUCATION = 2014
    """
    Payloads containing fields like "school", "university", "college",
    "education"
    """

    DETECTIVE_TYPE_PII_FINANCIAL = 2015
    """
    Payloads containing fields like "account", "bank", "credit", "debit",
    "financial", "finance"
    """

    DETECTIVE_TYPE_PII_HEALTH = 2016
    """
    Payloads containing fields like "patient", "health", "healthcare", "health
    care", "medical"
    """

    DETECTIVE_TYPE_NUMERIC_EQUAL_TO = 3000
    DETECTIVE_TYPE_NUMERIC_GREATER_THAN = 3001
    DETECTIVE_TYPE_NUMERIC_GREATER_EQUAL = 3002
    DETECTIVE_TYPE_NUMERIC_LESS_THAN = 3003
    DETECTIVE_TYPE_NUMERIC_LESS_EQUAL = 3004
    DETECTIVE_TYPE_NUMERIC_RANGE = 3005
    DETECTIVE_TYPE_NUMERIC_MIN = 3006
    DETECTIVE_TYPE_NUMERIC_MAX = 3007


class HttpRequestMethod(betterproto.Enum):
    HTTP_REQUEST_METHOD_UNSET = 0
    HTTP_REQUEST_METHOD_GET = 1
    HTTP_REQUEST_METHOD_POST = 2
    HTTP_REQUEST_METHOD_PUT = 3
    HTTP_REQUEST_METHOD_DELETE = 4
    HTTP_REQUEST_METHOD_PATCH = 5
    HTTP_REQUEST_METHOD_HEAD = 6
    HTTP_REQUEST_METHOD_OPTIONS = 7


class KvMode(betterproto.Enum):
    """
    Used by frontend when constructing a pipeline that contains a KV step that
    performs any KV request. The mode determines _what_ the contents of the key
    will be. Read comments about "static" vs "dynamic". protolint:disable:next
    ENUM_FIELD_NAMES_PREFIX
    """

    KV_MODE_UNSET = 0
    KV_MODE_STATIC = 1
    """Will cause the KV lookup to use the key string as-is for the lookup"""

    KV_MODE_DYNAMIC = 2
    """
    DYNAMIC mode will cause the KV lookup WASM to use the key to lookup the
    associated value and use the result for the key existence check. For
    example, if "key" in KVHostFuncRequest is set to "foo", KV WASM will do the
    following: 1. Lookup the value of "foo" in the payload (which is "bar") 2.
    Use "bar" as the "key" for the KV lookup
    """


class KvStatus(betterproto.Enum):
    """
    Returned by KV host func and interpreted by KV WASM. protolint:disable:next
    ENUM_FIELD_NAMES_PREFIX
    """

    KV_STATUS_UNSET = 0
    KV_STATUS_SUCCESS = 1
    KV_STATUS_FAILURE = 2
    KV_STATUS_ERROR = 3


class TransformType(betterproto.Enum):
    TRANSFORM_TYPE_UNKNOWN = 0
    TRANSFORM_TYPE_REPLACE_VALUE = 1
    TRANSFORM_TYPE_DELETE_FIELD = 2
    TRANSFORM_TYPE_OBFUSCATE_VALUE = 3
    TRANSFORM_TYPE_MASK_VALUE = 4


@dataclass(eq=False, repr=False)
class CustomStep(betterproto.Message):
    """WIP -- Custom WASM exec?"""

    id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class DecodeStep(betterproto.Message):
    """WIP"""

    id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class DetectiveStep(betterproto.Message):
    path: Optional[str] = betterproto.string_field(1, optional=True, group="_path")
    args: List[str] = betterproto.string_field(2)
    negate: Optional[bool] = betterproto.bool_field(3, optional=True, group="_negate")
    type: "DetectiveType" = betterproto.enum_field(4)


@dataclass(eq=False, repr=False)
class EncodeStep(betterproto.Message):
    """WIP"""

    id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class HttpRequest(betterproto.Message):
    method: "HttpRequestMethod" = betterproto.enum_field(1)
    url: str = betterproto.string_field(2)
    body: bytes = betterproto.bytes_field(3)
    headers: Dict[str, str] = betterproto.map_field(
        4, betterproto.TYPE_STRING, betterproto.TYPE_STRING
    )


@dataclass(eq=False, repr=False)
class HttpResponse(betterproto.Message):
    code: int = betterproto.int32_field(1)
    body: bytes = betterproto.bytes_field(2)
    headers: Dict[str, str] = betterproto.map_field(
        3, betterproto.TYPE_STRING, betterproto.TYPE_STRING
    )


@dataclass(eq=False, repr=False)
class HttpRequestStep(betterproto.Message):
    request: "HttpRequest" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class InferSchemaStep(betterproto.Message):
    """
    InferSchemaStep is a step that infers the schema of a payload. It is
    designed to be used directly by the SDK rather than in a pipeline, so that
    we can support schema inference without the need for pipelines to be
    created
    """

    current_schema: bytes = betterproto.bytes_field(1)


@dataclass(eq=False, repr=False)
class KvStepResponse(betterproto.Message):
    """Returned by SDK host func and interpreted by KV WASM."""

    status: "KvStatus" = betterproto.enum_field(1)
    """
    Status of the action; interpreted by KV WASM to so it can generate a
    protos.WASMResponse
    """

    message: str = betterproto.string_field(2)
    """
    Message containing info, debug or error details; included in
    protos.WASMResponse
    """

    value: Optional[bytes] = betterproto.bytes_field(3, optional=True, group="_value")
    """
    Optional because the only action that uses field is KV_ACTION_GET DS: Not
    sure how we'll use KV_ACTION_GET in steps yet but this is probably a good
    place to start. 09.06.2023.
    """


@dataclass(eq=False, repr=False)
class KvStep(betterproto.Message):
    """
    Used in PipelineSteps and passed to KV host func; constructed by frontend
    """

    action: "_shared__.KvAction" = betterproto.enum_field(1)
    """What type of action this step should perform"""

    mode: "KvMode" = betterproto.enum_field(2)
    """How the key field will be used to perform lookup"""

    key: str = betterproto.string_field(3)
    """The key the action is taking place on"""

    value: Optional[bytes] = betterproto.bytes_field(4, optional=True, group="_value")
    """
    Optional because the only action that needs value is KV_ACTION_CREATE
    """


@dataclass(eq=False, repr=False)
class TransformStep(betterproto.Message):
    path: str = betterproto.string_field(1)
    value: str = betterproto.string_field(2)
    type: "TransformType" = betterproto.enum_field(3)


@dataclass(eq=False, repr=False)
class ValidJsonStep(betterproto.Message):
    pass
