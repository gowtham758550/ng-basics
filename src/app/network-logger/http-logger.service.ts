import { Logger } from "./logger";

export class HttpLogger implements Logger{
    log(data: any) {
        console.group('Log Service begins');
        console.groupEnd();
    }
}   