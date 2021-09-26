/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./calcular_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CalularClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CalularPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.InputNumber,
 *   !proto.OutputNumber>}
 */
const methodDescriptor_Calular_Square = new grpc.web.MethodDescriptor(
  '/Calular/Square',
  grpc.web.MethodType.UNARY,
  proto.InputNumber,
  proto.OutputNumber,
  /**
   * @param {!proto.InputNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OutputNumber.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.InputNumber,
 *   !proto.OutputNumber>}
 */
const methodInfo_Calular_Square = new grpc.web.AbstractClientBase.MethodInfo(
  proto.OutputNumber,
  /**
   * @param {!proto.InputNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OutputNumber.deserializeBinary
);


/**
 * @param {!proto.InputNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.OutputNumber)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OutputNumber>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CalularClient.prototype.square =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Calular/Square',
      request,
      metadata || {},
      methodDescriptor_Calular_Square,
      callback);
};


/**
 * @param {!proto.InputNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OutputNumber>}
 *     Promise that resolves to the response
 */
proto.CalularPromiseClient.prototype.square =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Calular/Square',
      request,
      metadata || {},
      methodDescriptor_Calular_Square);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.InputNumber,
 *   !proto.OutputNumber>}
 */
const methodDescriptor_Calular_Plus = new grpc.web.MethodDescriptor(
  '/Calular/Plus',
  grpc.web.MethodType.UNARY,
  proto.InputNumber,
  proto.OutputNumber,
  /**
   * @param {!proto.InputNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OutputNumber.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.InputNumber,
 *   !proto.OutputNumber>}
 */
const methodInfo_Calular_Plus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.OutputNumber,
  /**
   * @param {!proto.InputNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OutputNumber.deserializeBinary
);


/**
 * @param {!proto.InputNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.OutputNumber)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OutputNumber>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CalularClient.prototype.plus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Calular/Plus',
      request,
      metadata || {},
      methodDescriptor_Calular_Plus,
      callback);
};


/**
 * @param {!proto.InputNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OutputNumber>}
 *     Promise that resolves to the response
 */
proto.CalularPromiseClient.prototype.plus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Calular/Plus',
      request,
      metadata || {},
      methodDescriptor_Calular_Plus);
};


module.exports = proto;

