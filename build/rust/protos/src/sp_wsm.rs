// This file is generated by rust-protobuf 3.3.0. Do not edit
// .proto file is parsed by protoc --rust-out=...
// @generated

// https://github.com/rust-lang/rust-clippy/issues/702
#![allow(unknown_lints)]
#![allow(clippy::all)]

#![allow(unused_attributes)]
#![cfg_attr(rustfmt, rustfmt::skip)]

#![allow(box_pointers)]
#![allow(dead_code)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(trivial_casts)]
#![allow(unused_results)]
#![allow(unused_mut)]

//! Generated file from `sp_wsm.proto`

/// Generated files are compatible only with the same version
/// of protobuf runtime.
const _PROTOBUF_VERSION_CHECK: () = ::protobuf::VERSION_3_3_0;

///  SDK generates a WASM request and passes this to the WASM func
// @@protoc_insertion_point(message:protos.WASMRequest)
#[derive(PartialEq,Clone,Default,Debug)]
pub struct WASMRequest {
    // message fields
    ///  The actual step that the WASM func will operate on. This is the same step
    ///  that is declared in protos.Pipeline.
    // @@protoc_insertion_point(field:protos.WASMRequest.step)
    pub step: ::protobuf::MessageField<super::sp_pipeline::PipelineStep>,
    ///  Payload data that WASM func will operate on
    // @@protoc_insertion_point(field:protos.WASMRequest.input_payload)
    pub input_payload: ::std::vec::Vec<u8>,
    ///  Potentially filled out result from previous step. If this is first step in
    ///  the pipeline, it will be empty.
    // @@protoc_insertion_point(field:protos.WASMRequest.input_step)
    pub input_step: ::std::option::Option<::std::vec::Vec<u8>>,
    // special fields
    // @@protoc_insertion_point(special_field:protos.WASMRequest.special_fields)
    pub special_fields: ::protobuf::SpecialFields,
}

impl<'a> ::std::default::Default for &'a WASMRequest {
    fn default() -> &'a WASMRequest {
        <WASMRequest as ::protobuf::Message>::default_instance()
    }
}

impl WASMRequest {
    pub fn new() -> WASMRequest {
        ::std::default::Default::default()
    }

    fn generated_message_descriptor_data() -> ::protobuf::reflect::GeneratedMessageDescriptorData {
        let mut fields = ::std::vec::Vec::with_capacity(3);
        let mut oneofs = ::std::vec::Vec::with_capacity(0);
        fields.push(::protobuf::reflect::rt::v2::make_message_field_accessor::<_, super::sp_pipeline::PipelineStep>(
            "step",
            |m: &WASMRequest| { &m.step },
            |m: &mut WASMRequest| { &mut m.step },
        ));
        fields.push(::protobuf::reflect::rt::v2::make_simpler_field_accessor::<_, _>(
            "input_payload",
            |m: &WASMRequest| { &m.input_payload },
            |m: &mut WASMRequest| { &mut m.input_payload },
        ));
        fields.push(::protobuf::reflect::rt::v2::make_option_accessor::<_, _>(
            "input_step",
            |m: &WASMRequest| { &m.input_step },
            |m: &mut WASMRequest| { &mut m.input_step },
        ));
        ::protobuf::reflect::GeneratedMessageDescriptorData::new_2::<WASMRequest>(
            "WASMRequest",
            fields,
            oneofs,
        )
    }
}

impl ::protobuf::Message for WASMRequest {
    const NAME: &'static str = "WASMRequest";

    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::Result<()> {
        while let Some(tag) = is.read_raw_tag_or_eof()? {
            match tag {
                10 => {
                    ::protobuf::rt::read_singular_message_into_field(is, &mut self.step)?;
                },
                18 => {
                    self.input_payload = is.read_bytes()?;
                },
                26 => {
                    self.input_step = ::std::option::Option::Some(is.read_bytes()?);
                },
                tag => {
                    ::protobuf::rt::read_unknown_or_skip_group(tag, is, self.special_fields.mut_unknown_fields())?;
                },
            };
        }
        ::std::result::Result::Ok(())
    }

