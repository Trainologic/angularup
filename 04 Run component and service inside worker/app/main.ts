import "zone.js";
import {bootstrapWorkerUi} from '@angular/platform-webworker';

bootstrapWorkerUi("/app/workerLoader.js");
