/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * This file is necessary so we register all test environments before we start
 * executing tests.
 */

import '@tensorflow/tfjs-backend-webgl';
// tslint:disable-next-line: no-imports-from-dist
import {setTestEnvs} from '@tensorflow/tfjs-core/dist/jasmine_util';

// Increase test timeout since we are fetching the model files from GCS.
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

// Run browser tests against both the cpu and webgl backends.
setTestEnvs([
  // WebGL.
  {
    name: 'test-webgl',
    backendName: 'webgl',
    flags: {
      'WEBGL_VERSION': 2,
      'WEBGL_CPU_FORWARD': false,
      'WEBGL_SIZE_UPLOAD_UNIFORM': 0
    },
    isDataSync: true
  },
  // CPU.
  // TODO(nsthorat): Enable this once we have CPU support
  // https://github.com/tensorflow/tfjs/issues/2187
  // {name: 'cpu', backendName: 'cpu'}
]);