    // Compute sizes of nested messages
    #[allow(unused_variables)]
    fn compute_size(&self) -> u64 {
        let mut my_size = 0;
        if let Some(v) = self.step.as_ref() {
            let len = v.compute_size();
            my_size += 1 + ::protobuf::rt::compute_raw_varint64_size(len) + len;
        }
        if !self.input_payload.is_empty() {
            my_size += ::protobuf::rt::bytes_size(2, &self.input_payload);
        }
        if let Some(v) = self.input_step.as_ref() {
            my_size += ::protobuf::rt::bytes_size(3, &v);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.special_fields.unknown_fields());
        self.special_fields.cached_size().set(my_size as u32);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::Result<()> {
        if let Some(v) = self.step.as_ref() {
            ::protobuf::rt::write_message_field_with_cached_size(1, v, os)?;
        }
        if !self.input_payload.is_empty() {
            os.write_bytes(2, &self.input_payload)?;
        }
        if let Some(v) = self.input_step.as_ref() {
            os.write_bytes(3, v)?;
        }
        os.write_unknown_fields(self.special_fields.unknown_fields())?;
        ::std::result::Result::Ok(())
    }

    fn special_fields(&self) -> &::protobuf::SpecialFields {
        &self.special_fields
    }

    fn mut_special_fields(&mut self) -> &mut ::protobuf::SpecialFields {
        &mut self.special_fields
    }

    fn new() -> WASMRequest {
        WASMRequest::new()
    }

    fn clear(&mut self) {
        self.step.clear();
        self.input_payload.clear();
        self.input_step = ::std::option::Option::None;
        self.special_fields.clear();
    }

    fn default_instance() -> &'static WASMRequest {
        static instance: WASMRequest = WASMRequest {
            step: ::protobuf::MessageField::none(),
            input_payload: ::std::vec::Vec::new(),
            input_step: ::std::option::Option::None,
            special_fields: ::protobuf::SpecialFields::new(),
        };
        &instance
    }
}

impl ::protobuf::MessageFull for WASMRequest {
    fn descriptor() -> ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::Lazy::new();
        descriptor.get(|| file_descriptor().message_by_package_relative_name("WASMRequest").unwrap()).clone()
    }
}

impl ::std::fmt::Display for WASMRequest {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for WASMRequest {
    type RuntimeType = ::protobuf::reflect::rt::RuntimeTypeMessage<Self>;
}

///  Returned by all WASM functions
// @@protoc_insertion_point(message:protos.WASMResponse)
#[derive(PartialEq,Clone,Default,Debug)]
pub struct WASMResponse {
    // message fields
    ///  Potentially modified input payload. Concept: All WASM funcs accept an
    ///  input_payload in WASMRequest, WASM func reads input payload, modifies it
    ///  and writes the modified output to output_payload.
    // @@protoc_insertion_point(field:protos.WASMResponse.output_payload)
    pub output_payload: ::std::vec::Vec<u8>,
    ///  Exit code that the WASM func exited with; more info in WASMExitCode's comment
    // @@protoc_insertion_point(field:protos.WASMResponse.exit_code)
    pub exit_code: ::protobuf::EnumOrUnknown<WASMExitCode>,
    ///  Additional info about the reason a specific exit code was returned
    // @@protoc_insertion_point(field:protos.WASMResponse.exit_msg)
    pub exit_msg: ::std::string::String,
    ///  Potential additional step output - ie. if a WASM func is an HTTPGet,
    ///  output_step would contain the HTTP response body; if the WASM func is a
    ///  KVGet, the output_step would be the value of the fetched key.
    // @@protoc_insertion_point(field:protos.WASMResponse.output_step)
    pub output_step: ::std::option::Option<::std::vec::Vec<u8>>,
    // special fields
    // @@protoc_insertion_point(special_field:protos.WASMResponse.special_fields)
    pub special_fields: ::protobuf::SpecialFields,
}

impl<'a> ::std::default::Default for &'a WASMResponse {
    fn default() -> &'a WASMResponse {
        <WASMResponse as ::protobuf::Message>::default_instance()
    }
}

impl WASMResponse {
    pub fn new() -> WASMResponse {
        ::std::default::Default::default()
    }

