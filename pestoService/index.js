// This is the license for Pesto unless otherwise specified.
// Check the individual modules as there are some GPL and LGPL components.
// 
// Copyright (c) 2015, Robert Adams
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
// * Redistributions of source code must retain the above copyright notice, this
//   list of conditions and the following disclaimer.
// 
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.
// 
// * Neither the name of basil nor the names of its
//   contributors may be used to endorse or promote products derived from
//   this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

module.exports = function(params, keyStore) {
    var module = {};

    module.params = params;
    module.keyStore = keyStore;

    module.pestoServer = require('../gen-Pesto-server-node/Pesto');
    module.pestoServerTypes = require('../gen-Pesto-server-node/Pesto-server_types');

    module.thrift = require('thrift');

    module.Init = function() {
        this.server = this.thrift.createServer(this.pestoServer, {
            SetConfiguration: function(result) {
                console.log('pestoServer SetConfiguration');
            },
            GetConfiguration: function(result) {
                console.log('pestoServer GetConfiguration');
            },
            Subscribe: function() {
                console.log('pestoServer Subscribe');
            },
            UnSubscribe: function() {
                console.log('pestoServer UnSubscribe');
            },
            GetSubscriptions: function(result) {
                console.log('pestoServer GetSubscriptions');
            },
            Notify: function() {
                console.log('pestoServer Notify');
            }
        });
    };

    module.Start = function() {
        this.server.listen(params.pestoPort);
    };

    return module;
};
