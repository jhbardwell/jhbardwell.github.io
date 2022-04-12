let printArguments = function(arg1, arg2, arg3) {
    alert('printArguments called with arguments: ' + arg1 + ', ' + arg2 + ', ' + arg3);
}

let printTask = function(taskId) {
    alert('taskId: ' + taskId);
}

let config = {
    startOnLoad:true,
    securityLevel:'loose',
}

mermaid.initialize(config)