    fn generated_message_descriptor_data() -> ::protobuf::reflect::GeneratedMessageDescriptorData {
        let mut fields = ::std::vec::Vec::with_capacity(4);
        let mut oneofs = ::std::vec::Vec::with_capacity(0);
        fields.push(::protobuf::reflect::rt::v2::make_simpler_field_accessor::<_, _>(
            "output_payload",
            |m: &WASMResponse| { &m.output_payload },
            |m: &mut WASMResponse| { &mut m.output_payload },
        ));
        fields.push(::protobuf::reflect::rt::v2::make_simpler_field_accessor::<_, _>(
            "exit_code",
            |m: &WASMResponse| { &m.exit_code },
            |m: &mut WASMResponse| { &mut m.exit_code },
        ));
        fields.push(::protobuf::reflect::rt::v2::make_simpler_field_accessor::<_, _>(
            "exit_msg",
            |m: &WASMResponse| { &m.exit_msg },
            |m: &mut WASMResponse| { &mut m.exit_msg },
        ));
        fields.push(::protobuf::reflect::rt::v2::make_option_accessor::<_, _>(
            "output_step",
            |m: &WASMResponse| { &m.output_step },
            |m: &mut WASMResponse| { &mut m.output_step },
        ));
        ::protobuf::reflect::GeneratedMessageDescriptorData::new_2::<WASMResponse>(
            "WASMResponse",
            fields,
            oneofs,
        )
    }
}

impl ::protobuf::Message for WASMResponse {
    const NAME: &'static str = "WASMResponse";

    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::Result<()> {
        while let Some(tag) = is.read_raw_tag_or_eof()? {
            match tag {
                10 => {
                    self.output_payload = is.read_bytes()?;
                },
                16 => {
                    self.exit_code = is.read_enum_or_unknown()?;
                },
                26 => {
                    self.exit_msg = is.read_string()?;
                },
                34 => {
                    self.output_step = ::std::option::Option::Some(is.read_bytes()?);
                },
                tag => {
                    ::protobuf::rt::read_unknown_or_skip_group(tag, is, self.special_fields.mut_unknown_fields())?;
                },
            };
        }
        ::std::result::Result::Ok(())
    }

    // Compute sizes of nested messages
    #[allow(unused_variables)]
    fn compute_size(&self) -> u64 {
        let mut my_size = 0;
        if !self.output_payload.is_empty() {
            my_size += ::protobuf::rt::bytes_size(1, &self.output_payload);
        }
        if self.exit_code != ::protobuf::EnumOrUnknown::new(WASMExitCode::WASM_EXIT_CODE_UNSET) {
            my_size += ::protobuf::rt::int32_size(2, self.exit_code.value());
        }
        if !self.exit_msg.is_empty() {
            my_size += ::protobuf::rt::string_size(3, &self.exit_msg);
        }
        if let Some(v) = self.output_step.as_ref() {
            my_size += ::protobuf::rt::bytes_size(4, &v);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.special_fields.unknown_fields());
        self.special_fields.cached_size().set(my_size as u32);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::Result<()> {
        if !self.output_payload.is_empty() {
            os.write_bytes(1, &self.output_payload)?;
        }
        if self.exit_code != ::protobuf::EnumOrUnknown::new(WASMExitCode::WASM_EXIT_CODE_UNSET) {
            os.write_enum(2, ::protobuf::EnumOrUnknown::value(&self.exit_code))?;
        }
        if !self.exit_msg.is_empty() {
            os.write_string(3, &self.exit_msg)?;
        }
        if let Some(v) = self.output_step.as_ref() {
            os.write_bytes(4, v)?;
        }
        os.write_unknown_fields(self.special_fields.unknown_fields())?;
        ::std::result::Result::Ok(())
    }

    fn special_fields(&self) -> &::protobuf::SpecialFields {
        &self.special_fields
    }

    fn mut_special_fields(&mut self) -> &mut ::protobuf::SpecialFields {
        &mut self.special_fields
    }

    fn new() -> WASMResponse {
        WASMResponse::new()
    }

    fn clear(&mut self) {
        self.output_payload.clear();
        self.exit_code = ::protobuf::EnumOrUnknown::new(WASMExitCode::WASM_EXIT_CODE_UNSET);
        self.exit_msg.clear();
        self.output_step = ::std::option::Option::None;
        self.special_fields.clear();
    }

    fn default_instance() -> &'static WASMResponse {
        static instance: WASMResponse = WASMResponse {
            output_payload: ::std::vec::Vec::new(),
            exit_code: ::protobuf::EnumOrUnknown::from_i32(0),
            exit_msg: ::std::string::String::new(),
            output_step: ::std::option::Option::None,
            special_fields: ::protobuf::SpecialFields::new(),
        };
        &instance
    }
}

