#!/usr/bin/env node
// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: strong-build
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

'use strict';

require('../').build(process.argv, function(er) {
  if (!er) {
    process.exit(0);
  }
  process.exit(1);
});
