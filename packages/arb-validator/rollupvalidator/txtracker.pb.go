//
// Copyright 2020, Offchain Labs, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.23.0
// 	protoc        v3.10.1
// source: txtracker.proto

package rollupvalidator

import (
	proto "github.com/golang/protobuf/proto"
	common "github.com/offchainlabs/arbitrum/packages/arb-util/common"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type TxRecord struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	NodeHeight       uint64          `protobuf:"varint,1,opt,name=nodeHeight,proto3" json:"nodeHeight,omitempty"`
	NodeHash         *common.HashBuf `protobuf:"bytes,2,opt,name=nodeHash,proto3" json:"nodeHash,omitempty"`
	TransactionIndex uint64          `protobuf:"varint,3,opt,name=transactionIndex,proto3" json:"transactionIndex,omitempty"`
}

func (x *TxRecord) Reset() {
	*x = TxRecord{}
	if protoimpl.UnsafeEnabled {
		mi := &file_txtracker_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TxRecord) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TxRecord) ProtoMessage() {}

func (x *TxRecord) ProtoReflect() protoreflect.Message {
	mi := &file_txtracker_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TxRecord.ProtoReflect.Descriptor instead.
func (*TxRecord) Descriptor() ([]byte, []int) {
	return file_txtracker_proto_rawDescGZIP(), []int{0}
}

func (x *TxRecord) GetNodeHeight() uint64 {
	if x != nil {
		return x.NodeHeight
	}
	return 0
}

func (x *TxRecord) GetNodeHash() *common.HashBuf {
	if x != nil {
		return x.NodeHash
	}
	return nil
}

func (x *TxRecord) GetTransactionIndex() uint64 {
	if x != nil {
		return x.TransactionIndex
	}
	return 0
}

var File_txtracker_proto protoreflect.FileDescriptor

var file_txtracker_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x74, 0x78, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0f, 0x72, 0x6f, 0x6c, 0x6c, 0x75, 0x70, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74,
	0x6f, 0x72, 0x1a, 0x13, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x83, 0x01, 0x0a, 0x08, 0x54, 0x78, 0x52, 0x65,
	0x63, 0x6f, 0x72, 0x64, 0x12, 0x1e, 0x0a, 0x0a, 0x6e, 0x6f, 0x64, 0x65, 0x48, 0x65, 0x69, 0x67,
	0x68, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0a, 0x6e, 0x6f, 0x64, 0x65, 0x48, 0x65,
	0x69, 0x67, 0x68, 0x74, 0x12, 0x2b, 0x0a, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x48, 0x61, 0x73, 0x68,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x48, 0x61, 0x73, 0x68, 0x42, 0x75, 0x66, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x48, 0x61, 0x73,
	0x68, 0x12, 0x2a, 0x0a, 0x10, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x49, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x10, 0x74, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x42, 0x49, 0x5a,
	0x47, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x66, 0x66, 0x63,
	0x68, 0x61, 0x69, 0x6e, 0x6c, 0x61, 0x62, 0x73, 0x2f, 0x61, 0x72, 0x62, 0x69, 0x74, 0x72, 0x75,
	0x6d, 0x2f, 0x70, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x73, 0x2f, 0x61, 0x72, 0x62, 0x2d, 0x76,
	0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x6f, 0x72, 0x2f, 0x72, 0x6f, 0x6c, 0x6c, 0x75, 0x70, 0x76,
	0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x6f, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_txtracker_proto_rawDescOnce sync.Once
	file_txtracker_proto_rawDescData = file_txtracker_proto_rawDesc
)

func file_txtracker_proto_rawDescGZIP() []byte {
	file_txtracker_proto_rawDescOnce.Do(func() {
		file_txtracker_proto_rawDescData = protoimpl.X.CompressGZIP(file_txtracker_proto_rawDescData)
	})
	return file_txtracker_proto_rawDescData
}

var file_txtracker_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_txtracker_proto_goTypes = []interface{}{
	(*TxRecord)(nil),       // 0: rollupvalidator.TxRecord
	(*common.HashBuf)(nil), // 1: common.HashBuf
}
var file_txtracker_proto_depIdxs = []int32{
	1, // 0: rollupvalidator.TxRecord.nodeHash:type_name -> common.HashBuf
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_txtracker_proto_init() }
func file_txtracker_proto_init() {
	if File_txtracker_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_txtracker_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TxRecord); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_txtracker_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_txtracker_proto_goTypes,
		DependencyIndexes: file_txtracker_proto_depIdxs,
		MessageInfos:      file_txtracker_proto_msgTypes,
	}.Build()
	File_txtracker_proto = out.File
	file_txtracker_proto_rawDesc = nil
	file_txtracker_proto_goTypes = nil
	file_txtracker_proto_depIdxs = nil
}