impl ::protobuf::MessageFull for WASMResponse {
    fn descriptor() -> ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::Lazy::new();
        descriptor.get(|| file_descriptor().message_by_package_relative_name("WASMResponse").unwrap()).clone()
    }
}

impl ::std::fmt::Display for WASMResponse {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for WASMResponse {
    type RuntimeType = ::protobuf::reflect::rt::RuntimeTypeMessage<Self>;
}

///  Included in WASM response; the SDK should use the WASMExitCode to determine
///  what to do next - should it execute next step, should it notify or should it
///  stop executing/abort the rest of the steps in the pipeline.
///
///  Example:
///
///  a. WASM func returns WASM_EXIT_CODE_FAILURE - read PipelineStep.on_failure
///  conditions to determine what to do next.
///
///  b. WASM func returns WASM_EXIT_CODE_SUCCESS - read PipelineStep.on_success
///  conditions to determine what to do next.
///
///  .. and so on.
///  protolint:disable:next ENUM_FIELD_NAMES_PREFIX
#[derive(Clone,Copy,PartialEq,Eq,Debug,Hash)]
// @@protoc_insertion_point(enum:protos.WASMExitCode)
pub enum WASMExitCode {
    // @@protoc_insertion_point(enum_value:protos.WASMExitCode.WASM_EXIT_CODE_UNSET)
    WASM_EXIT_CODE_UNSET = 0,
    // @@protoc_insertion_point(enum_value:protos.WASMExitCode.WASM_EXIT_CODE_SUCCESS)
    WASM_EXIT_CODE_SUCCESS = 1,
    // @@protoc_insertion_point(enum_value:protos.WASMExitCode.WASM_EXIT_CODE_FAILURE)
    WASM_EXIT_CODE_FAILURE = 2,
    // @@protoc_insertion_point(enum_value:protos.WASMExitCode.WASM_EXIT_CODE_INTERNAL_ERROR)
    WASM_EXIT_CODE_INTERNAL_ERROR = 3,
}

impl ::protobuf::Enum for WASMExitCode {
    const NAME: &'static str = "WASMExitCode";

    fn value(&self) -> i32 {
        *self as i32
    }

    fn from_i32(value: i32) -> ::std::option::Option<WASMExitCode> {
        match value {
            0 => ::std::option::Option::Some(WASMExitCode::WASM_EXIT_CODE_UNSET),
            1 => ::std::option::Option::Some(WASMExitCode::WASM_EXIT_CODE_SUCCESS),
            2 => ::std::option::Option::Some(WASMExitCode::WASM_EXIT_CODE_FAILURE),
            3 => ::std::option::Option::Some(WASMExitCode::WASM_EXIT_CODE_INTERNAL_ERROR),
            _ => ::std::option::Option::None
        }
    }

    fn from_str(str: &str) -> ::std::option::Option<WASMExitCode> {
        match str {
            "WASM_EXIT_CODE_UNSET" => ::std::option::Option::Some(WASMExitCode::WASM_EXIT_CODE_UNSET),
            "WASM_EXIT_CODE_SUCCESS" => ::std::option::Option::Some(WASMExitCode::WASM_EXIT_CODE_SUCCESS),
            "WASM_EXIT_CODE_FAILURE" => ::std::option::Option::Some(WASMExitCode::WASM_EXIT_CODE_FAILURE),
            "WASM_EXIT_CODE_INTERNAL_ERROR" => ::std::option::Option::Some(WASMExitCode::WASM_EXIT_CODE_INTERNAL_ERROR),
            _ => ::std::option::Option::None
        }
    }

    const VALUES: &'static [WASMExitCode] = &[
        WASMExitCode::WASM_EXIT_CODE_UNSET,
        WASMExitCode::WASM_EXIT_CODE_SUCCESS,
        WASMExitCode::WASM_EXIT_CODE_FAILURE,
        WASMExitCode::WASM_EXIT_CODE_INTERNAL_ERROR,
    ];
}

impl ::protobuf::EnumFull for WASMExitCode {
    fn enum_descriptor() -> ::protobuf::reflect::EnumDescriptor {
        static descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::EnumDescriptor> = ::protobuf::rt::Lazy::new();
        descriptor.get(|| file_descriptor().enum_by_package_relative_name("WASMExitCode").unwrap()).clone()
    }

