export function calc(interval): number {
    console.log("exec.begin");

    const before = new Date();
    while(true) {
        const now = new Date();
        if(now.valueOf() - before.valueOf() > interval) {
            break;
        }
    }

    console.log("exec.end");
    return 42;
}
