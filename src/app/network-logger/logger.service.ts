
export class Logger{
    log(data: any) {
        console.group('Log Service begins');
        console.log(data);
        console.groupEnd();
    }
}