    fn descriptor(&self) -> ::protobuf::reflect::EnumValueDescriptor {
        let index = *self as usize;
        Self::enum_descriptor().value_by_index(index)
    }
}

impl ::std::default::Default for WASMExitCode {
    fn default() -> Self {
        WASMExitCode::WASM_EXIT_CODE_UNSET
    }
}

impl WASMExitCode {
    fn generated_enum_descriptor_data() -> ::protobuf::reflect::GeneratedEnumDescriptorData {
        ::protobuf::reflect::GeneratedEnumDescriptorData::new::<WASMExitCode>("WASMExitCode")
    }
}

static file_descriptor_proto_data: &'static [u8] = b"\
    \n\x0csp_wsm.proto\x12\x06protos\x1a\x11sp_pipeline.proto\"\x8f\x01\n\
    \x0bWASMRequest\x12(\n\x04step\x18\x01\x20\x01(\x0b2\x14.protos.Pipeline\
    StepR\x04step\x12#\n\rinput_payload\x18\x02\x20\x01(\x0cR\x0cinputPayloa\
    d\x12\"\n\ninput_step\x18\x03\x20\x01(\x0cH\0R\tinputStep\x88\x01\x01B\r\
    \n\x0b_input_step\"\xb9\x01\n\x0cWASMResponse\x12%\n\x0eoutput_payload\
    \x18\x01\x20\x01(\x0cR\routputPayload\x121\n\texit_code\x18\x02\x20\x01(\
    \x0e2\x14.protos.WASMExitCodeR\x08exitCode\x12\x19\n\x08exit_msg\x18\x03\
    \x20\x01(\tR\x07exitMsg\x12$\n\x0boutput_step\x18\x04\x20\x01(\x0cH\0R\n\
    outputStep\x88\x01\x01B\x0e\n\x0c_output_step*\x83\x01\n\x0cWASMExitCode\
    \x12\x18\n\x14WASM_EXIT_CODE_UNSET\x10\0\x12\x1a\n\x16WASM_EXIT_CODE_SUC\
    CESS\x10\x01\x12\x1a\n\x16WASM_EXIT_CODE_FAILURE\x10\x02\x12!\n\x1dWASM_\
    EXIT_CODE_INTERNAL_ERROR\x10\x03B-Z+github.com/streamdal/protos/build/go\
    /protosJ\xbf\x11\n\x06\x12\x04\0\0<\x01\n\x08\n\x01\x0c\x12\x03\0\0\x12\
    \n\x08\n\x01\x02\x12\x03\x02\0\x0f\n\t\n\x02\x03\0\x12\x03\x04\0\x1b\n\
    \x08\n\x01\x08\x12\x03\x06\0B\n\t\n\x02\x08\x0b\x12\x03\x06\0B\n\x9e\x04\
    \n\x02\x05\0\x12\x04\x16\0\x1b\x01\x1a\x91\x04\x20Included\x20in\x20WASM\
    \x20response;\x20the\x20SDK\x20should\x20use\x20the\x20WASMExitCode\x20t\
    o\x20determine\n\x20what\x20to\x20do\x20next\x20-\x20should\x20it\x20exe\
    cute\x20next\x20step,\x20should\x20it\x20notify\x20or\x20should\x20it\n\
    \x20stop\x20executing/abort\x20the\x20rest\x20of\x20the\x20steps\x20in\
    \x20the\x20pipeline.\n\n\x20Example:\n\n\x20a.\x20WASM\x20func\x20return\
    s\x20WASM_EXIT_CODE_FAILURE\x20-\x20read\x20PipelineStep.on_failure\n\
    \x20conditions\x20to\x20determine\x20what\x20to\x20do\x20next.\n\n\x20b.\
    \x20WASM\x20func\x20returns\x20WASM_EXIT_CODE_SUCCESS\x20-\x20read\x20Pi\
    pelineStep.on_success\n\x20conditions\x20to\x20determine\x20what\x20to\
    \x20do\x20next.\n\n\x20..\x20and\x20so\x20on.\n\x20protolint:disable:nex\
    t\x20ENUM_FIELD_NAMES_PREFIX\n\n\n\n\x03\x05\0\x01\x12\x03\x16\x05\x11\n\
    \x0b\n\x04\x05\0\x02\0\x12\x03\x17\x02\x1b\n\x0c\n\x05\x05\0\x02\0\x01\
    \x12\x03\x17\x02\x16\n\x0c\n\x05\x05\0\x02\0\x02\x12\x03\x17\x19\x1a\n\
    \x0b\n\x04\x05\0\x02\x01\x12\x03\x18\x02\x1d\n\x0c\n\x05\x05\0\x02\x01\
    \x01\x12\x03\x18\x02\x18\n\x0c\n\x05\x05\0\x02\x01\x02\x12\x03\x18\x1b\
    \x1c\nK\n\x04\x05\0\x02\x02\x12\x03\x19\x02\x1d\">\x20Probably\x20need\
    \x20better\x20names\x20for\x20these\x20as\x20FAILURE\x20is\x20too\x20har\
    sh\n\n\x0c\n\x05\x05\0\x02\x02\x01\x12\x03\x19\x02\x18\n\x0c\n\x05\x05\0\
    \x02\x02\x02\x12\x03\x19\x1b\x1c\n\x0b\n\x04\x05\0\x02\x03\x12\x03\x1a\
    \x02$\n\x0c\n\x05\x05\0\x02\x03\x01\x12\x03\x1a\x02\x1f\n\x0c\n\x05\x05\
    \0\x02\x03\x02\x12\x03\x1a\"#\nK\n\x02\x04\0\x12\x04\x1e\0)\x01\x1a?\x20\
    SDK\x20generates\x20a\x20WASM\x20request\x20and\x20passes\x20this\x20to\
    \x20the\x20WASM\x20func\n\n\n\n\x03\x04\0\x01\x12\x03\x1e\x08\x13\n~\n\
    \x04\x04\0\x02\0\x12\x03!\x02\x1f\x1aq\x20The\x20actual\x20step\x20that\
    \x20the\x20WASM\x20func\x20will\x20operate\x20on.\x20This\x20is\x20the\
    \x20same\x20step\n\x20that\x20is\x20declared\x20in\x20protos.Pipeline.\n\
    \n\x0c\n\x05\x04\0\x02\0\x06\x12\x03!\x02\x15\n\x0c\n\x05\x04\0\x02\0\
    \x01\x12\x03!\x16\x1a\n\x0c\n\x05\x04\0\x02\0\x03\x12\x03!\x1d\x1e\n:\n\
    \x04\x04\0\x02\x01\x12\x03$\x02\x1a\x1a-\x20Payload\x20data\x20that\x20W\
    ASM\x20func\x20will\x20operate\x20on\n\n\x0c\n\x05\x04\0\x02\x01\x05\x12\
    \x03$\x02\x07\n\x0c\n\x05\x04\0\x02\x01\x01\x12\x03$\x08\x15\n\x0c\n\x05\
    \x04\0\x02\x01\x03\x12\x03$\x18\x19\nz\n\x04\x04\0\x02\x02\x12\x03(\x02\
    \x20\x1am\x20Potentially\x20filled\x20out\x20result\x20from\x20previous\
    \x20step.\x20If\x20this\x20is\x20first\x20step\x20in\n\x20the\x20pipelin\
    e,\x20it\x20will\x20be\x20empty.\n\n\x0c\n\x05\x04\0\x02\x02\x04\x12\x03\
    (\x02\n\n\x0c\n\x05\x04\0\x02\x02\x05\x12\x03(\x0b\x10\n\x0c\n\x05\x04\0\
    \x02\x02\x01\x12\x03(\x11\x1b\n\x0c\n\x05\x04\0\x02\x02\x03\x12\x03(\x1e\
    \x1f\n,\n\x02\x04\x01\x12\x04,\0<\x01\x1a\x20\x20Returned\x20by\x20all\
    \x20WASM\x20functions\n\n\n\n\x03\x04\x01\x01\x12\x03,\x08\x14\n\xd2\x01\
    \n\x04\x04\x01\x02\0\x12\x030\x02\x1b\x1a\xc4\x01\x20Potentially\x20modi\
    fied\x20input\x20payload.\x20Concept:\x20All\x20WASM\x20funcs\x20accept\
    \x20an\n\x20input_payload\x20in\x20WASMRequest,\x20WASM\x20func\x20reads\
    \x20input\x20payload,\x20modifies\x20it\n\x20and\x20writes\x20the\x20mod\
    ified\x20output\x20to\x20output_payload.\n\n\x0c\n\x05\x04\x01\x02\0\x05\
    \x12\x030\x02\x07\n\x0c\n\x05\x04\x01\x02\0\x01\x12\x030\x08\x16\n\x0c\n\
    \x05\x04\x01\x02\0\x03\x12\x030\x19\x1a\n\\\n\x04\x04\x01\x02\x01\x12\
    \x033\x02\x1d\x1aO\x20Exit\x20code\x20that\x20the\x20WASM\x20func\x20exi\
    ted\x20with;\x20more\x20info\x20in\x20WASMExitCode's\x20comment\n\n\x0c\
    \n\x05\x04\x01\x02\x01\x06\x12\x033\x02\x0e\n\x0c\n\x05\x04\x01\x02\x01\
    \x01\x12\x033\x0f\x18\n\x0c\n\x05\x04\x01\x02\x01\x03\x12\x033\x1b\x1c\n\
    Q\n\x04\x04\x01\x02\x02\x12\x036\x02\x16\x1aD\x20Additional\x20info\x20a\
    bout\x20the\x20reason\x20a\x20specific\x20exit\x20code\x20was\x20returne\
    d\n\n\x0c\n\x05\x04\x01\x02\x02\x05\x12\x036\x02\x08\n\x0c\n\x05\x04\x01\
    \x02\x02\x01\x12\x036\t\x11\n\x0c\n\x05\x04\x01\x02\x02\x03\x12\x036\x14\
    \x15\n\xdc\x01\n\x04\x04\x01\x02\x03\x12\x03;\x02!\x1a\xce\x01\x20Potent\
    ial\x20additional\x20step\x20output\x20-\x20ie.\x20if\x20a\x20WASM\x20fu\
    nc\x20is\x20an\x20HTTPGet,\n\x20output_step\x20would\x20contain\x20the\
    \x20HTTP\x20response\x20body;\x20if\x20the\x20WASM\x20func\x20is\x20a\n\
    \x20KVGet,\x20the\x20output_step\x20would\x20be\x20the\x20value\x20of\
    \x20the\x20fetched\x20key.\n\n\x0c\n\x05\x04\x01\x02\x03\x04\x12\x03;\
    \x02\n\n\x0c\n\x05\x04\x01\x02\x03\x05\x12\x03;\x0b\x10\n\x0c\n\x05\x04\
    \x01\x02\x03\x01\x12\x03;\x11\x1c\n\x0c\n\x05\x04\x01\x02\x03\x03\x12\
    \x03;\x1f\x20b\x06proto3\
