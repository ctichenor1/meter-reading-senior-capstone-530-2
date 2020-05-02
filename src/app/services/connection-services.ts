import { HttpClient} from '@angular/common/http';
import { EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class ConnectionService {
    @Output() apiValue = new EventEmitter<string>();
    public api: string;
    constructor(
        public http: HttpClient
    ) {
        this.apiValue.subscribe(
            (value) => {
                this.api = 'http://${value}/api';
            }
        )
    }
}