";

/// `FileDescriptorProto` object which was a source for this generated file
fn file_descriptor_proto() -> &'static ::protobuf::descriptor::FileDescriptorProto {
    static file_descriptor_proto_lazy: ::protobuf::rt::Lazy<::protobuf::descriptor::FileDescriptorProto> = ::protobuf::rt::Lazy::new();
    file_descriptor_proto_lazy.get(|| {
        ::protobuf::Message::parse_from_bytes(file_descriptor_proto_data).unwrap()
    })
}

/// `FileDescriptor` object which allows dynamic access to files
pub fn file_descriptor() -> &'static ::protobuf::reflect::FileDescriptor {
    static generated_file_descriptor_lazy: ::protobuf::rt::Lazy<::protobuf::reflect::GeneratedFileDescriptor> = ::protobuf::rt::Lazy::new();
    static file_descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::FileDescriptor> = ::protobuf::rt::Lazy::new();
    file_descriptor.get(|| {
        let generated_file_descriptor = generated_file_descriptor_lazy.get(|| {
            let mut deps = ::std::vec::Vec::with_capacity(1);
            deps.push(super::sp_pipeline::file_descriptor().clone());
            let mut messages = ::std::vec::Vec::with_capacity(2);
            messages.push(WASMRequest::generated_message_descriptor_data());
            messages.push(WASMResponse::generated_message_descriptor_data());
            let mut enums = ::std::vec::Vec::with_capacity(1);
            enums.push(WASMExitCode::generated_enum_descriptor_data());
            ::protobuf::reflect::GeneratedFileDescriptor::new_generated(
                file_descriptor_proto(),
                deps,
                messages,
                enums,
            )
        });
        ::protobuf::reflect::FileDescriptor::new_generated_2(generated_file_descriptor)
    })
}
